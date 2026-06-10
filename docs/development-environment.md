# Local development environment

This document defines the approved local setup for The Claims Ninja marketing website.

## Approved local development path

```
C:\dev\claims-ninja-website
```

Do all active website development from this path. Open this folder in Cursor or VS Code rather than any legacy copy under Documents or OneDrive.

## GitHub source of truth

GitHub is the single source of truth for project code and history.

- **Repository:** [https://github.com/Davidp678/claims-ninja-website](https://github.com/Davidp678/claims-ninja-website)
- **Default branch:** `main`
- Do not treat local folders, OneDrive copies, or backup drives as authoritative.
- Clone fresh from GitHub when setting up a new machine: `git clone https://github.com/Davidp678/claims-ninja-website.git C:\dev\claims-ninja-website`

## Standard git workflow

Run these steps from `C:\dev\claims-ninja-website`:

```powershell
git pull origin main
# make changes
npm run lint
npm run build
git status
git add <files>
git commit -m "Describe why the change was made"
git push origin main
```

Always pull before starting work. Run lint and build before committing to catch issues locally.

## Vercel deployment workflow

Production deploys are triggered automatically by Vercel when changes are pushed to `main` on GitHub.

1. Push commits to `main`.
2. Vercel builds and deploys from the GitHub integration.
3. Do not change Vercel project settings or environment variables as part of routine development.

**Production URL:** [https://claims-ninja-website.vercel.app](https://claims-ninja-website.vercel.app) (also served at [https://www.theclaimsninja.com](https://www.theclaimsninja.com))

## Environment variable management

### Local development

Create a `.env.local` file in the repo root for local-only secrets and configuration. This file is gitignored and must never be committed.

Typical local variables (see linked docs for details):

| Variable | Required for | Notes |
|----------|--------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase features, dashboard, lead capture | Public; restart dev server after changes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Auth login, browser Supabase client | Public |
| `SUPABASE_SECRET_KEY` | Server-side Supabase reads/writes | Server-only; never expose to client |
| `OPENAI_API_KEY` | AI chat, claim analysis | Server-only; build succeeds without it |
| `RESEND_API_KEY` | Lead notification email | Server-only; optional locally |
| `NEXT_PUBLIC_SITE_URL` | SEO/canonical URLs | Optional; defaults to production URL |

Copy values from the Vercel dashboard (Project → Settings → Environment Variables) when setting up a new machine. Do not copy env files from old repo locations into git.

Further reference:

- [supabase-dashboard.md](./supabase-dashboard.md)
- [claims-ninja-ai-chatbot.md](./claims-ninja-ai-chatbot.md)
- [lead-notification-email.md](./lead-notification-email.md)

### Vercel (production and preview)

All production and preview environment variables are managed in the **Vercel dashboard**, not in the repository.

- Never commit `.env`, `.env.local`, `.env.production`, or any file containing secrets.
- Do not move Vercel env vars into the repo.

## Why not OneDrive (or Documents synced to OneDrive)

Do not develop this project inside OneDrive-synced folders. Common problems:

- **Sync conflicts** — Git and OneDrive both track file changes; concurrent edits cause duplicate or corrupted files.
- **File locking** — OneDrive holds locks during upload, breaking tools that expect immediate write access.
- **node_modules churn** — Tens of thousands of small files trigger constant sync activity and slow everything down.
- **.next build artifact conflicts** — Build output changes frequently; sync engines fight Next.js incremental builds.
- **Git index corruption risk** — Sync interruptions during `git` operations can damage the index or leave repos in a broken state.
- **Slower dev workflow** — IDE file watchers, hot reload, and npm installs all degrade under sync overhead.

Use `C:\dev\claims-ninja-website` instead: local disk, outside sync folders, predictable performance.

## Migration summary

| Item | Detail |
|------|--------|
| **Migration date** | 2026-06-10 |
| **Previous path** | `C:\Users\Thesi\Documents\claims-ninja-website` (legacy local Documents; Windows redirects Documents shell folder to OneDrive) |
| **New path** | `C:\dev\claims-ninja-website` |
| **Method** | Fresh `git clone` from GitHub; full history preserved |
| **Env files copied** | None — no local `.env*` files existed at the old path; create `.env.local` manually from Vercel if needed |
| **Excluded from copy** | `node_modules`, `.next`, `.vercel`, OneDrive sync metadata |
| **Old copy** | Left in place at the previous path until explicitly approved for removal |
| **Verified** | `npm install`, `npm run lint`, and `npm run build` pass from the new path |
