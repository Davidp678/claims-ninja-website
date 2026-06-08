import { redirect } from "next/navigation";

import { getDefaultArticle } from "@/lib/help-center/registry";

export default function HelpHomePage() {
  const article = getDefaultArticle("client");
  redirect(`/help/${article.sectionSlug}/${article.slug}`);
}
