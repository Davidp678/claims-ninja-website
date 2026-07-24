export type OriginEnv = Record<string, string | undefined>;

/**
 * CSRF Origin allowlist for Website BFF mutations.
 * Preview deployments auto-include the current Vercel host only when
 * VERCEL_ENV === "preview" — never a global *.vercel.app wildcard.
 */
export function getAllowedOrigins(env: OriginEnv = process.env): string[] {
  const configured = (env.EXTERNAL_INTAKE_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const site = (env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  const defaults = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://www.theclaimsninja.com",
    "https://theclaimsninja.com",
    "https://claims-ninja-website.vercel.app",
  ];

  const previewOrigins: string[] = [];
  if (env.VERCEL_ENV === "preview") {
    const vercelUrl = (env.VERCEL_URL ?? "").trim().replace(/^https?:\/\//, "");
    const branchUrl = (env.VERCEL_BRANCH_URL ?? "")
      .trim()
      .replace(/^https?:\/\//, "");
    if (vercelUrl) previewOrigins.push(`https://${vercelUrl}`);
    if (branchUrl) previewOrigins.push(`https://${branchUrl}`);
  }

  return Array.from(
    new Set([
      ...configured,
      ...(site ? [site] : []),
      ...defaults,
      ...previewOrigins,
    ]),
  );
}
