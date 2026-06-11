import type { GuideMistake } from "@/lib/guide-types";
import type { Locale } from "@/lib/i18n/config";
import { getGuideDetailUi } from "@/lib/guide-display";

type GuideMistakesTableProps = {
  mistakes: readonly GuideMistake[];
  locale?: Locale;
};

export function GuideMistakesTable({ mistakes, locale = "en" }: GuideMistakesTableProps) {
  const detailUi = getGuideDetailUi(locale);

  return (
    <>
      <div className="hidden overflow-x-auto rounded-xl border border-white/10 sm:block">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-brand-surface/80">
              <th className="px-4 py-3 font-semibold text-zinc-300">{detailUi.mistake}</th>
              <th className="px-4 py-3 font-semibold text-zinc-300">{detailUi.impact}</th>
              <th className="px-4 py-3 font-semibold text-zinc-300">{detailUi.correction}</th>
            </tr>
          </thead>
          <tbody>
            {mistakes.map((row) => (
              <tr key={row.mistake} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 align-top text-white">{row.mistake}</td>
                <td className="px-4 py-3 align-top text-zinc-400">{row.impact}</td>
                <td className="px-4 py-3 align-top text-zinc-300">{row.correction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-4 sm:hidden">
        {mistakes.map((row) => (
          <li
            key={row.mistake}
            className="rounded-xl border border-white/10 bg-brand-surface/50 p-4"
          >
            <p className="text-sm font-semibold text-white">{row.mistake}</p>
            <p className="mt-2 text-sm text-zinc-400">
              <span className="font-medium text-zinc-500">{detailUi.impact}: </span>
              {row.impact}
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              <span className="font-medium text-zinc-500">{detailUi.correction}: </span>
              {row.correction}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
