import assert from "node:assert/strict";
import { test } from "node:test";

import { getPlatformProtectionBypass } from "./platform-protection-bypass";
import {
  buildCanonicalString,
  safeEqualHex,
  sha256Hex,
  signCanonical,
} from "./s2s-canonical";

test("builds the S2S canonical string with exact field order", () => {
  const canonical = buildCanonicalString({
    credentialId: "cred_website_prod_01",
    method: "POST",
    path: "/api/external-intake/v1/sessions",
    timestamp: "1721664600",
    nonce: "6f2c8e1a9b0d4c7e8f1a2b3c4d5e6f70",
    bodyHash:
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });

  assert.equal(
    canonical,
    [
      "cred_website_prod_01",
      "POST",
      "/api/external-intake/v1/sessions",
      "1721664600",
      "6f2c8e1a9b0d4c7e8f1a2b3c4d5e6f70",
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    ].join("\n"),
  );
});

test("sha256 of empty body matches protocol fixture", () => {
  assert.equal(
    sha256Hex(Buffer.alloc(0)),
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  );
});

test("signCanonical is deterministic for a fixed secret", () => {
  const canonical = buildCanonicalString({
    credentialId: "cred",
    method: "GET",
    path: "/api/external-intake/v1/sessions/current",
    timestamp: "1",
    nonce: "abc",
    bodyHash: sha256Hex(""),
  });
  const a = signCanonical("secret", canonical);
  const b = signCanonical("secret", canonical);
  assert.equal(a, b);
  assert.equal(a.length, 64);
  assert.equal(safeEqualHex(a, b), true);
  assert.equal(safeEqualHex(a, "00".repeat(32)), false);
});

test("attaches Platform Preview protection bypass only on allowed hosts", () => {
  const env = {
    EXTERNAL_INTAKE_PLATFORM_PROTECTION_BYPASS: "preview-bypass-secret",
  };
  assert.equal(
    getPlatformProtectionBypass(
      "claims-ninja-platform-git-feat-exter.vercel.app",
      env,
    ),
    "preview-bypass-secret",
  );
  assert.equal(getPlatformProtectionBypass("127.0.0.1", env), "preview-bypass-secret");
  assert.equal(
    getPlatformProtectionBypass("app.theclaimsninja.com", env),
    undefined,
  );
  assert.equal(getPlatformProtectionBypass("evil.example.com", env), undefined);
  assert.equal(
    getPlatformProtectionBypass("claims-ninja-platform.vercel.app", {}),
    undefined,
  );
});
