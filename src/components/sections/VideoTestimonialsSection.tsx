import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const videoTestimonials = [
  {
    id: 1,
    title: "Отзыв студента #1",
    videoId: "16538997_456247056",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456247056&hd=2",
    thumbnail: "https://cdn.poehali.dev/files/cace7603-42ad-44c9-a91f-60b96a8dc4bc.jpg",
    name: "Дмитрий Приезжих",
    description: "Впечатления от изучения нейросетей"
  },
  {
    id: 2,
    title: "Отзыв студента #2", 
    videoId: "16538997_456247049",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456247049&hd=2",
    thumbnail: "https://cdn.poehali.dev/files/f489f927-55e4-4aa7-a26f-46e9391871b3.jpg",
    name: "Студент курса",
    description: "Результаты применения полученных знаний"
  },
  {
    id: 3,
    title: "Отзыв студента #3",
    videoId: "16538997_456247048",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456247048&hd=2",
    thumbnail: "https://cdn.poehali.dev/files/8486b7d9-b796-4c8e-a496-aadd33b30c89.jpg",
    name: "Лидия Воскобой",
    description: "Как изменилась работа после курса"
  },
  {
    id: 4,
    title: "Отзыв студента #4",
    videoId: "16538997_456247055",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456247055&hd=2",
    thumbnail: "https://cdn.poehali.dev/files/2ed17afe-1e10-496a-9029-16e7eb50bfa2.jpg",
    name: "Анна Савкина",
    description: "Практическая ценность обучения"
  },
  {
    id: 5,
    title: "Отзыв студента #5",
    videoId: "16538997_456246770",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456246770&hd=2",
    thumbnail: "https://sun9-44.userapi.com/impg/c857616/v857616997/1d7b1a/MnBvCxDyEzF.jpg?size=320x240&quality=96&sign=d7f5g6h4c1e0d9f8g5h2i3j4k7l8m9n0&c_uniq_tag=456246770",
    name: "Студент курса", 
    description: "Впечатления от воркшопа"
  },
  {
    id: 6,
    title: "Отзыв студента #6",
    videoId: "16538997_456247054",
    embedUrl: "https://vk.com/video_ext.php?oid=16538997&id=456247054&hd=2",
    thumbnail: "https://sun9-44.userapi.com/impg/c857616/v857616997/1d7c2c/GhJkLmNoP8Q.jpg?size=320x240&quality=96&sign=e8g6h7i5d2f1e0g9h6i3j4k5l8m9n0o1&c_uniq_tag=456247054",
    name: "Ирина Нечет",
    description: "Рекомендации другим студентам"
  }
];

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
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
            className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group"
          >
            <CardContent className="p-0">
              <div className="relative aspect-video bg-slate-900 rounded-t-lg overflow-hidden">
                {playingVideo === video.id ? (
                  <iframe
                    src={video.embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoClick(video.id)}
                        className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110"
                      >
                        <Icon name="Play" className="text-cyan-400 fill-current" size={32} />
                      </button>
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                        <Icon name="Video" className="mr-1" size={12} />
                        VK
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        <Icon name="Video" className="inline mr-1" size={12} />
                        Видео
                      </div>
                    </div>
                  </>
                )}
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
                    <Icon name="Play" className="mr-2" size={16} />
                    <span className="text-sm">
                      {playingVideo === video.id ? 'Воспроизводится' : 'Смотреть отзыв'}
                    </span>
                  </div>
                  {playingVideo === video.id && (
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
          <Icon name="Video" className="text-cyan-400 mr-2" size={20} />
          <span className="text-white font-medium">Более 100 видео-отзывов от студентов</span>
        </div>
      </div>
    </section>
  );
}