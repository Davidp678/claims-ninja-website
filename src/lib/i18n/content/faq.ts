import type { Locale } from "@/lib/i18n/config";
import { FAQ_ITEMS } from "@/lib/faq-data";
import type { FaqCategoryId, FaqItem } from "@/lib/faq-page";
import {
  FAQ_CATEGORIES,
  FAQ_CATEGORY_SECTION,
  FAQ_HERO,
  FAQ_LIBRARY_SECTION,
  FAQ_POPULAR_SECTION,
  FAQ_SEARCH,
  getFaqItemsByIds,
} from "@/lib/faq-page";
import { FAQ_ITEMS_ES } from "@/lib/i18n/content/faq-data-es";
import { localizePath } from "@/lib/i18n/paths";

/** Spanish topic labels keyed by the English topic string used in SITE_FAQ. */
const ES_TOPIC_BY_EN: Record<string, string> = {
  "Claims Ninja": "Claims Ninja",
  "the Claims Ninja platform": "la plataforma de Claims Ninja",
  "Claims Ninja pricing and billing": "los precios y la facturación de Claims Ninja",
  "contacting Claims Ninja": "cómo contactar a Claims Ninja",
};

export function translateFaqTopic(topic: string, locale: Locale): string {
  if (locale === "en") return topic;
  return ES_TOPIC_BY_EN[topic] ?? topic;
}

export function getAllFaqItems(locale: Locale): readonly FaqItem[] {
  if (locale === "en") return FAQ_ITEMS;
  return FAQ_ITEMS_ES.map((item) => ({
    ...item,
    relatedLinks: item.relatedLinks?.map((link) => ({
      ...link,
      href: localizePath(locale, link.href),
    })),
  }));
}

export function getCategoryTitleLocalized(
  id: FaqCategoryId,
  locale: Locale,
): string {
  const categories = getFaqPageContent(locale).categories;
  const category = categories.find((entry) => entry.id === id);
  if (!category) {
    throw new Error(`Unknown FAQ category: ${id}`);
  }
  return category.title;
}

type FaqCategoryContent = {
  id: FaqCategoryId;
  title: string;
  description: string;
};

type FaqSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

type FaqSearchContent = FaqSectionContent & {
  placeholder: string;
  helperText: string;
  emptyStateSuggestions: string;
};

export type FaqPageContent = {
  hero: FaqSectionContent;
  categories: readonly FaqCategoryContent[];
  search: FaqSearchContent;
  categorySection: FaqSectionContent;
  popularSection: FaqSectionContent;
  librarySection: FaqSectionContent;
};

const FAQ_PAGE_EN: FaqPageContent = {
  hero: FAQ_HERO,
  categories: FAQ_CATEGORIES,
  search: FAQ_SEARCH,
  categorySection: FAQ_CATEGORY_SECTION,
  popularSection: FAQ_POPULAR_SECTION,
  librarySection: FAQ_LIBRARY_SECTION,
};

