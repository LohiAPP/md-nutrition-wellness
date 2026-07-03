import { useState, useEffect } from "react";
import { CheckCircle2, Send, X } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/site-data";
import { createPortal } from "react-dom";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const mobile = form.get("mobile");
    const goal = form.get("goal");
    const type = form.get("type");
    const message = form.get("message");
    const text = `Hi MD Nutrition Centre,%0A%0AName: ${name}%0AMobile: ${mobile}%0AHealth goal: ${goal}%0APreferred consultation: ${type}%0A%0AMessage: ${message}`;
    window.open(`https://wa.me/${BRAND.phoneDigits}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
    }, 2000);
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/40 p-4 backdrop-blur-sm transition-opacity">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-ivory hover:text-charcoal"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="mb-6 font-display text-2xl font-bold text-charcoal sm:text-3xl">
          Free Consultation
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Name" name="name" required placeholder="Your full name" />
          <Field label="Mobile Number" name="mobile" required type="tel" placeholder="+91 …" />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">Health Goal</label>
            <select
              name="goal"
              required
              defaultValue=""
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            >
              <option value="" disabled>Select a goal</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Something else</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">
              Preferred Consultation Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Online", "In-person", "Either"].map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-ivory/40 px-3 py-2.5 text-sm font-medium text-charcoal transition hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-ivory has-[:checked]:text-primary"
                >
                  <input type="radio" name="type" value={opt} required className="sr-only" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">Message</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us a little about your health journey"
              className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Send via WhatsApp
          </button>

          {sent && (
            <p className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm font-medium text-primary">
              <CheckCircle2 className="h-4 w-4" /> Message ready — opening WhatsApp…
            </p>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}
