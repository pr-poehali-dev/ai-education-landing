import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SundayAISection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 animate-pulse"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main card with multiple layers of glow */}
        <div className="relative group">
          {/* Outer glow layer */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
          
          {/* Middle glow layer */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border-2 border-orange-500/50 group-hover:border-orange-400 transition-all duration-300 shadow-2xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              {/* Logo section with animation */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Logo glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  
                  {/* Logo container */}
                  <div className="relative bg-white rounded-full p-2 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img 
                      src="https://cdn.poehali.dev/files/start_frame.jpg" 
                      alt="Воскресная ИИшница"
                      className="w-40 h-40 rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 border-4 border-orange-500/30 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="space-y-6">
                {/* Header with badge */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg animate-pulse">
                      Каждое воскресенье
                    </div>
                    <div className="flex items-center gap-2 text-orange-300">
                      <Icon name="Users" size={20} className="animate-bounce" />
                      <span className="text-sm font-semibold">Открытая встреча</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Воскресная ИИшница
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 font-medium">
                    Образование и нетворкинг в дружеской атмосфере
                  </p>
                </div>
                
                {/* Description */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-orange-500/30 backdrop-blur-sm">
                  <p className="text-gray-200 leading-relaxed">
                    Еженедельная встреча выпускников и новичков, где мы завтракаем, общаемся на тему ИИ 
                    и учимся практическим навыкам работы с нейросетями. Спикер — <span className="text-orange-400 font-semibold">Сергей Черников</span>, 
                    основатель единственной живой школы по работе с ИИ для бизнеса во Владивостоке.
                  </p>
                </div>
                
                {/* Features grid */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-4 border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 group/item">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg group-hover/item:animate-bounce">
                        <Icon name="Coffee" size={20} className="text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Завтрак</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-4 border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 group/item">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg group-hover/item:animate-bounce">
                        <Icon name="MessageCircle" size={20} className="text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Общение</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-4 border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 group/item">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg group-hover/item:animate-bounce">
                        <Icon name="Lightbulb" size={20} className="text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Практика</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://t.me/+-4ypMIvSdh1mNDg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative"
                  >
                    {/* Button glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse"></div>
                    
                    {/* Button */}
                    <Button 
                      className="relative bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 hover:from-orange-400 hover:via-yellow-300 hover:to-orange-400 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-2xl border-2 border-orange-300/50 hover:border-orange-200 transition-all duration-300 group-hover/btn:scale-105"
                    >
                      <Icon name="Send" className="mr-2 group-hover/btn:translate-x-1 transition-transform" size={24} />
                      Присоединиться к встрече
                    </Button>
                  </a>
                  
                  {/* Price badge */}
                  <div className="hidden sm:flex flex-col items-start gap-1 bg-orange-500/20 border-2 border-orange-500/50 rounded-xl px-4 py-2">
                    <span className="text-orange-400 font-bold text-xl">1000₽</span>
                    <span className="text-orange-300 text-xs">Завтрак включен</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full opacity-50"></div>
      </div>
    </section>
  );
}