import json
import os
from datetime import datetime, date
from typing import Optional
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    """Получение подключения к базе данных"""
    dsn = os.environ.get('DATABASE_URL')
    return psycopg2.connect(dsn)

def handler(event: dict, context) -> dict:
    """
    API для управления календарем событий.
    Публичные методы: GET /events - получение событий
    Админ методы: POST, PUT, DELETE - управление событиями (требуется X-Admin-Key)
    """
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    try:
        if method == 'GET':
            return get_events(event, headers)
        
        # Проверка админского ключа для модифицирующих операций
        admin_key = event.get('headers', {}).get('X-Admin-Key') or event.get('headers', {}).get('x-admin-key')
        expected_key = os.environ.get('ADMIN_KEY', 'test-admin-key')
        
        if admin_key != expected_key:
            return {
                'statusCode': 403,
                'headers': headers,
                'body': json.dumps({'error': 'Unauthorized'}),
                'isBase64Encoded': False
            }
        
        if method == 'POST':
            return create_event(event, headers)
        elif method == 'PUT':
            return update_event(event, headers)
        elif method == 'DELETE':
            return delete_event(event, headers)
        else:
            return {
                'statusCode': 405,
                'headers': headers,
                'body': json.dumps({'error': 'Method not allowed'}),
                'isBase64Encoded': False
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

def get_events(event: dict, headers: dict) -> dict:
    """Получение списка событий с фильтрацией по датам"""
    params = event.get('queryStringParameters') or {}
    start_date = params.get('start_date')
    end_date = params.get('end_date')
    event_type = params.get('event_type')
    
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            query = "SELECT * FROM calendar_events WHERE 1=1"
            conditions = []
            
            if start_date:
                query += " AND event_date >= %s"
                conditions.append(start_date)
            
            if end_date:
                query += " AND event_date <= %s"
                conditions.append(end_date)
            
            if event_type:
                query += " AND event_type = %s"
                conditions.append(event_type)
            
            query += " ORDER BY event_date, start_time"
            
            if conditions:
                cur.execute(query, conditions)
            else:
                cur.execute(query)
            
            events = cur.fetchall()
            
            # Преобразование дат в строки для JSON
            for evt in events:
                if isinstance(evt['event_date'], date):
                    evt['event_date'] = evt['event_date'].isoformat()
                if evt.get('start_time'):
                    evt['start_time'] = str(evt['start_time'])
                if evt.get('end_time'):
                    evt['end_time'] = str(evt['end_time'])
                if isinstance(evt.get('created_at'), datetime):
                    evt['created_at'] = evt['created_at'].isoformat()
                if isinstance(evt.get('updated_at'), datetime):
                    evt['updated_at'] = evt['updated_at'].isoformat()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'events': events}),
                'isBase64Encoded': False
            }
    finally:
        conn.close()

def create_event(event: dict, headers: dict) -> dict:
    """Создание нового события"""
    try:
        data = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Invalid JSON'}),
            'isBase64Encoded': False
        }
    
    required_fields = ['title', 'event_date']
    for field in required_fields:
        if field not in data:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': f'Missing required field: {field}'}),
                'isBase64Encoded': False
            }
    
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                INSERT INTO calendar_events 
                (title, description, event_date, start_time, end_time, event_type, color, is_available)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING *
            """, (
                data['title'],
                data.get('description'),
                data['event_date'],
                data.get('start_time'),
                data.get('end_time'),
                data.get('event_type', 'lesson'),
                data.get('color', '#3b82f6'),
                data.get('is_available', True)
            ))
            
            new_event = cur.fetchone()
            conn.commit()
            
            # Преобразование для JSON
            if isinstance(new_event['event_date'], date):
                new_event['event_date'] = new_event['event_date'].isoformat()
            if new_event.get('start_time'):
                new_event['start_time'] = str(new_event['start_time'])
            if new_event.get('end_time'):
                new_event['end_time'] = str(new_event['end_time'])
            if isinstance(new_event.get('created_at'), datetime):
                new_event['created_at'] = new_event['created_at'].isoformat()
            if isinstance(new_event.get('updated_at'), datetime):
                new_event['updated_at'] = new_event['updated_at'].isoformat()
            
            return {
                'statusCode': 201,
                'headers': headers,
                'body': json.dumps({'event': new_event}),
                'isBase64Encoded': False
            }
    finally:
        conn.close()

def update_event(event: dict, headers: dict) -> dict:
    """Обновление существующего события"""
    params = event.get('queryStringParameters') or {}
    event_id = params.get('id')
    
    if not event_id:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Missing event id'}),
            'isBase64Encoded': False
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Invalid JSON'}),
            'isBase64Encoded': False
        }
    
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            update_fields = []
            values = []
            
            if 'title' in data:
                update_fields.append('title = %s')
                values.append(data['title'])
            if 'description' in data:
                update_fields.append('description = %s')
                values.append(data['description'])
            if 'event_date' in data:
                update_fields.append('event_date = %s')
                values.append(data['event_date'])
            if 'start_time' in data:
                update_fields.append('start_time = %s')
                values.append(data['start_time'])
            if 'end_time' in data:
                update_fields.append('end_time = %s')
                values.append(data['end_time'])
            if 'event_type' in data:
                update_fields.append('event_type = %s')
                values.append(data['event_type'])
            if 'color' in data:
                update_fields.append('color = %s')
                values.append(data['color'])
            if 'is_available' in data:
                update_fields.append('is_available = %s')
                values.append(data['is_available'])
            
            update_fields.append('updated_at = CURRENT_TIMESTAMP')
            
            if not update_fields:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'No fields to update'}),
                    'isBase64Encoded': False
                }
            
            values.append(event_id)
            query = f"UPDATE calendar_events SET {', '.join(update_fields)} WHERE id = %s RETURNING *"
            
            cur.execute(query, values)
            updated_event = cur.fetchone()
            conn.commit()
            
            if not updated_event:
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Event not found'}),
                    'isBase64Encoded': False
                }
            
            # Преобразование для JSON
            if isinstance(updated_event['event_date'], date):
                updated_event['event_date'] = updated_event['event_date'].isoformat()
            if updated_event.get('start_time'):
                updated_event['start_time'] = str(updated_event['start_time'])
            if updated_event.get('end_time'):
                updated_event['end_time'] = str(updated_event['end_time'])
            if isinstance(updated_event.get('created_at'), datetime):
                updated_event['created_at'] = updated_event['created_at'].isoformat()
            if isinstance(updated_event.get('updated_at'), datetime):
                updated_event['updated_at'] = updated_event['updated_at'].isoformat()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'event': updated_event}),
                'isBase64Encoded': False
            }
    finally:
        conn.close()

def delete_event(event: dict, headers: dict) -> dict:
    """Удаление события"""
    params = event.get('queryStringParameters') or {}
    event_id = params.get('id')
    
    if not event_id:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Missing event id'}),
            'isBase64Encoded': False
        }
    
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM calendar_events WHERE id = %s RETURNING id", (event_id,))
            deleted = cur.fetchone()
            conn.commit()
            
            if not deleted:
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Event not found'}),
                    'isBase64Encoded': False
                }
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'message': 'Event deleted successfully'}),
                'isBase64Encoded': False
            }
    finally:
        conn.close()
