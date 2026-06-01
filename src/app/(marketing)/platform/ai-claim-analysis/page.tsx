import { AiClaimAnalysisPage } from "@/components/platform/AiClaimAnalysisPage";
import { pageMetadata } from "@/lib/metadata";
import { aiClaimAnalysisPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: aiClaimAnalysisPage.metaTitle,
  description: aiClaimAnalysisPage.metaDescription,
  path: aiClaimAnalysisPage.path,
});

export default function AiClaimAnalysisPageRoute() {
  return <AiClaimAnalysisPage />;
}
