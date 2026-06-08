import { MoldClaimsPage } from "@/components/solutions/MoldClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/mold"].metaTitle,
  description: ES_PAGE_META["/solutions/mold"].metaDescription,
  path: "/es/solutions/mold",
  locale: "es",
});

export default function SpanishMoldPage() {
  return <MoldClaimsPage locale="es" />;
}
