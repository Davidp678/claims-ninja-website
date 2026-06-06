import type { Metadata } from "next";

import { GuideHubPage } from "@/components/guides/GuideHubPage";
import { guideHubMetadata } from "@/lib/metadata";

export const metadata: Metadata = guideHubMetadata();

export default function ResourcesGuidesPage() {
  return <GuideHubPage />;
}
