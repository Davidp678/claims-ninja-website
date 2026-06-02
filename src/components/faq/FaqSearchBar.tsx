import { FAQ_SEARCH } from "@/lib/faq-page";

export function FaqSearchBar() {
  return (
    <div className="mt-10 max-w-2xl">
      <label htmlFor="faq-search" className="sr-only">
        Search claims questions
      </label>
      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3-3" />
        </svg>
        <input
          id="faq-search"
          type="search"
          readOnly
          aria-label="Search claims questions"
          placeholder={FAQ_SEARCH.placeholder}
          className="w-full rounded-xl border border-white/15 bg-brand-surface py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 shadow-[0_0_48px_-28px_rgba(220,38,38,0.15)] transition-colors focus:border-brand-red/45 focus:outline-none focus:ring-2 focus:ring-brand-red/20"
        />
      </div>
      <p className="mt-3 text-sm text-zinc-400">{FAQ_SEARCH.helperText}</p>
    </div>
  );
}
