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
    answer: "Часть инструментов работает без VPN (Яндекс, Kandinsky, GigaChat), для других понадобится VPN (ChatGPT, Midjourney, Claude). На первом занятии покажем, как настроить бесплатно за 5 минут. Зарубежная карта не обязательна — большинство инструментов имеют бесплатные версии."
  },
  {
    question: "Можно ли купить в рассрочку?",
    answer: "Да, мы предлагаем несколько вариантов рассрочки. Вы можете оплатить курс частями на 3, 6 или 12 месяцев без переплат. Также доступна рассрочка через банки-партнеры. Для оформления рассрочки свяжитесь с нашими менеджерами, и они подберут наиболее удобный вариант оплаты."
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
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
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
      <section id="lead-form" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
          <CardContent className="p-8">
            <div className="text-center">
              <a 
                href="https://torguykriptoy.getcourse.ru/NeuroVL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base sm:text-lg py-5 sm:py-6 px-8 sm:px-12 text-white font-medium rounded-md transition-colors w-full sm:w-auto justify-center"
              >
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </a>
            </div>
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
            © 2025 Школа ИИ. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}