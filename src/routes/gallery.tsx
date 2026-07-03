import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MD Nutrition Centre" },
      {
        name: "description",
        content:
          "Moments from MD Nutrition Centre — consultations, healthy meals, client interactions and wellness events.",
      },
      { property: "og:title", content: "Gallery — MD Nutrition Centre" },
      { property: "og:description", content: "A look inside our nutrition and wellness practice." },
    ],
  }),
  component: Gallery,
});

const ITEMS: { src: string; caption: string; span?: string }[] = [
  { src: g1, caption: "Healthy meal plating", span: "sm:col-span-2 sm:row-span-2" },
  { src: g2, caption: "Nutrition consultation" },
  { src: g3, caption: "Fresh green smoothies" },

  { src: g5, caption: "Whole-food ingredients", span: "sm:col-span-2" },
  { src: g6, caption: "Wellness group events" },
];

function Gallery() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Gallery</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            A window into our practice
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Consultations, healthy plates, client interactions and moments from our wellness events.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Programs</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-charcoal">
            Our Wellness & Nutrition Programs
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/image1.jpeg", alt: "Weight Management" },
            { src: "/image2.jpeg", alt: "Lifestyle Coaching" },
            { src: "/image3.jpeg", alt: "Chronic Conditions" },
            { src: "/image4.png", alt: "Health Transformation" },
            { src: "/image5.jpeg", alt: "Wellness Experts" }
          ].map((item, i) => (
            <div key={i} className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft group image-card flex items-center justify-center p-2">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-charcoal">
              Centre Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => (
            <figure
              key={i}
              className={`group relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-soft image-card p-2`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {it.caption}
              </figcaption>
            </figure>
          ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}