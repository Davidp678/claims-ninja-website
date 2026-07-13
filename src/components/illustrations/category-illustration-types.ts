export type CategoryIllustrationKey =
  | "insurance-supplementing"
  | "water-damage"
  | "fire-damage"
  | "roofing"
  | "documentation"
  | "estimating"
  | "xactimate"
  | "contractor-operations"
  | "public-adjusters"
  | "claim-recovery"
  | "mold"
  | "commercial-claims"
  | "generic";

export type CategoryIllustrationSize = "sm" | "md" | "lg";

export const CATEGORY_ILLUSTRATION_KEYS: readonly CategoryIllustrationKey[] = [
  "insurance-supplementing",
  "water-damage",
  "fire-damage",
  "roofing",
  "documentation",
  "estimating",
  "xactimate",
  "contractor-operations",
  "public-adjusters",
  "claim-recovery",
  "mold",
  "commercial-claims",
  "generic",
] as const;
