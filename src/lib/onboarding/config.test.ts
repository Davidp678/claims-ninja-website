import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import { getMissingExternalIntakeEnvNames } from "./env-check";

const KEYS = [
  "EXTERNAL_INTAKE_PLATFORM_URL",
  "EXTERNAL_INTAKE_CREDENTIAL_ID",
  "EXTERNAL_INTAKE_CREDENTIAL_SECRET",
] as const;

const previous = new Map<string, string | undefined>();

afterEach(() => {
  for (const key of KEYS) {
    const value = previous.get(key);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  previous.clear();
});

function stubMissing(missing: string[]) {
  for (const key of KEYS) {
    previous.set(key, process.env[key]);
    if (missing.includes(key)) delete process.env[key];
    else process.env[key] = "set-for-test";
  }
}

test("reports missing S2S env names without values", () => {
  stubMissing(["EXTERNAL_INTAKE_CREDENTIAL_SECRET"]);
  const names = getMissingExternalIntakeEnvNames();
  assert.deepEqual(names, ["EXTERNAL_INTAKE_CREDENTIAL_SECRET"]);
});

test("empty list when all S2S env present", () => {
  stubMissing([]);
  assert.deepEqual(getMissingExternalIntakeEnvNames(), []);
});
