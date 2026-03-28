import React, { useState, useRef, useEffect } from 'react';
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

const aiCapabilities = [
  {
    title: "Перестань сливать бюджет на рекламу",
    description: "ИИ привлечёт клиентов органически — без вложений и платных кампаний",
    icon: "Target"
  },
  {
    title: "Делай видео и фото без камеры, студии и фотографа",
    description: "Генерируй качественный контент с помощью ИИ — быстро, дёшево и профессионально",
    icon: "Camera"
  },
  {
    title: "Твой ИИ-ассистент продаёт 24/7 — даже когда ты спишь",
    description: "Настрой автоматическую воронку продаж и получай заявки без участия",
    icon: "Bot"
  },
  {
    title: "Забудь о ручном ведении клиентов — ИИ сделает всё сам",
    description: "Автоматизируй CRM, аналитику и работу с базой без лишних усилий",
    icon: "Database"
  },
  {
    title: "Найди нужного человека за 1 час, а не за 2 недели",
    description: "ИИ отберёт кандидатов, проведёт первичный отбор и сэкономит твоё время",
    icon: "Users"
  },
  {
    title: "Профессиональный дизайн без дизайнера и без бюджета",
    description: "Сайты, логотипы, презентации — создавай сам с помощью ИИ за минуты",
    icon: "Palette"
  }
];

const studentCases = [
  {
    name: "Анна Михайлова",
    role: "SMM-специалист",
    before: "Создание 1 поста = 4 часа",
    after: "Создание 1 поста = 15 минут",
    result: "Производительность × 16",
    description: "Создала систему генерации постов с помощью ИИ",
    period: "2 месяца"
  },
  {
    name: "Дмитрий Козлов",
    role: "Предприниматель",
    before: "Доход 150,000 ₽/мес",
    after: "Доход 450,000 ₽/мес",
    result: "Прибыль × 3",
    description: "Внедрил ИИ-помощников для обработки заявок и консультаций",
    period: "3 месяца"
  },
  {
    name: "Елена Соколова",
    role: "Контент-мейкер",
    before: "Аудитория 3,500 подписчиков",
    after: "Аудитория 31,000 подписчиков",
    result: "Рост аудитории × 9",
    description: "Запустила контент-стратегию на базе ИИ-генерации идей и аналитики трендов",
    period: "4 месяца"
  },
  {
    name: "Марина Волкова",
    role: "Дизайнер",
    before: "3 макета в неделю",
    after: "15 макетов в неделю",
    result: "Скорость работы × 5",
    description: "Освоила генерацию дизайн-концептов и логотипов через нейросети",
    period: "2 месяца"
  },
  {
    name: "Игорь Петренко",
    role: "Видеомейкер",
    before: "1 ролик = 2 дня работы",
    after: "1 ролик = 3 часа",
    result: "Производительность × 5",
    description: "Начал создавать рекламные видео с ИИ-генерацией сцен и озвучкой",
    period: "3 месяца"
  },
  {
    name: "Ольга Краснова",
    role: "Маркетолог",
    before: "Стоимость заявки 820 ₽",
    after: "Стоимость заявки 190 ₽",
    result: "Снижение CPL в 4 раза",
    description: "Настроила ИИ-анализ ЦА и автоматическую генерацию рекламных текстов",
    period: "2 месяца"
  },
  {
    name: "Артём Савченко",
    role: "Предприниматель",
    before: "5 сотрудников на поддержке",
    after: "1 сотрудник + ИИ-бот",
    result: "Экономия 280,000 ₽/мес",
    description: "Создал ИИ-консультанта, который закрывает 80% обращений клиентов",
    period: "3 месяца"
  },
  {
    name: "Наталья Ким",
    role: "Блогер",
    before: "2 Reels в неделю",
    after: "12 Reels в неделю",
    result: "Контент × 6",
    description: "Автоматизировала создание сценариев и монтаж с помощью ИИ-инструментов",
    period: "2 месяца"
  },
  {
    name: "Виктор Лебедев",
    role: "Предприниматель",
    before: "Запуск продукта = 3 месяца",
    after: "Запуск продукта = 2 недели",
    result: "Скорость запуска × 6",
    description: "Сделал сайт, воронку и рекламу для нового направления за 2 недели с ИИ",
    period: "1 месяц"
  },
  {
    name: "Кристина Жукова",
    role: "SMM-специалист",
    before: "Доход 45,000 ₽/мес",
    after: "Доход 120,000 ₽/мес",
    result: "Доход × 2.7",
    description: "Взяла 4 новых клиента благодаря скорости работы с ИИ — стала успевать больше",
    period: "4 месяца"
  }
];

function StudentCasesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = studentCases.length - cardsPerView;

  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, maxIndex));
    setCurrentIndex(next);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 60) goTo(currentIndex + 1);
    if (touchEnd - touchStart > 60) goTo(currentIndex - 1);
  };

  const gradients = [
    { card: 'from-purple-500/20 to-pink-600/20', border: 'border-purple-500/50', icon: 'from-purple-500 to-pink-600', glow: 'shadow-purple-500/50' },
    { card: 'from-orange-500/20 to-red-600/20', border: 'border-orange-500/50', icon: 'from-orange-500 to-red-600', glow: 'shadow-orange-500/50' },
    { card: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/50', icon: 'from-green-500 to-emerald-600', glow: 'shadow-green-500/50' },
    { card: 'from-cyan-500/20 to-blue-600/20', border: 'border-cyan-500/50', icon: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/50' },
    { card: 'from-pink-500/20 to-rose-600/20', border: 'border-pink-500/50', icon: 'from-pink-500 to-rose-600', glow: 'shadow-pink-500/50' },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Результаты <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">наших студентов</span>
        </h3>
        <p className="text-gray-400 text-sm">
          {currentIndex + 1}–{Math.min(currentIndex + cardsPerView, studentCases.length)} из {studentCases.length}
        </p>
      </div>

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
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {studentCases.map((studentCase, index) => {
              const colors = gradients[index % gradients.length];
              return (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="relative group h-full">
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.card} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <Card className={`relative h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-2 ${colors.border} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="text-center mb-6">
                          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${colors.icon} rounded-2xl flex items-center justify-center shadow-lg ${colors.glow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <Icon name="TrendingUp" className="text-white group-hover:scale-125 transition-all duration-500" size={32} />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1">{studentCase.name}</h4>
                          <p className="text-sm font-medium text-cyan-400">{studentCase.role}</p>
                        </div>

                        <div className="space-y-3 mb-5 flex-grow">
                          <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 group-hover:border-slate-500 transition-colors duration-300 min-h-[80px] flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                                <Icon name="X" className="text-red-400" size={16} />
                              </div>
                              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Было:</p>
                            </div>
                            <p className="text-sm text-white font-medium pl-10">{studentCase.before}</p>
                          </div>

                          <div className="flex justify-center">
                            <div className={`w-10 h-10 bg-gradient-to-r ${colors.icon} rounded-full flex items-center justify-center animate-bounce shadow-lg ${colors.glow}`}>
                              <Icon name="ArrowDown" className="text-white" size={20} />
                            </div>
                          </div>

                          <div className={`bg-gradient-to-r ${colors.card} rounded-xl p-4 border-2 ${colors.border} transition-all duration-300 min-h-[80px] flex flex-col justify-center`}>
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-8 h-8 bg-gradient-to-r ${colors.icon} rounded-lg flex items-center justify-center shadow-md`}>
                                <Icon name="Check" className="text-white" size={16} />
                              </div>
                              <p className="text-xs text-white font-semibold uppercase tracking-wide">Стало:</p>
                            </div>
                            <p className="text-sm text-white font-bold pl-10">{studentCase.after}</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-4 border-2 border-green-500/50 mb-4 transition-all duration-300">
                          <div className="flex items-center justify-center gap-2">
                            <Icon name="Zap" className="text-green-400 animate-pulse" size={24} />
                            <p className="text-xl font-bold text-green-400">{studentCase.result}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mt-auto">
                          <div className="flex items-start gap-2 min-h-[60px]">
                            <Icon name="CheckCircle" className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                            <p className="text-xs text-gray-300 leading-relaxed">{studentCase.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" className="text-cyan-400" size={16} />
                            <p className="text-xs text-cyan-400 font-medium">{studentCase.period}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {studentCases.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index >= currentIndex && index < currentIndex + cardsPerView
                ? 'bg-cyan-400 scale-125'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProfessionsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">6 профессий</span>, за которые платят в 2026 году
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Рынок ИИ-специалистов растёт на 40% в год. Войди в него сейчас — пока конкуренция ещё низкая
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
        {professions.map((profession, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-cyan-500/20">
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
        ))}
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Что сможешь делать с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ИИ</span>
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                    <Icon name={capability.icon} className="text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                    <p className="text-sm text-gray-400">{capability.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <StudentCasesCarousel />
    </section>
  );
}