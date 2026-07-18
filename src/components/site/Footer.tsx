import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { BRAND, NAV, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center rounded-2xl bg-white p-3">
            <img src="/logo.png" alt={`${BRAND.name} logo`} width={200} height={80} className="h-14 w-auto" />
          </div>
          <p className="mt-6 max-w-md font-display text-xl font-semibold text-white">
            {BRAND.tagline}
          </p>
          <p className="mt-3 max-w-md text-sm text-white/70">
            Personalized nutrition guidance and wellness coaching to help you achieve sustainable
            health, better energy, and a confident lifestyle.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://www.facebook.com/mdnutritioncentre/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/md_nutrition_centre_/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="MD Nutrition Centre Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtu.be/ByvxZW5tcJE" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/mahammedmujeeb/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/85 transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-white/85 transition-colors hover:text-white">
                  {s.title.replace(" Support", "")}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/60">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <MessageCircle className="h-4 w-4" /> {BRAND.email}
              </a>
            </li>
            <li>
              <a href={`tel:${BRAND.phoneDigits}`} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <Phone className="h-4 w-4" /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" /> {BRAND.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Coaching by Mahammed Mujeeb · Certified Wellness Coach in Nutrition</p>
        </div>
      </div>
    </footer>
  );
}