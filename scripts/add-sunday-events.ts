const CALENDAR_API = 'https://functions.poehali.dev/938a3b95-bbf1-4103-be1a-7f22fe42d676';
const ADMIN_KEY = 'test-admin-key';

// Генерируем все воскресенья с 18 января 2026 по конец августа 2026
function getSundays(startDate: Date, endDate: Date): string[] {
  const sundays: string[] = [];
  const current = new Date(startDate);
  
  // Находим первое воскресенье
  while (current.getDay() !== 0) {
    current.setDate(current.getDate() + 1);
  }
  
  // Добавляем все воскресенья до конца периода
  while (current <= endDate) {
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const day = String(current.getDate()).padStart(2, '0');
    sundays.push(`${year}-${month}-${day}`);
    current.setDate(current.getDate() + 7);
  }
  
  return sundays;
}

const startDate = new Date('2026-01-18');
const endDate = new Date('2026-08-31');
const sundayDates = getSundays(startDate, endDate);

async function createSundayEvent(date: string, eventNumber: number) {
  const event = {
    title: 'Воскресная ИИшница',
    description: `Еженедельная встреча для обсуждения ИИ-инструментов и практик`,
    event_date: date,
    start_time: '10:00:00',
    end_time: '13:00:00',
    event_type: 'workshop',
    color: '#10b981', // Зеленый цвет
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
      console.error(`Error creating event for ${date}:`, error);
      return false;
    }

    const result = await response.json();
    console.log(`✓ Created: Воскресная ИИшница #${eventNumber} on ${date}`);
    return true;
  } catch (error) {
    console.error(`Failed to create event for ${date}:`, error);
    return false;
  }
}

async function addSundayEvents() {
  console.log('Starting to add Sunday ИИшница events...\n');
  console.log(`Total Sundays: ${sundayDates.length}\n`);
  
  let created = 0;
  let failed = 0;

  for (let i = 0; i < sundayDates.length; i++) {
    const success = await createSundayEvent(sundayDates[i], i + 1);
    if (success) {
      created++;
    } else {
      failed++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n=== Summary ===');
  console.log(`Total events: ${sundayDates.length}`);
  console.log(`Created: ${created}`);
  console.log(`Failed: ${failed}`);
}

addSundayEvents();
