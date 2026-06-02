import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import AnimatedBackground from '@/components/ui/animated-background';

const timeline = [
  {
    year: '2017',
    title: 'Начало пути в технологиях',
    text: 'Сергей Черников начинает изучать цифровые технологии и инструменты автоматизации бизнеса. Первые эксперименты с машинным обучением и обработкой данных.',
  },
  {
    year: '2019',
    title: 'Первые курсы по цифровым инструментам',
    text: 'Проводит первые обучающие программы для предпринимателей Владивостока по цифровой трансформации бизнеса. Более 500 участников за первый год.',
  },
  {
    year: '2022',
    title: 'Основание школы «Хакни Нейросети»',
    text: 'Запускает первую офлайн-школу нейросетей во Владивостоке и на Дальнем Востоке России. Фокус — практическое применение ИИ без программирования.',
  },
  {
    year: '2023',
    title: 'Партнёрство с Опорой России',
    text: 'Школа становится партнёром Приморского краевого отделения «Опоры России». Курс включается в программу поддержки малого и среднего бизнеса региона.',
  },
  {
    year: '2024',
    title: '10 000 студентов',
    text: 'Школа «Хакни Нейросети» преодолевает отметку в 10 000 обученных. Запускается корпоративный трек для команд и бизнесов Приморского края.',
  },
  {
    year: '2025–2026',
    title: 'Расширение программы',
    text: 'В программу добавляются новые инструменты: Seedance 2 (видео), GigaChat, Claude, Gemini. Курс охватывает 6 профессий ИИ-специалиста. Группы расписаны на 3 месяца вперёд.',
  },
];

const expertise = [
  { icon: 'MessageSquare', label: 'ChatGPT и промпт-инжиниринг' },
  { icon: 'Image', label: 'Nano Banana — генерация изображений' },
  { icon: 'Video', label: 'Seedance 2 — ИИ-видеогенерация' },
  { icon: 'Bot', label: 'GigaChat, Claude, Gemini' },
  { icon: 'Briefcase', label: 'ИИ для бизнеса и автоматизации' },
  { icon: 'TrendingUp', label: 'Заработок с нейросетями' },
  { icon: 'Users', label: 'Корпоративное обучение ИИ' },
  { icon: 'GraduationCap', label: 'Обучение с нуля без IT-опыта' },
];

const achievements = [
  { value: '10 000+', label: 'студентов обучено' },
  { value: '7 лет', label: 'в сфере ИИ' },
  { value: '4.9 / 5', label: 'рейтинг курсов' },
  { value: '1-я', label: 'офлайн-школа ИИ на Дальнем Востоке' },
  { value: '6', label: 'профессий в программе' },
  { value: '85%+', label: 'студентов применяют ИИ в работе' },
];

const mediaQuotes = [
  {
    text: 'Незнание ИИ в 2026 году — это как незнание интернета в 2010-м. Тот, кто начнёт сейчас, через год будет на 2 шага впереди конкурентов.',
    context: 'О рынке труда и ИИ',
  },
  {
    text: 'Моя задача — не просто показать инструменты. Я хочу, чтобы человек вышел с курса и уже на следующей неделе применял ИИ в реальной работе.',
    context: 'О подходе к обучению',
  },
  {
    text: 'Владивосток — это уникальная точка. Здесь бизнес смотрит на Азию, а Азия уже живёт в ИИ. Мы не можем себе позволить отставать.',
    context: 'О Владивостоке и технологиях',
  },
];

