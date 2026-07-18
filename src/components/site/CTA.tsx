import { ArrowRight, Phone } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function FinalCTA() {
  return (
    <>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1F2020] px-6 py-16 text-white shadow-lift sm:px-14 sm:py-20 banner-image">
          <img src="/image4.png" alt="Healthy Lifestyle CTA" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40" />
        
        <div className="relative mx-auto max-w-3xl text-center drop-shadow-md">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-ivory)] drop-shadow-sm">
            Ready to Transform Your Health?
          </p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl leading-tight drop-shadow-lg">
            Take the first step toward a healthier body, sharper mind, and smarter nutrition.
          </h2>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BRAND.phoneDigits}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              WhatsApp Now <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}