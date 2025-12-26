const CALENDAR_API = 'https://functions.poehali.dev/938a3b95-bbf1-4103-be1a-7f22fe42d676';
const ADMIN_KEY = 'test-admin-key';

interface ScheduleDay {
  date: string;
  stream: string;
  streamNumber: number;
}

const schedule: ScheduleDay[] = [
  // 2 поток - Январь
  { date: '2026-01-08', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-12', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-15', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-19', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-22', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-26', stream: '2 поток', streamNumber: 2 },
  { date: '2026-01-29', stream: '2 поток', streamNumber: 2 },
  
  // 2 поток - Февраль
  { date: '2026-02-02', stream: '2 поток', streamNumber: 2 },
  { date: '2026-02-05', stream: '2 поток', streamNumber: 2 },
  { date: '2026-02-09', stream: '2 поток', streamNumber: 2 },
  { date: '2026-02-12', stream: '2 поток', streamNumber: 2 },
  
  // 3 поток - Февраль
  { date: '2026-02-16', stream: '3 поток', streamNumber: 3 },
  { date: '2026-02-19', stream: '3 поток', streamNumber: 3 },
  { date: '2026-02-23', stream: '3 поток', streamNumber: 3 },
  { date: '2026-02-26', stream: '3 поток', streamNumber: 3 },
  
  // 3 поток - Март
  { date: '2026-03-02', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-05', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-09', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-12', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-16', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-19', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-23', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-26', stream: '3 поток', streamNumber: 3 },
  { date: '2026-03-30', stream: '3 поток', streamNumber: 3 },
  
  // 3 поток - Апрель
  { date: '2026-04-02', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-06', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-09', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-13', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-16', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-20', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-23', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-27', stream: '3 поток', streamNumber: 3 },
  { date: '2026-04-30', stream: '3 поток', streamNumber: 3 },
  
  // 3 поток - Май
  { date: '2026-05-04', stream: '3 поток', streamNumber: 3 },
  { date: '2026-05-07', stream: '3 поток', streamNumber: 3 },
  
  // 4 поток - Май
  { date: '2026-05-11', stream: '4 поток', streamNumber: 4 },
  { date: '2026-05-14', stream: '4 поток', streamNumber: 4 },
  { date: '2026-05-18', stream: '4 поток', streamNumber: 4 },
  { date: '2026-05-21', stream: '4 поток', streamNumber: 4 },
  { date: '2026-05-25', stream: '4 поток', streamNumber: 4 },
  { date: '2026-05-28', stream: '4 поток', streamNumber: 4 },
  
  // 4 поток - Июнь
  { date: '2026-06-01', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-04', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-08', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-11', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-15', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-18', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-22', stream: '4 поток', streamNumber: 4 },
  { date: '2026-06-29', stream: '4 поток', streamNumber: 4 },
  
  // 4 поток - Июль
  { date: '2026-07-02', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-06', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-09', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-13', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-16', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-20', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-23', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-27', stream: '4 поток', streamNumber: 4 },
  { date: '2026-07-30', stream: '4 поток', streamNumber: 4 },
  
  // 4 поток - Август
  { date: '2026-08-03', stream: '4 поток', streamNumber: 4 },
  { date: '2026-08-06', stream: '4 поток', streamNumber: 4 },
];

const streamColors: Record<number, string> = {
  2: '#f97316',
  3: '#8b5cf6',
  4: '#06b6d4'
};

async function createEvent(day: ScheduleDay) {
  const lessonNumber = schedule
    .filter(d => d.streamNumber === day.streamNumber && d.date <= day.date)
    .length;

  const event = {
    title: `${day.stream} - Занятие ${lessonNumber}`,
    description: `Занятие ${lessonNumber} потока "${day.stream}"`,
    event_date: day.date,
    start_time: '19:00:00',
    end_time: '21:00:00',
    event_type: 'lesson',
    color: streamColors[day.streamNumber],
    is_available: true
  };

  try {
    const response = await fetch(CALENDAR_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Key': ADMIN_KEY
      },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Error creating event for ${day.date}:`, error);
      return false;
    }

    const result = await response.json();
    console.log(`✓ Created: ${event.title} on ${day.date}`);
    return true;
  } catch (error) {
    console.error(`Failed to create event for ${day.date}:`, error);
    return false;
  }
}

async function fillCalendar() {
  console.log('Starting to fill calendar...\n');
  
  let created = 0;
  let failed = 0;

  for (const day of schedule) {
    const success = await createEvent(day);
    if (success) {
      created++;
    } else {
      failed++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n=== Summary ===');
  console.log(`Total events: ${schedule.length}`);
  console.log(`Created: ${created}`);
  console.log(`Failed: ${failed}`);
}

fillCalendar();
