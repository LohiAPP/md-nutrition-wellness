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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-charcoal/60 p-0 sm:p-4 backdrop-blur-sm transition-opacity">
      {/* Modal card: on mobile fills bottom 92% of screen, on desktop is centered */}
      <div
        className="relative flex flex-col w-full max-w-2xl rounded-t-2xl sm:rounded-3xl bg-white shadow-2xl"
        style={{ height: "92dvh", maxHeight: "92dvh" }}
      >
        {/* Modal Header — always visible at top */}
        <div className="relative shrink-0 bg-gradient-cta px-4 py-3 sm:p-6 text-white text-center rounded-t-2xl sm:rounded-t-3xl border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-white/20 p-1.5 sm:p-2 text-white transition-colors hover:bg-white hover:text-charcoal"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-widest text-white/80 mb-0.5 sm:mb-2">MD Nutrition Centre</p>
          <h2 className="font-display text-lg font-bold sm:text-3xl pr-6 sm:pr-0">
            Start Your Transformation! 💪
          </h2>
          <p className="mt-1 sm:mt-3 text-xs sm:text-sm text-white/90 max-w-md mx-auto leading-snug">
            Tell us about yourself and we'll create a personalized nutrition and wellness plan for you.
          </p>
        </div>

        {/* Modal Body — fills remaining space, form handles internal scroll */}
        <div className="flex flex-1 flex-col min-h-0 p-3.5 sm:p-6 bg-white rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
          <ConsultationForm isPopup={true} />
        </div>
      </div>
    </div>,
    document.body
  );
}
