import { createFileRoute } from "@tanstack/react-router";
import { Quote, Sparkles } from "lucide-react";
import { STORIES } from "@/lib/site-data";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Real stories of sustainable weight loss, diabetes support, PCOS wellness and lifestyle transformation from MD Nutrition Centre clients.",
      },
      { property: "og:title", content: "Success Stories — MD Nutrition Centre" },
      { property: "og:description", content: "Real people. Real results. Real lifestyle change." },
    ],
  }),
  component: Stories,
});

function Stories() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Success Stories</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Real People. Real Results.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Our programs are designed to create sustainable lifestyle changes, helping clients feel
            healthier, more confident, and more energetic.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {STORIES.map((s) => (
            <article key={s.name} className="flex flex-col rounded-3xl border border-border bg-white p-8 shadow-soft">
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border">
                <div className="flex flex-col items-center justify-center gap-1 bg-mist/40 py-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Before</span>
                  <span className="font-display text-2xl font-bold text-charcoal">Struggling</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 bg-gradient-cta py-8 text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/80">After</span>
                  <span className="font-display text-2xl font-bold">{s.result}</span>
                </div>
              </div>

              <Quote className="mt-6 h-8 w-8 text-primary/40" />
              <p className="mt-3 text-base leading-relaxed text-charcoal">“{s.quote}”</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-display text-sm font-bold text-charcoal">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.goal}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Verified client
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}