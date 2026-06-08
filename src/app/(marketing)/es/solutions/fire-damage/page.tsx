import { FireDamageClaimsPage } from "@/components/solutions/FireDamageClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/fire-damage"].metaTitle,
  description: ES_PAGE_META["/solutions/fire-damage"].metaDescription,
  path: "/es/solutions/fire-damage",
  locale: "es",
});

export default function SpanishFireDamagePage() {
  return <FireDamageClaimsPage locale="es" />;
}
