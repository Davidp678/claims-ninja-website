import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { moldPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: moldPage.metaTitle,
  description: moldPage.metaDescription,
  path: moldPage.path,
});

export default function MoldPage() {
  return (
    <MarketingPageShell
      eyebrow={moldPage.eyebrow}
      title={moldPage.title}
      description={moldPage.description}
      features={moldPage.features}
    />
  );
}
