import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  scrollToForm: () => void;
}

export default function PricingSection({ scrollToForm }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto">
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
                Общий чат потока
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
            <a 
              href="https://torguykriptoy.getcourse.ru/NeuroVL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 border border-cyan-400/20"
            >
              🚀 Оставить заявку
            </a>
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
            <a 
              href="https://torguykriptoy.getcourse.ru/NeuroVL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/50 hover:scale-105 border-2 border-orange-300/30 hover:border-orange-300/60 animate-pulse"
            >
              🔥 ПОЛУЧИТЬ МАКСИМУМ
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}