import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { guidesPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: guidesPage.metaTitle,
  description: guidesPage.metaDescription,
  path: guidesPage.path,
});

export default function GuidesPage() {
  return (
    <MarketingPageShell
      eyebrow={guidesPage.eyebrow}
      title={guidesPage.title}
      description={guidesPage.description}
      features={guidesPage.features}
    />
  );
}
