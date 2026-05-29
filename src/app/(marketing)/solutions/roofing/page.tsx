import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { roofingPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: roofingPage.metaTitle,
  description: roofingPage.metaDescription,
  path: roofingPage.path,
});

export default function RoofingPage() {
  return (
    <MarketingPageShell
      eyebrow={roofingPage.eyebrow}
      title={roofingPage.title}
      description={roofingPage.description}
      features={roofingPage.features}
    />
  );
}
