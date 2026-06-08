import { PricingPage } from "@/components/pricing/PricingPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/pricing"].metaTitle,
  description: ES_PAGE_META["/pricing"].metaDescription,
  path: "/es/pricing",
  locale: "es",
});

export default function SpanishPricingPage() {
  return <PricingPage locale="es" />;
}
