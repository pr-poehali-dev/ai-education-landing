import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const incomeExamples = [
  {
    icon: 'PenTool',
    role: 'ИИ-копирайтер',
    income: 'от 60 000₽/мес',
    desc: 'Тексты, посты и рассылки с ChatGPT в 10 раз быстрее',
  },
  {
    icon: 'Image',
    role: 'ИИ-дизайнер',
    income: 'от 80 000₽/мес',
    desc: 'Картинки и креативы на заказ в Nano Banana',
  },
  {
    icon: 'Video',
    role: 'ИИ-видеограф',
    income: 'от 100 000₽/мес',
    desc: 'Ролики и реклама с нейросетью Seedance 2',
  },
  {
    icon: 'Briefcase',
    role: 'ИИ в своём деле',
    income: 'экономия часов',
    desc: 'Автоматизация рутины и рост продаж в бизнесе',
  },
];

export default function ROISection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Курс окупается{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            одним заказом
          </span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Уже через 1–2 месяца выпускники начинают зарабатывать на нейросетях. Вот сколько берут за свои услуги:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {incomeExamples.map((item) => (
          <Card
            key={item.role}
            className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
          >
            <CardContent className="p-5 sm:p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4">
                <Icon name={item.icon} size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1">{item.role}</h3>
              <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-2">{item.income}</div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="TrendingUp" size={24} className="text-cyan-400" />
          <span className="text-cyan-300 font-semibold uppercase text-sm tracking-wide">Простая математика</span>
        </div>
        <p className="text-lg sm:text-xl text-white leading-relaxed">
          Один проект для клиента — <span className="text-cyan-400 font-bold">от 30 000₽</span>. Несколько заказов
          после обучения <span className="text-white font-bold">полностью окупают стоимость курса</span>, а навык
          остаётся с вами навсегда.
        </p>
      </div>
    </section>
  );
}