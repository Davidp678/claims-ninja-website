import type { Metadata } from "next";

import { PricingDemoPage } from "@/components/pricing-demo/PricingDemoPage";

export const metadata: Metadata = {
  title: "Claim Support | Working Concept",
  description: "Working concept for contractor-side claim support services and operating boundaries.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PricingDemoPage />;
}
