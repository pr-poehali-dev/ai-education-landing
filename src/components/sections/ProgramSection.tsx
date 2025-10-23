import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface ProgramSectionProps {
  scrollToForm: () => void;
}

export default function ProgramSection({ scrollToForm }: ProgramSectionProps) {
  return (
    <section id="program" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Программа <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">курса</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Структурированное обучение от основ до продвинутых техник работы с ИИ
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="part1" className="bg-slate-800/50 border-slate-700 rounded-lg px-4 sm:px-6">
            <AccordionTrigger className="text-white hover:text-cyan-400">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">1</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">ИИ в контент-маркетинге и первый заработок</h3>
                  <p className="text-gray-400 text-sm">Основы работы с нейросетями и первые результаты</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 space-y-2 pb-4">
              <ul className="space-y-2">
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Возможности нейросетей</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Принципы работы нейросетей</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Типы нейросетей</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Как работать с ChatGPT и практика</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание клона</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Распаковка экспертности и продукта - открытый урок</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Первичная упаковка блога и быстрый старт</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Нейросети в творчестве (музыка, видео, фотосессии)</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Заработок на нейросетях</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="part2" className="bg-slate-800/50 border-slate-700 rounded-lg px-4 sm:px-6">
            <AccordionTrigger className="text-white hover:text-cyan-400">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">2</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Автоматизация создания нейросотрудников и промптовое мышление</h3>
                  <p className="text-gray-400 text-sm">Продвинутые техники работы с ИИ</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 space-y-2 pb-4">
              <ul className="space-y-2">
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Что нейросети умеют и какие задачи решают</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Как закрывать 90% задач с помощью ChatGPT</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Нейросети в бизнесе</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Основы промптового мышления</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Разбор работы GPTs на примере реального процесса</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Бонусные уроки от партнеров по чат-ботам: Salebot</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="part3" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
            <AccordionTrigger className="text-white hover:text-cyan-400">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">3</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Системное продвижение в соцсетях с помощью ИИ</h3>
                  <p className="text-gray-400 text-sm">Привлечение подписчиков и клиентов</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 space-y-2 pb-4">
              <ul className="space-y-2">
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Что такое ИИ контент-маркетинг</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Распаковка и позиционирование</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Распаковка продукта и аудитории</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Исследование целевой аудитории</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Конкурентная разведка</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание карты смыслов и контентной матрицы</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Упаковка профиля</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание сайта</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание лид-магнитов и трипваеров</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Виды воронок продаж, которые сейчас работают</li>
                <li className="flex items-start"><Icon name="Play" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание и запуск воронки продаж и ее автоматизация</li>
              </ul>
              <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                <h4 className="text-cyan-400 font-bold mb-2">Бонусы:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Gift" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание сайтов</li>
                  <li className="flex items-start"><Icon name="Gift" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание презентаций</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="skills" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
            <AccordionTrigger className="text-white hover:text-cyan-400">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 flex items-center justify-center text-white font-bold mr-4">✓</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Что ты научишься делать на курсе?</h3>
                  <p className="text-gray-400 text-sm">Полный список навыков и компетенций</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 space-y-6 pb-4">
              <div>
                <h4 className="text-cyan-400 font-bold mb-3">КОНТЕНТ: Текст, Аудио и Видео</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Написание сценариев и постов за 1 минуту</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Профессиональное редактирование текста</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание контент-планов и рубрик для соцсетей</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание, чистка и редактирование аудио</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Профессиональная озвучка видео</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Написание песен</li>
                </ul>
              </div>

              <div>
                <h4 className="text-cyan-400 font-bold mb-3">Исследования</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Анализ рынка и ЦА</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Управляемая система потока трафика</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Прогнозируемые продажи</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Анализ сайтов, PDF, книг и презентаций</li>
                </ul>
              </div>

              <div>
                <h4 className="text-cyan-400 font-bold mb-3">Визуал</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание персонализированных аватаров и клонов</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Генерация уникальных изображений</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Дизайн продающих карточек товара</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание видео для клипов, презентаций и рекламных роликов</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание дизайна сайта</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Организация виртуальных фотосессий</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Оформление блогов (аватарки, обложки, посты)</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Креативы для рекламных кампаний</li>
                </ul>
              </div>

              <div>
                <h4 className="text-cyan-400 font-bold mb-3">Маркетинг</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Написание продающих заголовков</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Разработка рекламных объявлений</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание воронки продаж и прогревов</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Генерация стратегий для увеличения прибыли</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Создание продуктовых линеек (лид-магниты, трипваеры, флагманы)</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Наполнение сайтов и написание статей</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Написание скриптов продаж</li>
                  <li className="flex items-start"><Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Написание технических заданий для блогеров</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-lg">
                <p className="text-yellow-400 font-medium">
                  База уроков постоянно обновляется и дополняется, обеспечивая актуальность в режиме реального времени. 
                  Школа оффлайн - поэтому вы получаете самую актуальную информацию в моменте.
                </p>
              </div>

              <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <h4 className="text-cyan-400 font-bold mb-2">Формат обучения:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start"><Icon name="Clock" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Курс проходит в живом классе</li>
                  <li className="flex items-start"><Icon name="Calendar" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Уроки 2 раза в неделю по 3 часа</li>
                  <li className="flex items-start"><Icon name="Timer" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Продолжительность: 3 месяца</li>
                  <li className="flex items-start"><Icon name="Video" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />Записи доступны при пропуске урока</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}