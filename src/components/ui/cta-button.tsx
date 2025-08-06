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
        className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-orange-400/30"
      >
        {/* Animated background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-red-300 rounded-full blur opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
        
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