import React, { useState, useEffect } from 'react';

interface StickyHeaderProps {
  scrollToForm: () => void;
  scrollToSection: (id: string) => void;
}

export default function StickyHeader({ scrollToForm, scrollToSection }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="text-xl lg:text-2xl font-bold text-white">
          Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('program')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Программа
          </button>
          <button 
            onClick={() => scrollToSection('about-course')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            О курсе
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Отзывы
          </button>
          <a 
            href="https://t.me/chernikovgpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            ТГ-КАНАЛ
          </a>
          <a 
            href="https://torguykriptoy.getcourse.ru/NeuroVL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-md transition-colors text-sm lg:text-base"
          >
            Оставить заявку
          </a>
        </div>

        {/* Мобильное меню - можно добавить позже */}
        <div className="md:hidden">
          <button 
            onClick={scrollToForm}
            className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-md transition-colors text-sm"
          >
            Заявка
          </button>
        </div>
      </nav>
    </header>
  );
}