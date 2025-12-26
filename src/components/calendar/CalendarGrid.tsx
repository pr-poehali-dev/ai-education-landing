import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

interface CalendarGridProps {
  selectedMonth: number;
  selectedDate: string | null;
  events: CalendarEvent[];
  onDateSelect: (date: string) => void;
}

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export default function CalendarGrid({ selectedMonth, selectedDate, events, onDateSelect }: CalendarGridProps) {
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
          onClick={() => onDateSelect(date)}
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

  return (
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
  );
}
