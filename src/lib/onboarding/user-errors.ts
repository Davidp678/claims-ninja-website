/**
 * Map known onboarding/platform error codes to actionable, user-safe copy.
 * Unexpected errors stay generic — never expose secrets, stacks, or
 * internal state-machine language.
 */

const INTAKE_RECOVERY =
  "We couldn’t continue this submission. Your information is safe. Please try again.";

const HANDOFF_RECOVERY =
  "We couldn’t open your workspace automatically. Your account and claim are safe. Try again or sign in to continue.";

export function userFacingOnboardingError(
  code: string | undefined,
  fallbackMessage: string | undefined,
): string {
  switch (code) {
    case "VERSION_MISMATCH":
    case "STALE_SESSION_VERSION":
      return "This claim session was updated elsewhere. Refresh and try again.";
    case "PLATFORM_PROTECTION_BLOCKED":
      return "Secure connection to claim intake is temporarily blocked. Please retry in a moment.";
    case "EXTERNAL_INTAKE_NOT_CONFIGURED":
      return "Claim intake is not configured for this environment. Please try again later.";
    case "VALIDATION_ERROR":
      return (
        fallbackMessage?.trim() ||
        "Check your property name, loss type, and uploads, then try again."
      );
    case "SESSION_UNAUTHORIZED":
    case "EXPIRED":
    case "SESSION_EXPIRED":
      return "Your claim session expired. Start again with a new upload.";
    case "SESSION_COMPLETED":
      return "This claim submission is already finished. Start a new claim to continue.";
    case "INVALID_STAGE_TRANSITION":
    case "INVALID_STATE":
      return INTAKE_RECOVERY;
    case "FILE_NOT_READY":
      return "Your file is still being protected. Wait for scanning to finish, or replace the file.";
    case "PROVISIONING_INCOMPLETE":
    case "HANDOFF_EXPIRED":
    case "HANDOFF_REDEEMED":
      return HANDOFF_RECOVERY;
    case "RATE_LIMITED":
      return "Too many attempts. Wait a moment and try again.";
    case "SCANNER_UNAVAILABLE":
      return "File scanning is temporarily unavailable. Retry the upload shortly, or remove the file to continue without it.";
    case "LEGAL_UNAVAILABLE":
      return "Legal documents are temporarily unavailable. Please try again later.";
    case "INTERNAL_ERROR":
    case "INTERNAL":
      return "Something went wrong starting claim intake. Please try again.";
    default:
      break;
  }

  const message = fallbackMessage?.trim() ?? "";
  // Never leak internal state-machine phrasing to customers.
  if (
    /cannot advance to that onboarding stage/i.test(message) ||
    /handoff is only available after completed provisioning/i.test(message) ||
    /session can no longer be edited/i.test(message) ||
    /provisioning incomplete/i.test(message)
  ) {
    if (/handoff|provisioning|workspace/i.test(message)) {
      return HANDOFF_RECOVERY;
    }
    return INTAKE_RECOVERY;
  }

  if (
    message &&
    message !== "Internal error." &&
    message !== "Internal server error."
  ) {
    return message;
  }
  return "Unable to continue claim intake. Please try again.";
}

export function userFacingHandoffError(
  code: string | undefined,
  fallbackMessage: string | undefined,
): string {
  return userFacingOnboardingError(
    code ?? "PROVISIONING_INCOMPLETE",
    fallbackMessage ?? HANDOFF_RECOVERY,
  );
}
