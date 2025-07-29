import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import VideoTestimonialsSection from '@/components/sections/VideoTestimonialsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProgramSection from '@/components/sections/ProgramSection';
import DirectionsSection from '@/components/sections/DirectionsSection';
import PricingSection from '@/components/sections/PricingSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import FormSection from '@/components/sections/FormSection';

export default function Index() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection scrollToForm={scrollToForm} scrollToSection={scrollToSection} />
      <VideoTestimonialsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ProgramSection scrollToForm={scrollToForm} />
      <DirectionsSection scrollToForm={scrollToForm} />
      <PricingSection scrollToForm={scrollToForm} />
      <AdvantagesSection />
      <FormSection />
    </div>
  );
}