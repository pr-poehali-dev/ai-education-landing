import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    question: 'Где найти курсы по нейросетям во Владивостоке?',
    answer: 'Школа нейросетей Сергея Черникова «Хакни Нейросети» — единственная офлайн школа ИИ во Владивостоке. Занятия проходят в живом классе небольшими группами до 30 человек. Адрес и расписание уточняются при записи.',
  },
  {
    question: 'Можно ли научиться работать с ChatGPT и Midjourney с нуля?',
    answer: 'Да. Курс разработан специально для людей без опыта в IT и программировании. С первого занятия вы начинаете работать с реальными инструментами: ChatGPT, Midjourney, GigaChat, Sora. К концу 3-го месяца уверенно применяете ИИ в работе и зарабатываете с его помощью.',
  },
  {
    question: 'Чем офлайн обучение нейросетям лучше онлайн-курсов?',
    answer: 'В живом классе вы получаете обратную связь от преподавателя в реальном времени, практикуетесь на реальных задачах вместе с группой, не прокрастинируете и доводите обучение до конца. Статистика нашей школы: более 85% студентов офлайн-потока применяют ИИ в работе уже через месяц после старта.',
  },
  {
    question: 'Сколько стоят курсы по искусственному интеллекту во Владивостоке?',
    answer: 'Стоимость обучения зависит от выбранного тарифа. Доступны форматы «Старт», «Продвинутый» и корпоративный. Актуальные цены и специальные условия для ранней записи — на странице сайта в разделе «Стоимость».',
  },
  {
    question: 'Какие профессии можно освоить за 3 месяца?',
    answer: 'За 3 месяца обучения в школе вы получаете навыки по 6 направлениям: ИИ-ассистент, prompt-инженер, ИИ-дизайнер (Midjourney), ИИ-видеограф (Sora), ИИ-копирайтер (ChatGPT) и специалист по автоматизации бизнес-процессов с ИИ.',
  },
  {
    question: 'Когда начинается следующий поток курса?',
    answer: 'Ближайший поток стартует 14 сентября 2026 года. В группе всего 30 мест — осталось 20 свободных мест. Чтобы записаться, оставьте заявку на сайте.',
  },
  {
    question: 'Что такое нейросети и зачем их изучать в 2026 году?',
    answer: 'Нейросети (ИИ-инструменты) — это программы, которые генерируют тексты, изображения, видео и автоматизируют рутинные задачи. В 2026 году незнание ИИ = потеря конкурентоспособности на рынке труда. Специалисты, работающие с ИИ, выполняют задачи в 10–16 раз быстрее и стоят дороже.',
  },
  {
    question: 'Есть ли корпоративное обучение нейросетям для компаний во Владивостоке?',
    answer: 'Да. Школа Сергея Черникова проводит корпоративные тренинги по ИИ для команд и бизнеса во Владивостоке и Приморском крае. Программа адаптируется под задачи вашей компании. Для уточнения условий свяжитесь с нами через форму на сайте.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-full mb-4">
            <Icon name="HelpCircle" size={15} />
            Частые вопросы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Всё, что вы хотели знать про{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              обучение нейросетям
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о курсах ИИ во Владивостоке
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="text-white font-semibold text-sm sm:text-base leading-snug">
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <Icon name="ChevronDown" size={15} className="text-cyan-400" />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}