import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { pricingPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: pricingPage.metaTitle,
  description: pricingPage.metaDescription,
  path: pricingPage.path,
});

export default function PricingPage() {
  return (
    <MarketingPageShell
      eyebrow={pricingPage.eyebrow}
      title={pricingPage.title}
      description={pricingPage.description}
      features={pricingPage.features}
    />
  );
}
