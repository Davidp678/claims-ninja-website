import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-brand-black">
        <Container className="py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red-light">
            Page not found
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white">
            This page doesn&apos;t exist
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-300">
            The link may be outdated or the page may have moved. Browse our resources or
            contact the team for help.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/resources/blog" size="lg">
              Browse the blog
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
