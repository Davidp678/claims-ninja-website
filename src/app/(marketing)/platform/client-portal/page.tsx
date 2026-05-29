import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { clientPortalPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: clientPortalPage.metaTitle,
  description: clientPortalPage.metaDescription,
  path: clientPortalPage.path,
});

export default function ClientPortalPage() {
  return (
    <MarketingPageShell
      eyebrow={clientPortalPage.eyebrow}
      title={clientPortalPage.title}
      description={clientPortalPage.description}
      features={clientPortalPage.features}
    />
  );
}
