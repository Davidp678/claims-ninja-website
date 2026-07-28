export type PasswordRequirementId =
  | "length"
  | "mixedCase"
  | "number"
  | "special";

export type PasswordRequirement = {
  id: PasswordRequirementId;
  label: string;
  test: (password: string) => boolean;
};

export const PASSWORD_REQUIREMENTS: PasswordRequirement[] = [
  {
    id: "length",
    label: "At least 12 characters",
    test: (password) => password.length >= 12,
  },
  {
    id: "mixedCase",
    label: "Uppercase and lowercase letter",
    test: (password) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
  {
    id: "number",
    label: "One number",
    test: (password) => /\d/.test(password),
  },
  {
    id: "special",
    label: "One special character",
    test: (password) => /[^A-Za-z0-9]/.test(password),
  },
];

const BLOCKER_BY_ID: Record<PasswordRequirementId, string> = {
  length: "Use at least 12 characters to continue.",
  mixedCase: "Add uppercase and lowercase letters to continue.",
  number: "Add one number to continue.",
  special: "Add one special character to continue.",
};

export function evaluatePassword(password: string) {
  return PASSWORD_REQUIREMENTS.map((req) => ({
    id: req.id,
    label: req.label,
    met: req.test(password),
  }));
}

export function isPasswordValid(password: string): boolean {
  return PASSWORD_REQUIREMENTS.every((req) => req.test(password));
}

export function passwordsMatch(password: string, confirm: string): boolean {
  return password.length > 0 && password === confirm;
}

export function isValidAccountEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  // Practical login-email check (not full RFC).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export type AccountFormBlockersInput = {
  password: string;
  confirm: string;
  email: string;
};

/**
 * Ordered, customer-facing blockers. Empty when the Account form may submit.
 * Never implies that an email has been sent.
 */
export function getAccountFormBlockers(
  input: AccountFormBlockersInput,
): string[] {
  const blockers: string[] = [];
  if (!isValidAccountEmail(input.email)) {
    blockers.push("Enter a valid email address.");
  }
  for (const req of PASSWORD_REQUIREMENTS) {
    if (!req.test(input.password)) {
      blockers.push(BLOCKER_BY_ID[req.id]);
    }
  }
  if (
    input.password.length > 0 &&
    input.confirm.length > 0 &&
    !passwordsMatch(input.password, input.confirm)
  ) {
    blockers.push("Passwords must match.");
  } else if (isPasswordValid(input.password) && input.confirm.length === 0) {
    blockers.push("Confirm your password to continue.");
  }
  return blockers;
}

export function getPrimaryAccountFormBlocker(
  input: AccountFormBlockersInput,
): string | null {
  return getAccountFormBlockers(input)[0] ?? null;
}

/** Mask login email for customer-facing copy (keeps domain). */
export function maskEmailAddress(email: string): string {
  const trimmed = email.trim();
  const at = trimmed.indexOf("@");
  if (at <= 0) return "your email";
  const local = trimmed.slice(0, at);
  const domain = trimmed.slice(at + 1);
  if (!domain) return "your email";
  const visible = local.slice(0, Math.min(1, local.length));
  return `${visible}***@${domain}`;
}
