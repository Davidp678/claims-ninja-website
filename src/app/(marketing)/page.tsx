import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { ProofIntelligenceSection } from "@/components/sections/ProofIntelligenceSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <CalculatorSection />
      <ProofIntelligenceSection />
      <PartnersSection />
      <TestimonialsSection />
      <SiteFaqSection {...SITE_FAQ.home} />
      <CtaSection />
    </>
  );
}
