import { PlatformOverviewPage } from "@/components/platform/PlatformOverviewPage";
import { WAVE1_ES_META } from "@/lib/i18n/wave1-es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: WAVE1_ES_META["/platform"].metaTitle,
  description: WAVE1_ES_META["/platform"].metaDescription,
  path: "/es/platform",
  locale: "es",
});

export default function SpanishPlatformPage() {
  return <PlatformOverviewPage />;
}
