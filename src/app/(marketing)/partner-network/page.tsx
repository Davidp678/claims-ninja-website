import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { partnerNetworkPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export const metadata = pageMetadata({
  title: partnerNetworkPage.metaTitle,
  description: partnerNetworkPage.metaDescription,
  path: partnerNetworkPage.path,
});

export default function PartnerNetworkPage() {
  return (
    <MarketingPageShell
      eyebrow={partnerNetworkPage.eyebrow}
      title={partnerNetworkPage.title}
      description={partnerNetworkPage.description}
      features={partnerNetworkPage.features}
      siteFaq={SITE_FAQ.partnerNetwork}
    />
  );
}
