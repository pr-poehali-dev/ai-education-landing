import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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

export default function CalendarSection() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
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
      days.push(<div key={`empty-${i}`} className="h-20 sm:h-24 border border-slate-700/30" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2026-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = getEventsForDate(date);
      const hasEvents = dayEvents.length > 0;

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`relative h-20 sm:h-24 border border-slate-700/30 p-1.5 sm:p-2 cursor-pointer transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800/30 ${
            selectedDate === date ? 'bg-slate-800/50 border-cyan-500 ring-2 ring-cyan-500/30' : 'bg-slate-900/20'
          }`}
        >
          <div className={`text-xs sm:text-sm font-semibold mb-0.5 ${hasEvents ? 'text-cyan-300' : 'text-white'}`}>
            {day}
          </div>
          <div className="space-y-0.5 overflow-hidden">
            {dayEvents.slice(0, 2).map(evt => (
              <div
                key={evt.id}
                className="text-[10px] sm:text-xs px-1 py-0.5 rounded truncate"
                style={{ backgroundColor: evt.color + '30', color: evt.color }}
                title={evt.title}
              >
                {evt.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-[10px] text-gray-400">+{dayEvents.length - 2}</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  if (loading) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" id="calendar">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 mb-4 text-xs sm:text-sm">
            Расписание занятий
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Календарь <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2026</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Узнайте актуальное расписание занятий, консультаций и мероприятий
          </p>
        </div>

        <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {MONTHS.map((month, index) => (
            <button
              key={index}
              onClick={() => setSelectedMonth(index)}
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 ${
                selectedMonth === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {MONTHS[selectedMonth]} 2026
                </h3>
                
                <div className="grid grid-cols-7 gap-px mb-px">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                    <div key={day} className="text-center font-semibold text-gray-400 py-1.5 sm:py-2 text-xs sm:text-sm">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-px">
                  {renderCalendar()}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm sticky top-24">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  {selectedDate ? 'События дня' : 'Информация'}
                </h3>
                
                {selectedDate ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-700">
                      {new Date(selectedDate + 'T00:00:00').toLocaleDateString('ru-RU', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    {selectedDateEvents.length === 0 ? (
                      <div className="text-center py-6 sm:py-8">
                        <Icon name="CalendarOff" className="text-gray-500 mx-auto mb-2" size={40} />
                        <p className="text-gray-400 text-sm">Нет событий</p>
                      </div>
                    ) : (
                      selectedDateEvents.map(evt => (
                        <div
                          key={evt.id}
                          className="p-3 sm:p-4 rounded-lg border"
                          style={{ 
                            backgroundColor: evt.color + '15',
                            borderColor: evt.color + '50'
                          }}
                        >
                          <div className="flex items-start gap-2 sm:gap-3 mb-2">
                            <div 
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: evt.color + '30' }}
                            >
                              <Icon 
                                name={EVENT_TYPES_DISPLAY[evt.event_type]?.icon || 'Calendar'} 
                                size={16} 
                                style={{ color: evt.color }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{evt.title}</h4>
                              <Badge 
                                className="text-[10px] sm:text-xs"
                                style={{ 
                                  backgroundColor: evt.color + '30',
                                  color: evt.color,
                                  borderColor: evt.color
                                }}
                              >
                                {EVENT_TYPES_DISPLAY[evt.event_type]?.label || evt.event_type}
                              </Badge>
                            </div>
                          </div>
                          
                          {evt.start_time && (
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mt-2">
                              <Icon name="Clock" size={14} />
                              <span>
                                {evt.start_time.slice(0, 5)}
                                {evt.end_time && ` - ${evt.end_time.slice(0, 5)}`}
                              </span>
                            </div>
                          )}
                          
                          {evt.description && (
                            <p className="text-xs sm:text-sm text-gray-300 mt-2">{evt.description}</p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center py-4 sm:py-6">
                      <Icon name="Calendar" className="text-cyan-400 mx-auto mb-3" size={40} />
                      <p className="text-gray-300 text-sm">Выберите дату в календаре</p>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-slate-700">
                      <h4 className="text-white font-semibold mb-3 text-sm">Типы событий:</h4>
                      {Object.entries(EVENT_TYPES_DISPLAY).map(([type, info]) => (
                        <div key={type} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <Icon name={info.icon} size={14} className="text-cyan-400" />
                          <span>{info.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/calendar" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
              <Icon name="ExternalLink" className="mr-2" size={18} />
              Открыть полный календарь
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
