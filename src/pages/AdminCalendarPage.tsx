import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  event_date: string;
  start_time?: string;
  end_time?: string;
  event_type: string;
  color: string;
  is_available: boolean;
}

const CALENDAR_API = 'https://functions.poehali.dev/938a3b95-bbf1-4103-be1a-7f22fe42d676';

const EVENT_TYPES = [
  { value: 'lesson', label: 'Занятие', color: '#3b82f6' },
  { value: 'consultation', label: 'Консультация', color: '#8b5cf6' },
  { value: 'free_day', label: 'Свободный день', color: '#10b981' },
  { value: 'holiday', label: 'Праздник', color: '#f59e0b' },
  { value: 'special', label: 'Особое событие', color: '#ec4899' }
];

export default function AdminCalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    start_time: '',
    end_time: '',
    event_type: 'lesson',
    color: '#3b82f6',
    is_available: true
  });

  useEffect(() => {
    const savedKey = localStorage.getItem('admin_key');
    if (savedKey) {
      setAdminKey(savedKey);
      setIsAuthenticated(true);
      loadEvents();
    } else {
      setLoading(false);
    }
  }, []);

  const loadEvents = async () => {
    try {
      const response = await fetch(`${CALENDAR_API}?start_date=2026-01-01&end_date=2026-12-31`);
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (adminKey.trim()) {
      localStorage.setItem('admin_key', adminKey);
      setIsAuthenticated(true);
      loadEvents();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_key');
    setAdminKey('');
    setIsAuthenticated(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingEvent 
        ? `${CALENDAR_API}?id=${editingEvent.id}`
        : CALENDAR_API;
      
      const method = editingEvent ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Key': adminKey
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await loadEvents();
        resetForm();
        alert(editingEvent ? 'Событие обновлено!' : 'Событие создано!');
      } else {
        const error = await response.json();
        alert('Ошибка: ' + (error.error || 'Неизвестная ошибка'));
      }
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Ошибка при сохранении события');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить это событие?')) return;

    try {
      const response = await fetch(`${CALENDAR_API}?id=${id}`, {
        method: 'DELETE',
        headers: {
          'X-Admin-Key': adminKey
        }
      });

      if (response.ok) {
        await loadEvents();
        alert('Событие удалено!');
      } else {
        alert('Ошибка при удалении события');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Ошибка при удалении события');
    }
  };

  const handleEdit = (event: CalendarEvent) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description || '',
      event_date: event.event_date,
      start_time: event.start_time || '',
      end_time: event.end_time || '',
      event_type: event.event_type,
      color: event.color,
      is_available: event.is_available
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      event_date: '',
      start_time: '',
      end_time: '',
      event_type: 'lesson',
      color: '#3b82f6',
      is_available: true
    });
    setEditingEvent(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-slate-900/80 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">
              <Icon name="Lock" className="mx-auto mb-2" size={48} />
              Вход в админ-панель
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Введите админ-ключ"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
              >
                <Icon name="LogIn" className="mr-2" size={20} />
                Войти
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Админ-панель <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">календаря</span>
            </h1>
            <p className="text-gray-300">Управление событиями и расписанием</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <Icon name="LogOut" className="mr-2" size={20} />
            Выйти
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>{editingEvent ? 'Редактировать событие' : 'Новое событие'}</span>
                {showForm && (
                  <Button
                    onClick={resetForm}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Icon name="X" size={20} />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!showForm ? (
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                >
                  <Icon name="Plus" className="mr-2" size={20} />
                  Добавить событие
                </Button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Название *
                    </label>
                    <Input
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white"
                      placeholder="Занятие по нейросетям"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Описание
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                      rows={3}
                      placeholder="Описание события"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Дата *
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.event_date}
                      onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white"
                      min="2026-01-01"
                      max="2026-12-31"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Начало
                      </label>
                      <Input
                        type="time"
                        value={formData.start_time}
                        onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Конец
                      </label>
                      <Input
                        type="time"
                        value={formData.end_time}
                        onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Тип события
                    </label>
                    <select
                      value={formData.event_type}
                      onChange={(e) => {
                        const type = EVENT_TYPES.find(t => t.value === e.target.value);
                        setFormData({ 
                          ...formData, 
                          event_type: e.target.value,
                          color: type?.color || formData.color
                        });
                      }}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                    >
                      {EVENT_TYPES.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Цвет
                    </label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="w-20 h-10 bg-slate-800 border-slate-700"
                      />
                      <span className="text-gray-400 text-sm">{formData.color}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_available"
                      checked={formData.is_available}
                      onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <label htmlFor="is_available" className="text-sm text-gray-300">
                      Доступно для записи
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500"
                    >
                      <Icon name="Save" className="mr-2" size={20} />
                      {editingEvent ? 'Обновить' : 'Создать'}
                    </Button>
                    <Button
                      type="button"
                      onClick={resetForm}
                      variant="outline"
                      className="border-slate-700 text-gray-300 hover:bg-slate-800"
                    >
                      Отмена
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>События ({events.length})</span>
                <Button
                  onClick={loadEvents}
                  variant="ghost"
                  size="sm"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  <Icon name="RefreshCw" size={20} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {events.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <Icon name="Calendar" className="mx-auto mb-2" size={48} />
                    <p>Нет событий</p>
                  </div>
                ) : (
                  events.map(event => (
                    <div
                      key={event.id}
                      className="p-4 rounded-lg border"
                      style={{
                        backgroundColor: event.color + '20',
                        borderColor: event.color + '60'
                      }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{event.title}</h3>
                          <p className="text-sm text-gray-300">
                            {new Date(event.event_date + 'T00:00:00').toLocaleDateString('ru-RU')}
                            {event.start_time && ` • ${event.start_time.slice(0, 5)}`}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(event)}
                            className="p-1 hover:bg-slate-700 rounded"
                          >
                            <Icon name="Edit" size={16} className="text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="p-1 hover:bg-slate-700 rounded"
                          >
                            <Icon name="Trash2" size={16} className="text-red-400" />
                          </button>
                        </div>
                      </div>
                      {event.description && (
                        <p className="text-sm text-gray-400 mb-2">{event.description}</p>
                      )}
                      <Badge
                        className="text-xs"
                        style={{
                          backgroundColor: event.color + '40',
                          color: event.color,
                          borderColor: event.color
                        }}
                      >
                        {EVENT_TYPES.find(t => t.value === event.event_type)?.label || event.event_type}
                      </Badge>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
