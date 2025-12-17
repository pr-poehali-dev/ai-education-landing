import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SundayAICompactSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-yellow-500/5 to-orange-500/5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Compact card */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-2xl p-6 border border-orange-500/40 group-hover:border-orange-400 transition-all duration-300 shadow-xl backdrop-blur-sm">
            <div className="grid sm:grid-cols-[120px_1fr_auto] gap-6 items-center">
              {/* Compact logo */}
              <div className="flex justify-center sm:justify-start">
                <div className="relative group/logo">
                  {/* Logo glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full blur-xl opacity-40 group-hover/logo:opacity-80 group-hover/logo:from-red-600 group-hover/logo:to-orange-500 transition-all duration-300"></div>
                  
                  {/* Oil sizzle particles */}
                  <div className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-yellow-300 rounded-full animate-[ping_0.8s_ease-in-out_infinite] shadow-lg"></div>
                    <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-orange-400 rounded-full animate-[ping_1s_ease-in-out_infinite_0.2s] shadow-lg"></div>
                    <div className="absolute bottom-[35%] left-[25%] w-1 h-1 bg-yellow-400 rounded-full animate-[ping_0.9s_ease-in-out_infinite_0.1s] shadow-lg"></div>
                    <div className="absolute top-[45%] right-[15%] w-1.5 h-1.5 bg-orange-300 rounded-full animate-[ping_1.1s_ease-in-out_infinite_0.3s] shadow-lg"></div>
                    <div className="absolute bottom-[25%] right-[30%] w-1 h-1 bg-yellow-300 rounded-full animate-[ping_0.85s_ease-in-out_infinite_0.15s] shadow-lg"></div>
                  </div>
                  
                  {/* Logo container */}
                  <div className="relative bg-white rounded-full p-1.5 shadow-xl transform group-hover/logo:scale-105 group-hover/logo:rotate-2 transition-all duration-500">
                    <img 
                      src="https://cdn.poehali.dev/files/start_frame.jpg" 
                      alt="Воскресная ИИшница"
                      className="w-24 h-24 rounded-full object-cover group-hover/logo:brightness-110 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Steam effect */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-4 bg-gradient-to-t from-gray-400/60 to-transparent rounded-full animate-[pulse_1.5s_ease-in-out_infinite] blur-sm"></div>
                      <div className="w-0.5 h-5 bg-gradient-to-t from-gray-400/60 to-transparent rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.3s] blur-sm"></div>
                      <div className="w-0.5 h-4 bg-gradient-to-t from-gray-400/60 to-transparent rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.6s] blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Воскресная ИИшница
                  </h3>
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-2 py-0.5 rounded-full text-xs font-bold uppercase">
                    Каждое ВС
                  </span>
                </div>
                
                <p className="text-sm text-gray-300">
                  Завтрак, общение и практика с ИИ в дружеской атмосфере. 
                  <span className="text-orange-400 font-semibold"> Спикер — Сергей Черников</span>
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 justify-center sm:justify-start">
                  <div className="flex items-center gap-1">
                    <Icon name="Coffee" size={14} className="text-orange-400" />
                    <span>Завтрак</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} className="text-orange-400" />
                    <span>Нетворкинг</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Lightbulb" size={14} className="text-orange-400" />
                    <span>Практика</span>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col items-center gap-2 col-span-full sm:col-span-1">
                <a
                  href="https://t.me/+-4ypMIvSdh1mNDg6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full sm:w-auto"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg blur opacity-50 group-hover/btn:opacity-100 transition-all duration-300"></div>
                  
                  <Button 
                    className="relative bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-white font-bold px-6 py-3 text-sm rounded-lg border border-orange-300/50 hover:border-orange-200 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Icon name="Send" className="mr-2 group-hover/btn:translate-x-0.5 transition-transform" size={16} />
                    Присоединиться
                  </Button>
                </a>
                
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <span className="text-lg">1000₽</span>
                  <span className="text-xs text-orange-300">завтрак включен</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
