import { MoldClaimsPage } from "@/components/solutions/MoldClaimsPage";
import { pageMetadata } from "@/lib/metadata";
import { MOLD_META } from "@/lib/mold-page";

export const metadata = pageMetadata({
  title: MOLD_META.metaTitle,
  description: MOLD_META.metaDescription,
  path: MOLD_META.path,
});

export default function MoldPage() {
  return <MoldClaimsPage />;
}
