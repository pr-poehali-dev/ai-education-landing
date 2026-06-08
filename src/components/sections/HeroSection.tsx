import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToForm: () => void;
  scrollToSection: (id: string) => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection({ scrollToForm, scrollToSection }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const targetDate = new Date('2026-09-14T00:00:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setIsExpired(false);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setIsExpired(true);
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-500/10 animate-soft-pulse" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-20 pb-10 sm:pb-12">

        {/* Верхние бейджи */}
        <div className="flex flex-wrap items-center gap-2 mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-cyan-500/30">
            <Icon name="Zap" size={11} />
            Практический курс по нейросетям — для новичков
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 border border-red-500/60 text-red-300 text-xs font-bold rounded-full animate-soft-pulse">
            <Icon name="Flame" size={11} className="text-red-400" />
            На сентябрь осталось 7 мест из 30
          </span>
        </div>

        {/* СЕТКА: 55/45 — чуть больше видео */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">

          {/* ── ЛЕВАЯ КОЛОНКА ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* H1 — крупный, чистый */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
              Научись зарабатывать с ИИ —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                даже если ты начинаешь с нуля
              </span>
            </h1>

            {/* Одна строка ключевых фактов */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Icon name="Users" size={15} className="text-cyan-400" />
                Живое обучение
              </span>
              <span className="text-gray-600">·</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Icon name="GraduationCap" size={15} className="text-green-400" />
                С нуля, без опыта
              </span>
              <span className="text-gray-600">·</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Icon name="Clock" size={15} className="text-orange-400" />
                3 месяца
              </span>
            </div>

            {/* Таймер */}
            <div className="relative max-w-sm">
              <div className={`absolute inset-0 bg-gradient-to-r ${isExpired ? 'from-green-500/15 to-cyan-500/15' : 'from-orange-500/15 via-red-500/10 to-pink-500/15'} rounded-2xl blur-lg`} />
              <div className={`relative bg-slate-900/70 backdrop-blur-sm rounded-2xl px-5 py-4 border ${isExpired ? 'border-green-500/40' : 'border-orange-500/30'}`}>
                {isExpired ? (
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-400 shrink-0" />
                    <div>
                      <p className="text-green-300 font-bold text-sm">Курс уже стартовал!</p>
                      <p className="text-gray-400 text-xs mt-0.5">Запись на сентябрьский поток открыта</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <p className="text-orange-400 font-bold text-xs uppercase tracking-wider shrink-0">До старта:</p>
                    <div className="flex gap-2">
                      {[
                        { val: timeLeft.days, label: 'дн' },
                        { val: timeLeft.hours, label: 'ч' },
                        { val: timeLeft.minutes, label: 'мин' },
                        { val: timeLeft.seconds, label: 'сек' },
                      ].map(({ val, label }) => (
                        <div key={label} className="text-center bg-orange-500/10 border border-orange-500/20 rounded-lg py-1.5 px-2.5 min-w-[48px]">
                          <div className="text-xl lg:text-2xl font-bold text-white font-mono tabular-nums leading-none">
                            {String(val).padStart(2, '0')}
                          </div>
                          <div className="text-[10px] text-orange-300 mt-1">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://torguykriptoy.getcourse.ru/chernikovgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-fit bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 border border-cyan-300/20"
            >
              <Icon name="Rocket" size={20} />
              Занять место на сентябрь →
            </a>

            {/* Соцдоказательства — компактно */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-gray-500">
              <span className="flex items-center gap-1.5 text-gray-400">
                <Icon name="Users" size={13} className="text-cyan-400" />10 000+ студентов
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Icon name="Star" size={13} className="text-yellow-400" />Рейтинг 4.9/5
              </span>
              <span className="flex items-center gap-1.5">
                <img
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/e9ea1643-3ded-40a3-b962-8203d698a775.jpg"
                  alt="Опора России"
                  className="h-5 w-auto opacity-70"
                />
                <span className="text-gray-500">При поддержке Опоры России</span>
              </span>
            </div>
          </div>

          {/* ── ПРАВАЯ КОЛОНКА — видео ── */}
          <div className="flex flex-col items-center gap-5 order-1 lg:order-2">

            {/* Глитч-надпись — крупнее */}
            <div className="select-none leading-none text-center w-full">
              <div className="relative inline-block">
                <span
                  className="relative z-10 block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white animate-flicker"
                  style={{ textShadow: '0 0 25px #f97316, 0 0 60px #ef4444' }}
                >
                  НЕ ЗНАТЬ AI —
                </span>
                <span aria-hidden="true"
                  className="absolute inset-0 block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-red-400 animate-glitch-1"
                  style={{ textShadow: '2px 0 #22d3ee' }}>
                  НЕ ЗНАТЬ AI —
                </span>
                <span aria-hidden="true"
                  className="absolute inset-0 block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-cyan-400 animate-glitch-2"
                  style={{ textShadow: '-2px 0 #f97316' }}>
                  НЕ ЗНАТЬ AI —
                </span>
              </div>
              <div className="relative inline-block mt-1">
                <span
                  className="relative z-10 block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-flicker"
                  style={{ filter: 'drop-shadow(0 0 35px #f97316) drop-shadow(0 0 70px #ef4444)' }}
                >
                  ДОРОГО!
                </span>
                <span aria-hidden="true"
                  className="absolute inset-0 block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-red-500 animate-glitch-1"
                  style={{ filter: 'blur(1px)', opacity: 0.5 }}>
                  ДОРОГО!
                </span>
              </div>
            </div>

            {/* Видео */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/25 to-purple-600/25 rounded-3xl blur-3xl animate-soft-pulse scale-105" />
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-cyan-500/15 rounded-full blur-2xl" />

              <div className="relative z-10 rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400/50 via-purple-500/30 to-blue-600/50 shadow-2xl shadow-cyan-500/20">
                <div className="rounded-[22px] overflow-hidden bg-slate-900 relative">
                  <video
                    ref={videoRef}
                    src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/cecec551-46ad-4d4f-8d8e-3fd6e341aa88.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block"
                  />
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-3 right-3 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-200 shadow-lg group"
                    title={isMuted ? 'Включить звук' : 'Выключить звук'}
                  >
                    <Icon name={isMuted ? 'VolumeX' : 'Volume2'} size={15} className="text-cyan-400 group-hover:text-cyan-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Плашка под видео */}
            <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-full mx-auto flex items-center justify-center gap-3 bg-slate-900/60 backdrop-blur-md rounded-2xl px-5 py-3 border border-cyan-500/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-white font-semibold text-sm">Сергей Черников</p>
              <span className="text-gray-600">·</span>
              <p className="text-cyan-400 text-sm">Эксперт по ИИ, Владивосток</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}