# Supabase: `claim_analyses` table

Durable storage for completed GPT claim analyses, keyed by calculator session (`claimSessionId`). Rows are written server-side after a successful `POST /api/analyze-claim` and merged into `public.leads.payload` when a claim-review lead is submitted.

## Create the table

In Supabase Dashboard → **SQL Editor**, run:

```sql
create table if not exists public.claim_analyses (
  id uuid primary key default gen_random_uuid(),
  claim_session_id uuid not null unique,
  ai_analysis jsonb not null,
  analyzed_at timestamptz not null,
  ai_model text not null,
  analysis_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists claim_analyses_session_id_idx
  on public.claim_analyses (claim_session_id);
```

## Access model

- **Write:** Next.js API routes with `SUPABASE_SECRET_KEY` (service role) only.
- **Read for lead merge:** Same service role in `POST /api/leads` when `calculatorType` is `claim-review` and `claimSessionId` is present.
- **No** browser or anon access required for this phase.

## Column mapping

| Column | Source |
|--------|--------|
| `claim_session_id` | Client `claimSessionId` (UUID per calculator session) |
| `ai_analysis` | Validated `ClaimAnalysisResult` JSON |
| `analyzed_at` | Server timestamp when analysis completed |
| `ai_model` | `OPENAI_MODEL` or default `gpt-4o` |
| `analysis_version` | App constant `CLAIM_ANALYSIS_VERSION` (currently `"1"`) |

## Lead payload merge

On lead insert, the server loads the row by `claim_session_id` and attaches to `leads.payload`:

- `aiAnalysis`
- `analyzedAt`
- `aiModel`
- `analysisVersion`

Client-provided AI fields are ignored; only database-backed analysis is merged.

## Verification

1. Run the SQL above.
2. Complete Single Claim Review analysis → check `public.claim_analyses` for a row with your session UUID.
3. Submit the lead form → check `public.leads.payload` jsonb for the AI fields above.
