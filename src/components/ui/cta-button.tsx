import React from 'react';
import Icon from '@/components/ui/icon';

interface CTAButtonProps {
  onClick: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <button
        onClick={onClick}
        className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        {/* Animated background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Button content */}
        <div className="relative flex items-center gap-3">
          <span className="text-white group-hover:text-blue-100 transition-colors duration-200">
            Оставить заявку
          </span>
          <div className="transform group-hover:translate-x-1 transition-transform duration-200">
            <Icon name="ArrowRight" size={20} className="text-white group-hover:text-blue-100" />
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    </div>
  );
};

export default CTAButton;