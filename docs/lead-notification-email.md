# Lead notification email (Resend)

When a website lead is successfully stored in Supabase (`POST /api/leads`), the API also sends an internal notification email to Claims Ninja staff. Email delivery is best-effort: if sending fails, the lead is still saved and the user still sees success.

## Environment variables

| Variable | Required | Default | Usage |
|----------|----------|---------|--------|
| `RESEND_API_KEY` | Yes (production) | — | Resend API key; server-only, never expose to the client |
| `LEAD_NOTIFICATION_TO` | No | `info@theclaimsninja.com` | Internal recipient for new lead alerts |
| `LEAD_NOTIFICATION_FROM` | No | `The Claims Ninja <leads@theclaimsninja.com>` | Verified sender in Resend |

Set locally in `.env.local`. Set in Vercel under **Project Settings → Environment Variables** for Production (and Preview if desired). Redeploy after adding or changing variables.

## Resend setup

1. Create a Resend account and API key.
2. Verify the sending domain (e.g. `theclaimsninja.com`) in Resend.
3. Use a verified `from` address (default: `leads@theclaimsninja.com`).
4. Add `RESEND_API_KEY` to Vercel and redeploy.

## What triggers a notification

All successful submissions to `POST /api/leads`:

| `calculatorType` | Source |
|------------------|--------|
| `claim-review` | Homepage AI claim analysis / calculator |
| `roi-report` | Homepage organization ROI calculator |
| `contact-inquiry` | Contact page, Start Here support modal |
| `chatbot` | AI chatbot lead capture flow |

## Email content

- **Subject:** `New Claims Ninja Lead: {inquiry type, chatbot source, or calculator type}`
- **Body:** contact fields, type-specific details (claim type, carrier estimate, message, etc.), submitted timestamp, and full payload JSON (plain text and HTML).

## Verification

1. Submit a test lead from `/contact` or the homepage calculator.
2. Confirm the row appears in Supabase `public.leads`.
3. Confirm the notification arrives at `LEAD_NOTIFICATION_TO` (or `info@theclaimsninja.com`).
4. With `RESEND_API_KEY` unset, confirm the API still returns `{ "success": true }` and server logs show the skip message.
