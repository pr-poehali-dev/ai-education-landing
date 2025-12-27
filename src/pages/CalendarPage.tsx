import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import CalendarGrid from '@/components/calendar/CalendarGrid';
import EventForm from '@/components/calendar/EventForm';
import EventDetails from '@/components/calendar/EventDetails';

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

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(0);
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

  const getEventsForDate = (date: string) => {
    return events.filter(e => e.event_date === date);
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
            <CalendarGrid
              selectedMonth={selectedMonth}
              selectedDate={selectedDate}
              events={events}
              onDateSelect={setSelectedDate}
            />
          </div>

          <div className="lg:col-span-1 space-y-6">
            {isAdminMode && (
              <EventForm
                showForm={showForm}
                editingEvent={editingEvent}
                formData={formData}
                onFormDataChange={setFormData}
                onSubmit={handleSubmit}
                onShowForm={() => setShowForm(true)}
                onResetForm={resetForm}
              />
            )}

            <EventDetails
              selectedDate={selectedDate}
              selectedDateEvents={selectedDateEvents}
              isAdminMode={isAdminMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}