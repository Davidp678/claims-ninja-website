import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { blogPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: blogPage.metaTitle,
  description: blogPage.metaDescription,
  path: blogPage.path,
});

export default function BlogPage() {
  return (
    <MarketingPageShell
      eyebrow={blogPage.eyebrow}
      title={blogPage.title}
      description={blogPage.description}
      features={blogPage.features}
      siteFaq={SITE_FAQ.blog}
    />
  );
}
