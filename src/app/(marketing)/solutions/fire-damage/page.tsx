import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { fireDamagePage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: fireDamagePage.metaTitle,
  description: fireDamagePage.metaDescription,
  path: fireDamagePage.path,
});

export default function FireDamagePage() {
  return (
    <MarketingPageShell
      eyebrow={fireDamagePage.eyebrow}
      title={fireDamagePage.title}
      description={fireDamagePage.description}
      features={fireDamagePage.features}
    />
  );
}
