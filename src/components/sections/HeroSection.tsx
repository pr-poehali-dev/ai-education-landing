import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

  useEffect(() => {
    const targetDate = new Date('2026-02-16T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 animate-pulse"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                Практический курс по нейросетям
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Школа <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">"Хакни Нейросети"</span> <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-base sm:text-lg rounded-lg shadow-lg animate-pulse mt-2 sm:mt-0">OFFLINE</span>
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  — это место, где <span className="text-white font-semibold">без "воды" и сложных терминов</span> на простом русском языке можно 
                  <span className="text-cyan-300 font-semibold"> освоить 6 топ-профессий в нейросетях</span>.
                </p>
                <p>
                  Здесь выпускники не просто учатся, а <span className="text-white font-semibold">сразу начинают применять навыки в работе</span>, 
                  экономят <span className="text-cyan-300 font-semibold">до 50% времени</span>.
                </p>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/50 shadow-2xl">
                <div className="text-center mb-4">
                  <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-1">До старта курса осталось</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-3 sm:p-4 border border-orange-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                      <div className="text-2xl sm:text-4xl font-bold text-white mb-1 font-mono tabular-nums">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <div className="text-xs sm:text-sm text-orange-300 font-medium">дней</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-3 sm:p-4 border border-orange-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                      <div className="text-2xl sm:text-4xl font-bold text-white mb-1 font-mono tabular-nums">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <div className="text-xs sm:text-sm text-orange-300 font-medium">часов</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-3 sm:p-4 border border-orange-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                      <div className="text-2xl sm:text-4xl font-bold text-white mb-1 font-mono tabular-nums">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-xs sm:text-sm text-orange-300 font-medium">минут</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-3 sm:p-4 border border-orange-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                      <div className="text-2xl sm:text-4xl font-bold text-white mb-1 font-mono tabular-nums">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs sm:text-sm text-orange-300 font-medium">секунд</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-orange-500/30">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="AlertCircle" className="text-red-500 animate-pulse" size={20} />
                    <p className="text-white font-bold text-sm sm:text-base">
                      <span className="text-red-400 text-lg sm:text-xl">SOLD OUT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a 
                href="https://torguykriptoy.getcourse.ru/NeuroVL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 animate-pulse border-2 border-cyan-300/30 hover:border-cyan-300/60 w-full sm:w-auto justify-center"
              >
                <Icon name="Rocket" className="mr-3" size={24} />
                Записаться в школу
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center">
                  <Icon name="Users" className="mr-2 text-cyan-400" />
                  10,000+ студентов
                </div>
                <div className="flex items-center">
                  <Icon name="Star" className="mr-2 text-cyan-400" />
                  4.9/5 рейтинг
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2 text-cyan-400" />
                  3 месяца
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/files/583f12e9-bcf2-4958-8302-d544a301424d.png"
                    alt="Центр развития предпринимательства Владивостока"
                    className="h-12 w-auto transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:scale-105"
                  />
                  <p className="text-sm text-white font-medium">
                    При поддержке<br />
                    <span className="text-cyan-300">Центра развития предпринимательства Владивостока</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://cdn.poehali.dev/files/86be2539-f781-4550-a0e1-86adfb8e1f54.png"
              alt="Сергей Черников - Эксперт по ИИ"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-cyan-500/20 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}