import { defineConfig, devices } from "@playwright/test";

/** Fixture-driven onboarding visual QA (route mocks; not live providers). */
export default defineConfig({
  testDir: "./e2e",
  testMatch: /onboarding-fixture-visual\.spec\.ts/,
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
