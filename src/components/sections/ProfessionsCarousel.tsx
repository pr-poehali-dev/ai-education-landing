import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const professions = [
  {
    title: "СММ-специалист",
    description: "Создание контента и стратегии продвижения в соцсетях",
    skills: ["Сценарии для постов", "Контент-план и структура", "Стратегия продвижения", "Создание постов", "Переводы текстов", "Генерация контента"],
    details: ["Обзор кейсов применения ИИ селлерами", "Работа с карточками товаров", "Управление репутацией", "Текстовое описание товаров", "ИИ-консультирование"],
    icon: "Smartphone",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Видеомейкер", 
    description: "Профессиональное создание и монтаж видео с ИИ",
    skills: ["Создание видео-роликов", "Монтаж и обработка", "Музыкальные клипы", "Рекламные ролики", "Обработка видео", "Постпродакшн"],
    details: ["Создание креативных видеороликов", "Создание видео-эффектов", "Повышение среднего чека", "Улучшение качества видео", "Раскрытие творческого потенциала"],
    icon: "Video",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Маркетолог",
    description: "Анализ рынка и маркетинговые стратегии с ИИ", 
    skills: ["Анализ рынка и ЦА", "Подготовка опросников", "Маркетинговые стратегии", "Рекламные тексты", "Лид-магниты и трипваеры", "Анализ эффективности"],
    details: ["Обзор кейсов применения ИИ в маркетинге", "SMM-стратегии", "Проверка гипотез", "Исследования", "Работа с большими данными и поиск инсайтов"],
    icon: "TrendingUp",
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Дизайнер",
    description: "Создание визуального контента и брендинга с ИИ",
    skills: ["Генерация идей дизайна", "Концепции проектов", "Макеты и логотипы", "Обработка изображений", "Создание презентаций", "Фирменный стиль"],
    details: ["Обзор кейсов применения ИИ в дизайне", "Инструменты для генерации изображений", "Создание сайтов", "Редактирование готовых изображений", "Углубленное изучение промптинга"],
    icon: "Palette",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Блогер / Контент-мейкер",
    description: "Создание вирусного контента для соцсетей",
    skills: ["Создание нейро-аватара", "Сценарии для Reels", "Воронки через Reels", "Концепции и идеи", "Озвучка и обработка", "Анализ трендов"],
    details: ["Кейсы применения ИИ в блогинге", "Инструменты для производства контента", "Контент-планирование", "Музыкальное оформление", "Анализ аудитории", "Создание ИИ-клонов"],
    icon: "Play",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Предприниматель с ИИ",
    description: "Автоматизируй бизнес и масштабируй без найма",
    skills: ["Разработка эффективных запросов", "Оптимизация промтов", "База данных промтов", "Обучение сотрудников", "Анализ результатов ИИ", "Интеграция ИИ-инструментов"],
    details: ["Создание нейросотрудника-консультанта", "Построение воронок с ИИ", "Автоворонки", "Персонализация предложений", "Анализ поведения клиентов", "Анализ звонков и общения"],
    icon: "Briefcase",
    gradient: "from-cyan-500 to-blue-600"
  }
];

export default function ProfessionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = professions.length - cardsPerView;

  const goTo = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 60) goTo(currentIndex + 1);
    if (touchEnd - touchStart > 60) goTo(currentIndex - 1);
  };

  return (
    <div className="mb-20">
      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/90 shadow-lg"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>

        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex >= maxIndex}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/90 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800/90 shadow-lg"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        <div
          className="overflow-hidden"
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {professions.map((profession, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-cyan-500/20">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${profession.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon name={profession.icon} className="text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{profession.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{profession.description}</p>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="skills" className="border-none">
                        <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-sm py-2">
                          Что освоишь
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {profession.skills.map((skill, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-300">
                                <Icon name="Check" className="text-cyan-400 mr-2 mt-0.5 flex-shrink-0" size={14} />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-purple-400 hover:text-purple-300 text-sm py-2">
                          Программа обучения
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {profession.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-300">
                                <Icon name="ArrowRight" className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" size={14} />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {professions.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`relative h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
              index === currentIndex ? 'w-10 bg-slate-700' : index < currentIndex ? 'w-2.5 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
            }`}
          >
            {index === currentIndex && (
              <span
                key={`prof-progress-${currentIndex}`}
                className="absolute inset-0 bg-cyan-400 rounded-full"
                style={{
                  animation: isPaused ? 'none' : 'progressFill 5s linear forwards',
                }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes progressFill {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
