import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getCompanyContent } from "@/lib/i18n/content/company";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export function ReviewsPage({ locale = "en" }: { locale?: Locale }) {
  const reviews = getCompanyContent(locale).reviews;

  return (
    <>
      <Section className="pt-28 sm:pt-32 lg:pt-36">
        <SectionHeading
          as="h1"
          eyebrow={reviews.eyebrow}
          title={reviews.title}
          description={reviews.description}
          align="left"
          className="max-w-3xl"
        />
      </Section>

      <TestimonialsSection locale={locale} />
      <SiteFaqSection {...SITE_FAQ.reviews} locale={locale} />
      <MarketingCtaPanel locale={locale} />
    </>
  );
}
