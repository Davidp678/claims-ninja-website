/**
 * Public onboarding journey.
 * Legal clickwrap is placed after OTP verification so acceptance evidence
 * always binds a verified identity.
 */
export const ONBOARDING_STAGES = [
  "claim",
  "company",
  "account",
  "agreement",
  "billing",
] as const;

export type OnboardingStage = (typeof ONBOARDING_STAGES)[number];

export const ONBOARDING_JOURNEY_ROUTES = [
  ...ONBOARDING_STAGES,
  "verify",
  "activated",
] as const;

export type OnboardingRoute = (typeof ONBOARDING_JOURNEY_ROUTES)[number];

export const STAGE_LABELS: Record<OnboardingStage, string> = {
  claim: "Claim",
  company: "Company",
  account: "Account",
  agreement: "Agreement",
  billing: "Billing",
};

export function stageIndex(stage: OnboardingStage): number {
  return ONBOARDING_STAGES.indexOf(stage);
}

export function isOnboardingStage(value: string): value is OnboardingStage {
  return (ONBOARDING_STAGES as readonly string[]).includes(value);
}

export function nextStage(
  stage: OnboardingStage,
): OnboardingStage | "verify" | null {
  if (stage === "account") return "verify";
  if (stage === "company") return "account";
  if (stage === "claim") return "company";
  if (stage === "agreement") return "billing";
  if (stage === "billing") return null;
  return null;
}

export function stagePath(stage: OnboardingRoute): string {
  return `/onboarding/${stage}`;
}
