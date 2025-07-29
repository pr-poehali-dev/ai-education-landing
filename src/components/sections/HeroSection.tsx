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
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">
          Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('program')} className="text-white hover:text-cyan-400 transition-colors">Программа</button>
          <button onClick={() => scrollToSection('about-course')} className="text-white hover:text-cyan-400 transition-colors">О курсе</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-cyan-400 transition-colors">Отзывы</button>
          <Button onClick={scrollToForm} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            Оставить заявку
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                Практический курс по нейросетям
              </Badge>
              <p className="text-lg text-gray-300">
                Освоение трендовых инструментов для заработка, продвижения себя и клиентов
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Начни <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">зарабатывать</span><br />
                на ИИ через месяц!
              </h1>
              <div className="space-y-2 text-xl text-gray-300">
                <p>Освой 6 востребованных профессий с нейросетями</p>
                <p>Автоматизируй бизнес с помощью ИИ</p>
              </div>
            </div>
            
            <div>
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6 animate-pulse"
              >
                <Icon name="Rocket" className="mr-2" />
                Оставить заявку
              </Button>
            </div>

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
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/21a06d58-77a7-49fb-8869-f0e9b0d9f399.png"
              alt="Сергей Черников - Эксперт по ИИ"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-cyan-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}