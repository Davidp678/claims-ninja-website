import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function ClaimReportNotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-brand-black">
        <Container className="py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red-light">
            Report unavailable
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white">
            Intelligence report not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            This report may not exist yet, or the link may be incorrect. Complete a claim analysis
            on our calculator to generate a new report.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/#calculator" size="lg">
              Run claim analysis
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Back to home
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
