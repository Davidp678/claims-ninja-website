import assert from "node:assert/strict";
import { test } from "node:test";

import {
  evaluatePassword,
  isPasswordValid,
  passwordsMatch,
} from "./password-policy";

test("rejects short passwords", () => {
  assert.equal(isPasswordValid("Ab1!short"), false);
});

test("accepts a strong password", () => {
  assert.equal(isPasswordValid("CorrectHorse1!"), true);
  const results = evaluatePassword("CorrectHorse1!");
  assert.equal(results.every((r) => r.met), true);
});

test("passwordsMatch requires equality", () => {
  assert.equal(passwordsMatch("CorrectHorse1!", "CorrectHorse1!"), true);
  assert.equal(passwordsMatch("CorrectHorse1!", "CorrectHorse1?"), false);
  assert.equal(passwordsMatch("", ""), false);
});
