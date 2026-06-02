import { PricingPage } from "@/components/marketing/PricingPage";
import { pageMetadata } from "@/lib/metadata";
import { pricingPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: pricingPage.metaTitle,
  description: pricingPage.metaDescription,
  path: pricingPage.path,
});

export default function Page() {
  return <PricingPage />;
}
