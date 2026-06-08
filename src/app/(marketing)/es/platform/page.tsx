import { PlatformOverviewPage } from "@/components/platform/PlatformOverviewPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform"].metaTitle,
  description: ES_PAGE_META["/platform"].metaDescription,
  path: "/es/platform",
  locale: "es",
});

export default function SpanishPlatformPage() {
  return <PlatformOverviewPage locale="es" />;
}
