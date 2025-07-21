import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
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

  const advantages = [
    {
      title: "Практика, а не пустая болтовня",
      icon: "Target",
      description: "Забудьте про \"красивые фразы\" и бесконечную теорию! Я даю только те знания, которые вы сможете применить на практике сразу после уроков. Реальные кейсы, реальные инструменты, реальный результат – здесь и сейчас!"
    },
    {
      title: "Разработчик, а не пересказчик",
      icon: "Code",
      description: "Я не просто теоретик, а практикующий разработчик с опытом в IT с 2017 года! Я делюсь своими собственными наработками и уникальными методиками, а не пересказываю чужие идеи."
    },
    {
      title: "Забудьте про санкции – у нас всё работает!",
      icon: "Shield",
      description: "Пока \"инфоцыгане\" тратят 40% времени на объяснение обхода ограничений, я предлагаю готовые решения, которые работают без VPN, зарубежных карт и головной боли!"
    },
    {
      title: "Поддержка после обучения – я не бросаю своих!",
      icon: "Heart",
      description: "Я не исчезну после окончания курса! Вас ждет посттренинговая поддержка (чат и канал с выпускниками), ответы на вопросы и помощь в реализации ваших проектов."
    },
    {
      title: "Доступные цены – это не шутка!",
      icon: "DollarSign",
      description: "Я верю, что качественное обучение должно быть доступным! У меня адекватные цены! Если вы посмотрите на стоимость курсов с аналогичной программой на просторах интернета, то удивитесь, что она стартует от 70 000р и до 460 000р."
    }
  ];

  const partners = ["Мой Бизнес", "Центр Поддержки Предпринимательства", "Штаб поддержки Единой России", "Росмолодежь", "БК Бизнес Завтрак", "Эко Центр", "БШ Рост"];

  const faqItems = [
    {
      question: "Формат обучения",
      answer: "Обучение проходит в онлайн-формате с записанными видеоуроками, которые вы можете смотреть в удобное время. Также предусмотрены практические задания и обратная связь от кураторов. Есть возможность задавать вопросы в чате поддержки и участвовать в вебинарах с экспертами."
    },
    {
      question: "Нужно ли оплатить ВПН и завести зарубежную карту?",
      answer: "Для полноценного обучения рекомендуется иметь доступ к зарубежным нейросетям, поэтому ВПН может потребоваться. Что касается зарубежной карты - это не обязательно, так как многие инструменты имеют бесплатные версии или альтернативы. Мы предоставляем подробные инструкции по настройке всех необходимых инструментов."
    },
    {
      question: "Можно ли купить в рассрочку?",
      answer: "Да, мы предлагаем несколько вариантов рассрочки. Вы можете оплатить курс частями на 3, 6 или 12 месяцев без переплат. Также доступна рассрочка через банки-партнеры. Для оформления рассрочки свяжитесь с нашими менеджерами, и они подберут наиболее удобный вариант оплаты."
    },
    {
      question: "Как долго будут доступны записи уроков?",
      answer: "Доступ к записям уроков предоставляется на 12 месяцев с момента покупки курса. За это время вы сможете пересматривать материалы неограниченное количество раз, изучать в своем темпе и возвращаться к сложным темам. После окончания срока есть возможность продлить доступ на льготных условиях."
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 animate-pulse"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('program')} className="text-white hover:text-cyan-400 transition-colors">Программа</button>
            <button onClick={() => scrollToSection('about-course')} className="text-white hover:text-cyan-400 transition-colors">О курсе</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-cyan-400 transition-colors">Отзывы</button>
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
                <p className="text-lg text-gray-300">
                  Освоение трендовых инструментов для заработка, продвижения себя и клиентов
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Начни <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">зарабатывать</span><br />
                  на ИИ через месяц!
                </h1>
                <div className="space-y-2 text-xl text-gray-300">
                  <p>Освой 6 востребованных профессий с нейросетями</p>
                  <p>Автоматизируй бизнес с помощью ИИ</p>
                </div>
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
                src="https://cdn.poehali.dev/files/21a06d58-77a7-49fb-8869-f0e9b0d9f399.png"
                alt="Сергей Черников - Эксперт по ИИ"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-cyan-500/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="about-course" className="py-20 px-6 max-w-7xl mx-auto">
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

      {/* AI Capabilities Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Твои <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ИИ возможности</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Открой для себя безграничные возможности интеллекта ИИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Icon name={capability.icon as any} className="text-white" size={24} />
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
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

      {/* Program Section */}
      <section id="program" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Программа <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">курса</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Структурированное обучение от основ до продвинутых техник работы с ИИ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="part1" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
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

            <AccordionItem value="part2" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
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

      {/* Directions Section */}
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
                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mt-4"
                  >
                    Оставить заявку
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Тарифы</span>
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
                  Кураторские чаты
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Информационный канал
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Командные активности
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Экзамен
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Сертификат по итогу обучения
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
                  Эксклюзивный уровень
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Персональное наставничество
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Домашние задания с обратной связью
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Персональные практические задания
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Персональный консалтинг лично Сергея
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Возможность разобрать свой личный кейс
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Полный контроль и консультирование
                </li>
                <li className="flex items-center text-gray-300">
                  <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                  Расширенное изучение кейсов
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

      {/* Advantages Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Почему нужно идти <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ко мне?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {advantages.map((advantage, index) => (
              <AccordionItem key={index} value={`advantage-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                      <Icon name={advantage.icon as any} className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{advantage.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p className="leading-relaxed">{advantage.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Мне доверяют!</h3>
          <p className="text-xl text-gray-300 mb-8">
            Более 10,000 специалистов уже прошли обучение в наших программах при поддержке ведущих организаций
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 text-center">
                <div className="text-sm text-gray-300">{partner}</div>
              </div>
            ))}
          </div>
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
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Автор уникальных методик работы с нейросетями, которые позволяют получать результат 
              без использования VPN и зарубежных карт. Мой подход основан на практическом применении ИИ в реальных бизнес-задачах.
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

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Начни своё <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">обучение</span> уже сегодня!
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Оставьте заявку на участие в программе
          </p>
          <p className="text-lg text-gray-400">
            Освоение искусственного интеллекта. Продвижение и рост продаж
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