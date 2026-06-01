import { RoofingClaimsPage } from "@/components/solutions/RoofingClaimsPage";
import { pageMetadata } from "@/lib/metadata";
import { ROOFING_META } from "@/lib/roofing-page";

export const metadata = pageMetadata({
  title: ROOFING_META.metaTitle,
  description: ROOFING_META.metaDescription,
  path: ROOFING_META.path,
});

export default function RoofingPage() {
  return <RoofingClaimsPage />;
}
