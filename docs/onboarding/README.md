# Public claim onboarding (website BFF)

Website Phase C surface for instant claim intake: homepage hero → five-stage journey → same-origin BFF → platform external intake APIs.

Browsers never call platform intake endpoints directly and never receive platform/Supabase signed upload URLs.

## Journey routes

All routes live under the marketing layout (production Navbar untouched).

Verified journey order in code: `claim → company → account → verify (OTP) → agreement → billing → activated`.

| Path | Stage |
|------|--------|
| `/` hero intake card | Start session + optional staged files |
| `/onboarding/claim` | Claim draft |
| `/onboarding/company` | Company / contractor |
| `/onboarding/account` | Password |
| `/onboarding/verify` | Email OTP |
| `/onboarding/agreement` | Native clickwrap (Terms `2026-06-10` + Privacy staging placeholder) |
| `/onboarding/billing` | Billing contact / authorization |
| `/onboarding/activated` | Workspace ready + handoff |

## Privacy Policy / legal readiness

- There is **no** public marketing `/privacy` or `/terms` page yet.
- Onboarding Privacy content in the clickwrap package is still a **staging placeholder**. Platform owns the business draft for counsel: `claims-ninja-platform/docs/external-intake/privacy-policy-draft-for-legal-review.md` (**DRAFT — REQUIRES LEGAL APPROVAL**).
- Website fail-closed: Agreement continue stays disabled when `acceptanceEnabled === false` **or** `privacy.stagingPlaceholder === true`. Canonical hashes stay pinned in `src/lib/onboarding/agreement-canonical.ts` until an approved Privacy version is swapped in.
- **Legal readiness incomplete** — do not treat Draft PRs as privacy-approved. See platform `docs/external-intake/privacy-policy-handoff.md`.

## BFF map

| Website | Platform |
|---------|----------|
| `GET/POST/PATCH /api/onboarding/session` | `.../sessions` + `.../sessions/current` |
| `POST /api/onboarding/save-exit` | `.../sessions/current/save-exit` |
| `POST/DELETE /api/onboarding/files` | `.../files/upload` + `.../files/{id}` |
| `GET /api/onboarding/agreement` | `.../agreement/current` |
| `GET /api/onboarding/agreement/download` | `.../agreement/current/download` |
| `POST /api/onboarding/agreement/accept` | `.../agreement/accept` |
| `GET/PATCH /api/onboarding/billing` | `.../billing/status` + `.../billing/profile` |
| `POST /api/onboarding/billing/instruments` | `.../billing/instruments` |
| `POST /api/onboarding/billing/continue` | `.../billing/continue` |
| `POST /api/onboarding/account/password` | `.../account/password` |
| `POST /api/onboarding/account/otp/*` | `.../account/otp/*` |
| `GET /api/onboarding/provision` | `.../provision/status` |
| `POST /api/onboarding/handoff` | `.../handoff/mint` |
| `POST /api/onboarding/resume/*` | `.../resume/*` |
| `GET /api/onboarding/csrf` | (website-only CSRF cookie mint) |

Full platform contract: `claims-ninja-platform/docs/external-intake/`.

## Cookie / CSRF

- `cn_intake_handle` — HttpOnly, Secure (prod), SameSite=Lax; opaque intake handle only
- `cn_intake_csrf` — readable cookie for double-submit CSRF
- Mutations require matching `x-csrf-token` header **and** allowed Origin/Referer

Passwords, PAN/CVV, and bank secrets are never written to cookies, localStorage, sessionStorage, or autosave JSON. Password is POST body only, once, through the BFF.

## Uploads

```text
Browser multipart → /api/onboarding/files → signed S2S multipart → platform quarantine
```

No signed storage URLs are returned to the browser.

## Payment capture default

`EXTERNAL_INTAKE_PAYMENT_CAPTURE_ENABLED` defaults **off**.

When off:

- Billing contact/address autosave allowed
- Card/bank fields are **not** collected
- `POST /api/onboarding/billing/continue` returns `403 PAYMENT_CAPTURE_DISABLED`
- UI continue CTA stays disabled with a truthful unavailable state

## Environment variables

See [env.md](./env.md).
