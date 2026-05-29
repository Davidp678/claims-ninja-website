import { CommunicationHubPage } from "@/components/platform/CommunicationHubPage";
import { pageMetadata } from "@/lib/metadata";
import { communicationHubPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: communicationHubPage.metaTitle,
  description: communicationHubPage.metaDescription,
  path: communicationHubPage.path,
});

export default function CommunicationHubPageRoute() {
  return <CommunicationHubPage />;
}
