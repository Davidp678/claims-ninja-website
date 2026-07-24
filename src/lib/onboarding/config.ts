import "server-only";

export {
  INTAKE_CSRF_COOKIE,
  INTAKE_CSRF_HEADER,
  INTAKE_HANDLE_COOKIE,
} from "./constants";
import { assertStagingPlatformUrl } from "./staging-guard";
export { assertStagingPlatformUrl } from "./staging-guard";
export { getMissingExternalIntakeEnvNames } from "./env-check";

export type ExternalIntakeConfig = {
  platformBaseUrl: string;
  credentialId: string;
  credentialSecret: string;
  paymentCaptureEnabled: boolean;
};

export function getExternalIntakeConfig(): ExternalIntakeConfig | null {
  const platformBaseUrl = (
    process.env.EXTERNAL_INTAKE_PLATFORM_URL ?? ""
  ).trim().replace(/\/$/, "");
  const credentialId = (process.env.EXTERNAL_INTAKE_CREDENTIAL_ID ?? "").trim();
  const credentialSecret = (
    process.env.EXTERNAL_INTAKE_CREDENTIAL_SECRET ?? ""
  ).trim();

  if (!platformBaseUrl || !credentialId || !credentialSecret) {
    return null;
  }

  if (process.env.EXTERNAL_INTAKE_STAGING_ONLY === "true") {
    assertStagingPlatformUrl(platformBaseUrl);
  }

  return {
    platformBaseUrl,
    credentialId,
    credentialSecret,
    paymentCaptureEnabled:
      process.env.EXTERNAL_INTAKE_PAYMENT_CAPTURE_ENABLED === "true",
  };
}

export function isPaymentCaptureEnabled(): boolean {
  return process.env.EXTERNAL_INTAKE_PAYMENT_CAPTURE_ENABLED === "true";
}

export function getAllowedOrigins(): string[] {
  const configured = (process.env.EXTERNAL_INTAKE_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  const defaults = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://www.theclaimsninja.com",
    "https://theclaimsninja.com",
    "https://claims-ninja-website.vercel.app",
  ];

  return Array.from(new Set([...configured, ...(site ? [site] : []), ...defaults]));
}
