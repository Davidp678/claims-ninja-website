import { GuideHubPage } from "@/components/guides/GuideHubPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/resources/guides"].metaTitle,
  description: ES_PAGE_META["/resources/guides"].metaDescription,
  path: "/es/resources/guides",
  locale: "es",
});

export default function SpanishGuideHubPage() {
  return <GuideHubPage locale="es" />;
}
