# Claims Ninja AI Chatbot

Marketing-site chat widget with OpenAI-backed responses and a local rule-based fallback.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes (for AI mode) | OpenAI API key. Shared with claim analysis (`/api/analyze-claim`). Without it, `/api/chat` returns **503** and the widget silently uses local responses. |
| `OPENAI_CHAT_MODEL` | No | Model override for chat only (e.g. `gpt-4o-mini`, `gpt-4o`). |
| `OPENAI_MODEL` | No | Fallback if `OPENAI_CHAT_MODEL` is unset. Also used by claim analysis. |
| Default | — | `gpt-4o-mini` when neither chat nor shared model is set. |

### Local development

Add to `.env.local`:

```
OPENAI_API_KEY=sk-...
# Optional:
OPENAI_CHAT_MODEL=gpt-4o-mini
```

Restart the dev server after changing env vars.

### Vercel production

Set these in the Vercel project **Environment Variables** for Production (and Preview if desired):

| Variable | Required | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | Yes (for AI chat) | OpenAI API key. Without it, `/api/chat` returns **503** and the widget uses local fallback. |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (for lead capture) | Supabase project API URL (`https://*.supabase.co`). Same as calculators. |
| `SUPABASE_SECRET_KEY` | Yes (for lead capture) | Service role key (server-only). Same as calculators. |
| `OPENAI_CHAT_MODEL` | No | Chat model override (e.g. `gpt-4o-mini`). |
| `OPENAI_MODEL` | No | Shared fallback with claim analysis. |

**Notes:**

- Chatbot lead capture uses the **same Supabase vars** as calculator lead forms — no new database schema or env vars.
- Missing `OPENAI_API_KEY` is safe: chat degrades to local rules silently.
- Missing Supabase vars: `/api/leads` returns **503**; lead capture shows a user-safe error; AI chat still works if OpenAI is configured.

### Supabase (lead capture)

Chatbot leads insert into `public.leads` via `POST /api/leads` with `calculator_type = 'chatbot'`. Requires:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SECRET_KEY`

Verify after deploy:

```sql
SELECT
  id,
  calculator_type,
  lead_name,
  company,
  email,
  phone,
  status,
  created_at,
  payload->'chatbotDetails' AS chatbot_details
FROM public.leads
WHERE calculator_type = 'chatbot'
ORDER BY created_at DESC
LIMIT 10;
```

Expect `payload.chatbotDetails.source = 'claims-ninja-ai-chatbot'` on submitted rows.

## Architecture

- **Frontend:** `src/components/chatbot/` — widget UI, local rule engine, fetch client
- **API:** `POST /api/chat` — validates input, calls OpenAI, assembles follow-up chips
- **Fallback:** `getAssistantReply()` in `chat-responses.ts` — used when API fails or key is missing

```
User message → POST /api/chat → AI content + followUps
                    ↓ (503/502/400/network)
              getAssistantReply() local fallback
```

## Route configuration

- Path: `/api/chat`
- Method: `POST` only
- Runtime: `nodejs`
- Max duration: 30 seconds (Vercel)

### Request body

```json
{
  "message": "How much do you charge?",
  "history": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}
