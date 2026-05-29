import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { contactPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
  path: contactPage.path,
});

export default function ContactPage() {
  return (
    <MarketingPageShell
      eyebrow={contactPage.eyebrow}
      title={contactPage.title}
      description={contactPage.description}
      features={contactPage.features}
    />
  );
}
