import { AiClaimAnalysisPage } from "@/components/platform/AiClaimAnalysisPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/platform/ai-claim-analysis"].metaTitle,
  description: ES_PAGE_META["/platform/ai-claim-analysis"].metaDescription,
  path: "/es/platform/ai-claim-analysis",
  locale: "es",
});

export default function SpanishAiClaimAnalysisPage() {
  return <AiClaimAnalysisPage locale="es" />;
}
