import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/f8a0b723-d4fd-43b4-b156-ce03422b9af7.png" 
              alt="Хакни Нейросети" 
              className="h-14 sm:h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Единственная живая школа по работе с ИИ для бизнеса во Владивостоке
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+79811292499" 
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Icon name="Phone" size={16} className="text-cyan-400 flex-shrink-0" />
                +7 (981) 129-24-99
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="MapPin" size={16} className="text-cyan-400 flex-shrink-0" />
                г. Владивосток, ул. Русская 41а, 3 этаж
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Clock" size={16} className="text-cyan-400 flex-shrink-0" />
                Пн-Пт: 10:00 — 19:00
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Соцсети</h4>
            <div className="space-y-3">
              <a 
                href="https://t.me/chernikovgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Icon name="Send" size={16} className="text-cyan-400 flex-shrink-0" />
                Телеграм-канал
              </a>
              <a 
                href="https://t.me/ChernikovGPT_Bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Icon name="MessageCircle" size={16} className="text-cyan-400 flex-shrink-0" />
                Бесплатная консультация
              </a>
              <a 
                href="https://t.me/DashaChernikova8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Icon name="User" size={16} className="text-cyan-400 flex-shrink-0" />
                Менеджер школы
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <div className="space-y-3">
              <a href="#pricing" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Тарифы
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Почему это работает
              </a>
              <a href="#program" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Программа
              </a>
              <a href="#lead-form" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Записаться
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} ИП Черников С.А. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            ИНН: уточняйте у менеджера | Не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
}
