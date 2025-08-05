import React from 'react';
import StickyHeader from '@/components/sections/StickyHeader';
import HeroSection from '@/components/sections/HeroSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import VideoTestimonialsSection from '@/components/sections/VideoTestimonialsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProgramSection from '@/components/sections/ProgramSection';
import DirectionsSection from '@/components/sections/DirectionsSection';
import PricingSection from '@/components/sections/PricingSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import FormSection from '@/components/sections/FormSection';
import CTAButton from '@/components/ui/cta-button';

export default function Index() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Dots pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.6) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.6) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 10%, rgba(34, 197, 94, 0.6) 1px, transparent 1px),
            radial-gradient(circle at 10% 60%, rgba(236, 72, 153, 0.6) 1.8px, transparent 1.8px)
          `,
          backgroundSize: '50px 50px, 70px 70px, 30px 30px, 60px 60px',
          backgroundPosition: '0 0, 25px 25px, 10px 10px, 35px 35px',
          backgroundRepeat: 'repeat'
        }}
      />
      <StickyHeader scrollToForm={scrollToForm} scrollToSection={scrollToSection} />
      <HeroSection scrollToForm={scrollToForm} scrollToSection={scrollToSection} />
      <ScheduleSection />
      <VideoTestimonialsSection />
      <CTAButton onClick={scrollToForm} />
      <SkillsSection />
      <CTAButton onClick={scrollToForm} />
      <TestimonialsSection />
      <CTAButton onClick={scrollToForm} />
      <ProgramSection scrollToForm={scrollToForm} />
      <CTAButton onClick={scrollToForm} />
      <DirectionsSection scrollToForm={scrollToForm} />
      <CTAButton onClick={scrollToForm} />
      <PricingSection scrollToForm={scrollToForm} />
      <AdvantagesSection />
      <CTAButton onClick={scrollToForm} />
      <FormSection />
    </div>
  );
}