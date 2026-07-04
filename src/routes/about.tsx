import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, HeartHandshake, Leaf, Microscope, ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/site/ContactModal";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Meet MD Nutrition Centre — evidence-based nutrition and wellness coaching led by certified coach Mahammed Mujeeb in Guntur.",
      },
      { property: "og:title", content: "About — MD Nutrition Centre" },
      {
        property: "og:description",
        content:
          "Our mission is holistic wellness through scientifically backed nutrition guidance and premium coaching.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: Microscope,
    title: "Evidence First",
    desc: "Recommendations grounded in current nutrition science, not passing trends.",
  },
  {
    icon: Leaf,
    title: "Sustainable Habits",
    desc: "We build changes that fit your real life — not extreme diets that break in weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    desc: "Every plan is tailored to your body, your goals and your daily routine.",
  },
];

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">About Us</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Your Nutrition Partner for a Healthier Tomorrow
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            At MD Nutrition Centre, we believe nutrition should be simple, clear, and sustainable.
            Our approach empowers you to make informed dietary choices without unnecessary
            restrictions, helping you achieve your health and wellness goals with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-1 lg:order-2 overflow-hidden rounded-[2rem] border border-border bg-white shadow-lift image-card">
            <img src="/founder2.jpeg" alt="Mahammed Mujeeb - Founder" loading="lazy" />
          </div>
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Mission</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug text-charcoal">
                To promote holistic wellness through scientifically backed nutrition guidance and
                premium health supplements.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Vision</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug text-charcoal">
                To become a trusted center for nutrition excellence that transforms lives through
                education and personalized wellness.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-ivory p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Led By
              </p>
              <p className="mt-2 font-display text-xl font-bold text-charcoal">Mahammed Mujeeb</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Certified Wellness Coach in Nutrition · Guntur, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl shadow-lift bg-white image-card">
              <img
                src="/image5.jpeg"
                alt="Trusted Nutrition & Wellness Experts"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Trust & Expertise</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-white">
                Your Trusted Nutrition & Wellness Experts
              </h2>
              <p className="mt-5 text-lg text-white/80 leading-relaxed">
                Achieve your health goals with personalized nutrition plans and expert wellness guidance designed for your unique needs.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ivory text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-white p-6 shadow-soft sm:grid-cols-2">
          {[
            "Personalized plans based on your body and lifestyle",
            "Scientifically backed nutrition guidance",
            "Simple, realistic, and sustainable approach",
            "Regular follow-up and progress tracking",
            "Support for weight loss, diabetes, PCOS/PCOD, thyroid and lifestyle transformation",
            "Online and in-person consultation options",
          ].map((w) => (
            <div key={w} className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-charcoal">{w}</span>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}