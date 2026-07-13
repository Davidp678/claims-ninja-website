import type { EsMarketingEnPath } from "@/lib/i18n/paths";

export type EsPageMeta = {
  metaTitle: string;
  metaDescription: string;
};

export const ES_PAGE_META: Record<EsMarketingEnPath, EsPageMeta> = {
  "/": {
    metaTitle: "Soporte de reclamaciones para contratistas que maximiza la recuperación",
    metaDescription:
      "The Claims Ninja redacta, negocia y gestiona sus suplementos de seguros para que cobre más y más rápido, sin contratar un equipo interno de reclamaciones.",
  },
  "/pricing": {
    metaTitle: "Precios",
    metaDescription:
      "Modelos de precios transparentes y alineados al rendimiento para equipos de restauración y techado que recuperan más en cada reclamación.",
  },
  "/contact": {
    metaTitle: "Contacto",
    metaDescription:
      "Comuníquese con The Claims Ninja para soporte de reclamaciones, consultas de suplementos y orientación sobre la plataforma.",
  },
  "/platform": {
    metaTitle: "Resumen de la plataforma",
    metaDescription:
      "Explore la plataforma de Claims Ninja: portal, seguimiento, comunicaciones, facturación y análisis con IA respaldado por expertos en reclamaciones.",
  },
  "/platform/client-portal": {
    metaTitle: "Portal del cliente",
    metaDescription:
      "El portal de Claims Ninja es su centro de operaciones: envíe documentos, comuníquese con nuestro equipo, haga seguimiento de proyectos y mantenga la facturación conectada en un solo espacio.",
  },
  "/platform/claim-tracking": {
    metaTitle: "Seguimiento de reclamaciones",
    metaDescription:
      "Monitoree el estado de las reclamaciones, el progreso de recuperación y la actividad operativa en todo su portafolio con el seguimiento de Claims Ninja.",
  },
  "/platform/communication-hub": {
    metaTitle: "Centro de comunicación",
    metaDescription:
      "Colabore directamente con el equipo de Claims Ninja dentro de un centro de comunicación vinculado a cada reclamación.",
  },
  "/platform/billing-payments": {
    metaTitle: "Facturación y pagos",
    metaDescription:
      "Gestione facturas, pagos y facturación relacionada con reclamaciones con visibilidad conectada a cada trabajo.",
  },
  "/platform/ai-claim-analysis": {
    metaTitle: "Análisis de reclamaciones con IA",
    metaDescription:
      "El análisis con IA revisa la documentación de reclamaciones antes de la revisión experta para identificar oportunidades y brechas.",
  },
  "/solutions/roofing": {
    metaTitle: "Reclamaciones de techado",
    metaDescription:
      "Maximice la recuperación en pérdidas de techado residencial y comercial con documentación, suplementos y apoyo de negociación.",
  },
  "/solutions/commercial": {
    metaTitle: "Reclamaciones de seguros comerciales",
    metaDescription:
      "Apoyo en reclamaciones de seguros comerciales de Claims Ninja: estimación de grandes pérdidas, documentación disciplinada, suplementos y negociación con aseguradoras para contratistas de restauración en propiedades comerciales complejas.",
  },
  "/solutions/water-damage": {
    metaTitle: "Reclamaciones por daños de agua",
    metaDescription:
      "Documentación, desarrollo de alcance y estrategia de suplementos para proyectos de mitigación y reconstrucción por agua.",
  },
  "/solutions/fire-damage": {
    metaTitle: "Reclamaciones por daños de incendio",
    metaDescription:
      "Apoyo en reclamaciones complejas de reconstrucción e incendio con documentación sólida y negociación con aseguradoras.",
  },
  "/solutions/mold": {
    metaTitle: "Reclamaciones por moho",
    metaDescription:
      "Soporte de reclamaciones para proyectos de remediación y reconstrucción por moho con documentación y estrategia de suplementos.",
  },
  "/solutions/contents": {
    metaTitle: "Reclamaciones de contenidos",
    metaDescription:
      "Soporte de reclamaciones para pack-out, inventario y restauración especializada de contenidos.",
  },
  "/resources/blog": {
    metaTitle: "Blog",
    metaDescription:
      "Perspectivas sobre operaciones de reclamaciones, recuperación y mejores prácticas para contratistas de restauración y techado.",
  },
  "/resources/guides": {
    metaTitle: "Guías de reclamaciones",
    metaDescription:
      "Guías prácticas para la excelencia en flujos de trabajo de reclamaciones, desde la admisión hasta la recuperación.",
  },
  "/faq": {
    metaTitle: "Preguntas frecuentes",
    metaDescription:
      "Respuestas a preguntas comunes sobre la plataforma Claims Ninja, precios, incorporación y soporte de reclamaciones.",
  },
  "/case-studies": {
    metaTitle: "Casos de estudio",
    metaDescription:
      "Inteligencia de la industria a partir de miles de reclamaciones revisadas: patrones de recuperación y resultados representativos.",
  },
  "/about": {
    metaTitle: "Nosotros",
    metaDescription:
      "Conozca The Claims Ninja: soporte de reclamaciones y plataforma operativa para contratistas de restauración y techado.",
  },
  "/partner-network": {
    metaTitle: "Red de socios",
    metaDescription:
      "Explore la red de socios de Claims Ninja y herramientas que fortalecen la reputación, operaciones y recuperación de contratistas.",
  },
  "/reviews": {
    metaTitle: "Reseñas",
    metaDescription:
      "Lo que dicen los contratistas sobre trabajar con Claims Ninja para soporte de reclamaciones y recuperación.",
  },
};

export function getEsPageMetadata(enPath: string): EsPageMeta | undefined {
  if (enPath in ES_PAGE_META) {
    return ES_PAGE_META[enPath as EsMarketingEnPath];
  }
  return undefined;
}

export function getEsPageMetadataOrThrow(enPath: EsMarketingEnPath): EsPageMeta {
  return ES_PAGE_META[enPath];
}
