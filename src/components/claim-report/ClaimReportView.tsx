import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { ClaimReportData } from "@/lib/claim-report-data";

import { ClaimReportBackdrop } from "./ClaimReportBackdrop";
import { ClaimReportHero } from "./ClaimReportHero";
import { ExecutiveSummaryPanel } from "./ExecutiveSummaryPanel";
import { FindingsGrid } from "./FindingsGrid";
import { NextStepsList } from "./NextStepsList";
import { OpportunityScorePanel } from "./OpportunityScorePanel";
import { ReportDisclaimers } from "./ReportDisclaimers";
import { RevenueOpportunityBand } from "./RevenueOpportunityBand";

type ClaimReportViewProps = {
  data: ClaimReportData;
};

export function ClaimReportView({ data }: ClaimReportViewProps) {
  const { aiAnalysis } = data.persisted;

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-black pb-24">
      <ClaimReportBackdrop />
      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-14 sm:space-y-16 lg:space-y-20">
          <ClaimReportHero
            shortRef={data.shortRef}
            analyzedAt={data.persisted.analyzedAt}
            aiModel={data.persisted.aiModel}
            context={data.context}
          />
          <OpportunityScorePanel analysis={aiAnalysis} />
          <ExecutiveSummaryPanel summary={aiAnalysis.summary} />
          <RevenueOpportunityBand range={aiAnalysis.estimatedMissedRevenueRange} />
          <FindingsGrid findings={aiAnalysis.findings} />
          <NextStepsList steps={aiAnalysis.nextSteps} />
          <ReportDisclaimers disclaimers={aiAnalysis.disclaimers} />
          <div className="flex flex-col items-center gap-4 border-t border-white/8 pt-12 text-center sm:flex-row sm:justify-center">
            <Button href="/#calculator" size="lg">
              Request full supplement review
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Back to Claims Ninja
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
