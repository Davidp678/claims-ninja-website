import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { claimTrackingPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: claimTrackingPage.metaTitle,
  description: claimTrackingPage.metaDescription,
  path: claimTrackingPage.path,
});

export default function ClaimTrackingPage() {
  return (
    <MarketingPageShell
      eyebrow={claimTrackingPage.eyebrow}
      title={claimTrackingPage.title}
      description={claimTrackingPage.description}
      features={claimTrackingPage.features}
    />
  );
}
