import { CommercialClaimsPage } from "@/components/solutions/CommercialClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/commercial"].metaTitle,
  description: ES_PAGE_META["/solutions/commercial"].metaDescription,
  path: "/es/solutions/commercial",
  locale: "es",
});

export default function SpanishCommercialPage() {
  return <CommercialClaimsPage locale="es" />;
}
