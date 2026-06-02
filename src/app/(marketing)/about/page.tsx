import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  path: aboutPage.path,
});

export default function AboutPage() {
  return (
    <MarketingPageShell
      eyebrow={aboutPage.eyebrow}
      title={aboutPage.title}
      description={aboutPage.description}
      features={aboutPage.features}
      siteFaq={SITE_FAQ.about}
    />
  );
}
