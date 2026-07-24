/** Missing Preview/S2S env var names only — never values. */
export function getMissingExternalIntakeEnvNames(): string[] {
  const missing: string[] = [];
  if (!(process.env.EXTERNAL_INTAKE_PLATFORM_URL ?? "").trim()) {
    missing.push("EXTERNAL_INTAKE_PLATFORM_URL");
  }
  if (!(process.env.EXTERNAL_INTAKE_CREDENTIAL_ID ?? "").trim()) {
    missing.push("EXTERNAL_INTAKE_CREDENTIAL_ID");
  }
  if (!(process.env.EXTERNAL_INTAKE_CREDENTIAL_SECRET ?? "").trim()) {
    missing.push("EXTERNAL_INTAKE_CREDENTIAL_SECRET");
  }
  return missing;
}
