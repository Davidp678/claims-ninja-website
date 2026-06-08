import { CommunicationHubPage } from "@/components/platform/CommunicationHubPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform/communication-hub"].metaTitle,
  description: ES_PAGE_META["/platform/communication-hub"].metaDescription,
  path: "/es/platform/communication-hub",
  locale: "es",
});

export default function SpanishCommunicationHubPage() {
  return <CommunicationHubPage locale="es" />;
}
