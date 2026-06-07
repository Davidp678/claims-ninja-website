import { PricingPage } from "@/components/pricing/PricingPage";
import { pageMetadata } from "@/lib/metadata";
import { PRICING_META } from "@/lib/pricing-page";

export const metadata = pageMetadata({
  title: PRICING_META.metaTitle,
  description: PRICING_META.metaDescription,
  path: PRICING_META.path,
});

export default function Page() {
  return <PricingPage />;
}
