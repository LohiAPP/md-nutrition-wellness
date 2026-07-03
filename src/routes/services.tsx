import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Weight management, wellness coaching, nutrition education, PCOS/PCOD, diabetes, thyroid care, personal assessment and active lifestyle programs.",
      },
      { property: "og:title", content: "Services — MD Nutrition Centre" },
      {
        property: "og:description",
        content: "Personalised nutrition and wellness services designed around your body and lifestyle.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Services</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Coaching for every stage of your wellness journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Choose a focused programme or combine several — every plan is personalised, evidence-based
            and built to be sustainable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              id={s.slug}
              key={s.slug}
              className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ivory text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-xl font-bold text-charcoal">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
              >
                Book consultation <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}