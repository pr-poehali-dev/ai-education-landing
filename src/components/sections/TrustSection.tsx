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
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/62c131ad-efa2-4213-8279-420e77d68161.png" 
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
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/33d86649-c3b6-436d-a7f7-51a1badf5c86.png" 
                  alt="Logistic Force" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/7be0699e-2594-4797-b3eb-5c0effc8e02e.png" 
                  alt="Кинотеатр Шахтер" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/768fc7ab-c48e-4f51-865e-f6c96d83a2c7.jpg" 
                  alt="Рейд Паллада" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/3974b165-cb96-47ec-8490-e201644b3c89.jpg" 
                  alt="Пасифик Медиа" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/9ae22994-0c9c-4ee0-8797-bc2d147790b8.png" 
                  alt="Плёсы Песчаного" 
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
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/62c131ad-efa2-4213-8279-420e77d68161.png" 
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
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/33d86649-c3b6-436d-a7f7-51a1badf5c86.png" 
                  alt="Logistic Force" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/7be0699e-2594-4797-b3eb-5c0effc8e02e.png" 
                  alt="Кинотеатр Шахтер" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/768fc7ab-c48e-4f51-865e-f6c96d83a2c7.jpg" 
                  alt="Рейд Паллада" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/3974b165-cb96-47ec-8490-e201644b3c89.jpg" 
                  alt="Пасифик Медиа" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center min-w-[200px] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/9ae22994-0c9c-4ee0-8797-bc2d147790b8.png" 
                  alt="Плёсы Песчаного" 
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