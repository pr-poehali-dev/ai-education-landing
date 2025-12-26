import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface EventFormData {
  title: string;
  description: string;
  event_date: string;
  start_time: string;
  end_time: string;
  event_type: string;
  color: string;
  is_available: boolean;
}

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

interface EventFormProps {
  showForm: boolean;
  editingEvent: CalendarEvent | null;
  formData: EventFormData;
  onFormDataChange: (data: EventFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onShowForm: () => void;
  onResetForm: () => void;
}

const EVENT_TYPES = [
  { value: 'lesson', label: 'Занятие', color: '#3b82f6' },
  { value: 'consultation', label: 'Консультация', color: '#8b5cf6' },
  { value: 'free_day', label: 'Свободный день', color: '#10b981' },
  { value: 'holiday', label: 'Праздник', color: '#f59e0b' },
  { value: 'special', label: 'Особое событие', color: '#ec4899' }
];

export default function EventForm({
  showForm,
  editingEvent,
  formData,
  onFormDataChange,
  onSubmit,
  onShowForm,
  onResetForm
}: EventFormProps) {
  return (
    <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>{editingEvent ? 'Редактировать' : 'Новое событие'}</span>
          {showForm && (
            <Button
              onClick={onResetForm}
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
            onClick={onShowForm}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500"
          >
            <Icon name="Plus" className="mr-2" size={20} />
            Добавить
          </Button>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <Input
                required
                placeholder="Название события"
                value={formData.title}
                onChange={(e) => onFormDataChange({ ...formData, title: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>

            <div>
              <textarea
                placeholder="Описание"
                value={formData.description}
                onChange={(e) => onFormDataChange({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white text-sm"
                rows={2}
              />
            </div>

            <div>
              <Input
                type="date"
                required
                value={formData.event_date}
                onChange={(e) => onFormDataChange({ ...formData, event_date: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                min="2026-01-01"
                max="2026-12-31"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Input
                type="time"
                placeholder="Начало"
                value={formData.start_time}
                onChange={(e) => onFormDataChange({ ...formData, start_time: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white text-sm"
              />
              <Input
                type="time"
                placeholder="Конец"
                value={formData.end_time}
                onChange={(e) => onFormDataChange({ ...formData, end_time: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white text-sm"
              />
            </div>

            <div>
              <select
                value={formData.event_type}
                onChange={(e) => {
                  const type = EVENT_TYPES.find(t => t.value === e.target.value);
                  onFormDataChange({ 
                    ...formData, 
                    event_type: e.target.value,
                    color: type?.color || formData.color
                  });
                }}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white text-sm"
              >
                {EVENT_TYPES.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_available"
                checked={formData.is_available}
                onChange={(e) => onFormDataChange({ ...formData, is_available: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="is_available" className="text-xs text-gray-300">
                Доступно для записи
              </label>
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-sm"
              >
                <Icon name="Save" className="mr-2" size={16} />
                {editingEvent ? 'Обновить' : 'Создать'}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
