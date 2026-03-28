import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const aiCapabilities = [
  {
    title: "Перестань сливать бюджет на рекламу",
    description: "ИИ привлечёт клиентов органически — без вложений и платных кампаний",
    icon: "Target"
  },
  {
    title: "Делай видео и фото без камеры, студии и фотографа",
    description: "Генерируй качественный контент с помощью ИИ — быстро, дёшево и профессионально",
    icon: "Camera"
  },
  {
    title: "Твой ИИ-ассистент продаёт 24/7 — даже когда ты спишь",
    description: "Настрой автоматическую воронку продаж и получай заявки без участия",
    icon: "Bot"
  },
  {
    title: "Забудь о ручном ведении клиентов — ИИ сделает всё сам",
    description: "Автоматизируй CRM, аналитику и работу с базой без лишних усилий",
    icon: "Database"
  },
  {
    title: "Найди нужного человека за 1 час, а не за 2 недели",
    description: "ИИ отберёт кандидатов, проведёт первичный отбор и сэкономит твоё время",
    icon: "Users"
  },
  {
    title: "Профессиональный дизайн без дизайнера и без бюджета",
    description: "Сайты, логотипы, презентации — создавай сам с помощью ИИ за минуты",
    icon: "Palette"
  }
];

export default function AiCapabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = aiCapabilities.length - cardsPerView;

  const goTo = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 60) goTo(currentIndex + 1);
    if (touchEnd - touchStart > 60) goTo(currentIndex - 1);
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Что сможешь делать с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ИИ</span>
        </h3>
      </div>

      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/90 shadow-lg"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>

        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex >= maxIndex}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/90 shadow-lg"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        <div
          className="overflow-hidden"
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <Card className="h-full min-h-[220px] bg-slate-800/30 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6 flex flex-col justify-center h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                        <Icon name={capability.icon} className="text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                        <p className="text-sm text-gray-400">{capability.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {aiCapabilities.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`relative h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
              index === currentIndex ? 'w-10 bg-slate-700' : index < currentIndex ? 'w-2.5 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
            }`}
          >
            {index === currentIndex && (
              <span
                key={`ai-progress-${currentIndex}`}
                className="absolute inset-0 bg-cyan-400 rounded-full"
                style={{
                  animation: isPaused ? 'none' : 'progressFill 4.5s linear forwards',
                }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes progressFill {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}