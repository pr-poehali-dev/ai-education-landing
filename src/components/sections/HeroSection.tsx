import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToForm: () => void;
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToForm, scrollToSection }: HeroSectionProps) {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Школа <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">"Хакни Нейросети"</span> <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg shadow-lg animate-pulse">OFFLINE</span>
              </h1>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
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
            
            <div>
              <a 
                href="https://torguykriptoy.getcourse.ru/NeuroVL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-xl px-10 py-6 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 animate-pulse border-2 border-cyan-300/30 hover:border-cyan-300/60"
              >
                <Icon name="Rocket" className="mr-3" size={24} />
                Записаться в школу
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-8 text-sm text-gray-400">
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