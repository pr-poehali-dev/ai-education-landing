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

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const EVENT_TYPES_DISPLAY: Record<string, { label: string; icon: string }> = {
  lesson: { label: 'Занятие', icon: 'BookOpen' },
  consultation: { label: 'Консультация', icon: 'MessageCircle' },
  free_day: { label: 'Свободный день', icon: 'Calendar' },
  holiday: { label: 'Праздник', icon: 'Sparkles' },
  special: { label: 'Особое событие', icon: 'Star' }
};

const EVENT_TYPES = [
  { value: 'lesson', label: 'Занятие', color: '#3b82f6' },
  { value: 'consultation', label: 'Консультация', color: '#8b5cf6' },
  { value: 'free_day', label: 'Свободный день', color: '#10b981' },
  { value: 'holiday', label: 'Праздник', color: '#f59e0b' },
  { value: 'special', label: 'Особое событие', color: '#ec4899' }
];

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
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
    }
    loadEvents();
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

  const handleAdminLogin = () => {
    if (adminKey.trim()) {
      localStorage.setItem('admin_key', adminKey);
      setIsAuthenticated(true);
      setShowAdminLogin(false);
      setIsAdminMode(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_key');
    setAdminKey('');
    setIsAuthenticated(false);
    setIsAdminMode(false);
    setShowAdminLogin(false);
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

  const getDaysInMonth = (month: number, year: number = 2026) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number = 2026) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const getEventsForDate = (date: string) => {
    return events.filter(e => e.event_date === date);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth);
    const firstDay = getFirstDayOfMonth(selectedMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 sm:h-28 border border-slate-700/50" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2026-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = getEventsForDate(date);

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`relative h-24 sm:h-28 border border-slate-700/50 p-2 cursor-pointer transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800/50 ${
            selectedDate === date ? 'bg-slate-800 border-cyan-500' : 'bg-slate-900/30'
          }`}
        >
          <div className="text-sm font-semibold mb-1 text-white">
            {day}
          </div>
          <div className="space-y-1 overflow-hidden">
            {dayEvents.slice(0, 2).map(evt => (
              <div
                key={evt.id}
                className="text-xs px-1.5 py-0.5 rounded truncate"
                style={{ backgroundColor: evt.color + '40', color: evt.color }}
                title={evt.title}
              >
                {evt.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-400">+{dayEvents.length - 2}</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Загрузка календаря...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Календарь <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2026</span>
            </h1>
            <p className="text-gray-300 text-lg">
              {isAdminMode ? 'Режим редактирования' : 'Расписание занятий и мероприятий'}
            </p>
          </div>
          
          <div className="flex gap-2">
            {!isAdminMode ? (
              <Button
                onClick={() => {
                  if (isAuthenticated) {
                    setIsAdminMode(true);
                  } else {
                    setShowAdminLogin(true);
                  }
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500"
              >
                <Icon name="Settings" className="mr-2" size={20} />
                Управление
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => setIsAdminMode(false)}
                  variant="outline"
                  className="border-slate-700 text-gray-300 hover:bg-slate-800"
                >
                  <Icon name="Eye" className="mr-2" size={20} />
                  Просмотр
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <Icon name="LogOut" className="mr-2" size={20} />
                  Выйти
                </Button>
              </>
            )}
          </div>
        </div>

        {showAdminLogin && (
          <Card className="mb-6 bg-slate-900/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>Вход в режим редактирования</span>
                <Button
                  onClick={() => setShowAdminLogin(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Введите админ-ключ"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button
                  onClick={handleAdminLogin}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                >
                  <Icon name="LogIn" className="mr-2" size={20} />
                  Войти
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {MONTHS.map((month, index) => (
            <button
              key={index}
              onClick={() => setSelectedMonth(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedMonth === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className={isAdminMode ? 'lg:col-span-2' : 'lg:col-span-2'}>
            <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {MONTHS[selectedMonth]} 2026
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-px mb-px">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                    <div key={day} className="text-center font-semibold text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-px">
                  {renderCalendar()}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {isAdminMode && (
              <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <span>{editingEvent ? 'Редактировать' : 'Новое событие'}</span>
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
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500"
                    >
                      <Icon name="Plus" className="mr-2" size={20} />
                      Добавить
                    </Button>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <Input
                          required
                          placeholder="Название события"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="bg-slate-800 border-slate-700 text-white"
                        />
                      </div>

                      <div>
                        <textarea
                          placeholder="Описание"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white text-sm"
                          rows={2}
                        />
                      </div>

                      <div>
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

                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="time"
                          placeholder="Начало"
                          value={formData.start_time}
                          onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                          className="bg-slate-800 border-slate-700 text-white text-sm"
                        />
                        <Input
                          type="time"
                          placeholder="Конец"
                          value={formData.end_time}
                          onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                          className="bg-slate-800 border-slate-700 text-white text-sm"
                        />
                      </div>

                      <div>
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
                          onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })}
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
            )}

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
                                onClick={() => handleEdit(evt)}
                                size="sm"
                                className="flex-1 bg-blue-600 hover:bg-blue-700"
                              >
                                <Icon name="Edit" size={16} className="mr-1" />
                                Изменить
                              </Button>
                              <Button
                                onClick={() => handleDelete(evt.id)}
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
          </div>
        </div>
      </div>
    </div>
  );
}