export default function SpeakerPage() {
  return (
    <div className="min-h-screen relative bg-slate-950">
      <AnimatedBackground />

      {/* Фоновые акценты */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Навигация назад */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm mb-10 group"
        >
          <Icon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          На главную
        </Link>

        {/* ── ГЕРОЙ ── */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start mb-16">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-cyan-500/20 rounded-3xl blur-2xl scale-110" />
              <img
                src="https://cdn.poehali.dev/files/86be2539-f781-4550-a0e1-86adfb8e1f54.png"
                alt="Сергей Черников — эксперт по нейросетям и искусственному интеллекту, основатель школы Хакни Нейросети, Владивосток"
                className="relative z-10 w-56 sm:w-64 rounded-3xl border border-purple-500/25 shadow-2xl shadow-purple-500/10"
              />
            </div>
            {/* Соцссылки */}
            <a
              href="https://t.me/DashaChernikova8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl text-sm font-semibold hover:bg-cyan-500/20 transition-colors duration-200"
            >
              <Icon name="Send" size={15} />
              Telegram-канал
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold rounded-full mb-3">
                <Icon name="Award" size={12} />
                Эксперт по ИИ · Владивосток
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Сергей<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                  Черников
                </span>
              </h1>
              <p className="mt-2 text-gray-400 text-base sm:text-lg">
                Основатель школы нейросетей «Хакни Нейросети» · Владивосток
              </p>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Ведущий эксперт по нейросетям и искусственному интеллекту в Приморском крае.
              Основатель <strong className="text-white">первой и единственной офлайн-школы ИИ</strong> на Дальнем Востоке России.
              Обучил более <strong className="text-cyan-300">10 000 человек</strong> практическому применению
              ChatGPT, Nano Banana, GigaChat и других ИИ-инструментов для работы и заработка.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Партнёр Приморского краевого отделения «Опоры России». Специализируется на обучении
              предпринимателей, специалистов и фрилансеров — людей <em>без опыта в IT</em>, которые хотят
              использовать ИИ в реальных задачах и зарабатывать с его помощью.
            </p>

            {/* Достижения */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {achievements.map(({ value, label }) => (
                <div key={label} className="bg-slate-900/60 border border-slate-700/40 rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ЭКСПЕРТИЗА ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Области экспертизы
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {expertise.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-slate-900/60 border border-slate-700/40 rounded-xl px-4 py-3 hover:border-cyan-500/30 transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Icon name={icon} size={15} className="text-cyan-400" />
                </div>
                <span className="text-gray-300 text-sm leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── БИОГРАФИЯ / ХРОНОЛОГИЯ ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Путь в ИИ — хронология
          </h2>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent hidden sm:block" />
            {timeline.map(({ year, title, text }, i) => (
              <div key={year} className="relative flex gap-5 sm:gap-8 pb-8 last:pb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-black text-xs z-10 shadow-lg shadow-purple-500/20">
                    {i + 1}
                  </div>
                </div>
                <div className="flex flex-col gap-1 pt-2 pb-1">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{year}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg">{title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ЦИТАТЫ ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Взгляды и позиция
          </h2>
          <div className="flex flex-col gap-4">
            {mediaQuotes.map(({ text, context }) => (
              <blockquote key={context} className="bg-gradient-to-r from-slate-900/80 to-slate-900/40 border-l-4 border-cyan-500 rounded-r-2xl px-6 py-5">
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic mb-2">
                  «{text}»
                </p>
                <footer className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  {context}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ── О ШКОЛЕ ── */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Школа «Хакни Нейросети» — Владивосток
          </h2>
          <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              <strong className="text-white">«Хакни Нейросети»</strong> — первая офлайн-школа искусственного
              интеллекта во Владивостоке и на всём Дальнем Востоке России. Основана Сергеем Черниковым в 2022 году
              с одной целью: дать людям без технического образования реальные инструменты для работы с ИИ.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Обучение проходит <strong className="text-white">офлайн в живом классе</strong> — небольшими группами
              до 30 человек. Это принципиально: преподаватель видит каждого студента, отвечает на вопросы в
              реальном времени, адаптирует темп под группу. Именно поэтому доводимость до результата в школе
              составляет более 85% — против 10–15% у типичных онлайн-курсов.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Школа работает при поддержке <strong className="text-white">Приморского краевого отделения «Опоры России»</strong>.
              Программа включает 6 востребованных направлений: ИИ-ассистент, промпт-инженер, ИИ-дизайнер,
              ИИ-видеограф, ИИ-копирайтер и специалист по автоматизации бизнеса с ИИ.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/20 border border-cyan-500/20 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Хотите пройти обучение у Сергея?
          </h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            Ближайший поток стартует <strong className="text-white">11 мая 2026</strong> во Владивостоке.
            Осталось 2 места из 30.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://torguykriptoy.getcourse.ru/chernikovgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              <Icon name="Rocket" size={18} />
              Занять место на курс
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              <Icon name="ArrowLeft" size={18} />
              Подробнее о курсе
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}