import { ClientPortalPage } from "@/components/platform/ClientPortalPage";
import { pageMetadata } from "@/lib/metadata";
import { CLIENT_PORTAL_META } from "@/lib/client-portal-page";

export const metadata = pageMetadata({
  title: CLIENT_PORTAL_META.metaTitle,
  description: CLIENT_PORTAL_META.metaDescription,
  path: CLIENT_PORTAL_META.path,
});

export default function ClientPortalPageRoute() {
  return <ClientPortalPage />;
}
