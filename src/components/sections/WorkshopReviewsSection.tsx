import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const videos = [
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/5a3db8b4-f217-468b-ae28-6cf86f980b46.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/633e2724-e5f7-4b04-a6e7-e610776789cf.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/e7b36dd2-aa21-49f0-93d5-f9439ed028fc.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/bff51dba-bb26-451e-afd7-5579f791f173.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/ca6c57ce-60e8-40d8-92cb-c680ea1d9718.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/2a6a1d70-964c-4dc8-b85c-91196629a534.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/b4c4f54e-35fc-4c24-8a21-95247f547710.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/10cd830a-876a-497b-89f6-7ce15c62487b.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/141899e5-a7b5-4ee4-b856-b29b6181f7e5.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/803f1430-c25b-460a-8fbb-d9fe86ec6b83.mp4",
  "https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/722ec8fb-1070-4a8a-8f90-47fc601d8309.mp4",
];

export default function WorkshopReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = videos.length - visibleCount;

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / videos.length;
      scrollRef.current.scrollTo({ left: cardWidth * clamped, behavior: 'smooth' });
    }
  };

  const handlePlay = (index: number) => {
    if (playingIndex !== null && playingIndex !== index) {
      videoRefs.current[playingIndex]?.pause();
    }
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      video.play();
      setPlayingIndex(index);
    }
  };

  useEffect(() => {
    const handleEnded = () => setPlayingIndex(null);
    const refs = videoRefs.current;
    refs.forEach(v => v?.addEventListener('ended', handleEnded));
    return () => refs.forEach(v => v?.removeEventListener('ended', handleEnded));
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Отзывы на <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">воркшоп</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          А теперь представьте, что происходит с людьми за <span className="text-cyan-400 font-bold">3 месяца</span>...
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed -translate-x-1/2 sm:-translate-x-5"
        >
          <Icon name="ChevronLeft" size={22} />
        </button>

        <button
          onClick={() => scrollToIndex(currentIndex + 1)}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed translate-x-1/2 sm:translate-x-5"
        >
          <Icon name="ChevronRight" size={22} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-hidden scroll-smooth px-1"
        >
          {videos.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
            >
              <div
                className="relative group rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 bg-slate-900 cursor-pointer aspect-[9/16]"
                onClick={() => handlePlay(index)}
              >
                <video
                  ref={el => { videoRefs.current[index] = el; }}
                  src={src}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                />
                {playingIndex !== index && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/90 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="text-gray-400 text-sm font-medium">
          {currentIndex + 1} / {videos.length}
        </span>
        <div className="flex gap-1.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-cyan-400 w-6'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}