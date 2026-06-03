/**
 * Smoke tests for POST /api/leads chatbot payloads.
 * Requires dev server: npm run dev && npm run test:chat-leads
 */

const BASE_URL = process.env.CHAT_API_URL ?? "http://localhost:3000";
const ENDPOINT = `${BASE_URL}/api/leads`;

function chatbotPayload(overrides = {}) {
  return {
    calculatorType: "chatbot",
    timestamp: new Date().toISOString(),
    lead: {
      fullName: "Chatbot Smoke Test",
      company: "Smoke Test Co",
      email: `chatbot-smoke-${Date.now()}@example.com`,
      phone: "6155551234",
    },
    chatbotDetails: {
      source: "claims-ninja-ai-chatbot",
      primaryNeed: "supplements",
      carrierEstimateStatus: "yes",
      preferredNextStep: "claim-intake",
      conversationSummary: "User: How do I get started?",
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
  console.log("Claims Ninja AI — /api/leads chatbot smoke tests");
  console.log(`Target: ${ENDPOINT}\n`);

  let passed = 0;
  let total = 0;

  const cases = [
    [
      "Missing lead name returns 400",
      async () => {
        const payload = chatbotPayload();
        payload.lead.fullName = "   ";
        const { status } = await postJson(payload);
        return status === 400;
      },
    ],
    [
      "Invalid chatbot email returns 400",
      async () => {
        const payload = chatbotPayload();
        payload.lead.email = "not-an-email";
        const { status } = await postJson(payload);
        return status === 400;
      },
    ],
    [
      "Valid chatbot payload returns 200 or 503",
      async () => {
        const { status, json } = await postJson(chatbotPayload());
        if (status === 503) {
          return json?.code === "SUPABASE_SERVER_CONFIG";
        }
        return status === 200 && json?.success === true;
      },
    ],
    [
      "Skipped phone chatbot payload returns 200 or 503",
      async () => {
        const payload = chatbotPayload();
        payload.lead.phone = "";
        const { status, json } = await postJson(payload);
        if (status === 503) {
          return json?.code === "SUPABASE_SERVER_CONFIG";
        }
        return status === 200 && json?.success === true;
      },
    ],
    [
      "Existing claim-review payload still accepted (200 or 503)",
      async () => {
        const { status, json } = await postJson({
          calculatorType: "claim-review",
          timestamp: new Date().toISOString(),
          lead: {
            fullName: "Regression Test",
            company: "Test Co",
            email: `regression-${Date.now()}@example.com`,
            phone: "6155551234",
            preferredContactMethod: "email",
          },
          claimCalculatorInputs: {
            claimType: "water",
            carrierEstimate: "25000",
            description: "Smoke test",
          },
          uploadedFilesMeta: [],
        });
        if (status === 503) {
          return json?.code === "SUPABASE_SERVER_CONFIG";
        }
        return status === 200 && json?.success === true;
      },
    ],
  ];

  for (const [label, fn] of cases) {
    total += 1;
    const ok = await runCase(label, fn);
    if (ok) {
      passed += 1;
    }
  }

  console.log(`\n${passed}/${total} checks passed.`);

  if (passed < total) {
    process.exit(1);
  }
}

main();
