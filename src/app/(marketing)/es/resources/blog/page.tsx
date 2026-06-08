import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/resources/blog"].metaTitle,
  description: ES_PAGE_META["/resources/blog"].metaDescription,
  path: "/es/resources/blog",
  locale: "es",
});

export default function SpanishBlogHubPage() {
  return <BlogHubPage locale="es" />;
}
