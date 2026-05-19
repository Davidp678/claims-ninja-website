import type { Metadata } from "next";

import { ClaimReportView } from "@/components/claim-report/ClaimReportView";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { loadClaimReportData } from "@/lib/claim-report-data";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ claimSessionId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { claimSessionId } = await params;
  return {
    title: "AI Claim Intelligence Report",
    robots: { index: false, follow: false },
    description: `Claims Ninja intelligence report for session ${claimSessionId.slice(0, 8)}`,
  };
}

export default async function ClaimReportPage({ params }: PageProps) {
  const { claimSessionId } = await params;
  const data = await loadClaimReportData(claimSessionId);

  return (
    <>
      <Navbar />
      <main>
        <ClaimReportView data={data} />
      </main>
      <Footer />
    </>
  );
}
