import { WaterDamageClaimsPage } from "@/components/solutions/WaterDamageClaimsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/solutions/water-damage"].metaTitle,
  description: ES_PAGE_META["/solutions/water-damage"].metaDescription,
  path: "/es/solutions/water-damage",
  locale: "es",
});

export default function SpanishWaterDamagePage() {
  return <WaterDamageClaimsPage locale="es" />;
}
