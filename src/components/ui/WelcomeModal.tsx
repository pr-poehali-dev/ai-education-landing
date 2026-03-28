import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const scheduleOpen = (delay: number) => {
    return setTimeout(() => {
      setIsOpen(true);
    }, delay);
  };

  useEffect(() => {
    const timer = scheduleOpen(15000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    const timer = scheduleOpen(60000);
    return () => clearTimeout(timer);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes overlayFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .modal-overlay {
            animation: overlayFadeIn 0.3s ease-out;
          }

          .modal-content {
            animation: modalFadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(251, 146, 60, 0.6);
            }
          }

          .finger-point {
            animation: fingerBounce 1s ease-in-out infinite;
          }

          @keyframes fingerBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }
        `}
      </style>

      {/* Overlay */}
      <div
        className="modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div
          className="modal-content relative max-w-lg w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            aria-label="Закрыть"
            type="button"
          >
            <Icon name="X" size={20} className="text-gray-300" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600 p-4 flex items-center justify-center pulse-glow">
                <Icon name="Sparkles" size={40} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
              Здравствуйте
            </h2>

            {/* Message */}
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
                Если у вас остались вопросы по обучению в нашей школе, вопрос можете задать нашему менеджеру
              </p>
            </div>

            {/* Finger pointing emoji */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <span className="text-4xl sm:text-5xl finger-point">👇</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://t.me/DashaChernikova8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
              onClick={handleClose}
            >
              <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2AABEE] to-[#229ED9] hover:from-[#229ED9] hover:to-[#1a8bc2] text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 border border-blue-400/20 flex items-center justify-center gap-2 sm:gap-3 group">
                <Icon name="Send" size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span className="whitespace-nowrap">Написать менеджеру</span>
              </button>
            </a>

            {/* Small note */}
            <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
              Ответим в течение 15 минут
            </p>
          </div>
        </div>
      </div>
    </>
  );
}