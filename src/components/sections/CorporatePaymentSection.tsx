import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function CorporatePaymentSection() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        
        <CardContent className="p-8 relative z-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="individual" className="border-slate-700/50">
              <AccordionTrigger className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-2.5 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <span>Как оплатить физическому лицу? Есть ли рассрочка?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-6 pl-0 sm:pl-15">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Да, у нас доступна беспроцентная рассрочка! Вы можете оплатить обучение частями.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mt-1">
                        <span className="text-orange-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Выберите тариф:</h4>
                        <p className="text-gray-300">БАЗА или Индивидуальный — любой тариф доступен в рассрочку</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mt-1">
                        <span className="text-orange-400 font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-gray-300">Оставьте заявку на сайте:</p>
                        <a 
                          href="https://torguykriptoy.getcourse.ru/NeuroVL" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 underline transition-colors"
                        >
                          https://torguykriptoy.getcourse.ru/NeuroVL
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mt-1">
                        <span className="text-orange-400 font-bold">3</span>
                      </div>
                      <div className="text-gray-300">
                        Попадаете в платежный шлюз
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mt-1">
                        <span className="text-orange-400 font-bold">4</span>
                      </div>
                      <div className="text-gray-300">
                        Выбираете подходящие условия рассрочки. Всё!
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/message/YRBE2VIUHPMYN1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105 border border-orange-400/20 group"
                  >
                    <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
                    Узнать условия рассрочки
                    <Icon name="ExternalLink" size={18} className="opacity-70" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="corporate" className="border-slate-700/50">
              <AccordionTrigger className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2.5 flex items-center justify-center">
                    <Icon name="Building2" size={24} className="text-white" />
                  </div>
                  <span>Я хочу оплатить от компании. Как это работает?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-6 pl-0 sm:pl-15">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Очень просто! Нам нужны ваши реквизиты. Вот что нужно сделать:
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mt-1">
                        <span className="text-cyan-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Отправьте нам реквизиты компании:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            Полное наименование организации
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            ИНН и КПП
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            Расчетный счет и банковские реквизиты
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mt-1">
                        <span className="text-cyan-400 font-bold">2</span>
                      </div>
                      <div className="text-gray-300">
                        Мы оформим договор об оказании услуг
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mt-1">
                        <span className="text-cyan-400 font-bold">3</span>
                      </div>
                      <div className="text-gray-300">
                        Направим вам счет на электронную почту
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mt-1">
                        <span className="text-cyan-400 font-bold">4</span>
                      </div>
                      <div className="text-gray-300">
                        Оплатите счет через вашего бухгалтера
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/message/YRBE2VIUHPMYN1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 border border-cyan-400/20 group"
                  >
                    <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
                    Свяжитесь с отделом закупок
                    <Icon name="ExternalLink" size={18} className="opacity-70" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}