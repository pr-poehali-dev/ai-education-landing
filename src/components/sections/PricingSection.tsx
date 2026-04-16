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
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Тарифы</span>
        </h2>
        <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white text-base sm:text-lg font-bold rounded-xl shadow-2xl border-2 border-orange-300/50 animate-soft-pulse">
          <Icon name="AlertTriangle" size={22} />
          С СЕНТЯБРЯ ПОВЫШЕНИЕ ЦЕН
          <Icon name="AlertTriangle" size={22} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">СТАРТ</h3>
            <p className="text-gray-400 text-sm mb-3">всё необходимое для результата</p>
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">100 000₽</div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2 mb-5 text-sm text-cyan-300 mt-2">
              💡 Один ИИ-проект для клиента окупает курс полностью
            </div>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
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
            <div className="space-y-2">
              <a 
                href="https://torguykriptoy.getcourse.ru/chernikovgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 border border-cyan-400/20"
              >
                🚀 ЗАПИСЬ НА МАЙ
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-slate-800/70 to-slate-800/50 border-cyan-500/50 relative overflow-hidden">

          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">МАКСИМУМ</h3>
            <p className="text-gray-400 text-sm mb-3">персональный рост с Сергеем Черниковым</p>
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">300 000₽</div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-4 py-2 mb-5 text-sm text-orange-300">
              🔥 Личный доступ к эксперту с 7+ годами практики в ИИ
            </div>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center text-gray-300">
                <Icon name="Check" className="text-cyan-400 mr-3" size={20} />
                Всё из тарифа СТАРТ+
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
            <div className="space-y-2">
              <a 
                href="https://torguykriptoy.getcourse.ru/chernikovgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/50 hover:scale-105 border-2 border-orange-300/30 hover:border-orange-300/60 animate-soft-pulse"
              >
                🔥 ПОЛУЧИТЬ МАКСИМУМ
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}