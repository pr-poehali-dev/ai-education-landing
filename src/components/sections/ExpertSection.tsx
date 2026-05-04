import React from 'react';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '10 000+', label: 'студентов обучено' },
  { value: '7 лет', label: 'в сфере ИИ и нейросетей' },
  { value: '4.9 / 5', label: 'средняя оценка курсов' },
  { value: '6', label: 'профессий в программе' },
];

const facts = [
  'Эксперт по искусственному интеллекту и нейросетям — Владивосток',
  'Автор и ведущий курса «Хакни Нейросети» — крупнейшей офлайн-школы ИИ на Дальнем Востоке',
  'Партнёр Приморского краевого отделения «Опоры России»',
  'Обучает предпринимателей, сотрудников и фрилансеров работе с ChatGPT, Midjourney, GigaChat, Sora',
  'Более 10 000 человек прошли обучение на курсах Сергея Черникова',
  'Специализация: практическое применение ИИ в бизнесе, заработок с нейросетями, автоматизация процессов',
];

export default function ExpertSection() {
  return (
    <section id="expert" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold rounded-full mb-4">
            <Icon name="User" size={15} />
            Ваш преподаватель
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Сергей Черников —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              эксперт по ИИ во Владивостоке
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">

          {/* Фото */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl scale-110" />
              <img
                src="https://cdn.poehali.dev/files/86be2539-f781-4550-a0e1-86adfb8e1f54.png"
                alt="Сергей Черников — эксперт по нейросетям и искусственному интеллекту, Владивосток"
                className="relative z-10 w-full rounded-3xl border border-purple-500/20 shadow-2xl"
              />
              <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-purple-500/30 text-center">
                <p className="text-white font-bold text-sm">Сергей Черников</p>
                <p className="text-purple-400 text-xs mt-0.5">Эксперт по ИИ · Владивосток</p>
              </div>
            </div>
          </div>

          {/* Контент */}
          <div className="flex flex-col gap-7">

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{value}</div>
                  <div className="text-xs text-gray-400 mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            {/* Описание */}
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                <strong className="text-white">Сергей Черников</strong> — ведущий эксперт по нейросетям и искусственному интеллекту
                в Приморском крае. Основатель школы <strong className="text-cyan-300">«Хакни Нейросети»</strong> —
                первой и крупнейшей офлайн-школы ИИ на Дальнем Востоке России. Обучает предпринимателей,
                специалистов и фрилансеров практическому применению ИИ-инструментов для заработка и роста бизнеса.
              </p>
              <ul className="flex flex-col gap-2.5">
                {facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                      <Icon name="Check" size={11} className="text-cyan-400" />
                    </div>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Цитата */}
            <blockquote className="relative bg-gradient-to-r from-purple-900/30 to-cyan-900/20 border border-purple-500/20 rounded-2xl p-6">
              <Icon name="Quote" size={28} className="text-purple-400/40 mb-3" />
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                «Не знать AI в 2026 году — это как не уметь пользоваться интернетом в 2010-м.
                Те, кто начнёт сейчас, через год будут на 2 шага впереди остальных.»
              </p>
              <footer className="mt-3 text-purple-300 text-sm font-semibold">— Сергей Черников</footer>
            </blockquote>

          </div>
        </div>

      </div>
    </section>
  );
}
