import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const aiCapabilities = [
  {
    title: "Перестань сливать бюджет на рекламу",
    description: "ИИ привлечёт клиентов органически — без вложений и платных кампаний",
    icon: "Target"
  },
  {
    title: "Делай видео и фото без камеры, студии и фотографа",
    description: "Генерируй качественный контент с помощью ИИ — быстро, дёшево и профессионально",
    icon: "Camera"
  },
  {
    title: "Твой ИИ-ассистент продаёт 24/7 — даже когда ты спишь",
    description: "Настрой автоматическую воронку продаж и получай заявки без участия",
    icon: "Bot"
  },
  {
    title: "Забудь о ручном ведении клиентов — ИИ сделает всё сам",
    description: "Автоматизируй CRM, аналитику и работу с базой без лишних усилий",
    icon: "Database"
  },
  {
    title: "Найди нужного человека за 1 час, а не за 2 недели",
    description: "ИИ отберёт кандидатов, проведёт первичный отбор и сэкономит твоё время",
    icon: "Users"
  },
  {
    title: "Профессиональный дизайн без дизайнера и без бюджета",
    description: "Сайты, логотипы, презентации — создавай сам с помощью ИИ за минуты",
    icon: "Palette"
  }
];

export default function AiCapabilities() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Что сможешь делать с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ИИ</span>
        </h3>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiCapabilities.map((capability, index) => (
          <Card key={index} className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  <Icon name={capability.icon} className="text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                  <p className="text-sm text-gray-400">{capability.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
