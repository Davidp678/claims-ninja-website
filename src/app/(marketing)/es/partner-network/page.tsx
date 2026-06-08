import { PartnerNetworkPage } from "@/components/partner-network/PartnerNetworkPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/partner-network"].metaTitle,
  description: ES_PAGE_META["/partner-network"].metaDescription,
  path: "/es/partner-network",
  locale: "es",
});

export default function SpanishPartnerNetworkPage() {
  return <PartnerNetworkPage locale="es" />;
}
