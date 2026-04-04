import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+79811292499" 
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Phone" size={20} className="text-cyan-400" />
                <span>Менеджер школы: +7 (981) 129-24-99</span>
              </a>
              <a 
                href="https://t.me/chernikovgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Send" size={20} className="text-cyan-400" />
                <span>Телеграм канал: @chernikovgpt</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/e8628072-d7db-463c-b1d5-7cbdef013225/bucket/f8a0b723-d4fd-43b4-b156-ce03422b9af7.png" 
              alt="Хакни Нейросети" 
              className="h-16 sm:h-20 w-auto opacity-70"
            />
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Школа ИИ. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}