import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Book your free health assessment at MD Nutrition Centre. Call, WhatsApp or send us a message online.",
      },
      { property: "og:title", content: "Contact — MD Nutrition Centre" },
      { property: "og:description", content: "Get in touch to start your wellness journey today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

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
  }

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Book your free health assessment
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Share a few details and we’ll get in touch to schedule your consultation — online or at
            our Guntur centre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your full name" />
              <Field label="Mobile Number" name="mobile" required type="tel" placeholder="+91 …" />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-charcoal">Health Goal</label>
                <select
                  name="goal"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                >
                  <option value="" disabled>
                    Select a goal
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </div>
              <div className="sm:col-span-2">
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
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-charcoal">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a little about your health journey"
                  className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>

            {sent && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm font-medium text-primary">
                <CheckCircle2 className="h-4 w-4" /> Message ready — opening WhatsApp…
              </p>
            )}
          </form>

          <aside className="flex flex-col gap-5">
            <a
              href={`tel:${BRAND.phoneDigits}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ivory text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Call</span>
                <span className="mt-0.5 block font-display text-lg font-bold text-charcoal">{BRAND.phone}</span>
              </span>
            </a>

            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/10 text-[#128C7E]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</span>
                <span className="mt-0.5 block font-display text-lg font-bold text-charcoal">Chat with us</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-ivory p-6 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Visit</p>
                <p className="mt-0.5 font-display text-lg font-bold text-charcoal">{BRAND.city}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Online and in-person consultations available. We’ll share the exact address when
                  you confirm your slot.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
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