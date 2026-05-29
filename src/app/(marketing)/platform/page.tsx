import { PlatformOverviewPage } from "@/components/platform/PlatformOverviewPage";
import { pageMetadata } from "@/lib/metadata";
import { platformOverviewPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: platformOverviewPage.metaTitle,
  description: platformOverviewPage.metaDescription,
  path: platformOverviewPage.path,
});

export default function PlatformOverviewRoute() {
  return <PlatformOverviewPage />;
}
