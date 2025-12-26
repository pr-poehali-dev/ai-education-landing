import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface StickyHeaderProps {
  scrollToForm: () => void;
  scrollToSection: (id: string) => void;
}

export default function StickyHeader({ scrollToForm, scrollToSection }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">
          Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            О курсе
          </button>
          <button 
            onClick={() => scrollToSection('program')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Программа
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Отзывы
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Тарифы
          </button>
          <a 
            href="/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base"
          >
            Календарь
          </a>
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
            className="inline-flex items-center px-4 py-3 lg:px-6 lg:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 text-sm lg:text-base border border-cyan-400/20"
          >
            🚀 Оставить заявку
          </a>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </nav>
      
      {/* Мобильное выпадающее меню */}
      <div 
        className={`md:hidden bg-slate-900/98 backdrop-blur-sm border-b border-slate-700/50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 p-6 animate-fade-in-up">
          <button 
            onClick={() => {
              scrollToSection('skills');
              setIsMobileMenuOpen(false);
            }} 
            className="text-white hover:text-cyan-400 transition-all duration-200 text-left hover:translate-x-2"
          >
            О курсе
          </button>
          <button 
            onClick={() => {
              scrollToSection('program');
              setIsMobileMenuOpen(false);
            }} 
            className="text-white hover:text-cyan-400 transition-all duration-200 text-left hover:translate-x-2"
          >
            Программа
          </button>
          <button 
            onClick={() => {
              scrollToSection('testimonials');
              setIsMobileMenuOpen(false);
            }} 
            className="text-white hover:text-cyan-400 transition-all duration-200 text-left hover:translate-x-2"
          >
            Отзывы
          </button>
          <button 
            onClick={() => {
              scrollToSection('pricing');
              setIsMobileMenuOpen(false);
            }} 
            className="text-white hover:text-cyan-400 transition-all duration-200 text-left hover:translate-x-2"
          >
            Тарифы
          </button>
          <a 
            href="/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-all duration-200 text-left hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Календарь
          </a>
          <a 
            href="https://t.me/chernikovgpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-all duration-200 hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ТГ-КАНАЛ
          </a>
          <a 
            href="https://torguykriptoy.getcourse.ru/NeuroVL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 border border-cyan-400/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            🚀 Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}