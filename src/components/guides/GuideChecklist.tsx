import type { ChecklistItem } from "@/lib/guide-types";
import { GUIDE_ANCHOR_SCROLL_CLASS } from "@/lib/guide-page";
import { cn } from "@/lib/cn";

type GuideChecklistProps = {
  items: readonly ChecklistItem[];
  title?: string;
  id?: string;
};

export function GuideChecklist({ items, title, id }: GuideChecklistProps) {
  return (
    <section id={id} className={cn(GUIDE_ANCHOR_SCROLL_CLASS, "scroll-mt-28")}>
      {title ? (
        <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      ) : null}
      <ul className={cn("space-y-3", title ? "mt-5" : undefined)}>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 rounded-xl border border-white/10 bg-brand-surface/50 p-4"
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs",
                item.required
                  ? "border-brand-red/40 bg-brand-red/10 text-brand-red-light"
                  : "border-white/20 text-zinc-500",
              )}
              aria-hidden
            >
              {item.required ? "✓" : "○"}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">{item.label}</p>
              {item.detail ? (
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
