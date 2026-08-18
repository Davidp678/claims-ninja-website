import type { Metadata } from "next";

import { PricingDemoPage } from "@/components/pricing-demo/PricingDemoPage";

export const metadata: Metadata = {
  title: "Pricing Demo | Claims Ninja",
  description: "Internal prototype for the Claims Ninja claims production pricing experience.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PricingDemoPage />;
}
