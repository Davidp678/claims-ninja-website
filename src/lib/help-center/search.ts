import type { HelpArticle, HelpPortal } from "@/lib/help-center/types";
import { getArticles } from "@/lib/help-center/registry";

export type HelpSearchResult = {
  sectionSlug: string;
  articleSlug: string;
  title: string;
  excerpt: string;
  score: number;
};

function articleSearchText(article: HelpArticle): string {
  const blockText = article.blocks
    .map((b) => {
      switch (b.type) {
        case "paragraph":
        case "callout":
          return b.text;
        case "heading":
          return b.text;
        case "list":
          return b.items.join(" ");
        case "checklist":
          return b.items.map((i) => i.label).join(" ");
        case "prompt":
          return `${b.title} ${b.text}`;
        case "video":
          return b.title;
        case "link":
          return b.label;
        default:
          return "";
      }
    })
    .join(" ");

  return [article.title, article.excerpt, blockText, ...(article.tags ?? [])].join(" ").toLowerCase();
}

export function searchHelpArticles(
  portal: HelpPortal,
  query: string,
  limit = 20,
): HelpSearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return getArticles(portal)
    .filter((a) => !a.hidden)
    .map((article) => {
      const text = articleSearchText(article);
      let score = 0;
      for (const term of terms) {
        if (article.title.toLowerCase().includes(term)) score += 10;
        if (article.excerpt.toLowerCase().includes(term)) score += 5;
        if (text.includes(term)) score += 1;
      }
      return {
        sectionSlug: article.sectionSlug,
        articleSlug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        score,
      };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
