-- =============================================================================
-- Migration: Enable Row Level Security on Claims Ninja public tables
-- Project:  claims-ninja-website
-- Date:     2026-06-17
--
-- PURPOSE
--   Close Supabase security warning: "Table publicly accessible — RLS is not
--   enabled" on leads and related tables.
--
-- ARCHITECTURE ASSUMPTIONS (verified in codebase audit)
--   • All application DB access uses SUPABASE_SECRET_KEY (service role).
--   • Service role bypasses RLS — lead capture, dashboard, and AI flows
--     continue unchanged.
--   • Anon key is used for Supabase Auth only (login/session).
--   • Public sign-up MUST remain disabled in Supabase Auth dashboard.
--
-- SECURITY MODEL AFTER MIGRATION
--   anon:          no policies → denied SELECT/INSERT/UPDATE/DELETE
--   authenticated: full CRUD (staff users created manually in dashboard)
--   service_role:  bypasses RLS (unchanged application behavior)
--
-- IDEMPOTENCY
--   Safe to re-run: DROP POLICY IF EXISTS before CREATE POLICY.
-- =============================================================================

BEGIN;

-- ---------------------------------------------------------------------------
-- 1. Enable Row Level Security
-- ---------------------------------------------------------------------------

ALTER TABLE public.leads            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.claim_analyses   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.claim_notes      ENABLE ROW LEVEL SECURITY;

-- ---------------------------------------------------------------------------
-- 2. Remove any pre-existing policies (clean slate, idempotent)
-- ---------------------------------------------------------------------------

-- leads
DROP POLICY IF EXISTS "staff_select_leads"  ON public.leads;
DROP POLICY IF EXISTS "staff_insert_leads"  ON public.leads;
DROP POLICY IF EXISTS "staff_update_leads"  ON public.leads;
DROP POLICY IF EXISTS "staff_delete_leads"  ON public.leads;

-- claim_analyses
DROP POLICY IF EXISTS "staff_select_claim_analyses"  ON public.claim_analyses;
DROP POLICY IF EXISTS "staff_insert_claim_analyses"  ON public.claim_analyses;
DROP POLICY IF EXISTS "staff_update_claim_analyses"  ON public.claim_analyses;
DROP POLICY IF EXISTS "staff_delete_claim_analyses"  ON public.claim_analyses;

-- claim_notes
DROP POLICY IF EXISTS "staff_select_claim_notes"  ON public.claim_notes;
DROP POLICY IF EXISTS "staff_insert_claim_notes"  ON public.claim_notes;
DROP POLICY IF EXISTS "staff_update_claim_notes"  ON public.claim_notes;
DROP POLICY IF EXISTS "staff_delete_claim_notes"  ON public.claim_notes;

-- ---------------------------------------------------------------------------
-- 3. Staff policies (authenticated role only — NO anon policies)
-- ---------------------------------------------------------------------------

-- ── public.leads ──────────────────────────────────────────────────────────

CREATE POLICY "staff_select_leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "staff_insert_leads"
  ON public.leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "staff_update_leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "staff_delete_leads"
  ON public.leads
  FOR DELETE
  TO authenticated
  USING (true);

-- ── public.claim_analyses ─────────────────────────────────────────────────

CREATE POLICY "staff_select_claim_analyses"
  ON public.claim_analyses
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "staff_insert_claim_analyses"
  ON public.claim_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "staff_update_claim_analyses"
  ON public.claim_analyses
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "staff_delete_claim_analyses"
  ON public.claim_analyses
  FOR DELETE
  TO authenticated
  USING (true);

-- ── public.claim_notes ────────────────────────────────────────────────────

CREATE POLICY "staff_select_claim_notes"
  ON public.claim_notes
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "staff_insert_claim_notes"
  ON public.claim_notes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "staff_update_claim_notes"
  ON public.claim_notes
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "staff_delete_claim_notes"
  ON public.claim_notes
  FOR DELETE
  TO authenticated
  USING (true);

COMMIT;

-- ---------------------------------------------------------------------------
-- Post-migration verification (run separately, outside transaction)
-- ---------------------------------------------------------------------------
--
-- SELECT c.relname, c.relrowsecurity
-- FROM pg_class c
-- JOIN pg_namespace n ON n.oid = c.relnamespace
-- WHERE n.nspname = 'public'
--   AND c.relname IN ('leads', 'claim_analyses', 'claim_notes');
--
-- Expected: relrowsecurity = true for all three.
--
-- SELECT tablename, policyname, roles, cmd
-- FROM pg_policies
-- WHERE schemaname = 'public'
-- ORDER BY tablename, policyname;
--
-- Expected: 12 policies, all TO {authenticated}, none TO {anon}.
