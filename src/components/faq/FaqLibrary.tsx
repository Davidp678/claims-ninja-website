import type { Locale } from "@/lib/i18n/config";
import { getFaqPageContent } from "@/lib/i18n/content/faq";

import { FaqLibraryContent } from "./FaqLibraryContent";
import { FaqPageSection } from "./FaqPageSection";

export function FaqLibrary({ locale = "en" }: { locale?: Locale }) {
  const librarySection = getFaqPageContent(locale).librarySection;

  return (
    <FaqPageSection
      eyebrow={librarySection.eyebrow}
      title={librarySection.title}
      description={librarySection.description}
    >
      <FaqLibraryContent locale={locale} />
    </FaqPageSection>
  );
}
