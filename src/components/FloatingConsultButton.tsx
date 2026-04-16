import React from 'react';
import Icon from '@/components/ui/icon';

const FloatingConsultButton = () => {
  return (
    <a
      href="https://t.me/ChernikovGPT_Bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 border-2 border-orange-300/40 animate-soft-pulse"
    >
      <Icon name="MessageCircle" size={22} />
      <span className="text-xs sm:text-sm">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ПО ИИ</span>
    </a>
  );
};

export default FloatingConsultButton;