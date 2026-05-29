import { ClaimTrackingPage } from "@/components/platform/ClaimTrackingPage";
import { pageMetadata } from "@/lib/metadata";
import { claimTrackingPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: claimTrackingPage.metaTitle,
  description: claimTrackingPage.metaDescription,
  path: claimTrackingPage.path,
});

export default function ClaimTrackingPageRoute() {
  return <ClaimTrackingPage />;
}
