import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function StatsSection() {
  const stats = [
    {
      icon: "Users",
      number: "10K+",
      label: "Выпускников",
      description: "Успешно завершили обучение"
    },
    {
      icon: "Calendar",
      number: "24",
      label: "Встречи",
      description: "Живых уроков за 3 месяца"
    },
    {
      icon: "Clock",
      number: "15 мин",
      label: "Вместо 4 часов",
      description: "Время на создание поста"
    },
    {
      icon: "TrendingUp",
      number: "300%",
      label: "Рост продаж",
      description: "У участников курса"
    }
  ];

  return (
    <section id="stats" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Курс в <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">цифрах</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Результаты, которые говорят сами за себя
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat.icon as any} size={32} className="text-cyan-400" />
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-cyan-400 mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}