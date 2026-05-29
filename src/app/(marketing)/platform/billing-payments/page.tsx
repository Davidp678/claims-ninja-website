import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import { pageMetadata } from "@/lib/metadata";
import { billingPaymentsPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: billingPaymentsPage.metaTitle,
  description: billingPaymentsPage.metaDescription,
  path: billingPaymentsPage.path,
});

export default function BillingPaymentsPage() {
  return (
    <MarketingPageShell
      eyebrow={billingPaymentsPage.eyebrow}
      title={billingPaymentsPage.title}
      description={billingPaymentsPage.description}
      features={billingPaymentsPage.features}
    />
  );
}
