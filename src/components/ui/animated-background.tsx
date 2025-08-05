import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-shift">
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-pink-900/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-800/20 to-slate-800/40 animate-float"></div>
      </div>

      {/* Animated dots pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 animate-dots-float"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.8) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.8) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 10%, rgba(34, 197, 94, 0.8) 1px, transparent 1px),
            radial-gradient(circle at 10% 60%, rgba(236, 72, 153, 0.8) 1.8px, transparent 1.8px)
          `,
          backgroundSize: '50px 50px, 70px 70px, 30px 30px, 60px 60px',
          backgroundPosition: '0 0, 25px 25px, 10px 10px, 35px 35px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle-${i % 4 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-glow-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float-slow"></div>
    </div>
  );
};

export default AnimatedBackground;