```

Limits:
- `message`: 1–2000 characters (trimmed)
- `history`: optional, max 10 items; each message 1–2000 chars
- OpenAI context: last 8 messages

### Response (200)

```json
{
  "content": "Assistant reply text…",
  "followUps": ["view-pricing", "get-started", "talk-to-team"]
}
```

Error responses use generic messages only — never raw OpenAI errors or API keys.

| Status | Meaning |
|---|---|
| 400 | Invalid request body |
| 502 | OpenAI request failed |
| 503 | `OPENAI_API_KEY` missing |
| 500 | Unexpected server error |

The frontend treats any non-200 response as a silent fallback to local rules. Users never see backend error text.

## Security

- `OPENAI_API_KEY` is server-only (`import "server-only"` in `src/lib/chatbot/chat-openai.ts`)
- Client components import only `@/lib/chatbot/chat-limits.ts` (shared constants) — not OpenAI or server modules
- Server logs errors without exposing keys or full OpenAI payloads to the client

## Knowledge base

Grounded answers use approved site content injected into the OpenAI system prompt before each completion.

### Content sources

Chunks are built at module load from existing site exports (single source of truth):

| Source file | Content |
|---|---|
| `src/lib/faq-data.ts` | Full FAQ library (~76 Q&A items) |
| `src/lib/marketing-pages.ts` | Pricing, platform, billing, AI analysis, about, solutions pages |
| `src/lib/platform-overview.ts` | Platform hero, pillars, AI capabilities |
| `src/lib/ai-claim-analysis-page.ts` | AI workflow cards |

To expand chatbot knowledge, edit those source files — chunks rebuild on deploy. No separate knowledge CMS yet.

### Retrieval

- Module: `src/lib/chatbot/chat-knowledge-retrieval.ts`
- Method: keyword/phrase scoring (same patterns as local chat rules) — **no vectors, embeddings, or Supabase table**
- On each `/api/chat` request, `retrieveKnowledgeSnippets(message)` scores all chunks, returns top matches (max 5, ~2800 chars)
- Matched excerpts append to the system prompt under **APPROVED CLAIMS NINJA SITE CONTEXT**
- If no snippet scores above threshold, the model uses existing guardrails only (no forced context)

### Priority rules

When site context is present, the model is instructed to:

1. Prioritize approved excerpts over general knowledge
2. Not contradict site content or invent services/fees/policies
3. Fall back to system guardrails when excerpts do not cover the question

Pricing accuracy (15% documented increase, 4% RCV in qualifying no-estimate scenarios) comes from FAQ + system prompt — always confirm terms with the Claims Ninja team.

### Retrieval tests

```bash
npm run test:chat-knowledge
```

Example questions covered: pricing, billing, supplements, AI analysis, public adjuster, off-topic (no snippets).

## Lead capture

In-chat lead capture collects qualified contractor info and submits through the existing `POST /api/leads` pipeline.

### Flow

1. User taps **Get Started** or asks to get started / start intake
2. Conversational steps: name → company → email/phone → primary need → carrier estimate status → optional claim value → preferred next step → confirm
3. Submit to `/api/leads` with `calculatorType: "chatbot"`
4. Success message with chips: Get Started (claim intake), Talk to the Team, See Pricing, FAQ

Users can type **skip** for optional fields (phone, claim value), **cancel** to exit, or **start over** to restart.

During lead capture, the chatbot does **not** call `/api/chat` — normal AI and local fallback resume after cancel or success.

### Payload

```json
{
  "calculatorType": "chatbot",
  "timestamp": "…",
  "lead": { "fullName", "company", "email", "phone" },
  "chatbotDetails": {
    "source": "claims-ninja-ai-chatbot",
    "primaryNeed", "carrierEstimateStatus",
    "approximateClaimValue", "preferredNextStep",
    "conversationSummary", "submittedAt"
  }
}
```

Stored in `public.leads` with `calculator_type = 'chatbot'`. Chatbot leads are not shown in the claim-review dashboard queue (that view filters `claim-review` only).

### Lead tests

```bash
npm run test:chat-lead-flow
npm run dev
npm run test:chat-leads
```

## QA checklist

### All test commands

Unit tests (no dev server):

```bash
npm run test:chat-knowledge
npm run test:chat-lead-flow
# Or combined:
npm run test:chat:unit
```

API smoke tests (requires dev server in a separate terminal):

```bash
npm run dev
npm run test:chat-api
npm run test:chat-leads
```

Build gate:

```bash
npm run lint
npm run build
```

Preview / production smoke (after deploy):

```bash
CHAT_API_URL=https://your-preview.vercel.app npm run test:chat-api
CHAT_API_URL=https://your-preview.vercel.app npm run test:chat-leads
```

### Automated smoke tests

With dev server running:

```bash
npm run dev
npm run test:chat-api
```

Optional custom base URL:

```bash
CHAT_API_URL=https://your-preview.vercel.app npm run test:chat-api
```

### Manual curl examples

```bash
# Valid message (200 with key, 503 without)
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"How much do you charge?"}'

