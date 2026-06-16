-- Субботние уроки потока 2 переносим на время 10:00-13:00
UPDATE t_p98769522_ai_education_landing.calendar_events
SET start_time = '10:00:00', end_time = '13:00:00'
WHERE EXTRACT(DOW FROM event_date) = 6
  AND title LIKE '%УРОК%' AND title = UPPER(title);