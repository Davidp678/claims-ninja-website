import assert from "node:assert/strict";
import { test } from "node:test";

import { getAllowedOrigins } from "./allowed-origins";

test("Preview VERCEL_URL is allowed when VERCEL_ENV=preview", () => {
  const origins = getAllowedOrigins({
    VERCEL_ENV: "preview",
    VERCEL_URL: "claims-ninja-website-dfgkl2h15-davidp678s-projects.vercel.app",
  });
  assert.ok(
    origins.includes(
      "https://claims-ninja-website-dfgkl2h15-davidp678s-projects.vercel.app",
    ),
  );
});

test("Preview VERCEL_BRANCH_URL is allowed when set", () => {
  const origins = getAllowedOrigins({
    VERCEL_ENV: "preview",
    VERCEL_URL: "claims-ninja-website-abc.vercel.app",
    VERCEL_BRANCH_URL: "claims-ninja-website-git-feat-public-claim-onboarding.vercel.app",
  });
  assert.ok(
    origins.includes(
      "https://claims-ninja-website-git-feat-public-claim-onboarding.vercel.app",
    ),
  );
});

test("Production VERCEL_ENV does not auto-allow Preview hosts", () => {
  const origins = getAllowedOrigins({
    VERCEL_ENV: "production",
    VERCEL_URL: "claims-ninja-website-dfgkl2h15-davidp678s-projects.vercel.app",
  });
  assert.ok(
    !origins.includes(
      "https://claims-ninja-website-dfgkl2h15-davidp678s-projects.vercel.app",
    ),
  );
  assert.ok(origins.includes("https://www.theclaimsninja.com"));
});

test("EXTERNAL_INTAKE_ALLOWED_ORIGINS entries are included", () => {
  const origins = getAllowedOrigins({
    EXTERNAL_INTAKE_ALLOWED_ORIGINS:
      "https://custom-preview.example.com, https://other.example.com",
  });
  assert.ok(origins.includes("https://custom-preview.example.com"));
  assert.ok(origins.includes("https://other.example.com"));
});

test("NEXT_PUBLIC_SITE_URL is included when set", () => {
  const origins = getAllowedOrigins({
    NEXT_PUBLIC_SITE_URL: "https://staging.theclaimsninja.com/",
  });
  assert.ok(origins.includes("https://staging.theclaimsninja.com"));
});
