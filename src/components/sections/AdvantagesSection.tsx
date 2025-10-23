import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    title: "Практика, а не пустая болтовня",
    icon: "Target",
    description: "Забудьте про \"красивые фразы\" и бесконечную теорию! Я даю только те знания, которые вы сможете применить на практике сразу после уроков. Реальные кейсы, реальные инструменты, реальный результат – здесь и сейчас!"
  },
  {
    title: "Разработчик, а не пересказчик",
    icon: "Code",
    description: "Я не просто теоретик, а практикующий разработчик с опытом в IT с 2017 года! Я делюсь своими собственными наработками и уникальными методиками, а не пересказываю чужие идеи."
  },
  {
    title: "Забудьте про санкции – у нас всё работает!",
    icon: "Shield",
    description: "Пока \"инфоцыгане\" тратят 40% времени на объяснение обхода ограничений, я предлагаю готовые решения, которые работают без VPN, зарубежных карт и головной боли!"
  },
  {
    title: "Поддержка после обучения – я не бросаю своих!",
    icon: "Heart",
    description: "Я не исчезну после окончания курса! Вас ждет посттренинговая поддержка (чат и канал с выпускниками), ответы на вопросы и помощь в реализации ваших проектов."
  },
  {
    title: "Доступные цены – это не шутка!",
    icon: "DollarSign",
    description: "Я верю, что качественное обучение должно быть доступным! У меня адекватные цены! Если вы посмотрите на стоимость курсов с аналогичной программой на просторах интернета, то удивитесь, что она стартует от 70 000р и до 460 000р."
  }
];

const partners = ["Мой Бизнес", "Центр Поддержки Предпринимательства", "Штаб поддержки Единой России", "Росмолодежь", "БК Бизнес Завтрак", "Эко Центр", "БШ Рост"];

export default function AdvantagesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Почему нужно идти <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ко мне?</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {advantages.map((advantage, index) => (
            <AccordionItem key={index} value={`advantage-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-white hover:text-cyan-400 group">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:from-green-500 group-hover:to-emerald-600 flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-green-500/30 flex-shrink-0">
                    <Icon name={advantage.icon as any} className="text-white group-hover:animate-spin" size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-xl font-bold">{advantage.title}</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                <p className="leading-relaxed">{advantage.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Мне доверяют!</h3>
        <p className="text-xl text-gray-300 mb-8">
          Более 10,000 специалистов уже прошли обучение в наших программах при поддержке ведущих организаций
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/4bc30784-6b4b-4dd5-af33-57ab2eaff47a.jpg" 
              alt="Мой Бизнес" 
              className="max-h-12 object-contain"
            />
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/67470047-e195-4c54-8ed9-2230ccd6b6f8.jpeg" 
              alt="Центр Развития Предпринимательства" 
              className="max-h-12 object-contain"
            />
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/894590f6-de63-49af-a296-83da32f246cb.jpeg" 
              alt="Штаб Общественной Поддержки Единой России" 
              className="max-h-12 object-contain"
            />
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/eb4d7375-5a58-4943-bb20-57a56f1eba5f.png" 
              alt="Росмолодежь" 
              className="max-h-12 object-contain"
            />
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/46d80ccd-7d32-487f-821e-331a1d2c4ce8.png" 
              alt="Бизнес Завтрак" 
              className="max-h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Expert Section */}
      <div className="mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              О <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">спикере</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Черников Сергей</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Практикующий разработчик с 2017 года, специалист по внедрению ИИ-решений в бизнес. 
              За время работы помог более чем 500 предпринимателям и специалистам из Владивостока освоить 
              искусственный интеллект для увеличения прибыли и автоматизации процессов.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Автор уникальных методик работы с нейросетями, которые позволяют получать результат 
              без использования VPN и зарубежных карт. Мой подход основан на практическом применении ИИ в реальных бизнес-задачах.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">7+</div>
                <div className="text-gray-400">лет в IT</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">10K+</div>
                <div className="text-gray-400">студентов</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-gray-400">проектов</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400">6</div>
                <div className="text-gray-400">направлений</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/d7ec34ff-fa61-4398-b5db-12c188a2758a.png"
              alt="Сергей Черников"
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-cyan-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}