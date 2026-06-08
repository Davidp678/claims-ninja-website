import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { pageMetadata } from "@/lib/metadata";
import { reviewsPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: reviewsPage.metaTitle,
  description: reviewsPage.metaDescription,
  path: reviewsPage.path,
});

export default function ReviewsPageRoute() {
  return <ReviewsPage />;
}
