import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { ProofIntelligenceSection } from "@/components/sections/ProofIntelligenceSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WAVE1_ES_META } from "@/lib/i18n/wave1-es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadataWithLocale({
  title: WAVE1_ES_META["/"].metaTitle,
  description: WAVE1_ES_META["/"].metaDescription,
  path: "/es",
  locale: "es",
});

export default function SpanishHome() {
  return (
    <>
      <Hero locale="es" />
      <ProcessSection locale="es" />
      <CalculatorSection locale="es" />
      <ProofIntelligenceSection locale="es" />
      <PartnersSection locale="es" />
      <TestimonialsSection locale="es" />
      <SiteFaqSection {...SITE_FAQ.home} locale="es" />
      <CtaSection locale="es" />
    </>
  );
}
