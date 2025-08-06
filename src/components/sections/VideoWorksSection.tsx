import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const videoWorks = [
  {
    id: "cf6d03ce4297ed70bba73a0011c3ef4d",
    token: "HpIFoHeiJvJe7BaZ982A2Q"
  },
  {
    id: "2c2bfd77a6c9d06d8bbd1cf4f195f987", 
    token: "ISM6E6f59Ld93C1EsGc3ZA"
  },
  {
    id: "76d44642d8ebf4e04cfcc823561b4fe0",
    token: "EXbH9gcyuUWWNEL7bG9tsQ"
  },
  {
    id: "c28f62565a685bedbf3c59b0ca0988aa",
    token: "_Om2OA0ClfGkXo3vtWszEw"
  },
  {
    id: "417c896fe252645ada1a0d0c0913de0f",
    token: "9NX18BRUmMJe1h7ixXWFlg"
  },
  {
    id: "642a76b67d22165ef1ff3fb92c2874de",
    token: "yAeWEnRj48YR9oZl-Wlu8A"
  },
  {
    id: "b7e70f3ae0a76e8fa7475f8c15ad4f10",
    token: "zZ7EJmXSG8HbDCkt_lx6qQ"
  },
  {
    id: "00d0503d6d3f7277537394f78e414777",
    token: "2yaAjRCW83NhYJCsZw_h5w"
  },
  {
    id: "a5a522cc0f55776171747779b05950ef",
    token: "Cak8wdT2tvNBirARgj0D7A"
  },
  {
    id: "a5eff53782d5fc215a0733a2b07d5e84",
    token: "MD64lBIE04q5tl8ipxiBjg"
  }
];

export default function VideoWorksSection() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videosPerSlide = 4;
  
  const totalSlides = Math.ceil(videoWorks.length / videosPerSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const getCurrentVideos = () => {
    const start = currentSlide * videosPerSlide;
    return videoWorks.slice(start, start + videosPerSlide);
  };

  const getEmbedUrl = (videoId: string, token: string) => {
    return `https://rutube.ru/play/embed/${videoId}/?p=${token}`;
  };

  return (
    <section id="video-works" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Примеры <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">видео работ</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Посмотрите реальные примеры работ, созданных с помощью ИИ нашими студентами
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Главное видео */}
        <div className="order-2 lg:order-1">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src={getEmbedUrl(videoWorks[selectedVideo].id, videoWorks[selectedVideo].token)}
                  className="w-full h-full"
                  allowFullScreen
                  title={`Видео ${selectedVideo + 1}`}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Карусель видео */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center justify-center mb-6">
            <div className="flex gap-2">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
              >
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline" 
                size="sm"
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
              >
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {getCurrentVideos().map((video, index) => {
              const globalIndex = currentSlide * videosPerSlide + index;
              const isActive = globalIndex === selectedVideo;
              
              return (
                <Card 
                  key={video.id}
                  className={`cursor-pointer transition-all duration-300 aspect-video ${
                    isActive 
                      ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20' 
                      : 'hover:ring-1 hover:ring-slate-600'
                  }`}
                  onClick={() => setSelectedVideo(globalIndex)}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative aspect-video w-full h-full rounded-lg overflow-hidden bg-slate-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon 
                          name="Play" 
                          size={32} 
                          className={`${isActive ? 'text-cyan-400' : 'text-gray-400'} hover:text-cyan-300 transition-colors`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Индикаторы слайдов */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}