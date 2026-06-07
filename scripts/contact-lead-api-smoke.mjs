/**
 * Smoke tests for POST /api/leads contact-inquiry payloads.
 * Requires dev server: npm run dev && node scripts/contact-lead-api-smoke.mjs
 */

const BASE_URL = process.env.CHAT_API_URL ?? "http://localhost:3000";
const ENDPOINT = `${BASE_URL}/api/leads`;

function contactPayload(overrides = {}) {
  return {
    calculatorType: "contact-inquiry",
    timestamp: new Date().toISOString(),
    lead: {
      fullName: "Contact Smoke Test",
      company: "Smoke Test Co",
      email: `contact-smoke-${Date.now()}@example.com`,
      phone: "6155551234",
    },
    contactDetails: {
      inquiryType: "partnership-inquiry",
      message: "Interested in learning more about Claims Ninja for our restoration team.",
      sourcePage: "/contact",
      submittedAt: new Date().toISOString(),
    },
    ...overrides,
  };
}

async function postJson(body) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = null;
  }
  return { status: response.status, json };
}

function pass(label) {
  console.log(`  PASS  ${label}`);
}

function fail(label, detail) {
  console.log(`  FAIL  ${label}${detail ? `: ${detail}` : ""}`);
}

async function runCase(label, fn) {
  try {
    const ok = await fn();
    if (ok) {
      pass(label);
      return true;
    }
    fail(label);
    return false;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("fetch failed") || message.includes("ECONNREFUSED")) {
      fail(label, `Cannot reach ${ENDPOINT} — is npm run dev running?`);
    } else {
      fail(label, message);
    }
    return false;
  }
}

async function main() {
  console.log("Claims Ninja — /api/leads contact-inquiry smoke tests");
  console.log(`Target: ${ENDPOINT}\n`);

  let passed = 0;
  let total = 0;

  total++;
  if (
    await runCase("valid contact-inquiry payload returns 200", async () => {
      const { status, json } = await postJson(contactPayload());
      return status === 200 && json?.success === true;
    })
  ) {
    passed++;
  }

  total++;
  if (
    await runCase("missing message returns 400", async () => {
      const payload = contactPayload();
      payload.contactDetails = {
        ...payload.contactDetails,
        message: "   ",
      };
      const { status } = await postJson(payload);
      return status === 400;
    })
  ) {
    passed++;
  }

  total++;
  if (
    await runCase("invalid inquiry type returns 400", async () => {
      const payload = contactPayload();
      payload.contactDetails = {
        ...payload.contactDetails,
        inquiryType: "invalid-type",
      };
      const { status } = await postJson(payload);
      return status === 400;
    })
  ) {
    passed++;
  }

  console.log(`\n${passed}/${total} passed`);
  process.exit(passed === total ? 0 : 1);
}

main();
