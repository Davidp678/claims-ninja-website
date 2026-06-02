import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { videosPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: videosPage.metaTitle,
  description: videosPage.metaDescription,
  path: videosPage.path,
});

export default function VideosPage() {
  return (
    <MarketingPageShell
      eyebrow={videosPage.eyebrow}
      title={videosPage.title}
      description={videosPage.description}
      features={videosPage.features}
      siteFaq={SITE_FAQ.videos}
    />
  );
}
