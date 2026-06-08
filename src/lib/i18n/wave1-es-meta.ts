import type { Wave1EnPath } from "@/lib/i18n/paths";

export const WAVE1_ES_META: Record<
  Wave1EnPath,
  { metaTitle: string; metaDescription: string }
> = {
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
};
