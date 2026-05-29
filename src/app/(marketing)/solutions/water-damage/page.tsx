import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { waterDamagePage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: waterDamagePage.metaTitle,
  description: waterDamagePage.metaDescription,
  path: waterDamagePage.path,
});

export default function WaterDamagePage() {
  return (
    <MarketingPageShell
      eyebrow={waterDamagePage.eyebrow}
      title={waterDamagePage.title}
      description={waterDamagePage.description}
      features={waterDamagePage.features}
    />
  );
}
