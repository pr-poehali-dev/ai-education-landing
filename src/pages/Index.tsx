import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const skills = [
    {
      title: "СММ-специалист",
      description: "Создание контента и стратегии продвижения",
      items: ["Сценарии для постов", "Контент-план", "Стратегия продвижения", "Генерация контента"],
      icon: "Smartphone",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Видеомейкер", 
      description: "Профессиональное создание видео с ИИ",
      items: ["Создание видео-роликов", "Монтаж и обработка", "Музыкальные клипы", "Постпродакшн"],
      icon: "Video",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Маркетолог",
      description: "Анализ рынка и маркетинговые стратегии", 
      items: ["Анализ рынка и ЦА", "Маркетинговые стратегии", "Рекламные тексты", "Лид-магниты"],
      icon: "TrendingUp",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Reels-мейкер",
      description: "Создание вирусного контента для соцсетей",
      items: ["Создание нейро-аватара", "Сценарии для Reels", "Воронки через Reels", "Анализ трендов"],
      icon: "Play",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Дизайнер",
      description: "Создание визуального контента с ИИ",
      items: ["Генерация идей дизайна", "Макеты и логотипы", "Создание презентаций", "Фирменный стиль"],
      icon: "Palette",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Промпт-инженер",
      description: "Эффективная работа с нейросетями",
      items: ["Разработка запросов", "Оптимизация промтов", "База данных промтов", "Интеграция ИИ"],
      icon: "Code",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const programModules = [
    {
      title: "ИИ в контент-маркетинге",
      lessons: [
        "Возможности нейросетей",
        "Принципы работы нейросетей", 
        "Работа с ChatGPT и практика",
        "Создание клона",
        "Упаковка блога и быстрый старт",
        "Нейросети в творчестве",
        "Заработок на нейросетях"
      ]
    },
    {
      title: "Автоматизация и промпты",
      lessons: [
        "Что нейросети умеют",
        "Закрытие 90% задач с ChatGPT",
        "Нейросети в бизнесе",
        "Основы промптового мышления",
        "Разбор работы GPTs",
        "Бонусные уроки по чат-ботам"
      ]
    },
    {
      title: "Продвижение с ИИ",
      lessons: [
        "ИИ контент-маркетинг",
        "Распаковка и позиционирование",
        "Исследование ЦА",
        "Конкурентная разведка",
        "Создание воронок продаж",
        "Автоматизация воронок"
      ]
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 animate-pulse"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button className="text-white hover:text-cyan-400 transition-colors">Программа</button>
            <button className="text-white hover:text-cyan-400 transition-colors">О курсе</button>
            <button className="text-white hover:text-cyan-400 transition-colors">Отзывы</button>
            <Button onClick={scrollToForm} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              Оставить заявку
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                  Практический курс по нейросетям
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Начни <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">зарабатывать</span><br />
                  на ИИ через месяц!
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Освой 6 востребованных профессий с нейросетями.<br />
                  Автоматизируй бизнес с помощью ИИ.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6 animate-pulse"
                >
                  <Icon name="Rocket" className="mr-2" />
                  Оставить заявку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-lg px-8 py-6"
                >
                  <Icon name="Play" className="mr-2" />
                  Смотреть презентацию
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Icon name="Users" className="mr-2 text-cyan-400" />
                  10,000+ студентов
                </div>
                <div className="flex items-center">
                  <Icon name="Star" className="mr-2 text-cyan-400" />
                  4.9/5 рейтинг
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2 text-cyan-400" />
                  3 месяца
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl"></div>
              <img 
                src="/img/3ac6948c-bdf9-4fe9-9e36-39277d6a0e3e.jpg"
                alt="Сергей Черников - Эксперт по ИИ"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-cyan-500/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Какие <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">навыки</span> ты освоишь
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Получи востребованные навыки в 6 различных сферах применения ИИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.gradient} flex items-center justify-center mb-4`}>
                  <Icon name={skill.icon as any} className="text-white" size={24} />
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

      {/* Program Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Программа <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">курса</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Структурированное обучение от основ до продвинутых техник работы с ИИ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programModules.map((module, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {module.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <Icon name="Play" className="text-cyan-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Expert Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              О <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">спикере</span>
            </h2>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Черников Сергей</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Практикующий разработчик с 2017 года, специалист по внедрению ИИ-решений в бизнес. 
              За время работы помог более чем 500 предпринимателям и специалистам освоить 
              искусственный интеллект для увеличения прибыли и автоматизации процессов.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">7+</div>
                <div className="text-gray-400">лет в IT</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">10K+</div>
                <div className="text-gray-400">студентов</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-gray-400">проектов</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">6</div>
                <div className="text-gray-400">направлений</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <img 
              src="/img/3ac6948c-bdf9-4fe9-9e36-39277d6a0e3e.jpg"
              alt="Сергей Черников"
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Выбери свой <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">тариф</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">БАЗА</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">80,000₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  3 месяца обучения
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Д/З с проверкой кураторов
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Еженедельные созвоны
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Общий чат потока
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Сертификат по итогу
                </li>
              </ul>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Оставить заявку
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-slate-800/70 to-slate-800/50 border-cyan-500/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Популярный
              </Badge>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Индивидуальный</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">300,000₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Всё из тарифа БАЗА+
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Персональное наставничество
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Персональный консалтинг
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Разбор личного кейса
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Полный контроль процесса
                </li>
              </ul>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Оставить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Начни своё <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">обучение</span> уже сегодня!
          </h2>
          <p className="text-xl text-gray-300">
            Оставь заявку и получи персональную консультацию
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Номер телефона
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-6"
              >
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
          </div>
          <p className="text-gray-400">
            © 2024 Школа ИИ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}