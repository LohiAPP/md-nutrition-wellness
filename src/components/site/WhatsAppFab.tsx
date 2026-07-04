import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MD Nutrition Centre on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}