import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta px-6 py-16 text-white shadow-lift sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
            Start Your Health Transformation Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Book your free health assessment and take the first step toward a healthier body,
            sharper mind, and smarter nutrition.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BRAND.phoneDigits}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call {BRAND.phone}
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              WhatsApp Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white/90 underline-offset-4 hover:underline"
            >
              Or send us a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}