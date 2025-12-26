import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

interface EventDetailsProps {
  selectedDate: string | null;
  selectedDateEvents: CalendarEvent[];
  isAdminMode: boolean;
  onEdit: (event: CalendarEvent) => void;
  onDelete: (id: number) => void;
}

const EVENT_TYPES_DISPLAY: Record<string, { label: string; icon: string }> = {
  lesson: { label: 'Занятие', icon: 'BookOpen' },
  consultation: { label: 'Консультация', icon: 'MessageCircle' },
  free_day: { label: 'Свободный день', icon: 'Calendar' },
  holiday: { label: 'Праздник', icon: 'Sparkles' },
  special: { label: 'Особое событие', icon: 'Star' }
};

export default function EventDetails({
  selectedDate,
  selectedDateEvents,
  isAdminMode,
  onEdit,
  onDelete
}: EventDetailsProps) {
  return (
    <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Icon name="Info" size={20} />
          {selectedDate ? 'События дня' : 'Информация'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {selectedDate ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-400 mb-4">
              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('ru-RU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            
            {selectedDateEvents.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="CalendarOff" className="text-gray-500 mx-auto mb-2" size={48} />
                <p className="text-gray-400">Нет событий</p>
              </div>
            ) : (
              selectedDateEvents.map(evt => (
                <div
                  key={evt.id}
                  className="p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: evt.color + '20',
                    borderColor: evt.color + '60'
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: evt.color + '40' }}
                    >
                      <Icon 
                        name={EVENT_TYPES_DISPLAY[evt.event_type]?.icon || 'Calendar'} 
                        size={20} 
                        style={{ color: evt.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{evt.title}</h3>
                      <Badge 
                        className="text-xs"
                        style={{ 
                          backgroundColor: evt.color + '40',
                          color: evt.color,
                          borderColor: evt.color
                        }}
                      >
                        {EVENT_TYPES_DISPLAY[evt.event_type]?.label || evt.event_type}
                      </Badge>
                    </div>
                  </div>
                  
                  {evt.start_time && (
                    <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                      <Icon name="Clock" size={16} />
                      <span>
                        {evt.start_time.slice(0, 5)}
                        {evt.end_time && ` - ${evt.end_time.slice(0, 5)}`}
                      </span>
                    </div>
                  )}
                  
                  {evt.description && (
                    <p className="text-sm text-gray-300 mt-2">{evt.description}</p>
                  )}

                  {isAdminMode && (
                    <div className="flex gap-2 mt-3 pt-3 border-t border-slate-700">
                      <Button
                        onClick={() => onEdit(evt)}
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Icon name="Edit" size={16} className="mr-1" />
                        Изменить
                      </Button>
                      <Button
                        onClick={() => onDelete(evt.id)}
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center py-6">
              <Icon name="Calendar" className="text-cyan-400 mx-auto mb-3" size={48} />
              <p className="text-gray-300">Выберите дату</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-white font-semibold mb-3">Типы событий:</h4>
              {Object.entries(EVENT_TYPES_DISPLAY).map(([type, info]) => (
                <div key={type} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon name={info.icon} size={16} className="text-cyan-400" />
                  <span>{info.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
