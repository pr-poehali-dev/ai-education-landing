import React from 'react';
import Icon from '@/components/ui/icon';

const reasons = [
  {
    icon: 'Users',
    title: 'Живое взаимодействие с преподавателем',
    text: 'Задаёте вопросы и получаете ответы в реальном времени. Преподаватель видит вашу реакцию и подстраивает темп под группу — невозможно в записанном онлайн-курсе.',
  },
  {
    icon: 'Target',
    title: 'Практика на реальных задачах',
    text: 'Каждое занятие — живая работа с ChatGPT, Nano Banana, GigaChat, Seedance 2. Вы сразу применяете инструменты, а не смотрите, как это делает кто-то на экране.',
  },
  {
    icon: 'TrendingUp',
    title: 'Доводимость до результата 85%+',
    text: 'Онлайн-курсы бросают до 90% купивших. В офлайн-группе работает эффект окружения — когда рядом люди с такой же целью, вы идёте до конца.',
  },
  {
    icon: 'Network',
    title: 'Нетворкинг и деловые связи',
    text: 'В классе рядом предприниматели, специалисты и фрилансеры Владивостока. Совместные проекты, клиенты и партнёры — частый результат обучения в нашей школе.',
  },
  {
    icon: 'MapPin',
    title: 'Первая офлайн-школа ИИ на Дальнем Востоке',
    text: 'Школа нейросетей Сергея Черникова — единственная в Приморском крае и на Дальнем Востоке, где нейросети преподают в живом классе, а не дистанционно.',
  },
  {
    icon: 'BadgeCheck',
    title: 'При поддержке Опоры России',
    text: 'Курс реализуется при поддержке Приморского краевого отделения «Опоры России» — это гарантия качества и статус проверенного образовательного продукта для бизнеса.',
  },
];

export default function WhyOfflineSection() {
  return (
    <section id="why-offline" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full mb-4">
            <Icon name="MapPin" size={15} />
            Владивосток · Офлайн
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Почему офлайн обучение нейросетям{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              эффективнее онлайн-курсов
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Школа нейросетей во Владивостоке — это не просто курс. Это среда, которая приводит к реальному результату
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon, title, text }) => (
            <article
              key={title}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <Icon name={icon} size={20} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-2 leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Итоговый акцент */}
        <div className="mt-10 bg-gradient-to-r from-green-900/30 to-cyan-900/20 border border-green-500/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white text-lg sm:text-xl font-bold leading-snug">
            Курсы нейросетей во Владивостоке — это не просто «посмотреть видео»
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Это практика, окружение и поддержка преподавателя — всё, что нужно, чтобы реально начать зарабатывать с ИИ.
            Школа «Хакни Нейросети» работает в Приморском крае с 2022 года и обучила более 10 000 человек.
          </p>
        </div>

      </div>
    </section>
  );
}