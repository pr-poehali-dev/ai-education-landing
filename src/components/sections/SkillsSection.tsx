import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const skills = [
  {
    title: "СММ-специалист",
    description: "Создание контента и стратегии продвижения",
    items: ["Сценарии для постов", "Контент-план и структура", "Стратегия продвижения", "Создание постов", "Переводы текстов", "Генерация контента"],
    icon: "Smartphone",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Видеомейкер", 
    description: "Профессиональное создание видео с ИИ",
    items: ["Создание видео-роликов", "Монтаж и обработка", "Музыкальные клипы", "Рекламные ролики", "Обработка видео", "Постпродакшн"],
    icon: "Video",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Маркетолог",
    description: "Анализ рынка и маркетинговые стратегии", 
    items: ["Анализ рынка и ЦА", "Подготовка опросников", "Маркетинговые стратегии", "Рекламные тексты", "Лид-магниты и трипваеры", "Анализ эффективности"],
    icon: "TrendingUp",
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Reels-мейкер",
    description: "Создание вирусного контента для соцсетей",
    items: ["Создание нейро-аватара", "Сценарии для Reels", "Воронки через Reels", "Концепции и идеи", "Озвучка и обработка", "Анализ трендов"],
    icon: "Play",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Дизайнер",
    description: "Создание визуального контента с ИИ",
    items: ["Генерация идей дизайна", "Концепции проектов", "Макеты и логотипы", "Обработка изображений", "Создание презентаций", "Фирменный стиль"],
    icon: "Palette",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Промпт-инженер",
    description: "Эффективная работа с нейросетями",
    items: ["Разработка эффективных запросов", "Оптимизация промтов", "База данных промтов", "Обучение сотрудников", "Анализ результатов ИИ", "Интеграция ИИ-инструментов"],
    icon: "Code",
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
    result: "Автоматизация контента",
    description: "Создала систему генерации постов с помощью ИИ, увеличила производительность в 16 раз",
    period: "2 месяца"
  },
  {
    name: "Дмитрий Козлов",
    role: "Предприниматель",
    before: "Доход 150,000 ₽/мес",
    after: "Доход 450,000 ₽/мес",
    result: "Масштабирование бизнеса",
    description: "Внедрил ИИ-помощников для обработки заявок и консультаций, увеличил прибыль в 3 раза",
    period: "4 месяца"
  },
  {
    name: "Елена Васильева",
    role: "Контент-менеджер",
    before: "5,000 подписок",
    after: "45,000 подписок",
    result: "Рост аудитории",
    description: "Создала вирусный контент с помощью нейросетей, увеличила охват и вовлечённость в 9 раз",
    period: "6 месяцев"
  },
  {
    name: "Михаил Петров",
    role: "Маркетолог",
    before: "Конверсия 2%",
    after: "Конверсия 12%",
    result: "Оптимизация воронок",
    description: "Создал персонализированные воронки продаж с ИИ, увеличил конверсию в 6 раз",
    period: "3 месяца"
  },
  {
    name: "Ольга Смирнова",
    role: "Дизайнер",
    before: "Проект за 2 недели",
    after: "Проект за 2 дня",
    result: "Ускорение дизайна",
    description: "Освоила создание концептов и прототипов с ИИ, ускорила процесс дизайна в 7 раз",
    period: "1 месяц"
  },
  {
    name: "Артём Новиков",
    role: "Блогер",
    before: "Доходы 15,000 ₽/мес",
    after: "Доходы 85,000 ₽/мес",
    result: "Монетизация контента",
    description: "Создал образовательные курсы и продукты с помощью ИИ, увеличил доходы в 5.7 раз",
    period: "5 месяцев"
  }
];

export default function SkillsSection() {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Какие <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">навыки</span> ты освоишь
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Получи востребованные навыки в 6 различных сферах применения ИИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.gradient} group-hover:from-cyan-400 group-hover:to-purple-600 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30`}>
                  <Icon name={skill.icon as any} className="text-white group-hover:animate-pulse" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <Icon name="Check" className="text-cyan-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Твои <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ИИ возможности</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Открой для себя безграничные возможности интеллекта ИИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:from-purple-500 group-hover:to-pink-600 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                  <Icon name={capability.icon as any} className="text-white group-hover:animate-bounce" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Cases Section */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Кейсы <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">студентов</span>
          </h2>
          <p className="text-xl text-gray-300">
            Реальные результаты моих учеников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentCases.map((student, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white">{student.name}</h3>
                  <p className="text-cyan-400">{student.role}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                      <div className="text-xs text-red-400 mb-1">До</div>
                      <div className="text-sm text-white font-medium">{student.before}</div>
                    </div>
                    <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-xs text-green-400 mb-1">После</div>
                      <div className="text-sm text-white font-medium">{student.after}</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-2">
                      {student.result}
                    </Badge>
                    <p className="text-sm text-gray-300">{student.description}</p>
                    <div className="flex items-center justify-center mt-2 text-xs text-gray-400">
                      <Icon name="Calendar" className="mr-1" size={12} />
                      Результат за {student.period}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}