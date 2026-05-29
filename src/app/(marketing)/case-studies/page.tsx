import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { caseStudiesPage } from "@/lib/marketing-pages";

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
    />
  );
}
