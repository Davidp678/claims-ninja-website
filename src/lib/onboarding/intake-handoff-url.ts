/**
 * Browser landing for one-time intake handoff codes.
 * Always send the code to Platform `/auth/intake-handoff` — never append it to
 * a claim workspace path. The handoff route consumes the code, establishes the
 * session, then redirects to the claim.
 */
export const INTAKE_HANDOFF_PATH = "/auth/intake-handoff";

export function buildIntakeHandoffUrl(
  platformBaseUrl: string,
  handoffCode: string,
): string {
  const base = platformBaseUrl.replace(/\/$/, "");
  const code = handoffCode.trim();
  if (!base || !code) {
    throw new Error("Platform base URL and handoff code are required.");
  }
  const url = new URL(`${base}${INTAKE_HANDOFF_PATH}`);
  url.searchParams.set("code", code);
  return url.toString();
}
