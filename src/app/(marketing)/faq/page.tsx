import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
  path: faqPage.path,
});

export default function FaqPage() {
  return (
    <MarketingPageShell
      eyebrow={faqPage.eyebrow}
      title={faqPage.title}
      description={faqPage.description}
      features={faqPage.features}
    />
  );
}
