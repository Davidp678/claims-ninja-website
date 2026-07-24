/**
 * Platform Preview Deployment Protection bypass for Website → Platform S2S.
 * Never attach against production app hosts.
 */
export function getPlatformProtectionBypass(
  hostname: string,
  env: Record<string, string | undefined> = process.env,
): string | undefined {
  const host = hostname.toLowerCase();
  if (
    host === "app.theclaimsninja.com" ||
    host === "www.theclaimsninja.com" ||
    host.includes("upwowfigsmhicdrfgepg")
  ) {
    return undefined;
  }

  const allowedHost =
    host.endsWith(".vercel.app") ||
    host === "localhost" ||
    host === "127.0.0.1";
  if (!allowedHost) return undefined;

  const bypass = (env.EXTERNAL_INTAKE_PLATFORM_PROTECTION_BYPASS ?? "").trim();
  return bypass || undefined;
}
