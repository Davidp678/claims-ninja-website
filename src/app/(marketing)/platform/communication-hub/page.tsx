import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { communicationHubPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: communicationHubPage.metaTitle,
  description: communicationHubPage.metaDescription,
  path: communicationHubPage.path,
});

export default function CommunicationHubPage() {
  return (
    <MarketingPageShell
      eyebrow={communicationHubPage.eyebrow}
      title={communicationHubPage.title}
      description={communicationHubPage.description}
      features={communicationHubPage.features}
    />
  );
}
