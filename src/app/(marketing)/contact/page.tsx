import { ContactPage } from "@/components/contact/ContactPage";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_META } from "@/lib/contact-page";

export const metadata = pageMetadata({
  title: CONTACT_META.metaTitle,
  description: CONTACT_META.metaDescription,
  path: CONTACT_META.path,
});

export default function ContactRoutePage() {
  return <ContactPage />;
}
