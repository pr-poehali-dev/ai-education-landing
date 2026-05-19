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

      {/* Фоновые слои */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-500/10 animate-soft-pulse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />

      {/* ── ОБЁРТКА ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16">

        {/* Бейджи */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-cyan-500/30">
            <Icon name="Zap" size={12} />
            Практический курс по нейросетям — для новичков
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600/20 border-2 border-red-500/60 text-red-300 text-xs sm:text-sm font-bold rounded-full animate-soft-pulse">
            <Icon name="Flame" size={12} className="text-red-400" />
            На сентябрь осталось 20 мест из 30
          </span>
        </div>

        {/* ── СЕТКА ЗОЛОТОЕ СЕЧЕНИЕ: 62/38 на lg, стопка на мобайл ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[62fr_38fr] gap-8 lg:gap-14 items-center">

          {/* ── ЛЕВАЯ КОЛОНКА ── */}
          <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">

            {/* Заголовок */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] xl:text-5xl font-bold text-white leading-tight">
              Научись зарабатывать с ИИ —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                даже если твой арсенал ограничился ДипСиком
              </span>
            </h1>

            {/* Бейджи-факты */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white text-sm font-bold rounded-xl shadow-xl animate-soft-pulse border-2 border-orange-300/40">
                <Icon name="Users" size={16} className="animate-bounce" />
                ЖИВОЕ ОБУЧЕНИЕ В КЛАССЕ
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg border-2 border-green-300/40">
                <Icon name="GraduationCap" size={16} />
                С НУЛЯ — БЕЗ ОПЫТА
              </div>
            </div>

            {/* Описание */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
              За <span className="text-white font-semibold">3 месяца</span> освоишь{' '}
              <span className="text-cyan-300 font-semibold">6 профессий</span>, ускоришь задачи{' '}
              <span className="text-white font-semibold">в 16 раз</span> и начнёшь применять ИИ в деле —{' '}
              <span className="text-cyan-300 font-semibold">с первого занятия</span>. Никакого опыта в IT не нужно.
            </p>

            {/* Таймер */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${isExpired ? 'from-green-500/15 to-cyan-500/15' : 'from-orange-500/15 via-red-500/15 to-pink-500/15'} rounded-2xl blur-xl animate-soft-pulse`} />
              <div className={`relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border-2 ${isExpired ? 'border-green-500/40' : 'border-orange-500/40'} shadow-2xl`}>
                {isExpired ? (
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={22} className="text-green-400 shrink-0" />
                    <div>
                      <p className="text-green-300 font-bold text-sm uppercase tracking-wider">Курс уже стартовал!</p>
                      <p className="text-gray-400 text-sm mt-0.5">Запись на сентябрьский поток открыта</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <p className="text-orange-400 font-bold text-xs sm:text-sm uppercase tracking-wider shrink-0">До старта:</p>
                    <div className="grid grid-cols-4 gap-2 flex-1">
                      {[
                        { val: timeLeft.days, label: 'дней' },
                        { val: timeLeft.hours, label: 'часов' },
                        { val: timeLeft.minutes, label: 'минут' },
                        { val: timeLeft.seconds, label: 'секунд' },
                      ].map(({ val, label }) => (
                        <div key={label} className="text-center bg-orange-500/10 border border-orange-500/25 rounded-xl py-2 px-1">
                          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono tabular-nums">
                            {String(val).padStart(2, '0')}
                          </div>
                          <div className="text-[10px] sm:text-xs text-orange-300 font-medium mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA-кнопка */}
            <a
              href="https://torguykriptoy.getcourse.ru/chernikovgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white text-base sm:text-lg lg:text-xl font-bold px-8 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300 border-2 border-cyan-300/30 hover:border-cyan-300/60 animate-soft-pulse"
            >
              <Icon name="Rocket" size={20} />
              Занять место на сентябрь →
            </a>

            {/* Социальные доказательства */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center gap-1.5"><Icon name="Users" size={14} className="text-cyan-400" />10 000+ студентов</span>
                <span className="flex items-center gap-1.5"><Icon name="Star" size={14} className="text-yellow-400" />Рейтинг 4.9/5</span>
                <span className="flex items-center gap-1.5"><Icon name="Clock" size={14} className="text-cyan-400" />3 месяца</span>
              </div>
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300 w-fit">
                <img
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/e9ea1643-3ded-40a3-b962-8203d698a775.jpg"
                  alt="Приморское краевое отделение Опоры России"
                  className="h-8 sm:h-10 w-auto"
                />
                <p className="text-xs text-white leading-snug">
                  При поддержке<br />
                  <span className="text-cyan-300 font-semibold">Приморского отделения Опоры России</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── ПРАВАЯ КОЛОНКА — видео ── */}
          <div className="flex flex-col items-center gap-4 order-1 lg:order-2">

            {/* Глитч-лозунг */}
            <div className="select-none leading-none text-center w-full">
              <div className="relative inline-block">
                <span className="relative z-10 block text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight text-white animate-flicker"
                  style={{ textShadow: '0 0 20px #f97316, 0 0 50px #ef4444' }}>
                  НЕ ЗНАТЬ AI —
                </span>
                <span aria-hidden="true" className="absolute inset-0 block text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight text-red-400 animate-glitch-1"
                  style={{ textShadow: '2px 0 #22d3ee' }}>
                  НЕ ЗНАТЬ AI —
                </span>
                <span aria-hidden="true" className="absolute inset-0 block text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight text-cyan-400 animate-glitch-2"
                  style={{ textShadow: '-2px 0 #f97316' }}>
                  НЕ ЗНАТЬ AI —
                </span>
              </div>
              <div className="relative inline-block mt-1">
                <span className="relative z-10 block text-3xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-flicker"
                  style={{ filter: 'drop-shadow(0 0 30px #f97316) drop-shadow(0 0 60px #ef4444)' }}>
                  ДОРОГО!
                </span>
                <span aria-hidden="true" className="absolute inset-0 block text-3xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-red-500 animate-glitch-1"
                  style={{ filter: 'blur(1px)', opacity: 0.5 }}>
                  ДОРОГО!
                </span>
              </div>
            </div>

            {/* Видео-блок */}
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-full mx-auto">
              {/* Свечение */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 to-purple-600/30 rounded-3xl blur-3xl animate-soft-pulse scale-110" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />

              {/* Градиентная рамка */}
              <div className="relative z-10 rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-blue-600/60 shadow-2xl shadow-cyan-500/30">
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

                  {/* Кнопка звука */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-3 right-3 z-30 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 hover:border-cyan-400/80 hover:bg-slate-800/90 transition-all duration-200 shadow-lg group"
                    title={isMuted ? 'Включить звук' : 'Выключить звук'}
                  >
                    <Icon
                      name={isMuted ? 'VolumeX' : 'Volume2'}
                      size={16}
                      className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    />
                  </button>
                </div>
              </div>

            </div>

            {/* Плашка с именем — под видео */}
            <div className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-full mx-auto bg-slate-900/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-cyan-500/30 text-center shadow-xl">
              <p className="text-white font-bold text-sm leading-tight">Сергей Черников</p>
              <p className="text-cyan-400 text-xs mt-0.5">Эксперт по ИИ · Владивосток</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}