-- Таблица для событий календаря
CREATE TABLE IF NOT EXISTS calendar_events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    event_type VARCHAR(50) NOT NULL DEFAULT 'lesson',
    color VARCHAR(20) DEFAULT '#3b82f6',
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индекс для быстрого поиска по датам
CREATE INDEX idx_calendar_events_date ON calendar_events(event_date);

-- Индекс для фильтрации по типу события
CREATE INDEX idx_calendar_events_type ON calendar_events(event_type);

COMMENT ON TABLE calendar_events IS 'События и занятия в календаре на 2026 год';
COMMENT ON COLUMN calendar_events.event_type IS 'Тип события: lesson, consultation, free_day, holiday, special';
COMMENT ON COLUMN calendar_events.is_available IS 'Доступность для записи (true = есть места)';