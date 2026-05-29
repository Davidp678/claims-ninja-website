import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { aboutPage } from "@/lib/marketing-pages";

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
    />
  );
}
