import React, { useRef, useState, useEffect } from 'react';
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragDelta = useRef(0);
  const total = testimonials.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) setCurrent(c => (c + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isDragging, total]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    dragDelta.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDelta.current = e.clientX - dragStart.current;
  };

  const onPointerUp = () => {
    if (Math.abs(dragDelta.current) > 50) {
      if (dragDelta.current < 0) goTo(current + 1);
      else goTo(current - 1);
    }
    setIsDragging(false);
    dragDelta.current = 0;
  };

  const getVisible = () => {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    return [prev, current, next];
  };

  const [prev, curr, next] = getVisible();

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Отзывы</span> студентов
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          Реальные истории успеха наших выпускников
        </p>
      </div>

      {/* Карусель */}
      <div className="relative select-none">
        {/* Кнопки */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 border border-slate-600 hover:border-cyan-500/60 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110"
        >
          <Icon name="ChevronLeft" size={22} />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 border border-slate-600 hover:border-cyan-500/60 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110"
        >
          <Icon name="ChevronRight" size={22} />
        </button>

        {/* Трек */}
        <div
          ref={trackRef}
          className="overflow-hidden mx-6 sm:mx-10"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div className="flex items-stretch gap-4 sm:gap-6 justify-center py-4">
            {/* Предыдущая — затемнённая */}
            <div className="hidden md:block w-[280px] lg:w-[320px] shrink-0 opacity-40 scale-95 transition-all duration-500 cursor-pointer" onClick={() => goTo(current - 1)}>
              <TestimonialCard testimonial={testimonials[prev]} />
            </div>

            {/* Активная */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] shrink-0 transition-all duration-500 z-10">
              <TestimonialCard testimonial={testimonials[curr]} active />
            </div>

            {/* Следующая — затемнённая */}
            <div className="hidden md:block w-[280px] lg:w-[320px] shrink-0 opacity-40 scale-95 transition-all duration-500 cursor-pointer" onClick={() => goTo(current + 1)}>
              <TestimonialCard testimonial={testimonials[next]} />
            </div>
          </div>
        </div>

        {/* Точки */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base">
          <Icon name="Users" className="text-cyan-400 mr-2" size={20} />
          <span className="text-white font-medium">Более 10,000 довольных студентов по всему миру. Онлайн+офлайн.</span>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, active }: { testimonial: typeof testimonials[0]; active?: boolean }) {
  return (
    <Card className={`h-full bg-slate-800/60 border-slate-700 backdrop-blur-sm transition-all duration-300 ${active ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' : ''}`}>
      <CardContent className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-3 shrink-0"
          />
          <div>
            <h4 className="text-base font-semibold text-white">{testimonial.name}</h4>
            <div className="flex items-center gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed flex-1">"{testimonial.text}"</p>

        {testimonial.highlight && (
          <div className="mt-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-l-4 border-cyan-500 pl-4 py-2 rounded-r-lg">
            <p className="text-cyan-100 text-sm italic">"{testimonial.highlight}"</p>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center text-cyan-400">
            <Icon name="MessageCircle" className="mr-2" size={15} />
            <span className="text-xs">Проверенный отзыв</span>
          </div>
          <Icon name="Quote" className="text-slate-600" size={18} />
        </div>
      </CardContent>
    </Card>
  );
}