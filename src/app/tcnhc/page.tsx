import { redirect } from "next/navigation";

import { getDefaultArticle } from "@/lib/help-center/registry";

export default function TcnhcHomePage() {
  const article = getDefaultArticle("internal");
  redirect(`/tcnhc/${article.sectionSlug}/${article.slug}`);
}
