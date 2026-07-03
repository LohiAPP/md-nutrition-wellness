import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ChevronDown,
  Compass,
  LineChart,
  Quote,
  Sparkles,
  Target,
  Droplet,
  HeartPulse,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Users,
} from "lucide-react";
import hero from "@/assets/hero-nutrition.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { BRAND, FAQS, SERVICES, STORIES, SPECIALISED, SUPPORT_PILLARS } from "@/lib/site-data";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition." },
      {
        name: "description",
        content:
          "Evidence-based nutrition coaching in Guntur. Personalized plans for weight loss, PCOS/PCOD, diabetes, thyroid and sustainable lifestyle change.",
      },
      { property: "og:title", content: "MD Nutrition Centre — Smart Nutrition Coaching" },
      {
        property: "og:description",
        content:
          "Personalized wellness coaching to help you achieve sustainable health, better energy and a confident lifestyle.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  "Evidence-Based Nutrition",
  "Personalized Coaching",
  "Sustainable Lifestyle Support",
];

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book Your Free Health Assessment",
    desc: "Reach out on call or WhatsApp and pick a slot that works for you.",
  },
  {
    icon: Compass,
    title: "Understand Your Health Goals",
    desc: "We map your lifestyle, medical history and what a healthier you looks like.",
  },
  {
    icon: Target,
    title: "Get a Personalized Plan",
    desc: "A realistic nutrition and lifestyle plan designed around your body and routine.",
  },
  {
    icon: LineChart,
    title: "Follow-Up & Progress Tracking",
    desc: "Regular check-ins keep you consistent and adjust the plan as you progress.",
  },
];

const WHY = [
  "Personalized plans based on your body and lifestyle",
  "Scientifically backed nutrition guidance",
  "Simple, realistic, and sustainable approach",
  "Regular follow-up and progress tracking",
  "Support for weight loss, diabetes, PCOS/PCOD, thyroid, and lifestyle transformation",
  "Online and in-person consultation options",
  "Professional wellness coaching by Mohammed Mujeeb",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* animated blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-teal/25 animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-green/20 animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Nutrition · Wellness · Coaching
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
              Strong Body.<br />
              Sharp Mind.<br />
              <span className="text-gradient-brand">Smart Nutrition.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Personalized nutrition guidance and wellness coaching to help you achieve
              sustainable health, better energy, and a confident lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 animate-pulse-ring"
              >
                Book Free Health Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-primary hover:text-primary"
              >
                Explore Services
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/80">
              {TRUST.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-white/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-lift">
              <img
                src={hero}
                alt="A wellness client enjoying a colourful, nutritious meal"
                width={1280}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -left-4 bottom-6 hidden max-w-[240px] rounded-2xl bg-white p-4 shadow-soft sm:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Real Results</p>
              <p className="mt-1 text-sm font-medium text-charcoal">
                “Lost 12 kg in 6 months without any crash diet.”
              </p>
              <p className="mt-2 text-xs text-muted-foreground">— Priya, weight management client</p>
            </div>

            <div className="absolute -right-3 top-6 hidden rounded-2xl bg-charcoal p-4 text-white shadow-lift sm:block">
              <p className="text-2xl font-bold">1,200+</p>
              <p className="text-xs text-white/70">Lives coached</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Your Nutrition Partner for a Healthier Tomorrow
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At MD Nutrition Centre, we believe nutrition should be simple, clear, and sustainable.
              Our approach empowers you to make informed dietary choices without unnecessary
              restrictions, helping you achieve your health and wellness goals with confidence.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              Learn more about our approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "10+", v: "Years of coaching experience" },
              { k: "1,200+", v: "Clients guided to results" },
              { k: "95%", v: "Client follow-through rate" },
              { k: "4.9★", v: "Average client rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-ivory p-6 shadow-soft">
                <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">{s.k}</p>
                <p className="mt-2 text-sm text-charcoal/75">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[color:var(--brand-sand)]/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Services</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Coaching designed around your body and lifestyle
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s, i) => (
              <div
                key={s.slug}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group card-hover animate-rise flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-primary shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Why Choose MD Nutrition Centre?
            </h2>
            <p className="mt-5 text-muted-foreground">
              A programme built on evidence, empathy and consistency — no fads, no extremes,
              just changes you can live with.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-charcoal">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-charcoal py-20 text-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-ivory)]">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              A clear, four-step journey to your best self
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-extrabold text-primary">
                    0{i + 1}
                  </span>
                  <s.icon className="h-6 w-6 text-[color:var(--brand-ivory)]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SUCCESS STORIES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Success Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Real People. Real Results.</h2>
            <p className="mt-4 text-muted-foreground">
              Our programs are designed to create sustainable lifestyle changes, helping clients
              feel healthier, more confident, and more energetic.
            </p>
          </div>
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
          >
            Read more stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.slice(0, 3).map((s) => (
            <article
              key={s.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <p className="mt-3 text-sm leading-relaxed text-charcoal">“{s.quote}”</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-display text-sm font-bold text-charcoal">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.goal}</p>
                </div>
                <span className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-primary">
                  {s.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Moments from our centre</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[g1, g2, g3, g4].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/60 bg-white shadow-soft"
              >
                <img
                  src={src}
                  alt="MD Nutrition Centre moment"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">FAQs</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Answers you may be looking for</h2>
        </div>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-5 open:bg-ivory/60">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-base font-semibold text-charcoal">{f.q}</span>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faqs" className="text-sm font-semibold text-primary hover:underline">
            View all FAQs
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

// Ensure BRAND import is retained for tree-shaking safety in strict builds
void BRAND;
