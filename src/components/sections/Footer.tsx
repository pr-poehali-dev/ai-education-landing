import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-slate-900/50 border-t border-slate-800">
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
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Школа ИИ. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}