# Empty message (400)
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"  "}'
```

### UI verification (desktop + mobile)

**Chat & AI**

1. Launcher open/close/minimize; Escape closes panel
2. FAQ-style, pricing, public adjuster, and AI analysis questions — replies with chips and typing indicator
3. Pricing answers reference 15%/4% structure or defer to team (no invented fees)
4. Public adjuster: do not say Claims Ninja is not a PA; do not imply every file is PA
5. Internal chips (e.g. Pricing Page) navigate in-tab and close panel
6. External chips (Talk to the Team) open new tab
7. sessionStorage persists messages across refresh (`claims-ninja-chat-session-v1`)

**Lead capture**

8. **Get Started** starts in-chat lead flow (not an external tab)
9. Happy path through confirm → success message
10. Invalid email at contact step → validation message, no submit
11. Skip phone / skip claim value → still reaches confirm
12. Cancel / Start over → flow exits; normal chat resumes
13. Post-success **Get Started** opens claim intake form (external)
14. Post-success chips: Talk to the Team, See Pricing, FAQ work

**Fallback**

15. With `OPENAI_API_KEY` unset, restart dev → local ruled responses, no error UI

**CTA note:** During normal chat, **Get Started** starts lead capture. After a successful lead submit, **Get Started** opens the external claim intake form.

### Guardrails spot-check

Ask: public adjuster identity, guarantee payout, policy interpretation, pricing, supplement team replacement. Confirm no overpromising, no final legal/coverage determinations, accurate pricing structure.

## Production deployment checklist

Before merging / deploying to Production:

1. Set Vercel env vars: `OPENAI_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY` (optional: `OPENAI_CHAT_MODEL`, `OPENAI_MODEL`)
2. Run unit tests: `npm run test:chat:unit`
3. Run API smoke on preview: `CHAT_API_URL=https://… npm run test:chat-api && npm run test:chat-leads`
4. Run `npm run lint && npm run build`
5. Manual UI pass on preview (desktop + 375px mobile)
6. Submit one test chatbot lead; verify row in Supabase (SQL above)
7. Confirm calculator lead forms still submit (`claim-review` / `roi-report`)

**Degradation behavior:**

- No OpenAI key → AI chat falls back to local rules (safe)
- No Supabase → lead capture fails gracefully; calculators also affected

## Related files

| File | Purpose |
|---|---|
| `src/app/api/chat/route.ts` | API route handler |
| `src/lib/chatbot/chat-system-prompt.ts` | Controlled system prompt |
| `src/lib/chatbot/chat-openai.ts` | OpenAI client |
| `src/lib/chatbot/chat-api.ts` | Validation + response assembly |
| `src/lib/chatbot/chat-limits.ts` | Shared message/history limits |
| `src/components/chatbot/chat-client.ts` | Frontend fetch + fallback seam |
| `src/components/chatbot/chat-responses.ts` | Local rule engine |
| `src/components/chatbot/chat-lead-flow.ts` | Lead capture state machine |
| `src/components/chatbot/useChatLeadFlow.ts` | Lead flow React hook |
| `src/components/chatbot/chat-lead-client.ts` | Client submit helper |
| `src/lib/calculator-lead.ts` | Lead payload types (incl. chatbot) |
| `src/lib/chatbot/chat-knowledge.ts` | Static knowledge chunks from site content |
| `src/lib/chatbot/chat-knowledge-retrieval.ts` | Score-based snippet retrieval |
| `src/lib/chatbot/chat-knowledge-retrieval.test.ts` | Retrieval unit tests |
| `scripts/chat-api-smoke.mjs` | Automated smoke tests |
| `scripts/chat-lead-api-smoke.mjs` | Lead API smoke tests |
