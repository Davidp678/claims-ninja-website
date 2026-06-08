import type { Locale } from "@/lib/i18n/config";
import type { ContactInquiryType } from "@/lib/calculator-lead";
import {
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_INFO,
  CONTACT_INFO_METHODS,
  CONTACT_INQUIRY_TYPE_LABELS,
  CONTACT_ROUTING,
} from "@/lib/contact-page";

export type ContactRoutingCardContent = {
  title: string;
  description: string;
  inquiryType: ContactInquiryType;
};

export type ContactInfoMethodContent = {
  id: "phone" | "email";
  label: string;
  helper: string;
  hrefKind: "tel" | "mailto";
};

export type ContactContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  routing: {
    eyebrow: string;
    title: string;
    description: string;
    cards: readonly ContactRoutingCardContent[];
    selectedLabel: string;
    selectLabel: string;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    sendingLabel: string;
    successMessage: string;
    successResponseNote: string;
    preferToTalk: string;
    scheduleStrategyCall: string;
    inquiryTypeLabels: Record<ContactInquiryType, string>;
    labels: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      website: string;
      optional: string;
      monthlyClaimVolume: string;
      monthlyClaimVolumePlaceholder: string;
      inquiryType: string;
      message: string;
      messagePlaceholder: string;
      websitePlaceholder: string;
    };
    errors: {
      fullName: string;
      company: string;
      email: string;
      emailInvalid: string;
      phone: string;
      message: string;
      monthlyVolume: string;
      generic: string;
    };
  };
  info: {
    eyebrow: string;
    title: string;
    description: string;
    methods: readonly ContactInfoMethodContent[];
  };
};

const EN: ContactContent = {
  hero: CONTACT_HERO,
  routing: {
    eyebrow: CONTACT_ROUTING.eyebrow,
    title: CONTACT_ROUTING.title,
    description: CONTACT_ROUTING.description,
    cards: CONTACT_ROUTING.cards,
    selectedLabel: "Selected — continue below →",
    selectLabel: "Select & continue →",
  },
  form: {
    eyebrow: CONTACT_FORM.eyebrow,
    title: CONTACT_FORM.title,
    description: CONTACT_FORM.description,
    submitLabel: CONTACT_FORM.submitLabel,
    sendingLabel: "Sending…",
    successMessage: CONTACT_FORM.successMessage,
    successResponseNote: "Most inquiries receive a response within one business day.",
    preferToTalk: "Prefer to talk first?",
    scheduleStrategyCall: "Schedule a strategy call",
    inquiryTypeLabels: CONTACT_INQUIRY_TYPE_LABELS,
    labels: {
      fullName: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      website: "Website",
      optional: "(optional)",
      monthlyClaimVolume: "Monthly claim volume",
      monthlyClaimVolumePlaceholder: "e.g. jobs or claims per month",
      inquiryType: "Inquiry type",
      message: "Message",
      messagePlaceholder:
        "Tell us about your operation, active claims, or questions.",
      websitePlaceholder: "https://",
    },
    errors: {
      fullName: "Full name is required.",
      company: "Company is required.",
      email: "Email is required.",
      emailInvalid: "Enter a valid email address.",
      phone: "Phone is required.",
      message: "Message is required.",
      monthlyVolume: "Monthly claim volume must be a valid number.",
      generic: "Something went wrong. Please try again.",
    },
  },
  info: {
    eyebrow: CONTACT_INFO.eyebrow,
    title: CONTACT_INFO.title,
    description: CONTACT_INFO.description,
    methods: CONTACT_INFO_METHODS.map((method) => ({
      id: method.id,
      label: method.label,
      helper: method.helper,
      hrefKind: method.hrefKind,
    })),
  },
};

