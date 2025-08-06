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
import AnimatedBackground from '@/components/ui/animated-background';
import ChatWidget from '@/components/ChatWidget';

export default function Index() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
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
      <ChatWidget />
    </div>
  );
}