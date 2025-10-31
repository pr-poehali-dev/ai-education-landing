import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CorporatePaymentSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <style>
        {`
          .faq-container {
            animation: cloudFloat 3s ease-in-out infinite;
          }

          @keyframes cloudFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          .faq-item {
            animation: fadeInScale 0.6s ease-out backwards;
            margin-bottom: 12px;
          }

          .faq-item:nth-child(1) { animation-delay: 0.1s; }
          .faq-item:nth-child(2) { animation-delay: 0.25s; }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .faq-question {
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 12px;
          }

          .faq-question:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
          }

          .faq-icon {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .faq-item.active .faq-icon {
            transform: rotateZ(180deg) scale(1.15);
          }

          .faq-answer {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .faq-item.active .faq-answer {
            max-height: 600px;
            opacity: 1;
          }
        `}
      </style>

      <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm overflow-hidden relative faq-container">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        
        <CardContent className="p-8 relative z-10">
          <div className="space-y-3">
            {/* Физические лица */}
            <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
              <div
                className="faq-question p-6 bg-slate-800/40 border border-slate-700/50"
                onClick={() => toggleFaq(0)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-2.5 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      Как оплатить физическому лицу? Есть ли рассрочка?
                    </span>
                  </div>
                  <Icon name="ChevronDown" size={28} className="text-cyan-400 faq-icon flex-shrink-0" />
                </div>
              </div>

              <div className="faq-answer">
                <div className="pt-6 px-6 pb-4">
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
                    href="https://torguykriptoy.getcourse.ru/NeuroVL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105 border border-orange-400/20 group"
                  >
                    <Icon name="CreditCard" size={24} className="group-hover:scale-110 transition-transform" />
                    Узнать условия рассрочки
                    <Icon name="ExternalLink" size={18} className="opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Юридические лица */}
            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
              <div
                className="faq-question p-6 bg-slate-800/40 border border-slate-700/50"
                onClick={() => toggleFaq(1)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2.5 flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" size={24} className="text-white" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      Я хочу оплатить от компании. Как это работает?
                    </span>
                  </div>
                  <Icon name="ChevronDown" size={28} className="text-cyan-400 faq-icon flex-shrink-0" />
                </div>
              </div>

              <div className="faq-answer">
                <div className="pt-6 px-6 pb-4">
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
                    Связаться с отделом закупок
                    <Icon name="ExternalLink" size={18} className="opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
