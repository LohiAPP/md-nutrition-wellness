import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { ConsultationForm } from "./ConsultationForm";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm transition-opacity">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="relative shrink-0 bg-gradient-cta p-6 text-white text-center rounded-t-3xl border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white hover:text-charcoal"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-2">MD Nutrition Centre</p>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Start Your Transformation! 💪
          </h2>
          <p className="mt-3 text-sm text-white/90 max-w-md mx-auto">
            Tell us about yourself and we’ll create a personalized nutrition and wellness plan for you.
          </p>
        </div>

        {/* Modal Body / Form */}
        <div className="flex-1 overflow-hidden p-6 sm:p-8 bg-white">
          <ConsultationForm isPopup={true} />
        </div>
      </div>
    </div>,
    document.body
  );
}
