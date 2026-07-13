import { CommercialClaimsPage } from "@/components/solutions/CommercialClaimsPage";
import { COMMERCIAL_HERO_IMAGE } from "@/lib/commercial-page";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/commercial"].metaTitle,
  description: ES_PAGE_META["/solutions/commercial"].metaDescription,
  path: "/es/solutions/commercial",
  locale: "es",
  image: COMMERCIAL_HERO_IMAGE.src,
});

export default function SpanishCommercialPage() {
  return <CommercialClaimsPage locale="es" />;
}
