import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ChatWidget = () => {
  const openTelegram = () => {
    window.open('https://t.me/YOUR_BOT_USERNAME', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={openTelegram}
        className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-500 hover:bg-blue-600 group"
        title="Задать вопрос боту"
      >
        <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Подсказка */}
      <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="flex items-center gap-2">
          <Icon name="MessageCircle" size={16} className="text-blue-500" />
          <span>Задать вопрос боту</span>
        </div>
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default ChatWidget;