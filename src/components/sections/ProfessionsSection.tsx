import React from 'react';
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
    title: "Фрилансер / Предприниматель",
    description: "Автоматизация бизнеса и масштабирование с ИИ",
    skills: ["Разработка эффективных запросов", "Оптимизация промтов", "База данных промтов", "Обучение сотрудников", "Анализ результатов ИИ", "Интеграция ИИ-инструментов"],
    details: ["Создание нейросотрудника-консультанта", "Построение воронок с ИИ", "Автоворонки", "Персонализация предложений", "Анализ поведения клиентов", "Анализ звонков и общения"],
    icon: "Briefcase",
    gradient: "from-cyan-500 to-blue-600"
  }
];

const aiCapabilities = [
  {
    title: "Привлечение ЦА без вложений",
    description: "Создавай контент, который привлекает целевую аудиторию органически, без затрат на рекламу",
    icon: "Target"
  },
  {
    title: "Создание контента без съемок",
    description: "Генерируй качественный видео и фото контент с помощью ИИ, экономя время и ресурсы",
    icon: "Camera"
  },
  {
    title: "Автоматизация продаж",
    description: "Настрой ИИ-ассистентов для автоматического ведения клиентов через воронку продаж",
    icon: "Bot"
  },
  {
    title: "Управление СРМ-системами",
    description: "Автоматизируй работу с клиентской базой и аналитикой с помощью интеграций с ИИ",
    icon: "Database"
  },
  {
    title: "Поиск и найм сотрудников",
    description: "Используй ИИ для автоматизации процесса подбора кандидатов и проведения собеседований",
    icon: "Users"
  },
  {
    title: "Дизайн сайтов, логотипов и презентаций",
    description: "Создавай профессиональный дизайн для любых целей без навыков графического дизайна",
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
  }
];

export default function ProfessionsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">6 профессий</span> с ИИ
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Освой востребованные направления и начни зарабатывать с нейросетями уже через 3 месяца
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
        {professions.map((profession, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-cyan-500/20">
            <CardContent className="p-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${profession.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <Icon name={profession.icon as any} className="text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={32} />
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon name={capability.icon as any} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
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

      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Результаты <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">наших студентов</span>
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {studentCases.map((studentCase, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-white">{studentCase.name}</h4>
                  <p className="text-sm text-cyan-400">{studentCase.role}</p>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Было:</p>
                    <p className="text-sm text-white font-medium">{studentCase.before}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Icon name="ArrowDown" className="text-cyan-400" size={24} />
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-3 border border-cyan-500/30">
                    <p className="text-xs text-gray-400 mb-1">Стало:</p>
                    <p className="text-sm text-white font-medium">{studentCase.after}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-lg p-3 border-l-4 border-green-500 mb-3">
                  <p className="text-lg font-bold text-green-400">{studentCase.result}</p>
                </div>
                
                <p className="text-xs text-gray-400 mb-2">{studentCase.description}</p>
                <p className="text-xs text-cyan-400">Период: {studentCase.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}