/**
 * Public onboarding journey.
 * Claim → Company → Agreement → Billing → Account → OTP → Activated.
 * Legal clickwrap runs before account creation; OTP verifies identity after Account.
 */
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

export function isOnboardingRoute(value: string): value is OnboardingRoute {
  return (ONBOARDING_JOURNEY_ROUTES as readonly string[]).includes(value);
}

export function nextStage(
  stage: OnboardingStage,
): OnboardingStage | "verify" | null {
  if (stage === "claim") return "company";
  if (stage === "company") return "agreement";
  if (stage === "agreement") return "billing";
  if (stage === "billing") return "account";
  if (stage === "account") return "verify";
  return null;
}

export function stagePath(stage: OnboardingRoute): string {
  return `/onboarding/${stage}`;
}

function journeyRank(value: string | null | undefined): number {
  const order = [
    "started",
    "claim",
    "company",
    "agreement",
    "billing",
    "account",
    "verification",
    "awaiting_verification",
    "verified",
    "activated",
    "provisioning",
    "completed",
    "failed_retryable",
  ];
  const idx = order.indexOf(value ?? "");
  return idx >= 0 ? idx : 0;
}

/**
 * Furthest route the user may open based on durable session status/stage
 * and completion flags. Earlier routes remain editable (backward nav).
 */
export function maxAllowedOnboardingRoute(session: {
  status?: string | null;
  stage?: string | null;
  agreement?: { accepted?: boolean } | null;
}): OnboardingRoute {
  const status = session.status ?? "started";
  const stage = session.stage ?? "claim";
  const reached = Math.max(journeyRank(status), journeyRank(stage));

  if (
    status === "completed" ||
    status === "provisioning" ||
    status === "failed_retryable" ||
    stage === "activated" ||
    status === "verified" ||
    reached >= journeyRank("verified")
  ) {
    return "activated";
  }

  if (
    status === "awaiting_verification" ||
    stage === "verification" ||
    reached >= journeyRank("verification")
  ) {
    return "verify";
  }

  if (status === "account" || stage === "account" || reached >= journeyRank("account")) {
    return "account";
  }

  if (status === "billing" || stage === "billing" || reached >= journeyRank("billing")) {
    return "billing";
  }

  if (
    status === "agreement" ||
    stage === "agreement" ||
    reached >= journeyRank("agreement") ||
    session.agreement?.accepted
  ) {
    return session.agreement?.accepted ? "billing" : "agreement";
  }

  if (status === "company" || stage === "company" || reached >= journeyRank("company")) {
    return "company";
  }

  return "claim";
}

export function routeRank(route: OnboardingRoute): number {
  const order: OnboardingRoute[] = [
    "claim",
    "company",
    "agreement",
    "billing",
    "account",
    "verify",
    "activated",
  ];
  return order.indexOf(route);
}

export function isRouteAllowed(
  requested: OnboardingRoute,
  maxAllowed: OnboardingRoute,
): boolean {
  return routeRank(requested) <= routeRank(maxAllowed);
}
