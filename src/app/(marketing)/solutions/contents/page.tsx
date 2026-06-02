import { ContentsRestorationClaimsPage } from "@/components/solutions/ContentsRestorationClaimsPage";
import { pageMetadata } from "@/lib/metadata";
import { CONTENTS_RESTORATION_META } from "@/lib/contents-restoration-page";

export const metadata = pageMetadata({
  title: CONTENTS_RESTORATION_META.metaTitle,
  description: CONTENTS_RESTORATION_META.metaDescription,
  path: CONTENTS_RESTORATION_META.path,
});

export default function ContentsPage() {
  return <ContentsRestorationClaimsPage />;
}
