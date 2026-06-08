# Manual production smoke checklist — Claim analyzer

These steps are intentionally NOT automated to avoid creating junk production
leads in Supabase. Run them by hand against https://www.theclaimsninja.com after
each deploy that touches the homepage claim analyzer.

## Steps

1. **Claim upload starts on file select**
   - Go to the homepage `#calculator` (Single Claim Review tab).
   - Choose a sample file (PDF or image, < 20MB).
   - Confirm the upload begins immediately on selection (status shows
     "Files ready for analysis." once done) — not only after submit.

2. **Progress bar phases**
   - Submit "Analyze claim opportunity".
   - Confirm the brand-red progress bar cycles through:
     `Uploading` -> `Reading documents` -> `Scoring opportunity` -> `Finalizing report`.

3. **Triage speed**
   - Confirm the triage result (summary, opportunity score, findings) returns
     well under the old ~30s flow (target ~10s perceived).
   - Confirm the note "Full intelligence report continues generating in the
     background." appears.

4. **Lead saves as ai_reviewed**
   - Submit the post-result lead capture form.
   - In Supabase `leads`, confirm the new row has:
     - `status = ai_reviewed`
     - `payload.aiAnalysis` populated (server-side merge by `claimSessionId`)
     - `calculator_type = claim-review`

## Notes

- The synchronous triage persist (in `src/app/api/analyze-claim/route.ts`)
  guarantees the analysis row exists before the lead form is usable, so
  `status` should reliably be `ai_reviewed` even on a fast submit.
- Deep analysis overwrites `claim_analyses` asynchronously; the full report at
  `/claim-report/{claimSessionId}` may upgrade shortly after.
