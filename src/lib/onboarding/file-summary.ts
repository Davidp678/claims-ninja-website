import type { IntakeFileSummary } from "./types";

/** Normalize Platform `fileName` or Website `filename` into IntakeFileSummary. */
export function normalizeIntakeFileSummary(
  raw: Record<string, unknown> | null | undefined,
): IntakeFileSummary | null {
  if (!raw || typeof raw !== "object") return null;
  const id = typeof raw.id === "string" ? raw.id : null;
  if (!id) return null;

  const filename =
    (typeof raw.filename === "string" && raw.filename) ||
    (typeof raw.fileName === "string" && raw.fileName) ||
    "upload";

  const sizeBytes =
    typeof raw.sizeBytes === "number"
      ? raw.sizeBytes
      : typeof raw.size_bytes === "number"
        ? raw.size_bytes
        : 0;

  const securityState =
    typeof raw.securityState === "string"
      ? raw.securityState
      : typeof raw.security_state === "string"
        ? raw.security_state
        : "preparing";

  const contentType =
    typeof raw.contentType === "string"
      ? raw.contentType
      : typeof raw.mime_type === "string"
        ? raw.mime_type
        : undefined;

  const scanReferenceId =
    typeof raw.scanReferenceId === "string"
      ? raw.scanReferenceId
      : typeof raw.scan_reference_id === "string"
        ? raw.scan_reference_id
        : undefined;

  const rejectionReasonCode =
    typeof raw.rejectionReasonCode === "string"
      ? raw.rejectionReasonCode
      : typeof raw.rejection_reason_code === "string"
        ? raw.rejection_reason_code
        : undefined;

  const rejectionMessage =
    typeof raw.rejectionMessage === "string"
      ? raw.rejectionMessage
      : typeof raw.rejection_message === "string"
        ? raw.rejection_message
        : undefined;

  return {
    id,
    filename,
    sizeBytes,
    securityState,
    contentType,
    scanReferenceId,
    rejectionReasonCode,
    rejectionMessage,
  };
}

export function normalizeIntakeFileList(raw: unknown): IntakeFileSummary[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) =>
      item && typeof item === "object"
        ? normalizeIntakeFileSummary(item as Record<string, unknown>)
        : null,
    )
    .filter((f): f is IntakeFileSummary => f !== null);
}

/** Client upload timeout — covers Cloudmersive multi-attempt worst case with buffer. */
export const ONBOARDING_UPLOAD_TIMEOUT_MS = 120_000;

export const TERMINAL_SECURITY_STATES = new Set([
  "ready",
  "rejected",
  "failed",
  "scan_unavailable",
]);

export function isTerminalSecurityState(state: string): boolean {
  return TERMINAL_SECURITY_STATES.has(state);
}
