import { PricingPage } from "@/components/pricing/PricingPage";
import { WAVE1_ES_META } from "@/lib/i18n/wave1-es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: WAVE1_ES_META["/pricing"].metaTitle,
  description: WAVE1_ES_META["/pricing"].metaDescription,
  path: "/es/pricing",
  locale: "es",
});

export default function SpanishPricingPage() {
  return <PricingPage locale="es" />;
}
