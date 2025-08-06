import React, { useState, useEffect } from 'react';
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
  },
  {
    id: "6",
    url: "https://cdn.poehali.dev/files/1085e4f9-63cb-4212-a00d-06bf052c15a4.png",
    alt: "Grand Theft Auto стилизация"
  },
  {
    id: "7",
    url: "https://cdn.poehali.dev/files/7268cbf9-cd20-4504-8347-bed8ad80d381.png",
    alt: "Золотая статуя в джунглях"
  },
  {
    id: "8",
    url: "https://cdn.poehali.dev/files/55adf96d-6c1d-4388-8609-09947c2c03c1.jpg",
    alt: "Футуристический женский портрет"
  },
  {
    id: "9",
    url: "https://cdn.poehali.dev/files/a90a1d16-05d1-4cf2-b6a6-306c098b3cbe.jpg",
    alt: "Средневековая женщина-воин"
  },
  {
    id: "10",
    url: "https://cdn.poehali.dev/files/b585af70-3778-467f-a735-57f1eafd30bd.jpg",
    alt: "Сюрреалистичный портрет с рыбой"
  }
];

export default function PhotoWorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const photosToShow = 3; // На десктопе показываем 3 фото
  const photosToShowMobile = 1; // На мобильных показываем 1 фото

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const totalPhotos = photoWorks.length;
        return (prev + 1) % totalPhotos;
      });
    }, 3000); // Каждые 3 секунды

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % photoWorks.length);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Возобновляем через 5 сек
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + photoWorks.length) % photoWorks.length);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Возобновляем через 5 сек
  };

  const getVisiblePhotos = () => {
    const photos = [];
    for (let i = 0; i < photosToShow; i++) {
      const index = (currentIndex + i) % photoWorks.length;
      photos.push({ ...photoWorks[index], displayIndex: i });
    }
    return photos;
  };

  return (
    <section id="photo-works" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Примеры <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">фото работ</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Удивительные изображения, созданные с помощью ИИ нашими студентами
        </p>
      </div>

      {/* Слайдер */}
      <div className="relative max-w-6xl mx-auto">
        {/* Мобильная версия - одно фото */}
        <div className="block lg:hidden">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden mx-auto max-w-sm">
            <CardContent className="p-0">
              <div className="aspect-[9/16]">
                <img
                  src={photoWorks[currentIndex].url}
                  alt={photoWorks[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Десктопная версия - три фото */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {getVisiblePhotos().map((photo, index) => (
              <Card 
                key={`${photo.id}-${currentIndex}`}
                className={`bg-slate-800/50 border-slate-700 overflow-hidden transition-all duration-700 ${
                  index === 1 ? 'scale-105 shadow-2xl shadow-cyan-500/20' : 'scale-95 opacity-75'
                }`}
              >
                <CardContent className="p-0">
                  <div className="aspect-[9/16]">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Стрелки навигации */}
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
        
        <Button
          onClick={nextSlide}
          variant="outline"
          size="lg"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>

        {/* Индикатор автопрокрутки */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-2 z-10 text-white hover:bg-slate-800/90 transition-colors"
        >
          <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
        </button>

        {/* Счетчик */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 z-10">
          <div className="text-white text-sm font-medium">
            {currentIndex + 1} / {photoWorks.length}
          </div>
        </div>
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-8">
        {photoWorks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-cyan-400 w-8' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Превьюшки */}
      <div className="flex justify-center gap-4 mt-6 overflow-x-auto pb-2">
        {photoWorks.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className={`flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
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
    </section>
  );
}