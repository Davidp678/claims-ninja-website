import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LocalizedFooter } from "@/components/layout/LocalizedFooter";
import { Navbar } from "@/components/layout/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <LocalizedFooter />
      <ChatWidget />
    </>
  );
}
