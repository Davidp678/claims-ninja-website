import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LocalizedFooter } from "@/components/layout/LocalizedFooter";
import { LocaleDocumentLang } from "@/components/layout/LocaleDocumentLang";
import { Navbar } from "@/components/layout/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LocaleDocumentLang />
      <Navbar />
      <main className="flex-1">{children}</main>
      <LocalizedFooter />
      <ChatWidget />
    </>
  );
}
