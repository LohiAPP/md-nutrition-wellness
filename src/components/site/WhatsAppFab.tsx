import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MD Nutrition Centre on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}