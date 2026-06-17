# Supabase: Internal operations dashboard

Staff dashboard at `/dashboard` uses **Supabase Auth** (email + password) and server-side reads/writes with the service role after session verification.

## Row Level Security (RLS)

### Why RLS is enabled

Supabase exposes tables through PostgREST using the public anon key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`). Without RLS, anyone with that key can read or mutate rows directly via the REST API — bypassing the website entirely.

RLS closes that exposure. The migration lives at:

`supabase/migrations/20260617_enable_rls_public_tables.sql`

Apply it in the Supabase SQL Editor (see **Applying the RLS migration** below).

### Protected tables

| Table | Contains |
|-------|----------|
| `public.leads` | Lead intake (calculators, contact, chatbot) — names, emails, phones, full payloads |
| `public.claim_analyses` | AI claim analysis results keyed by session ID |
| `public.claim_notes` | Internal staff notes on claims |

### Security model

| Role | Access |
|------|--------|
| `anon` | **None** — no policies; SELECT/INSERT/UPDATE/DELETE denied |
| `authenticated` | Full CRUD — staff users only (see sign-up requirement below) |
| `service_role` | **Bypasses RLS** — unchanged application behavior |

### Why the service role still works

All website database access uses `createSupabaseServerClient()` with `SUPABASE_SECRET_KEY` (service role). In Supabase, the service role **always bypasses RLS**, so these flows are unaffected:

- `POST /api/leads` (lead capture)
- `POST /api/analyze-claim` (AI analysis persistence)
- Dashboard reads/writes (`/dashboard`, `/api/dashboard/...`)
- Claim report pages (`/claim-report/[claimSessionId]`)

The anon key is used **only** for Supabase Auth (login and session refresh) — never for table reads or writes.

### Public sign-up must remain disabled

The `authenticated` policies grant full CRUD to any signed-in user. Staff accounts must be created manually in Supabase Dashboard → **Authentication** → **Users**. **Do not enable public sign-up** — a self-registered user would inherit staff-level table access via RLS.

### Applying the RLS migration

**Option A — SQL Editor (recommended for production):**

1. Supabase Dashboard → **SQL Editor** → **New query**.
2. Paste the contents of `supabase/migrations/20260617_enable_rls_public_tables.sql`.
3. Run the query.
4. Run the verification queries below.

**Option B — Supabase CLI (`db push`):**

Requires the [Supabase CLI](https://supabase.com/docs/guides/cli) linked to the project:

```bash
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

No Vercel redeploy is required — this is a database-only change.

### Post-deployment verification

**Database state (SQL Editor):**

```sql
SELECT c.relname AS table_name, c.relrowsecurity AS rls_enabled
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname = 'public'
  AND c.relname IN ('leads', 'claim_analyses', 'claim_notes');

SELECT tablename, policyname, roles, cmd
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
```

Expected: `rls_enabled = true` on all three tables; 12 policies, all scoped to `authenticated`, none to `anon`.

**Anon key blocked (curl — replace placeholders):**

```bash
# SELECT must return [] — not lead data
curl -s "https://YOUR_PROJECT.supabase.co/rest/v1/leads?select=id,email&limit=1" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY"

# INSERT must fail (RLS or permission error)
curl -s -X POST "https://YOUR_PROJECT.supabase.co/rest/v1/leads" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '{"calculator_type":"test","lead_name":"test","email":"test@example.com","payload":{}}'

# UPDATE must fail
curl -s -X PATCH "https://YOUR_PROJECT.supabase.co/rest/v1/leads?id=eq.00000000-0000-0000-0000-000000000001" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status":"new"}'

# DELETE must fail
curl -s -X DELETE "https://YOUR_PROJECT.supabase.co/rest/v1/leads?id=eq.00000000-0000-0000-0000-000000000001" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

Repeat SELECT probes for `claim_analyses` and `claim_notes`.

**Website smoke tests:**

1. Submit a test lead from `/contact` or the homepage calculator → `{ "success": true }`.
2. `/login` → `/dashboard/claims` → open a claim → update status → add a note.
3. Confirm the Supabase security advisor warning is cleared.

## Environment variables

| Variable | Usage |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon/public key for Auth sessions (login only) |
| `SUPABASE_SECRET_KEY` | Service role for dashboard data access (server only) |

After adding or changing `NEXT_PUBLIC_*` variables locally, restart the dev server (`npm run dev`) so the browser bundle picks them up.

## Auth setup

1. Supabase Dashboard → **Authentication** → **Users** → **Add user** (email + password).
2. Do not enable public sign-up for customers.
3. Staff sign in at `/login`.

## SQL: `claim_notes` table

Run in **SQL Editor**:

```sql
create table if not exists public.claim_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  note_text text not null check (char_length(trim(note_text)) > 0),
  created_at timestamptz not null default now()
);

create index if not exists claim_notes_lead_id_idx
  on public.claim_notes (lead_id, created_at desc);
```

## SQL: Optional `leads.status` constraint

Apply only if existing rows use the same status values:

```sql
alter table public.leads
  drop constraint if exists leads_status_check;

alter table public.leads
  add constraint leads_status_check check (
    status in (
      'new', 'ai_reviewed', 'human_review', 'supplement_drafted',
      'sent_to_carrier', 'closed_won', 'closed_lost'
    )
  );
```

## Status values

| DB value | Label |
|----------|--------|
| `new` | New |
| `ai_reviewed` | AI Reviewed |
| `human_review` | Human Review |
| `supplement_drafted` | Supplement Drafted |
| `sent_to_carrier` | Sent to Carrier |
| `closed_won` | Closed Won |
| `closed_lost` | Closed Lost |

New claim-review leads with AI analysis in payload are stored as `ai_reviewed`; others default to `new`.

## Verification

1. Run `claim_notes` SQL.
2. Create an Auth user.
3. Set `NEXT_PUBLIC_SUPABASE_ANON_KEY` locally and on Vercel.
4. `/login` → `/dashboard/claims` → open a claim → update status → add a note.
