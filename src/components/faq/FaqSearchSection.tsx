import type { Locale } from "@/lib/i18n/config";
import { getFaqPageContent } from "@/lib/i18n/content/faq";

import { FaqPageSection } from "./FaqPageSection";
import { FaqSearchPanel } from "./FaqSearchPanel";

export function FaqSearchSection({ locale = "en" }: { locale?: Locale }) {
  const search = getFaqPageContent(locale).search;

  return (
    <FaqPageSection
      eyebrow={search.eyebrow}
      title={search.title}
      description={search.description}
      tight
    >
      <FaqSearchPanel locale={locale} />
    </FaqPageSection>
  );
}
