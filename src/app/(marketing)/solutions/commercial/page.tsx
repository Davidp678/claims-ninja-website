import { CommercialClaimsPage } from "@/components/solutions/CommercialClaimsPage";
import { COMMERCIAL_META } from "@/lib/commercial-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: COMMERCIAL_META.metaTitle,
  description: COMMERCIAL_META.metaDescription,
  path: COMMERCIAL_META.path,
});

export default function CommercialPage() {
  return <CommercialClaimsPage />;
}
