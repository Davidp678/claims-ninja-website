import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/reviews"].metaTitle,
  description: ES_PAGE_META["/reviews"].metaDescription,
  path: "/es/reviews",
  locale: "es",
});

export default function SpanishReviewsPage() {
  return <ReviewsPage locale="es" />;
}
