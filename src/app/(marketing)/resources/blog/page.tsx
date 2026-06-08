import { BlogExploreTopics } from "@/components/blog/BlogExploreTopics";
import { BlogFeaturedArticle } from "@/components/blog/BlogFeaturedArticle";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogHubContent } from "@/components/blog/BlogHubContent";
import { BlogHubJsonLd } from "@/components/blog/BlogHubJsonLd";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import {
  BLOG_HUB_CTA,
  getFeaturedPost,
  getLatestPosts,
  getRecommendedPosts,
} from "@/lib/blog-page";
import { blogHubMetadata } from "@/lib/metadata";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = blogHubMetadata();

export default function ResourcesBlogPage() {
  const featured = getFeaturedPost();
  const latestPosts = getLatestPosts(6);
  const recommendedPosts = getRecommendedPosts(4);

  return (
    <>
      <BlogHubJsonLd />
      <BlogHero />
      {featured ? <BlogFeaturedArticle post={featured} /> : null}
      <BlogHubContent latestPosts={latestPosts} recommendedPosts={recommendedPosts} />
      <BlogExploreTopics />
      <SiteFaqSection {...SITE_FAQ.blog} />
      <MarketingCtaPanel {...BLOG_HUB_CTA} />
    </>
  );
}
