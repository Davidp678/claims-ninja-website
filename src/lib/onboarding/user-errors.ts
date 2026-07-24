/**
 * Map known onboarding/platform error codes to actionable, user-safe copy.
 * Unexpected errors stay generic — never expose secrets or stack details.
 */
export function userFacingOnboardingError(
  code: string | undefined,
  fallbackMessage: string | undefined,
): string {
  switch (code) {
    case "VERSION_MISMATCH":
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
      return "Your claim session expired. Start again with a new upload.";
    case "EXPIRED":
      return "Your claim session expired. Start again with a new upload.";
    case "RATE_LIMITED":
      return "Too many attempts. Wait a moment and try again.";
    case "SCANNER_UNAVAILABLE":
      return "File scanning is temporarily unavailable. Retry the upload shortly.";
    case "LEGAL_UNAVAILABLE":
      return "Legal documents are temporarily unavailable. Please try again later.";
    case "INTERNAL_ERROR":
    case "INTERNAL":
      return "Something went wrong starting claim intake. Please try again.";
    default:
      break;
  }

  const message = fallbackMessage?.trim();
  if (message && message !== "Internal error." && message !== "Internal server error.") {
    return message;
  }
  return "Unable to continue claim intake. Please try again.";
}
