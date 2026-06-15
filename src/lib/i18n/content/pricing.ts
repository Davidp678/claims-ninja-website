import type { Locale } from "@/lib/i18n/config";
import type { PricingRateRow } from "@/lib/pricing-page";
import {
  PRICING_ADDITIONAL_SERVICES,
  PRICING_BILLING,
  PRICING_ESTIMATE_WRITING,
  PRICING_HERO,
  PRICING_NEGOTIATION,
  PRICING_NEGOTIATION_SUPPLEMENT_SECTION,
  PRICING_OVERVIEW,
  PRICING_SUPPLEMENT,
} from "@/lib/pricing-page";

type TitleDescription = { title: string; description: string };

export type PricingContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    trustItems: readonly string[];
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: readonly TitleDescription[];
  };
  estimateWriting: {
    eyebrow: string;
    title: string;
    intro: string;
    rows: readonly PricingRateRow[];
    invoiceNote: string;
  };
  negotiation: {
    eyebrow: string;
    title: string;
    rows: readonly PricingRateRow[];
    invoiceNote: string;
  };
  supplement: {
    eyebrow: string;
    title: string;
    rows: readonly PricingRateRow[];
    invoiceNote: string;
  };
  negotiationSupplementSection: {
    eyebrow: string;
    title: string;
    description: string;
    sharedInvoiceNote: string;
  };
  additionalServices: {
    eyebrow: string;
    title: string;
    description: string;
    services: readonly TitleDescription[];
  };
  billing: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly { label: string; title: string; description: string }[];
  };
};

const EN: PricingContent = {
  hero: PRICING_HERO,
  overview: PRICING_OVERVIEW,
  estimateWriting: PRICING_ESTIMATE_WRITING,
  negotiation: PRICING_NEGOTIATION,
  supplement: PRICING_SUPPLEMENT,
  negotiationSupplementSection: PRICING_NEGOTIATION_SUPPLEMENT_SECTION,
  additionalServices: PRICING_ADDITIONAL_SERVICES,
  billing: PRICING_BILLING,
};