const FAQ_PAGE_ES: FaqPageContent = {
  hero: {
    eyebrow: "Centro de conocimiento de reclamaciones",
    title: "Preguntas frecuentes",
    description:
      "Respuestas prácticas para contratistas, empresas de restauración y profesionales de reclamaciones de propiedad, desde la incorporación y los precios hasta suplementos, documentación y negociaciones con aseguradoras.",
  },
  categories: [
    {
      id: "getting_started",
      title: "Primeros pasos",
      description:
        "Cómo funcionan la incorporación, la admisión y sus primeras revisiones de reclamaciones con Claims Ninja.",
    },
    {
      id: "pricing",
      title: "Precios",
      description:
        "Estructuras de tarifas, facturación y qué está incluido en los niveles de asociación.",
    },
    {
      id: "insurance_supplements",
      title: "Suplementos de seguros",
      description:
        "Cómo se gestionan la estrategia de suplementos, la revisión de alcance y las presentaciones a la aseguradora.",
    },
    {
      id: "roofing_claims",
      title: "Reclamaciones de techado",
      description:
        "Documentación y apoyo de recuperación para techado por tormenta, residencial y comercial.",
    },
    {
      id: "water_damage_claims",
      title: "Reclamaciones por daños de agua",
      description:
        "Preguntas sobre mitigación, secado y alcance de reconstrucción en pérdidas por agua.",
    },
    {
      id: "fire_damage_claims",
      title: "Reclamaciones por daños de incendio",
      description:
        "Consideraciones sobre humo, hollín, estructura y contenidos en pérdidas por incendio.",
    },
    {
      id: "mold_claims",
      title: "Reclamaciones por moho",
      description:
        "Documentación de remediación, pruebas y revisión de la aseguradora en reclamaciones por moho.",
    },
    {
      id: "contents_restoration",
      title: "Restauración de contenidos",
      description:
        "Flujos de pack-out, limpieza, almacenamiento y recuperación de propiedad personal.",
    },
    {
      id: "carrier_negotiations",
      title: "Negociaciones con aseguradoras",
      description:
        "Cómo los equipos expertos interactúan con ajustadores, revisores y procesos de disputa.",
    },
    {
      id: "documentation",
      title: "Documentación",
      description:
        "Fotos, estimados, registros de humedad y los registros que las aseguradoras esperan ver.",
    },
    {
      id: "platform_security",
      title: "Plataforma y seguridad",
      description:
        "Manejo de datos, controles de acceso y prácticas de almacenamiento de documentos.",
    },
    {
      id: "ai_claim_analysis",
      title: "Análisis de reclamaciones con IA",
      description:
        "Cómo la revisión asistida por IA apoya la precisión del alcance y la identificación de suplementos.",
    },
    {
      id: "results_insights",
      title: "Resultados e información",
      description:
        "Patrones de recuperación por oficio, revisiones de portafolio y resultados representativos de la inteligencia de reclamaciones de Claims Ninja.",
    },
  ],
  search: {
    eyebrow: "Buscar en la biblioteca",
    title: "Encuentre respuestas rápido",
    description:
      "Explore por tema a continuación o use la búsqueda para ir a preguntas específicas sobre reclamaciones, uso de la plataforma y apoyo de asociación.",
    placeholder: "Buscar preguntas sobre reclamaciones…",
    helperText:
      "Busque preguntas, respuestas y temas en toda la biblioteca.",
    emptyStateSuggestions:
      "precios, suplementos, daños por agua, negociación con aseguradoras o documentación",
  },
  categorySection: {
    eyebrow: "Explorar por tema",
    title: "Explore el conocimiento de reclamaciones por categoría",
    description:
      "Orientación organizada para las preguntas que más hacen contratistas y equipos de restauración.",
  },
  popularSection: {
    eyebrow: "Preguntas populares",
    title: "Lo que más nos preguntan los equipos",
    description:
      "Preguntas comunes sobre incorporación, suplementos, precios y uso de la plataforma.",
  },
  librarySection: {
    eyebrow: "Biblioteca completa",
    title: "Explore la biblioteca completa de conocimiento de reclamaciones",
    description:
      "Explore por tema, revise preguntas populares y encuentre orientación práctica sobre reclamaciones, suplementos, documentación y uso de la plataforma, organizada para contratistas y equipos de restauración.",
  },
};

const FAQ_PAGE_CONTENT: Record<Locale, FaqPageContent> = {
  en: FAQ_PAGE_EN,
  es: FAQ_PAGE_ES,
};

export function getFaqPageContent(locale: Locale): FaqPageContent {
  return FAQ_PAGE_CONTENT[locale] ?? FAQ_PAGE_EN;
}

/** Resolve FAQ items for a locale, overlaying Spanish copy where available. */
export function getLocalizedFaqItems(
  ids: readonly string[],
  locale: Locale,
): FaqItem[] {
  if (locale === "en") return getFaqItemsByIds(ids);

  const allItems = getAllFaqItems(locale);
  return ids.map((id) => {
    const item = allItems.find((entry) => entry.id === id);
    if (!item) {
      throw new Error(`Unknown FAQ id: ${id}`);
    }
    return item;
  });
}
