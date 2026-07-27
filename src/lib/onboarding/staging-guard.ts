const STAGING_SUPABASE_REF = "cpxkziijrxuaxdkpbhwf";
const PRODUCTION_SUPABASE_REF = "upwowfigsmhicdrfgepg";
const PRODUCTION_PLATFORM_HOSTS = new Set([
  "app.theclaimsninja.com",
  "www.theclaimsninja.com",
]);

/** Rejects production targets when EXTERNAL_INTAKE_STAGING_ONLY=true. */
export function assertStagingPlatformUrl(platformBaseUrl: string): void {
  let parsed: URL;
  try {
    parsed = new URL(platformBaseUrl);
  } catch {
    throw new Error("EXTERNAL_INTAKE_PLATFORM_URL is not a valid URL");
  }

  const host = parsed.hostname.toLowerCase();
  if (host.includes(PRODUCTION_SUPABASE_REF)) {
    throw new Error(
      "EXTERNAL_INTAKE_STAGING_ONLY refuses production Supabase project ref",
    );
  }
  if (PRODUCTION_PLATFORM_HOSTS.has(host)) {
    throw new Error(
      "EXTERNAL_INTAKE_STAGING_ONLY refuses production platform host",
    );
  }
  const isLocal =
    host === "localhost" || host === "127.0.0.1" || host === "[::1]";
  const isStagingSupabaseHost = host.includes(STAGING_SUPABASE_REF);
  const isStagingAppHost =
    host.includes("staging") || host.endsWith(".vercel.app");
  if (!isLocal && !isStagingSupabaseHost && !isStagingAppHost) {
    throw new Error(
      "EXTERNAL_INTAKE_STAGING_ONLY requires localhost or an explicit staging host",
    );
  }
}
