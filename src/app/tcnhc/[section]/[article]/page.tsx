import { notFound } from "next/navigation";

import { HelpCenterShell } from "@/components/help-center/HelpCenterShell";
import { getArticle, getArticles } from "@/lib/help-center/registry";
import { helpArticleMetadata } from "@/lib/help-center/metadata";

type PageProps = {
  params: Promise<{ section: string; article: string }>;
};

export function generateStaticParams() {
  return getArticles("internal")
    .filter((a) => !a.hidden)
    .map((a) => ({ section: a.sectionSlug, article: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { section, article: articleSlug } = await params;
  const article = getArticle("internal", section, articleSlug);
  if (!article) return {};
  return helpArticleMetadata(article);
}

export default async function TcnhcArticlePage({ params }: PageProps) {
  const { section, article: articleSlug } = await params;
  const article = getArticle("internal", section, articleSlug);
  if (!article || article.hidden) notFound();

  return <HelpCenterShell portal="internal" article={article} />;
}
