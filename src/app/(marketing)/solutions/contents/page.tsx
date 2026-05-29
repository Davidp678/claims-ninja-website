import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { contentsPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: contentsPage.metaTitle,
  description: contentsPage.metaDescription,
  path: contentsPage.path,
});

export default function ContentsPage() {
  return (
    <MarketingPageShell
      eyebrow={contentsPage.eyebrow}
      title={contentsPage.title}
      description={contentsPage.description}
      features={contentsPage.features}
    />
  );
}
