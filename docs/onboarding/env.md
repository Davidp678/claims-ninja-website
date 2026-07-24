# Onboarding environment variables

Set these in `.env.local` (local) or Vercel project settings (preview/production). Never commit secrets.

## Required for live BFF → platform

| Variable | Purpose |
|----------|---------|
| `EXTERNAL_INTAKE_PLATFORM_URL` | Platform origin, e.g. `https://app.theclaimsninja.com` (no trailing slash) |
| `EXTERNAL_INTAKE_CREDENTIAL_ID` | S2S credential id (`X-CN-Credential-Id`) |
| `EXTERNAL_INTAKE_CREDENTIAL_SECRET` | S2S HMAC secret (server-only) |

Without these, onboarding APIs return `503 EXTERNAL_INTAKE_NOT_CONFIGURED`.

## Optional / feature flags

| Variable | Default | Purpose |
|----------|---------|---------|
| `EXTERNAL_INTAKE_PAYMENT_CAPTURE_ENABLED` | `false` | When not `true`, no payment-method capture; onboarding uses QuickBooks ops handoff after billing authorization |
| `EXTERNAL_INTAKE_STAGING_ONLY` | unset | When `true`, refuse production platform hosts / production Supabase refs |
| `EXTERNAL_INTAKE_ALLOWED_ORIGINS` | (built-in localhost + production site) | Comma-separated extra Origins for CSRF Origin checks |
| `NEXT_PUBLIC_SITE_URL` | production site URL | Included in Origin allowlist |
| `NEXT_PUBLIC_PLATFORM_URL` | `https://app.theclaimsninja.com` | Client redirect base after handoff mint |

## Staging validation

Use a gitignored `.env.staging.local` (never commit). Point `EXTERNAL_INTAKE_PLATFORM_URL` at a local/staging platform origin, set matching S2S credentials, and set `EXTERNAL_INTAKE_STAGING_ONLY=true`. Do not put service-role keys, peppers, or signing secrets in `NEXT_PUBLIC_*` variables.

## Explicitly not used by website client

- Platform service-role keys
- Supabase signed upload URLs for intake
- Payment provider secrets in browser bundles

## Related platform env

Platform owns scanner, vault adapter, legal acceptance gates, OTP email, and resume email providers. See platform `docs/external-intake/README.md` release gates.
