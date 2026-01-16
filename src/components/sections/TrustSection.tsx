import React from 'react';

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Мне доверяют!</h3>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Более 10,000 специалистов уже прошли обучение в наших программах при поддержке ведущих организаций
        </p>
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-carousel {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .carousel-track {
              animation: scroll-carousel 30s linear infinite;
              display: flex;
              width: fit-content;
            }
            .carousel-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="carousel-track">
            {/* First set of logos */}
            <div className="flex gap-6 mr-6">
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/4bc30784-6b4b-4dd5-af33-57ab2eaff47a.jpg" 
                  alt="Мой Бизнес" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/67470047-e195-4c54-8ed9-2230ccd6b6f8.jpeg" 
                  alt="Центр Развития Предпринимательства" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/894590f6-de63-49af-a296-83da32f246cb.jpeg" 
                  alt="Штаб Общественной Поддержки Единой России" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/eb4d7375-5a58-4943-bb20-57a56f1eba5f.png" 
                  alt="Росмолодежь" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/46d80ccd-7d32-487f-821e-331a1d2c4ce8.png" 
                  alt="Бизнес Завтрак" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46146.png" 
                  alt="Дальприбор" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46147.png" 
                  alt="ЭКО Логотип" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/Screenshot%20(17).png" 
                  alt="Опора России" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46148.png" 
                  alt="Перспектива" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            {/* Duplicate set for infinite scroll */}
            <div className="flex gap-6">
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/4bc30784-6b4b-4dd5-af33-57ab2eaff47a.jpg" 
                  alt="Мой Бизнес" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/67470047-e195-4c54-8ed9-2230ccd6b6f8.jpeg" 
                  alt="Центр Развития Предпринимательства" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/894590f6-de63-49af-a296-83da32f246cb.jpeg" 
                  alt="Штаб Общественной Поддержки Единой России" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/eb4d7375-5a58-4943-bb20-57a56f1eba5f.png" 
                  alt="Росмолодежь" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/46d80ccd-7d32-487f-821e-331a1d2c4ce8.png" 
                  alt="Бизнес Завтрак" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46146.png" 
                  alt="Дальприбор" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46147.png" 
                  alt="ЭКО Логотип" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/Screenshot%20(17).png" 
                  alt="Опора России" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/freepik__-__46148.png" 
                  alt="Перспектива" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
