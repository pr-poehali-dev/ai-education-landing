import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const EVENT_TYPES: Record<string, { label: string; icon: string }> = {
  lesson: { label: 'Занятие', icon: 'BookOpen' },
  consultation: { label: 'Консультация', icon: 'MessageCircle' },
  free_day: { label: 'Свободный день', icon: 'Calendar' },
  holiday: { label: 'Праздник', icon: 'Sparkles' },
  special: { label: 'Особое событие', icon: 'Star' }
};

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(1); // Февраль (индекс 1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
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
      const isToday = false;

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`relative h-24 sm:h-28 border border-slate-700/50 p-2 cursor-pointer transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800/50 ${
            selectedDate === date ? 'bg-slate-800 border-cyan-500' : 'bg-slate-900/30'
          } ${isToday ? 'ring-2 ring-cyan-400' : ''}`}
        >
          <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-cyan-400' : 'text-white'}`}>
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
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Календарь <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2026</span>
          </h1>
          <p className="text-gray-300 text-lg">Расписание занятий и мероприятий</p>
        </div>

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
          <div className="lg:col-span-2">
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

          <div className="lg:col-span-1">
            <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm sticky top-6">
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
                        <p className="text-gray-400">Нет событий на этот день</p>
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
                                name={EVENT_TYPES[evt.event_type]?.icon || 'Calendar'} 
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
                                {EVENT_TYPES[evt.event_type]?.label || evt.event_type}
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
                          
                          {evt.is_available && evt.event_type === 'lesson' && (
                            <div className="mt-3 pt-3 border-t border-slate-700">
                              <div className="flex items-center gap-2 text-sm text-green-400">
                                <Icon name="CheckCircle" size={16} />
                                <span>Есть свободные места</span>
                              </div>
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
                      <p className="text-gray-300">Выберите дату для просмотра событий</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Легенда:</h4>
                      {Object.entries(EVENT_TYPES).map(([type, info]) => (
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
