import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface DirectionsSectionProps {
  scrollToForm: () => void;
}

const directions = [
  {
    title: "Блогер",
    icon: "PenTool",
    items: ["Обзор кейсов применения ИИ в блогинге и продвижения аккаунтов в соцсетях", "Инструменты и методы для производства контента с помощью ИИ", "Контент-планирование", "Тексты", "Изображения", "Музыкальное оформление", "Анализ аудитории и трендов", "Создание ИИ-клонов", "Углубленное изучение промптинга"]
  },
  {
    title: "Видео-монтажер",
    icon: "Video",
    items: ["Создание креативных видеороликов", "Создание видео-эффектов", "Повышение своего среднего чека", "Улучшение качества видео", "Раскрытие творческого потенциала"]
  },
  {
    title: "Дизайнер",
    icon: "Palette",
    items: ["Обзор кейсов применения ИИ в дизайне", "Инструменты для генерации изображений и фотографий", "Создание сайтов", "Инструменты для редактирования готовых изображений", "Углубленное изучение промптинга"]
  },
  {
    title: "Фрилансер",
    icon: "Briefcase",
    items: ["Создание нейросотрудника продавца-консультанта", "Технология построения воронок с помощью ИИ", "Автоворонки", "Персонализация предложений с помощью ИИ", "Анализ поведения клиентов и других данных", "Углубленное изучение промптинга", "Анализ звонков и общения с клиентами"]
  },
  {
    title: "SMM-специалист",
    icon: "Share2",
    items: ["Обзор кейсов применения ИИ селлерами", "Работа с карточками товаров с помощью ИИ", "Управление репутацией — обработка и персонализация ответов на отзывы", "Текстовое описание товаров", "ИИ-консультирование"]
  },
  {
    title: "Маркетолог",
    icon: "TrendingUp",
    items: ["Обзор кейсов применения ИИ в маркетинге", "SMM", "Проверка гипотез", "Исследования", "Работа с большими данными и поиск инсайтов"]
  },
  {
    title: "Предприниматель",
    icon: "Building",
    items: ["Обзор кейсов применения ИИ в корпоративном секторе", "Анализ документов", "Дообучение нейросети на своей базе данных", "Построение системы управления задачами и напоминаниями на базе ИИ"]
  }
];

export default function DirectionsSection({ scrollToForm }: DirectionsSectionProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Выбери свое <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">направление</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {directions.map((direction, index) => (
            <AccordionItem key={index} value={`direction-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                    <Icon name={direction.icon as any} className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{direction.title}</h3>
                    <p className="text-gray-400 text-sm">Специализированная программа обучения</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-4 pb-6">
                <ul className="space-y-2">
                  {direction.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://torguykriptoy.getcourse.ru/NeuroVL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mt-4 text-white font-medium rounded-md transition-colors"
                >
                  Оставить заявку
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}