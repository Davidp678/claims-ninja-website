import { defineConfig, devices } from "@playwright/test";

/**
 * Dedicated production smoke-test config.
 * Scoped to ./e2e so it never picks up the existing node --test / tsx suites.
 * Override the target with SMOKE_BASE_URL (defaults to production).
 */
export default defineConfig({
  testDir: "./e2e",
  testIgnore: /onboarding-(staging|fixture)-visual\.spec\.ts/,
  fullyParallel: process.env.SMOKE_BASE_URL?.includes("localhost") ? false : true,
  workers: process.env.SMOKE_BASE_URL?.includes("localhost") ? 1 : undefined,
  forbidOnly: !!process.env.CI,
  retries: 1,
  reporter: [["list"]],
  use: {
    baseURL: process.env.SMOKE_BASE_URL ?? "https://www.theclaimsninja.com",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
