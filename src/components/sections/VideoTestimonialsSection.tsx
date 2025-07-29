import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const videoTestimonials = [
  {
    id: 1,
    title: "Отзыв студента #1",
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-1.jpg",
    videoUrl: "https://disk.yandex.ru/i/kPu4P0s53ySyMg",
    name: "Студент курса",
    description: "Впечатления от изучения нейросетей"
  },
  {
    id: 2,
    title: "Отзыв студента #2", 
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-2.jpg",
    videoUrl: "https://disk.yandex.ru/i/-lhnKARFJumnSQ",
    name: "Студент курса",
    description: "Результаты применения полученных знаний"
  },
  {
    id: 3,
    title: "Отзыв студента #3",
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-3.jpg", 
    videoUrl: "https://disk.yandex.ru/i/KqaGhcShrGHPJw",
    name: "Студент курса",
    description: "Как изменилась работа после курса"
  },
  {
    id: 4,
    title: "Отзыв студента #4",
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-4.jpg",
    videoUrl: "https://disk.yandex.ru/i/S2oBHhQj3WBY3A", 
    name: "Студент курса",
    description: "Практическая ценность обучения"
  },
  {
    id: 5,
    title: "Отзыв студента #5",
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-5.jpg",
    videoUrl: "https://disk.yandex.ru/i/HPa0Gy3jgdq2Ig",
    name: "Студент курса", 
    description: "Впечатления от воркшопа"
  },
  {
    id: 6,
    title: "Отзыв студента #6",
    thumbnail: "https://cdn.poehali.dev/files/video-thumb-6.jpg",
    videoUrl: "https://disk.yandex.ru/i/-aIaTMvPduvRCg",
    name: "Студент курса",
    description: "Рекомендации другим студентам"
  }
];

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (videoId: number, videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Видео-отзывы</span> студентов
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Настоящие истории успеха наших выпускников в видеоформате
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoTestimonials.map((video) => (
          <Card 
            key={video.id} 
            className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
            onClick={() => handleVideoClick(video.id, video.videoUrl)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-video bg-slate-900 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <Icon name="Play" className="text-cyan-400 fill-current" size={32} />
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    LIVE
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    <Icon name="Video" className="inline mr-1" size={12} />
                    Видео
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{video.name}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-cyan-400">
                    <Icon name="Eye" className="mr-2" size={16} />
                    <span className="text-sm">Смотреть отзыв</span>
                  </div>
                  <Icon name="ExternalLink" className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={16} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
          <Icon name="VideoIcon" className="text-cyan-400 mr-2" size={20} />
          <span className="text-white font-medium">Более 100 видео-отзывов от студентов</span>
        </div>
      </div>
    </section>
  );
}