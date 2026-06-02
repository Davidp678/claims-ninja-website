import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { caseStudiesPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: caseStudiesPage.metaTitle,
  description: caseStudiesPage.metaDescription,
  path: caseStudiesPage.path,
});

export default function CaseStudiesPage() {
  return (
    <MarketingPageShell
      eyebrow={caseStudiesPage.eyebrow}
      title={caseStudiesPage.title}
      description={caseStudiesPage.description}
      features={caseStudiesPage.features}
      siteFaq={SITE_FAQ.caseStudies}
    />
  );
}
