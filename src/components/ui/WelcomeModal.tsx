import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
        className="modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      >
        {/* Modal */}
        <div
          className="modal-content relative max-w-lg w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-700/50 hover:bg-slate-600/50 active:bg-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-20 touch-manipulation"
            aria-label="Закрыть"
            type="button"
          >
            <Icon name="X" size={20} className="text-gray-300" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8">
            {/* Icon */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600 p-3 sm:p-4 flex items-center justify-center pulse-glow">
                <Icon name="Sparkles" size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-6">
              Здравствуйте
            </h2>

            {/* Message */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                К сожалению на февральский поток мест нет.
              </p>
              <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                Но вы можете оставить заявку на <span className="text-orange-400 font-semibold">май</span> и забронировать место, чтобы точно попасть в школу.
              </p>
              <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                Для этого напишите менеджеру школы - <span className="text-white font-semibold">"Хочу попасть в школу ИИ"</span> по кнопке ниже
              </p>
            </div>

            {/* Finger pointing emoji */}
            <div className="flex justify-center mb-4 sm:mb-5">
              <span className="text-5xl sm:text-6xl finger-point">👇</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://t.me/DashaChernikova8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
              onClick={() => setIsOpen(false)}
            >
              <button className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 active:scale-95 text-white font-bold text-lg sm:text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105 border border-orange-400/20 flex items-center justify-center gap-2 sm:gap-3 group touch-manipulation">
                <Icon name="Send" size={22} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>Написать менеджеру</span>
                <Icon name="ExternalLink" size={18} className="sm:w-5 sm:h-5 opacity-70" />
              </button>
            </a>

            {/* Small note */}
            <p className="text-sm sm:text-base text-gray-400 text-center mt-4">
              Ответим в течение 15 минут
            </p>
          </div>
        </div>
      </div>
    </>
  );
}