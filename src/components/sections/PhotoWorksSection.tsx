import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const photoWorks = [
  {
    id: "1",
    url: "https://cdn.poehali.dev/files/0c0b28bb-5f13-4bef-b59c-9ec328d7d01b.png",
    alt: "Профессиональный портрет бизнесмена"
  },
  {
    id: "2", 
    url: "https://cdn.poehali.dev/files/d4240305-ac5c-46e9-af57-cdbbe002167b.png",
    alt: "Художественный портрет в стиле киберпанк"
  },
  {
    id: "3",
    url: "https://cdn.poehali.dev/files/cb57b544-24d0-4a0d-8ec2-bd2ce6335731.jpg",
    alt: "Креативный сюрреалистичный портрет"
  },
  {
    id: "4",
    url: "https://cdn.poehali.dev/files/4a44ea76-6e9c-46b3-b558-95103f5f428e.png",
    alt: "Стильный женский портрет в ретро стиле"
  },
  {
    id: "5",
    url: "https://cdn.poehali.dev/files/f7b611e4-7ead-4a4b-890b-bf73aea4a93c.png",
    alt: "Мужской портрет в уличном стиле"
  }
];

export default function PhotoWorksSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photoWorks.length);
  };
  
  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photoWorks.length) % photoWorks.length);
  };

  return (
    <section id="photo-works" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Примеры <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">фото работ</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Удивительные изображения, созданные с помощью ИИ нашими студентами
        </p>
      </div>

      {/* Основное изображение с навигацией */}
      <div className="relative max-w-3xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square md:aspect-[4/3]">
              <img
                src={photoWorks[currentPhoto].url}
                alt={photoWorks[currentPhoto].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Стрелки навигации */}
        <Button
          onClick={prevPhoto}
          variant="outline"
          size="lg"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
        
        <Button
          onClick={nextPhoto}
          variant="outline"
          size="lg"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>

        {/* Счетчик фото */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 z-10">
          <div className="text-white text-sm font-medium">
            {currentPhoto + 1} / {photoWorks.length}
          </div>
        </div>
      </div>

      {/* Превьюшки фотографий */}
      <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-2">
        {photoWorks.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setCurrentPhoto(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentPhoto
                ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20 scale-110'
                : 'ring-1 ring-slate-600 hover:ring-slate-500 hover:scale-105'
            }`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-6">
        {photoWorks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentPhoto 
                ? 'bg-cyan-400 w-8' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}