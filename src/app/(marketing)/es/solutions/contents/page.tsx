import { ContentsRestorationClaimsPage } from "@/components/solutions/ContentsRestorationClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/contents"].metaTitle,
  description: ES_PAGE_META["/solutions/contents"].metaDescription,
  path: "/es/solutions/contents",
  locale: "es",
});

export default function SpanishContentsPage() {
  return <ContentsRestorationClaimsPage locale="es" />;
}
