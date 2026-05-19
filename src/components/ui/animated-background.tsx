import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Базовый фон */}
      <div className="absolute inset-0 bg-[#040818]" />

      {/* Сетка — горизонтальные и вертикальные линии */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Сетка мелкая — второй слой для глубины */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Радиальное свечение в центре — эффект "горизонта" */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Светящийся орб — cyan слева */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          top: '20%', left: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Светящийся орб — purple справа */}
      <div
        className="absolute animate-pulse-glow-delayed"
        style={{
          bottom: '20%', right: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      {/* Горизонтальная линия-горизонт с glow */}
      <div
        className="absolute left-0 right-0 animate-pulse-slow"
        style={{
          top: '62%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.3) 30%, rgba(139, 92, 246, 0.4) 50%, rgba(34, 211, 238, 0.3) 70%, transparent 100%)',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.2), 0 0 60px rgba(139, 92, 246, 0.15)',
        }}
      />

      {/* Тёмная маска сверху и снизу — фокус на центре */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040818] via-transparent to-[#040818] opacity-60" />
    </div>
  );
};

export default AnimatedBackground;
