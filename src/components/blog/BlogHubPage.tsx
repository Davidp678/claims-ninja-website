import { BlogExploreTopics } from "@/components/blog/BlogExploreTopics";
import { BlogFeaturedArticle } from "@/components/blog/BlogFeaturedArticle";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogHubContent } from "@/components/blog/BlogHubContent";
import { BlogHubJsonLd } from "@/components/blog/BlogHubJsonLd";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import {
  getFeaturedPost,
  getLatestPosts,
  getRecommendedPosts,
} from "@/lib/blog-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export function BlogHubPage({ locale = "en" }: { locale?: Locale }) {
  const blog = getResourcesContent(locale).blog;
  const featured = getFeaturedPost();
  const latestPosts = getLatestPosts(6);
  const recommendedPosts = getRecommendedPosts(4);

  return (
    <>
      <BlogHubJsonLd />
      <BlogHero locale={locale} />
      {featured ? <BlogFeaturedArticle post={featured} locale={locale} /> : null}
      <BlogHubContent
        latestPosts={latestPosts}
        recommendedPosts={recommendedPosts}
        locale={locale}
      />
      <BlogExploreTopics locale={locale} />
      <SiteFaqSection {...SITE_FAQ.blog} locale={locale} />
      <MarketingCtaPanel {...blog.hubCta} locale={locale} />
    </>
  );
}
