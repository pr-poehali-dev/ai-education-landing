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
    title: "Работаем с лучшими ИИ: и российскими, и зарубежными",
    icon: "Shield",
    description: "Научим использовать топовые инструменты: Яндекс, Kandinsky работают без VPN, для ChatGPT и Midjourney понадобится VPN. На первом занятии покажем, как настроить всё за 5 минут!"
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
                    <Icon name={advantage.icon} className="text-white group-hover:animate-spin" size={20} />
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

      {/* About Expert Section */}
      <div className="mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              О <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">спикере</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Сергей Черников — практик, который внедряет ИИ в бизнес с 2017 года</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Я не пересказываю чужие курсы — я сам разрабатываю ИИ-решения для реального бизнеса. За 7 лет помог <span className="text-white font-semibold">500+ предпринимателям Владивостока</span> автоматизировать продажи, контент и операции. Провёл обучение для <span className="text-white font-semibold">10 000+ специалистов</span> при поддержке «Мой Бизнес», «Опора России» и Росмолодёжи.
            </p>
            <p className="text-cyan-300 font-semibold text-base sm:text-lg mb-6 italic">
              «Я учу только тому, что работает у меня самого.»
            </p>
            <ul className="text-base sm:text-lg text-gray-300 mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Член <span className="text-white font-semibold">Опоры России</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Организатор масштабной{' '}
                  <a
                    href="https://chernikovneuro.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                  >
                    конференции по ИИ
                  </a>
                </span>
              </li>
            </ul>
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