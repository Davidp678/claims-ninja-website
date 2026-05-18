# Supabase Storage: `claim-files` bucket

Private bucket for Single Claim Review uploads. The service role key (`SUPABASE_SECRET_KEY`) is used **only on the server** to issue short-lived signed upload URLs. The browser uploads file bytes **directly to Supabase Storage** (not through Vercel), so large files (up to 20 MB each) work in production.

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

## Access model

1. **Prepare (Vercel):** `POST /api/claim-files` with JSON `{ sessionId, file: { name, type, size } }`. Server validates type/size, builds the storage path, and returns a signed upload URL plus `ClaimFileRecord` metadata. Request body stays small (metadata only).
2. **Upload (browser → Supabase):** Client `PUT`s the file to the signed URL. File bytes never pass through the Vercel function.
3. **Analyze (Vercel):** `POST /api/analyze-claim` uses server-side signed **download** URLs for OpenAI ingestion.
4. **No** anon/authenticated Storage policies are required for uploads (service role issues signed URLs).

The browser never receives `SUPABASE_SECRET_KEY`.

## Allowed file types

- PDF: `application/pdf`
- Images: JPEG, PNG, WEBP

Max **10** files per calculator session, **20 MB** each (validated on client and in `POST /api/claim-files` before a signed URL is issued).

## Vercel deployment note

Vercel serverless functions enforce a **4.5 MB** maximum request/response body size. Proxying file bytes through `/api/claim-files` causes **413 Payload Too Large** for files above that limit. The signed-upload flow avoids this by sending only metadata to Vercel and uploading bytes directly to `*.supabase.co`.

If direct Storage `PUT` fails in the browser, check **Storage → Configuration → CORS** in the Supabase dashboard and allow your site origin.

## Environment variables

Same as lead intake (server-only secret):

| Variable | Usage |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SECRET_KEY` | Service role key for Storage + DB |
| `OPENAI_API_KEY` | Server-only AI claim analysis (`POST /api/analyze-claim`) |
| `OPENAI_MODEL` | Optional; defaults to `gpt-4o` |

Set these in `.env.local` (local) and Vercel project settings (production).

## Verification

1. Run the SQL above (or create bucket in dashboard).
2. Upload files via Single Claim Review → **Analyze claim opportunity** (including files between 5–20 MB).
3. In Supabase **Storage** → `claim-files`, confirm objects under `claims/{uuid}/`.
4. Submit lead form; check `public.leads.payload` jsonb for `uploadedFilesMeta` with `storagePath` and `bucket`.
