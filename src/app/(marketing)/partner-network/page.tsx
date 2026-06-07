import { PartnerNetworkPage } from "@/components/partner-network/PartnerNetworkPage";
import { PARTNER_NETWORK_META } from "@/lib/partner-network-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: PARTNER_NETWORK_META.metaTitle,
  description: PARTNER_NETWORK_META.metaDescription,
  path: PARTNER_NETWORK_META.path,
});

export default function PartnerNetworkRoute() {
  return <PartnerNetworkPage />;
}
