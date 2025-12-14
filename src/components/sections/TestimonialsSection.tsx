import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    name: "Светлана",
    image: "https://cdn.poehali.dev/files/5b66bbdb-98a9-4d4c-829a-922cbc2bdbfd.jpg",
    text: "Незаметно. Никакой воды, сплошная практика и готовые решения. Это лучшее краткосрочное обучение, с точки зрения реальной практической ценности, с которым я столкнулась за последнее время) 👍👍👍",
    highlight: "Полученная информация бесценна! За такими экспертами будущее. Получила неимоверное количество инсайтов!",
    rating: 5
  },
  {
    id: 2,
    name: "Оля",
    image: "https://cdn.poehali.dev/files/cb4c4f28-d7c9-4726-8490-3a20c6b69ceb.jpg",
    text: "Сергей 😎🔥 Это УЖАСНО! Ужасно интересно и своевременно 👏❤️",
    highlight: "Я благодарю за открытую новую грань этого уникального Мира Высоких Технологий! Я все еще в эйфории и развлекаюсь, притираемся с новым «питомцем»... очень кайфово! Мой Мир никогда не будет прежним!",
    rating: 5
  },
  {
    id: 3,
    name: "Надежда",
    image: "https://cdn.poehali.dev/files/31ca3f0f-a86b-4380-80df-2639f60a1c45.jpg",
    text: "Сергей, я благодарю 🙏 за обучение про нейросети.",
    highlight: "Это для меня было волшебным ключиком 🔑, который открыл дверь в новый мир! Мир, где можно быть в ритме со всеми, не опаздывать и делать все вовремя. Было интересно, полезно и главное, что в этот же день можно уже применить в своей работе!! Спасибо за твою работу!",
    rating: 5
  },
  {
    id: 4,
    name: "Артём",
    image: "https://cdn.poehali.dev/files/42d5d77f-0c5d-4b57-837c-350a5aef6d38.jpg",
    text: "Курс хороший, но местами хотелось бы больше времени на практику. Материала очень много, не всё успеваешь усвоить сразу. Но в целом доволен - главное, что есть записи и можно вернуться.",
    highlight: "Сергей объясняет понятно, но темп высокий. Для новичков может быть сложновато. Рекомендую тем, кто готов активно учиться.",
    rating: 4
  },
  {
    id: 5,
    name: "Оксана",
    image: "https://cdn.poehali.dev/files/5fcc0d2b-eba1-4c7b-a86e-f96131af8cf1.jpg",
    text: "Дошла и я до благодарностей в адрес Сергея. Еле сдержалась, чтобы не прогнать и получить текст через GPT турбо:), настолько просто было всё объяснено за короткий промежуток времени). Но всё по честному - Благодарность от Души Вам Сергей, печатаю лично).",
    highlight: "В нашей реальности огромная ценность - время, знания позволяющие его экономить - бесценны.",
    rating: 5
  },
  {
    id: 6,
    name: "Марина",
    image: "https://cdn.poehali.dev/files/4bcae55c-ab49-4d15-86a3-ac2b7a579a4e.png",
    text: "Отличная программа, но не хватило живого общения с преподавателем. Вопросы иногда копились, а ответы приходилось ждать. Зато практики действительно много и она полезная!",
    highlight: "Цена адекватная, контент качественный. Минус звезда за недостаточную обратную связь от куратора на тарифе БАЗА.",
    rating: 4
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Отзывы</span> студентов
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Реальные истории успеха наших выпускников
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        size={16} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                {testimonial.highlight && (
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-l-4 border-cyan-500 pl-4 py-2 rounded-r-lg">
                    <p className="text-cyan-100 text-sm font-medium italic">
                      "{testimonial.highlight}"
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-center text-cyan-400">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  <span className="text-sm">Проверенный отзыв</span>
                </div>
                <Icon name="Quote" className="text-slate-600" size={20} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base">
          <Icon name="Users" className="text-cyan-400 mr-2" size={20} />
          <span className="text-white font-medium">Более 10,000 довольных студентов по всему миру. Онлайн+офлайн.</span>
        </div>
      </div>
    </section>
  );
}