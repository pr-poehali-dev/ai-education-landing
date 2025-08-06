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
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoWorks.length);
  };
  
  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoWorks.length) % videoWorks.length);
  };

  const getEmbedUrl = (videoId: string, token: string) => {
    return `https://rutube.ru/play/embed/${videoId}/?p=${token}`;
  };

  const getThumbnailUrl = (videoId: string) => {
    return `https://pic.rutube.ru/video/${videoId.substring(0, 2)}/${videoId}/original.jpg`;
  };

  const getThumbnailUrlFallback = (videoId: string) => {
    return `https://pic.rutube.ru/video/${videoId}/original.jpg`;
  };

  return (
    <section id="video-works" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Примеры <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">видео работ</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Посмотрите реальные примеры работ, созданных с помощью ИИ нашими студентами
        </p>
      </div>

      {/* Основное видео с навигацией */}
      <div className="relative max-w-4xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video">
              <iframe
                src={getEmbedUrl(videoWorks[currentVideo].id, videoWorks[currentVideo].token)}
                className="w-full h-full"
                allowFullScreen
                title={`Видео ${currentVideo + 1}`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Стрелки навигации */}
        <Button
          onClick={prevVideo}
          variant="outline"
          size="lg"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
        
        <Button
          onClick={nextVideo}
          variant="outline"
          size="lg"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800/90 hover:border-cyan-400 backdrop-blur-sm shadow-lg z-10"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>

        {/* Счетчик видео */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 z-10">
          <div className="text-white text-sm font-medium">
            {currentVideo + 1} / {videoWorks.length}
          </div>
        </div>
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-8">
        {videoWorks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideo 
                ? 'bg-cyan-400 w-8' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}