const ES: PricingContent = {
  hero: {
    eyebrow: "Precios",
    title: "Empiece con una revisión gratuita. Pague solo por resultados.",
    description:
      "Antes de gastar un dólar, revisaremos su estimado e identificaremos oportunidades potenciales. No hay contratos, ni retenciones, ni obligación de continuar. Si decide avanzar, los precios están claramente definidos y vinculados al trabajo realizado y al valor recuperado.",
    primaryCtaLabel: "Iniciar revisión de reclamación",
    secondaryCtaLabel: "Agendar llamada estratégica",
    trustItems: [
      "Revisiones gratuitas de estimados",
      "Sin contratos",
      "Sin cuotas mensuales",
      "Pague solo por trabajo completado",
    ],
  },
  overview: {
    eyebrow: "Servicios",
    title: "Precios por servicio de reclamación",
    description:
      "Cada servicio tiene una estructura de tarifas definida para que su equipo sepa qué esperar antes de comenzar el trabajo.",
    cards: [
      {
        title: "Redacción de estimados",
        description:
          "Para contratistas que necesitan un estimado preciso según el tamaño y el alcance de la reclamación.",
      },
      {
        title: "Apoyo de suplementos",
        description:
          "Para alcance omitido, daños ocultos, discrepancias de precios y aumentos suplementarios aprobados.",
      },
      {
        title: "Negociación con la aseguradora",
        description:
          "Para brechas en el estimado de la aseguradora, aumentos del acuerdo y apoyo en la recuperación de la reclamación.",
      },
      {
        title: "Apoyo avanzado de reclamaciones",
        description:
          "Para tasación, reclamaciones complejas, expedientes prolongados y necesidades de documentación de respaldo.",
      },
    ],
  },
  estimateWriting: {
    eyebrow: "Redacción de estimados",
    title: "Tarifas de redacción de estimados",
    intro:
      "Las tarifas de redacción de estimados se escalonan según el valor del estimado para que el precio crezca de forma justa con el tamaño del proyecto.",
    rows: [
      { range: "Valor de estimado menor a $12,500", rate: "$100 mínimo" },
      { range: "$12,500 – $100,000", rate: "1.25%" },
      { range: "$100,001 – $200,000", rate: "0.75%" },
      { range: "Más de $200,000", rate: "0.50%" },
    ],
    invoiceNote:
      "Las facturas de estimados se emiten al completarse y con la aprobación del cliente a través del Portal del Cliente.",
  },
  negotiation: {
    eyebrow: "Negociación con la aseguradora",
    title: "Tarifas de negociación con la aseguradora",
    rows: [
      { range: "Tarifa mínima", rate: "$150" },
      {
        range: "Cuando hay un estimado de la aseguradora disponible",
        rate: "15% del aumento documentado del acuerdo por encima del estimado original de la aseguradora",
      },
      {
        range: "Cuando no se ha proporcionado un estimado de la aseguradora",
        rate: "4% del acuerdo de RCV final",
      },
    ],
    invoiceNote:
      "Las facturas de negociación se emiten tras una negociación exitosa y la aprobación final.",
  },
  supplement: {
    eyebrow: "Apoyo de suplementos",
    title: "Tarifas de apoyo de suplementos",
    rows: [
      {
        range: "Alcance suplementario aprobado",
        rate: "15% del aumento documentado aprobado por la aseguradora a partir del alcance suplementario presentado",
      },
    ],
    invoiceNote:
      "Las facturas de suplementos se emiten tras una negociación exitosa y la aprobación final.",
  },
  negotiationSupplementSection: {
    eyebrow: "Negociación y suplementos",
    title: "Precios basados en la recuperación",
    description:
      "Las tarifas de negociación y suplementos se alinean con los aumentos documentados aprobados por la aseguradora, no con los totales brutos de la factura.",
    sharedInvoiceNote:
      "Las facturas de negociación y suplementos se emiten tras una negociación exitosa y la aprobación final.",
  },
  additionalServices: {
    eyebrow: "Servicios adicionales",
    title: "Servicios de apoyo y opciones de pago",
    description:
      "Los expedientes complejos y las necesidades de documentación pueden incluir tarifas de traspaso o de servicio fijo.",
    services: [
      {
        title: "Apoyo de tasación",
        description:
          "$500 – $1,200 según la complejidad y el alcance de la reclamación.",
      },
      {
        title: "Informes EagleView",
        description:
          "$60 por proyecto cuando se requieren para la documentación de techado.",
      },
      {
        title: "Procesamiento de pagos",
        description:
          "El ACH está disponible sin tarifa de procesamiento. Los pagos con tarjeta de crédito incluyen una tarifa de conveniencia del 3%.",
      },
    ],
  },
  billing: {
    eyebrow: "Cómo funciona la facturación",
    title: "Del envío al pago",
    description:
      "Las facturas se vinculan al trabajo completado y a la aprobación del cliente, y luego vencen de inmediato una vez aprobadas.",
    steps: [
      {
        label: "1",
        title: "Se envía el expediente o servicio",
        description:
          "Su equipo envía un expediente de reclamación o solicita trabajo de estimado, suplemento, negociación o apoyo.",
      },
      {
        label: "2",
        title: "Claims Ninja completa el trabajo",
        description:
          "Se realiza el desarrollo del estimado, la estrategia de suplementos, la negociación o los servicios de apoyo a la reclamación.",
      },
      {
        label: "3",
        title: "El cliente revisa y aprueba",
        description:
          "Usted revisa los entregables y aprueba el trabajo completado a través del Portal del Cliente.",
      },
      {
        label: "4",
        title: "Se emite la factura",
        description:
          "Se genera una factura según el servicio aprobado y la estructura de tarifas aplicable.",
      },
      {
        label: "5",
        title: "Se procesa el pago",
        description:
          "El pago se procesa mediante el método registrado: ACH sin tarifa, o tarjeta de crédito con una tarifa de conveniencia del 3%.",
      },
    ],
  },
};

const PRICING_CONTENT: Record<Locale, PricingContent> = { en: EN, es: ES };

export function getPricingContent(locale: Locale): PricingContent {
  return PRICING_CONTENT[locale] ?? EN;
}
