import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MD Nutrition Centre on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center transition-transform hover:-translate-y-0.5 hover:scale-105"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="h-full w-full object-contain drop-shadow-lg" />
    </a>
  );
}