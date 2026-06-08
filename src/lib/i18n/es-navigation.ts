import type { NavEntry } from "@/lib/navigation";
import { MAIN_NAV } from "@/lib/navigation";
import { localizePath } from "@/lib/i18n/paths";

const ES_NAV_LABELS: Record<string, string> = {
  Platform: "Plataforma",
  Solutions: "Soluciones",
  Resources: "Recursos",
  Company: "Empresa",
  Pricing: "Precios",
  "Platform Overview": "Resumen de la plataforma",
  "Client Portal": "Portal del cliente",
  "Claim Tracking": "Seguimiento de reclamaciones",
  "Communication Hub": "Centro de comunicación",
  "Billing & Payments": "Facturación y pagos",
  "AI Claim Analysis": "Análisis de reclamaciones con IA",
  Roofing: "Techado",
  "Water Damage": "Daños por agua",
  "Fire Damage": "Daños por incendio",
  Mold: "Moho",
  Contents: "Contenidos",
  Blog: "Blog",
  "Case Studies": "Casos de estudio",
  "Claim Guides": "Guías de reclamaciones",
  FAQ: "Preguntas frecuentes",
  About: "Nosotros",
  "Partner Network": "Red de socios",
  Reviews: "Reseñas",
  Contact: "Contacto",
};

const ES_FOOTER_LABELS: Record<string, string> = {
  About: "Nosotros",
  "Partner Network": "Red de socios",
  Reviews: "Reseñas",
  Contact: "Contacto",
  "Claim intake": "Ingreso de reclamación",
  "Schedule consultation": "Agendar consulta",
  "Results & Insights": "Resultados e información",
  Pricing: "Precios",
  Blog: "Blog",
  "Claim Guides": "Guías de reclamaciones",
  FAQ: "Preguntas frecuentes",
  Company: "Empresa",
  Resources: "Recursos",
};

function translateLabel(label: string): string {
  return ES_NAV_LABELS[label] ?? label;
}

export function getLocalizedMainNav(): readonly NavEntry[] {
  return MAIN_NAV.map((entry) => {
    if (entry.type === "link") {
      return {
        ...entry,
        label: translateLabel(entry.label),
        href: localizePath("es", entry.href),
      };
    }

    return {
      ...entry,
      label: translateLabel(entry.label),
      items: entry.items.map((item) => ({
        ...item,
        label: translateLabel(item.label),
        href: localizePath("es", item.href),
      })),
    };
  });
}

export function translateFooterLabel(label: string): string {
  return ES_FOOTER_LABELS[label] ?? label;
}

export const ES_CTA_LABELS = {
  startClaimReview: "Iniciar revisión de reclamación",
  scheduleCall: "Agendar llamada",
} as const;
