/**
 * Smoke tests for POST /api/chat. Requires the dev server:
 *   npm run dev
 *   npm run test:chat-api
 */

const BASE_URL = process.env.CHAT_API_URL ?? "http://localhost:3000";
const ENDPOINT = `${BASE_URL}/api/chat`;

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

async function postRaw(rawBody, contentType = "application/json") {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: rawBody,
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
  console.log(`Claims Ninja AI — /api/chat smoke tests`);
  console.log(`Target: ${ENDPOINT}\n`);

  let passed = 0;
  let total = 0;

  const cases = [
    [
      "Empty message returns 400",
      async () => {
        const { status, json } = await postJson({ message: "   " });
        return status === 400 && json?.code === "INVALID_REQUEST";
      },
    ],
    [
      "Over 2000 chars returns 400",
      async () => {
        const { status, json } = await postJson({ message: "x".repeat(2001) });
        return status === 400 && json?.code === "INVALID_REQUEST";
      },
    ],
    [
      "Invalid JSON returns 400",
      async () => {
        const { status, json } = await postRaw("{ not valid json");
        return status === 400 && json?.code === "INVALID_REQUEST";
      },
    ],
    [
      "Invalid history role returns 400",
      async () => {
        const { status, json } = await postJson({
          message: "hello",
          history: [{ role: "system", content: "test" }],
        });
        return status === 400 && json?.code === "INVALID_REQUEST";
      },
    ],
    [
      "Missing message field returns 400",
      async () => {
        const { status, json } = await postJson({ history: [] });
        return status === 400 && json?.code === "INVALID_REQUEST";
      },
    ],
    [
      "Valid message returns 200 or 503",
      async () => {
        const { status, json } = await postJson({
          message: "How much do you charge?",
        });
        if (status === 503) {
          return json?.code === "CHAT_OPENAI_CONFIG";
        }
        if (status === 200) {
          return (
            typeof json?.content === "string" &&
            json.content.trim().length > 0
          );
        }
        return false;
      },
    ],
    [
      "200 response includes followUps array when AI configured",
      async () => {
        const { status, json } = await postJson({
          message: "How much do you charge?",
        });
        if (status === 503) {
          return true;
        }
        if (status !== 200) {
          return false;
        }
        return (
          Array.isArray(json?.followUps) && json.followUps.length > 0
        );
      },
    ],
    [
      "Pricing question returns 200 or 503",
      async () => {
        const { status, json } = await postJson({
          message: "How much do you charge for supplements?",
        });
        if (status === 503) {
          return json?.code === "CHAT_OPENAI_CONFIG";
        }
        return (
          status === 200 &&
          typeof json?.content === "string" &&
          json.content.trim().length > 0
        );
      },
    ],
    [
      "Billing question returns 200 or 503",
      async () => {
        const { status, json } = await postJson({
          message: "How does billing work with Claims Ninja?",
        });
        if (status === 503) {
          return json?.code === "CHAT_OPENAI_CONFIG";
        }
        return (
          status === 200 &&
          typeof json?.content === "string" &&
          json.content.trim().length > 0
        );
      },
    ],
    [
      "AI analysis question returns 200 or 503",
      async () => {
        const { status, json } = await postJson({
          message: "What does AI claim analysis look for?",
        });
        if (status === 503) {
          return json?.code === "CHAT_OPENAI_CONFIG";
        }
        return (
          status === 200 &&
          typeof json?.content === "string" &&
          json.content.trim().length > 0
        );
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
