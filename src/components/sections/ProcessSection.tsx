import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { ProcessDesktopJourney } from "./process/ProcessDesktopJourney";
import { ProcessStageCard } from "./process/ProcessStageCard";
import { PROCESS } from "./process/tokens";

export function ProcessSection({
  locale = "en",
  referenceMode = false,
}: {
  locale?: Locale;
  referenceMode?: boolean;
}) {
  const content = getHomeContent(locale).process;
  const heading = PROCESS.heading;

  return (
    <section
      id="process"
      data-process-section
      data-reference-mode={referenceMode ? "true" : undefined}
      className="relative overflow-hidden"
      style={{
        backgroundColor: PROCESS.pageBg,
        ...(referenceMode
          ? { width: PROCESS.width, height: PROCESS.height }
          : undefined),
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_60%_at_50%_56%,rgba(56,25,22,1.55),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_44%_at_50%_22%,rgba(56,25,22,0.8),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_110%_at_50%_50%,transparent_58%,rgba(0,0,0,0.14)_100%)]" />
      </div>

      <div
        className={
          referenceMode
            ? "relative z-10 flex h-full flex-col"
            : "relative z-10 mx-auto w-full max-w-[1024px] px-0 pb-16 pt-10 sm:pb-20 sm:pt-12 xl:min-h-[467px] xl:pb-[67px] xl:pt-0"
        }
      >
        <header
          data-qa="heading"
          className={
            referenceMode
              ? "pointer-events-none absolute inset-x-0 text-center"
              : "mx-auto max-w-3xl px-6 pt-2 text-center xl:pt-[49px]"
          }
          style={referenceMode ? { top: 0, height: 160 } : undefined}
        >
          <p
            data-qa="heading-eyebrow"
            className={
              referenceMode
                ? "absolute left-1/2 -translate-x-1/2 font-semibold uppercase leading-none"
                : "font-semibold uppercase leading-none"
            }
            style={{
              top: referenceMode ? heading.eyebrowTop : undefined,
              fontSize: referenceMode ? heading.eyebrowSize : 11,
              letterSpacing: referenceMode
                ? heading.eyebrowTracking
                : "0.2em",
              fontWeight: 700,
              color: PROCESS.eyebrow,
              whiteSpace: "nowrap",
            }}
          >
            {content.eyebrow}
          </p>
          <h2
            data-qa="heading-title"
            className={
              referenceMode
                ? "absolute left-1/2 -translate-x-1/2 font-display whitespace-nowrap"
                : "mt-4 font-display text-[28px] sm:text-[32px] xl:text-[34px]"
            }
            style={{
              top: referenceMode ? heading.titleTop : undefined,
              fontSize: referenceMode ? heading.titleSize : undefined,
              lineHeight: referenceMode ? heading.titleLineHeight : 1.15,
              letterSpacing: referenceMode ? "-0.01em" : "0.01em",
              fontWeight: 600,
              color: PROCESS.title,
            }}
          >
            {content.title}
          </h2>
          <p
            data-qa="heading-support"
            className={
              referenceMode
                ? "absolute whitespace-nowrap"
                : "mx-auto mt-3"
            }
            style={
              referenceMode
                ? {
                    top: heading.supportTop,
                    left: heading.supportLeft,
                    width: heading.supportMaxWidth,
                    fontSize: heading.supportSize,
                    lineHeight: 1.25,
                    fontWeight: 400,
                    color: PROCESS.supportText,
                    textAlign: "center",
                  }
                : {
                    maxWidth: 460,
                    fontSize: 13.5,
                    lineHeight: 1.25,
                    fontWeight: 400,
                    color: PROCESS.supportText,
                  }
            }
          >
            {content.description}
          </p>
        </header>

        <div
          className={
            referenceMode
              ? "absolute inset-x-0"
              : "mt-10 sm:mt-12 xl:mt-[46px]"
          }
          style={referenceMode ? { top: PROCESS.cardTop } : undefined}
        >
          {referenceMode ? null : (
            <>
              <div className="relative px-5 sm:hidden">
                <div
                  aria-hidden
                  className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-brand-red/70 via-brand-red/40 to-brand-red/15"
                />
                <ol className="space-y-4">
                  {content.steps.map((item) => (
                    <li key={item.step} className="relative pl-10">
                      <span
                        aria-hidden
                        className="absolute left-[0.95rem] top-7 flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-brand-red bg-[#111]"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                      </span>
                      <div className="h-[229px]">
                        <ProcessStageCard item={item} />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <ol className="mx-auto hidden max-w-[720px] grid-cols-2 gap-5 px-6 sm:grid xl:hidden">
                {content.steps.map((item) => (
                  <li key={item.step} className="h-[240px] min-h-0">
                    <ProcessStageCard item={item} />
                  </li>
                ))}
              </ol>
            </>
          )}

          <ProcessDesktopJourney
            steps={content.steps}
            referenceMode={referenceMode}
          />
        </div>
      </div>

      <div
        aria-hidden
        data-process-bottom-line
        className="pointer-events-none absolute inset-x-0 h-px"
        style={{
          bottom: referenceMode ? PROCESS.height - PROCESS.bottomLineY : 0,
          background: "rgba(255,255,255,0.12)",
        }}
      />
    </section>
  );
}
