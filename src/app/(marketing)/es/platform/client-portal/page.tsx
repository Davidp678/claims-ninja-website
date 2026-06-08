import { ClientPortalPage } from "@/components/platform/ClientPortalPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform/client-portal"].metaTitle,
  description: ES_PAGE_META["/platform/client-portal"].metaDescription,
  path: "/es/platform/client-portal",
  locale: "es",
});

export default function SpanishClientPortalPage() {
  return <ClientPortalPage locale="es" />;
}
