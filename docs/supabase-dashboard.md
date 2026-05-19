# Supabase: Internal operations dashboard

Staff dashboard at `/dashboard` uses **Supabase Auth** (email + password) and server-side reads/writes with the service role after session verification.

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
