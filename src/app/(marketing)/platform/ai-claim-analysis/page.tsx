import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { aiClaimAnalysisPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: aiClaimAnalysisPage.metaTitle,
  description: aiClaimAnalysisPage.metaDescription,
  path: aiClaimAnalysisPage.path,
});

export default function AiClaimAnalysisPage() {
  return (
    <MarketingPageShell
      eyebrow={aiClaimAnalysisPage.eyebrow}
      title={aiClaimAnalysisPage.title}
      description={aiClaimAnalysisPage.description}
      features={aiClaimAnalysisPage.features}
    />
  );
}