const ES: ContactContent = {
  hero: {
    eyebrow: "Empresa",
    title: "Hablemos de su operación",
    description:
      "Cuéntenos sobre su negocio, su flujo de reclamaciones o sus desafíos actuales. Revisaremos su situación, identificaremos oportunidades y le recomendaremos los próximos pasos.",
    primaryCtaLabel: "Ir al formulario",
    secondaryCtaLabel: "Agendar llamada estratégica",
  },
  routing: {
    eyebrow: "¿Cómo podemos ayudar?",
    title: "Dirija su consulta al equipo correcto",
    description:
      "Seleccione la opción que mejor se ajuste a su situación. Rellenaremos el formulario por adelantado para que pueda enviar su mensaje en segundos.",
    cards: [
      {
        title: "Revisar una reclamación",
        description:
          "Obtenga una segunda opinión sobre reclamaciones activas e identifique posibles oportunidades de recuperación.",
        inquiryType: "claim-review",
      },
      {
        title: "Explorar una asociación",
        description:
          "Conozca cómo Claims Ninja puede apoyar a su equipo y su flujo de reclamaciones.",
        inquiryType: "partnership-inquiry",
      },
      {
        title: "Soporte para clientes existentes",
        description:
          "Preguntas sobre expedientes activos, documentación, comunicación o el estado de la reclamación.",
        inquiryType: "existing-client-support",
      },
      {
        title: "Asociaciones estratégicas",
        description:
          "Le interesa formar parte del ecosistema de socios estratégicos de Claims Ninja.",
        inquiryType: "strategic-partner-inquiry",
      },
    ],
    selectedLabel: "Seleccionado — continúe abajo →",
    selectLabel: "Seleccionar y continuar →",
  },
  form: {
    eyebrow: "Envíe un mensaje",
    title: "Cuéntenos qué necesita",
    description:
      "Comparta algunos detalles sobre su operación y le daremos seguimiento con los próximos pasos adaptados a su consulta.",
    submitLabel: "Enviar consulta",
    sendingLabel: "Enviando…",
    successMessage:
      "Gracias — su consulta ha sido recibida. Un miembro de nuestro equipo revisará su mensaje y responderá usando los datos de contacto que proporcionó.",
    successResponseNote:
      "La mayoría de las consultas reciben respuesta dentro de un día hábil.",
    preferToTalk: "¿Prefiere hablar primero?",
    scheduleStrategyCall: "Agende una llamada estratégica",
    inquiryTypeLabels: {
      "claim-review": "Revisión de reclamación",
      "partnership-inquiry": "Consulta de asociación",
      "existing-client-support": "Soporte para clientes existentes",
      "strategic-partner-inquiry": "Consulta de socio estratégico",
      "general-question": "Pregunta general",
    },
    labels: {
      fullName: "Nombre completo",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono",
      website: "Sitio web",
      optional: "(opcional)",
      monthlyClaimVolume: "Volumen mensual de reclamaciones",
      monthlyClaimVolumePlaceholder: "p. ej. trabajos o reclamaciones por mes",
      inquiryType: "Tipo de consulta",
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntenos sobre su operación, reclamaciones activas o preguntas.",
      websitePlaceholder: "https://",
    },
    errors: {
      fullName: "El nombre completo es obligatorio.",
      company: "La empresa es obligatoria.",
      email: "El correo electrónico es obligatorio.",
      emailInvalid: "Ingrese una dirección de correo electrónico válida.",
      phone: "El teléfono es obligatorio.",
      message: "El mensaje es obligatorio.",
      monthlyVolume: "El volumen mensual de reclamaciones debe ser un número válido.",
      generic: "Algo salió mal. Por favor, inténtelo de nuevo.",
    },
  },
  info: {
    eyebrow: "Información de contacto",
    title: "Contacte directamente a Claims Ninja",
    description:
      "La mayoría de las consultas reciben respuesta dentro de un día hábil.",
    methods: [
      {
        id: "phone",
        label: "Llame a Claims Ninja",
        helper:
          "Hable con nuestro equipo sobre revisiones de reclamaciones, asociaciones o soporte de expedientes activos.",
        hrefKind: "tel",
      },
      {
        id: "email",
        label: "Escriba a Claims Ninja",
        helper:
          "Envíe preguntas sobre reclamaciones, consultas de asociación o solicitudes generales.",
        hrefKind: "mailto",
      },
    ],
  },
};

const CONTACT_CONTENT: Record<Locale, ContactContent> = { en: EN, es: ES };

export function getContactContent(locale: Locale): ContactContent {
  return CONTACT_CONTENT[locale] ?? EN;
}
