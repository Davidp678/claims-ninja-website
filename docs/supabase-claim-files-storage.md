# Supabase Storage: `claim-files` bucket

Private bucket for Single Claim Review uploads. Files are uploaded **server-side only** via `POST /api/claim-files` using the service role key (`SUPABASE_SECRET_KEY`). The browser never receives storage credentials.

## Create the bucket

In Supabase Dashboard → **SQL Editor**, run:

```sql
-- Private bucket (no public reads)
insert into storage.buckets (id, name, public)
values ('claim-files', 'claim-files', false)
on conflict (id) do update set public = false;
```

Or create manually in **Storage** → **New bucket**:

- Name: `claim-files`
- Public: **off**

## Object path layout

```
claim-files/
  claims/{sessionId}/{safe-file-name}
```

- `sessionId` — UUID generated client-side per calculator session (`claimSessionId` in lead payload).
- `safe-file-name` — sanitized original name with a short random suffix to avoid collisions.

## Access model (Phase 1)

- **Upload:** Next.js API route with service role only.
- **Download:** Not exposed to the public site yet; future phases may use signed URLs for adjusters or GPT ingestion.
- **No** anon/authenticated Storage policies required for uploads in this phase (service role bypasses RLS).

## Allowed file types

- PDF: `application/pdf`
- Images: JPEG, PNG, WEBP

Max **10** files per upload request, **20 MB** each (validated in API and client).

## Vercel deployment note

Vercel serverless functions limit **request body size** (often ~4.5 MB depending on plan). The Single Claim Review UI uploads **one file per POST** to `/api/claim-files` to stay within typical limits. Single requests with multiple large files may fail in production even though validation allows 20 MB per file. For true multi-file 20 MB uploads through Vercel, a future phase should use Supabase signed upload URLs (direct browser → Storage).

## Environment variables

Same as lead intake (server-only secret):

| Variable | Usage |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SECRET_KEY` | Service role key for Storage + DB |

Set these in `.env.local` (local) and Vercel project settings (production).

## Verification

1. Run the SQL above (or create bucket in dashboard).
2. Upload files via Single Claim Review → **Analyze claim opportunity**.
3. In Supabase **Storage** → `claim-files`, confirm objects under `claims/{uuid}/`.
4. Submit lead form; check `public.leads.payload` jsonb for `uploadedFilesMeta` with `storagePath` and `bucket`.
