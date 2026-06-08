import { ClaimTrackingPage } from "@/components/platform/ClaimTrackingPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform/claim-tracking"].metaTitle,
  description: ES_PAGE_META["/platform/claim-tracking"].metaDescription,
  path: "/es/platform/claim-tracking",
  locale: "es",
});

export default function SpanishClaimTrackingPage() {
  return <ClaimTrackingPage locale="es" />;
}
