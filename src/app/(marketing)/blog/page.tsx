import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { blogPage } from "@/lib/marketing-pages";

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
    />
  );
}
