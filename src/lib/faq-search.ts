import type { FaqCategoryId, FaqItem } from "@/lib/faq-page";

export function filterFaqItems(
  items: readonly FaqItem[],
  query: string,
  getCategoryTitle: (id: FaqCategoryId) => string,
): FaqItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [...items];
  }

  return items.filter((item) => {
    const categoryTitle = getCategoryTitle(item.category).toLowerCase();
    return (
      item.question.toLowerCase().includes(normalized) ||
      item.answer.toLowerCase().includes(normalized) ||
      categoryTitle.includes(normalized) ||
      item.category.includes(normalized)
    );
  });
}
