import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { reviewsPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: reviewsPage.metaTitle,
  description: reviewsPage.metaDescription,
  path: reviewsPage.path,
});

export default function ReviewsPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-32 lg:pt-36">
        <SectionHeading
          eyebrow={reviewsPage.eyebrow}
          title={reviewsPage.title}
          description={reviewsPage.description}
          align="left"
          className="max-w-3xl"
        />
      </Section>

      <TestimonialsSection />
      <SiteFaqSection {...SITE_FAQ.reviews} />
      <MarketingCtaPanel />
    </>
  );
}
