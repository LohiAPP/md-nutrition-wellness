import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Common questions about consultations, services, plans and how MD Nutrition Centre coaching works.",
      },
      { property: "og:title", content: "FAQs — MD Nutrition Centre" },
      { property: "og:description", content: "Answers to the questions we hear most often." },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">FAQs</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Everything you may want to know before booking your free health assessment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0} className="group px-6 py-5 open:bg-ivory/60">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-base font-semibold text-charcoal">{f.q}</span>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}