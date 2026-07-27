import { defineConfig, devices } from "@playwright/test";

/**
 * Staging-only onboarding visual QA. Defaults to local staging website.
 * Screenshots → .qa-artifacts/onboarding-visual (gitignored).
 */
export default defineConfig({
  testDir: "./e2e",
  testMatch: /onboarding-staging-visual\.spec\.ts/,
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000",
    trace: "off",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
