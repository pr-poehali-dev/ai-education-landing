import React from 'react';
import StickyHeader from '@/components/sections/StickyHeader';
import HeroSection from '@/components/sections/HeroSection';

import ScheduleSection from '@/components/sections/ScheduleSection';
import TrustSection from '@/components/sections/TrustSection';
import CalendarSection from '@/components/sections/CalendarSection';
import ProfessionsSection from '@/components/sections/ProfessionsSection';
import SundayAISection from '@/components/sections/SundayAISection';
import SundayAICompactSection from '@/components/sections/SundayAICompactSection';
import VideoWorksSection from '@/components/sections/VideoWorksSection';
import PhotoWorksSection from '@/components/sections/PhotoWorksSection';
import AIToolsSection from '@/components/sections/AIToolsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProgramSection from '@/components/sections/ProgramSection';
import PricingSection from '@/components/sections/PricingSection';
import CorporatePaymentSection from '@/components/sections/CorporatePaymentSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import FormSection from '@/components/sections/FormSection';
import Footer from '@/components/sections/Footer';
import CTAButton from '@/components/ui/cta-button';
import AnimatedBackground from '@/components/ui/animated-background';
import ChatWidget from '@/components/ChatWidget';
import ScrollReveal from '@/components/ui/scroll-reveal';

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

      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>

      <ScrollReveal>
        <ScheduleSection />
      </ScrollReveal>

      <ScrollReveal direction="left">
        <CalendarSection />
      </ScrollReveal>

      <ScrollReveal>
        <SundayAISection />
      </ScrollReveal>

      <ScrollReveal direction="right">
        <AIToolsSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal>
        <ProfessionsSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal direction="left">
        <VideoWorksSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal direction="right">
        <PhotoWorksSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal>
        <ProgramSection scrollToForm={scrollToForm} />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal>
        <PricingSection scrollToForm={scrollToForm} />
      </ScrollReveal>

      <ScrollReveal direction="left">
        <SundayAICompactSection />
      </ScrollReveal>

      <ScrollReveal direction="right">
        <CorporatePaymentSection />
      </ScrollReveal>

      <ScrollReveal>
        <AdvantagesSection />
      </ScrollReveal>

      <CTAButton onClick={scrollToForm} />

      <ScrollReveal>
        <FormSection />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>

      <ChatWidget />
    </div>
  );
}
