export const ONBOARDING_STAGES = [
  "claim",
  "company",
  "agreement",
  "billing",
  "account",
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
  agreement: "Agreement",
  billing: "Billing",
  account: "Account",
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
  const i = stageIndex(stage);
  if (i < 0) return null;
  if (i < ONBOARDING_STAGES.length - 1) return ONBOARDING_STAGES[i + 1]!;
  return "verify";
}

export function stagePath(stage: OnboardingRoute): string {
  return `/onboarding/${stage}`;
}
