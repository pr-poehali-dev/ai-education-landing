import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: "Формат обучения",
    answer: "Обучение проходит в онлайн-формате с записанными видеоуроками, которые вы можете смотреть в удобное время. Также предусмотрены практические задания и обратная связь от кураторов. Есть возможность задавать вопросы в чате поддержки и участвовать в вебинарах с экспертами."
  },
  {
    question: "Нужно ли оплатить ВПН и завести зарубежную карту?",
    answer: "Для полноценного обучения рекомендуется иметь доступ к зарубежным нейросетям, поэтому ВПН может потребоваться. Что касается зарубежной карты - это не обязательно, так как многие инструменты имеют бесплатные версии или альтернативы. Мы предоставляем подробные инструкции по настройке всех необходимых инструментов."
  },
  {
    question: "Можно ли купить в рассрочку?",
    answer: "Да, мы предлагаем несколько вариантов рассрочки. Вы можете оплатить курс частями на 3, 6 или 12 месяцев без переплат. Также доступна рассрочка через банки-партнеры. Для оформления рассрочки свяжитесь с нашими менеджерами, и они подберут наиболее удобный вариант оплаты."
  },
  {
    question: "Как долго будут доступны записи уроков?",
    answer: "Доступ к записям уроков предоставляется на 12 месяцев с момента покупки курса. За это время вы сможете пересматривать материалы неограниченное количество раз, изучать в своем темпе и возвращаться к сложным темам. После окончания срока есть возможность продлить доступ на льготных условиях."
  }
];

export default function FormSection() {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Начни своё <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">обучение</span> уже сегодня!
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Оставьте заявку на участие в программе
          </p>
          <p className="text-lg text-gray-400">
            Освоение искусственного интеллекта. Продвижение и рост продаж
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Номер телефона
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-6"
              >
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Школа ИИ <span className="text-cyan-400">Сергея Черникова</span>
          </div>
          <p className="text-gray-400">
            © 2024 Школа ИИ. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}