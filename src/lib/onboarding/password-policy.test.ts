import assert from "node:assert/strict";
import { test } from "node:test";

import {
  evaluatePassword,
  getAccountFormBlockers,
  getPrimaryAccountFormBlocker,
  isPasswordValid,
  isValidAccountEmail,
  maskEmailAddress,
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

test("missing special character produces exact blocker and form is invalid", () => {
  const password = "CorrectHorse12";
  assert.equal(isPasswordValid(password), false);
  const blockers = getAccountFormBlockers({
    password,
    confirm: password,
    email: "owner@example.com",
  });
  assert.ok(blockers.includes("Add one special character to continue."));
  assert.equal(
    getPrimaryAccountFormBlocker({
      password,
      confirm: password,
      email: "owner@example.com",
    }),
    "Add one special character to continue.",
  );
});

test("password mismatch blocker", () => {
  const blockers = getAccountFormBlockers({
    password: "CorrectHorse1!",
    confirm: "CorrectHorse1?",
    email: "owner@example.com",
  });
  assert.ok(blockers.includes("Passwords must match."));
});

test("invalid email blocker", () => {
  assert.equal(isValidAccountEmail("not-an-email"), false);
  const blockers = getAccountFormBlockers({
    password: "CorrectHorse1!",
    confirm: "CorrectHorse1!",
    email: "not-an-email",
  });
  assert.ok(blockers.includes("Enter a valid email address."));
});

test("valid form has no blockers", () => {
  const blockers = getAccountFormBlockers({
    password: "CorrectHorse1!",
    confirm: "CorrectHorse1!",
    email: "owner@example.com",
  });
  assert.deepEqual(blockers, []);
});

test("maskEmailAddress keeps domain and hides local part", () => {
  assert.equal(maskEmailAddress("owner@example.com"), "o***@example.com");
  assert.equal(maskEmailAddress(""), "your email");
});
