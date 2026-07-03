import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { ContactModal } from "./ContactModal";
import logo from "@/assets/md-logo.png.asset.json";
import { BRAND, NAV } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label={`${BRAND.name} — Home`}
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt={`${BRAND.name} logo`}
            width={160}
            height={64}
            className="h-11 w-auto sm:h-12"
          />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:bg-ivory data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Free Consultation
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-ivory data-[status=active]:bg-ivory data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); setIsModalOpen(true); }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Free Consultation
            </button>
          </nav>
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}