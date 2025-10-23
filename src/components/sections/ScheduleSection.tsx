import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ScheduleSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Расписание</span> курса
        </h2>
        <p className="text-lg text-gray-300">
          Интенсивная программа обучения нейросетям
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Старт курса */}
        <Card className="bg-slate-800/90 border-slate-600 hover:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Старт курса</h3>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-400">18</div>
              <div className="text-lg text-white font-semibold">ноября</div>
              <div className="text-sm text-gray-300">2025 года</div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-600">
              <Icon name="MapPin" className="text-cyan-400 mx-auto mb-3" size={24} />
              <div className="text-xs text-gray-300 leading-relaxed">
                <div className="font-medium text-white mb-1">Место проведения:</div>
                ул. Русская 41а<br />
                3 этаж офис "Хакни Нейросети"
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Расписание встреч */}
        <Card className="bg-slate-800/90 border-slate-600 hover:border-purple-400/70 transition-all duration-300 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Встречи</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Calendar" className="text-purple-400" size={16} />
                <span className="text-white font-semibold">2 раза в неделю</span>
              </div>
              
              <div className="space-y-2">
                <div className="bg-slate-700/70 border border-purple-400/30 rounded-lg py-3 px-4">
                  <div className="text-purple-300 text-sm font-medium">Вторник</div>
                  <div className="text-white font-bold text-lg">17:00 - 20:00</div>
                </div>
                <div className="bg-slate-700/70 border border-pink-400/30 rounded-lg py-3 px-4">
                  <div className="text-pink-300 text-sm font-medium">Пятница</div>
                  <div className="text-white font-bold text-lg">17:00 - 20:00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Общая продолжительность */}
        <Card className="bg-slate-800/90 border-slate-600 hover:border-green-400/70 transition-all duration-300 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Объём курса</h3>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">24</div>
                <div className="text-white font-semibold text-lg">встречи</div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">3</div>
                  <div className="text-sm text-gray-300 font-medium">часа</div>
                </div>
                <Icon name="X" className="text-gray-400" size={16} />
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24</div>
                  <div className="text-sm text-gray-300 font-medium">встречи</div>
                </div>
              </div>
              
              <div className="pt-3 border-t border-slate-600">
                <div className="text-green-300 text-sm font-medium">Всего:</div>
                <div className="text-xl font-bold text-white">72 часа</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Дополнительная информация */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-slate-800/70 border border-slate-600 rounded-full px-8 py-4">
          <Icon name="Info" className="text-cyan-400 mr-3" size={20} />
          <span className="text-white font-medium">
            Интенсивная программа • Практические задания • Индивидуальная поддержка
          </span>
        </div>
      </div>
    </section>
  );
}