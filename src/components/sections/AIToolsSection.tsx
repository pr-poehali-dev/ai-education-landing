import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const aiTools = {
  text: {
    title: "Текстовые нейросети",
    icon: "MessageSquare",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    items: ["GPT", "Gemini", "Claude", "xAI: Grok", "Qwen"]
  },
  image: {
    title: "Фото нейросети",
    icon: "Image",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    items: ["Nano Banana Pro", "Seedream", "Midjourney", "Stable Diffusion", "Flux 2 Pro"]
  },
  video: {
    title: "Видео нейросети",
    icon: "Video",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    items: ["Kling Ai", "Veo 3", "Mini max", "RunWayML", "Seedance", "Sora 2", "WAN", "PixVerse"]
  },
  services: {
    title: "Полезные сервисы",
    icon: "Zap",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    items: ["multi-chat", "freepik", "perplexity", "Gamma", "Suno", "notebooklm", "HeyGen", "Manus", "Поехали"]
  }
};

export default function AIToolsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [animatedItems, setAnimatedItems] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const intervals: {[key: string]: NodeJS.Timeout} = {};
    
    Object.keys(aiTools).forEach(category => {
      intervals[category] = setInterval(() => {
        setAnimatedItems(prev => ({
          ...prev,
          [category]: (prev[category] || 0) + 1
        }));
      }, 2000 + Math.random() * 1000); // Случайная задержка для каждой категории
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const getStats = (category: string) => {
    const tools = aiTools[category as keyof typeof aiTools];
    return {
      count: tools.items.length,
      category: tools.title
    };
  };

  return (
    <section id="ai-tools" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Какие <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">нейронки и сервисы</span> вы изучите
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
          Полный арсенал современных ИИ-инструментов для работы с текстом, изображениями и видео
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
        {Object.entries(aiTools).map(([key, category]) => {
          const stats = getStats(key);
          const isHovered = hoveredCard === key;
          
          return (
            <Card
              key={key}
              className={`group relative overflow-hidden transition-all duration-500 cursor-pointer
                ${category.bgColor} ${category.borderColor} border-2
                ${isHovered ? 'scale-[1.02] shadow-2xl' : 'hover:scale-[1.01]'}
                bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm`}
              onMouseEnter={() => setHoveredCard(key)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Анимированный фон */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} p-2 sm:p-3 lg:p-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={category.icon as any} size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                        {category.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {stats.count} инструментов
                      </div>
                    </div>
                  </div>
                  
                  {/* Анимированный счетчик */}
                  <div className="text-right flex-shrink-0">
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent whitespace-nowrap`}>
                      {animatedItems[key] || 0}+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">обновлений</div>
                  </div>
                </div>

                {/* Список инструментов */}
                <div className="space-y-2 sm:space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all duration-300 group/item
                        ${isHovered ? 'bg-slate-700/30' : 'bg-slate-800/30'}
                        hover:bg-slate-600/40 hover:translate-x-1`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300`} />
                      <span className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors duration-200 font-medium">
                        {item}
                      </span>
                      {/* Популярные инструменты с бейджиками */}
                      {["Claude", "Kling Ai", "Seedance", "Veo 3", "Nano Banana Pro", "Seedream", "Поехали", "multi-chat", "freepik", "perplexity"].includes(item) && (
                        <span className="ml-auto text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 text-cyan-400 rounded-full whitespace-nowrap font-bold">
                          ТОП
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Прогресс-бар */}
                <div className="mt-4 sm:mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Изучено инструментов</span>
                    <span className="text-sm text-gray-400">
                      {Math.min((animatedItems[key] || 0), stats.count)}/{stats.count}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${Math.min(((animatedItems[key] || 0) / stats.count) * 100, 100)}%` 
                      }}
                    />
                  </div>
                </div>
              </CardContent>

              {/* Декоративные элементы */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Нижний блок с обновлениями */}
      <Card className="bg-gradient-to-r from-slate-800/50 to-slate-900/80 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Icon name="RefreshCw" size={20} className="sm:w-6 sm:h-6 text-cyan-400 animate-spin" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Постоянные обновления</h3>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            База постоянно обновляется и вы получите самые актуальные инструменты на момент обучения.
          </p>
          
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">25+</div>
              <div className="text-xs sm:text-sm text-gray-400">Инструментов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">4</div>
              <div className="text-xs sm:text-sm text-gray-400">Категории</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-xs sm:text-sm text-gray-400">Обновления</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Доступ</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}