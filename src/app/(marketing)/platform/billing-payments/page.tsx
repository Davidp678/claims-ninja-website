import { BillingPaymentsPage } from "@/components/platform/BillingPaymentsPage";
import { pageMetadata } from "@/lib/metadata";
import { billingPaymentsPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: billingPaymentsPage.metaTitle,
  description: billingPaymentsPage.metaDescription,
  path: billingPaymentsPage.path,
});

export default function BillingPaymentsPageRoute() {
  return <BillingPaymentsPage />;
}
