import React from 'react';
import ProfessionsCarousel from './ProfessionsCarousel';
import AiCapabilities from './AiCapabilities';
import StudentCasesCarousel from './StudentCasesCarousel';

export default function ProfessionsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">6 профессий</span>, за которые платят в 2026 году
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Рынок ИИ-специалистов растёт на 40% в год. Войди в него сейчас — пока конкуренция ещё низкая
        </p>
      </div>

      <ProfessionsCarousel />

      <AiCapabilities />

      <StudentCasesCarousel />
    </section>
  );
}
