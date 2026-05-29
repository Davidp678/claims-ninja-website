import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { reviewsPage } from "@/lib/marketing-pages";

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
      <MarketingCtaPanel />
    </>
  );
}
