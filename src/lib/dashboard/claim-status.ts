export const CLAIM_STATUSES = [
  "new",
  "ai_reviewed",
  "human_review",
  "supplement_drafted",
  "sent_to_carrier",
  "closed_won",
  "closed_lost",
] as const;

export type ClaimStatus = (typeof CLAIM_STATUSES)[number];

const STATUS_LABELS: Record<ClaimStatus, string> = {
  new: "New",
  ai_reviewed: "AI Reviewed",
  human_review: "Human Review",
  supplement_drafted: "Supplement Drafted",
  sent_to_carrier: "Sent to Carrier",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
};

export const CLAIM_STATUS_OPTIONS = CLAIM_STATUSES.map((value) => ({
  value,
  label: STATUS_LABELS[value],
}));

export function isClaimStatus(value: string): value is ClaimStatus {
  return (CLAIM_STATUSES as readonly string[]).includes(value);
}

export function formatClaimStatusLabel(status: string): string {
  if (isClaimStatus(status)) {
    return STATUS_LABELS[status];
  }
  return status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function normalizeLeadStatus(raw: string | null | undefined): ClaimStatus {
  if (raw && isClaimStatus(raw)) {
    return raw;
  }
  return "new";
}
