import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: "Формат обучения",
    answer: "Обучение проходит в живом формате, с возможностью просмотра записей, если не удалось прийти очно. Также предусмотрены практические задания и обратная связь от кураторов. Есть возможность задавать вопросы в чате поддержки и участвовать в вебинарах с экспертами."
  },
  {
    question: "Нужен ли VPN для обучения?",
    answer: "Да, VPN понадобится — большинство мощных инструментов (ChatGPT, Midjourney, Claude) работают только с ним. Зарубежная карта тоже пригодится для доступа к платным версиям. Но не переживайте: на первом занятии я покажу, как настроить и то, и другое буквально за пару минут — всё просто и понятно."
  },
  {
    question: "Можно ли купить в кредит?",
    answer: "Да, мы предлагаем кредит. Вы можете оплатить курс частями на 3, 6 или 12 месяцев. Для оформления кредита свяжитесь с нашими менеджерами, и они подберут наиболее удобный вариант оплаты."
  },
  {
    question: "Как долго будут доступны записи уроков?",
    answer: "Доступ к записям уроков предоставляется на 6 месяцев с момента покупки курса. За это время вы сможете пересматривать материалы неограниченное количество раз, изучать в своем темпе и возвращаться к сложным темам. После окончания срока есть возможность продлить доступ на льготных условиях."
  }
];

export default function FormSection() {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/50 border-slate-700 rounded-lg px-4 sm:px-6">
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
      <section id="lead-form" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Начни своё <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">обучение</span> уже сегодня!
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Оставьте заявку на участие в программе
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            Освоение искусственного интеллекта. Продвижение и рост продаж
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="text-center space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-cyan-400" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CreditCard" size={18} className="text-cyan-400" />
                  <span>Рассрочка от 3 мес.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-cyan-400" />
                  <span>Осталось 13 мест</span>
                </div>
              </div>
              <a 
                href="https://torguykriptoy.getcourse.ru/chernikovgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base sm:text-lg py-5 sm:py-6 px-8 sm:px-12 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Записаться на курс
              </a>
              <p className="text-gray-500 text-xs sm:text-sm">
                Нажимая кнопку, вы перейдёте на страницу оформления заявки
              </p>
            </div>
          </CardContent>
        </Card>
      </section>


    </>
  );
}