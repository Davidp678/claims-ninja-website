import { RoofingClaimsPage } from "@/components/solutions/RoofingClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/roofing"].metaTitle,
  description: ES_PAGE_META["/solutions/roofing"].metaDescription,
  path: "/es/solutions/roofing",
  locale: "es",
});

export default function SpanishRoofingPage() {
  return <RoofingClaimsPage locale="es" />;
}
