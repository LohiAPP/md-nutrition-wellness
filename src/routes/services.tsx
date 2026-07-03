import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactModal } from "@/components/site/ContactModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              id={s.slug}
              key={s.slug}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-ivory text-[#067100]">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-lg font-bold text-[#007B83] mb-2">{s.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-[#1F2020]/80">{s.description}</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007B83] hover:gap-3 transition-all"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 bg-charcoal text-white">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-white">
              Transform Your Nutrition. Transform Your Lifestyle.
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Start your journey with personalized nutrition plans, lifestyle coaching, and practical wellness guidance designed for long-term results.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 shrink-0"
          >
            Start Your Transformation <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Weight Management & Nutrition Services
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Weight Management & Fat Loss Support <br className="hidden sm:block" />
              Personalized nutrition guidance to help clients manage weight, improve metabolism, and build sustainable healthy habits.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Weight & Fat Loss Management",
                "Personalized Nutrition Plans",
                "Body Composition Analysis",
                "Metabolic Health Coaching"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-charcoal font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book Weight Management Consultation
            </button>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden rounded-3xl shadow-soft bg-[#FFFAE1] image-card">
            <img
              src="/image1.jpeg"
              alt="Weight Management"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl shadow-soft bg-white image-card">
              <img
                src="/image3.jpeg"
                alt="Chronic Conditions Support"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
                Nutrition Support for Chronic Conditions
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Diabetes Management",
                  "Heart Health Nutrition",
                  "Weight Management",
                  "Hypertension Diet Plans",
                  "Cholesterol Control",
                  "Personalized Meal Plans",
                  "Ongoing Nutritional Support"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}