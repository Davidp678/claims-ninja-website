import { BillingPaymentsPage } from "@/components/platform/BillingPaymentsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform/billing-payments"].metaTitle,
  description: ES_PAGE_META["/platform/billing-payments"].metaDescription,
  path: "/es/platform/billing-payments",
  locale: "es",
});

export default function SpanishBillingPaymentsPage() {
  return <BillingPaymentsPage locale="es" />;
}
