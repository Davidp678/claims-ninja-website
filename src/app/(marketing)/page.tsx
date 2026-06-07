import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { ProofIntelligenceSection } from "@/components/sections/ProofIntelligenceSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HOME_META } from "@/lib/home-page";
import { pageMetadata } from "@/lib/metadata";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: HOME_META.metaTitle,
  description: HOME_META.metaDescription,
  path: HOME_META.path,
});

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
