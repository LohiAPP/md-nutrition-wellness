import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/health-disclaimer")({
  head: () => ({
    meta: [
      { title: `Health Disclaimer — ${BRAND.name}` },
      { name: "description", content: `Health Disclaimer for ${BRAND.name}` },
    ],
  }),
  component: HealthDisclaimer,
});

function HealthDisclaimer() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24 relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft text-primary">
            <HeartPulse className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Health Disclaimer</h1>
          <p className="mt-5 text-muted-foreground font-medium">Last Updated: {currentDate}</p>
        </div>
      </section>

      <section className="bg-ivory/30 relative py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft relative overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-teal/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-green/10 blur-3xl pointer-events-none"></div>
            
            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h3:text-primary prose-h3:text-xl prose-h3:mt-10 prose-h3:border-b prose-h3:border-border/60 prose-h3:pb-2 prose-a:text-primary prose-a:font-medium hover:prose-a:text-primary/80 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-charcoal relative z-10">
              <p className="lead text-lg text-charcoal/80 font-medium">
                The information provided on mdnutritioncentre.com is intended for general nutrition, wellness, and educational purposes.
              </p>
              <div className="my-6 rounded-xl border-l-4 border-destructive bg-destructive/5 p-4 text-sm text-charcoal">
                <strong>{BRAND.name}</strong> provides nutrition and wellness guidance. The information available through this website should not be considered a substitute for professional medical diagnosis, treatment, or medical advice.
              </div>

              <h3>1. Not Medical Treatment</h3>
              <p>Nutrition coaching and wellness guidance provided by {BRAND.name} do not replace:</p>
              <ul>
                <li>Medical diagnosis</li>
                <li>Medical treatment</li>
                <li>Prescribed medication</li>
                <li>Emergency medical care</li>
                <li>Advice from a qualified healthcare professional</li>
              </ul>
              <p><strong>Do not stop, change, or modify prescribed medication or medical treatment based solely on information obtained from this website.</strong></p>

              <h3>2. Individual Results May Vary</h3>
              <p>Nutrition and lifestyle recommendations may affect individuals differently.</p>
              <p>Results from nutrition programs, weight-management programs, lifestyle changes, or wellness services are not guaranteed and may vary depending on individual circumstances, adherence, lifestyle, health status, and other factors.</p>

              <h3>3. Medical Conditions</h3>
              <p>If you have a medical condition, are taking medication, are pregnant or breastfeeding, or have any other health concern, consult your qualified healthcare professional before making significant changes to your diet, nutrition, physical activity, or lifestyle.</p>

              <h3>4. Diabetes and Other Health Conditions</h3>
              <p>Information relating to diabetes, prediabetes, PCOS, weight management, or other health-related topics is provided for general nutrition and wellness education.</p>
              <p>Such information should not be interpreted as a medical diagnosis or as a replacement for appropriate medical care.</p>

              <h3>5. Emergency Situations</h3>
              <p>{BRAND.name} does not provide emergency medical services through this website.</p>
              <p>If you are experiencing a medical emergency, contact your local emergency medical service or seek immediate care from an appropriate healthcare facility.</p>

              <h3>6. Website Information</h3>
              <p>Although reasonable efforts may be made to keep the information on this website accurate and useful, {BRAND.name} does not guarantee that all information is complete, current, or appropriate for every individual's circumstances.</p>
              <p>Always consider your personal circumstances and seek qualified professional advice where appropriate.</p>

              <h3>7. Consultation Information</h3>
              <p>Information provided during a nutrition consultation is based on the information available at the time of the consultation and the scope of nutrition and wellness services provided.</p>
              <p>Where a situation requires medical diagnosis, treatment, or specialized clinical care, you may be advised to consult an appropriate healthcare professional.</p>

              <h3>8. Contact Us</h3>
              <div className="not-prose mt-6 rounded-2xl bg-charcoal text-white p-6 sm:p-8">
                <p className="font-display text-lg font-bold mb-4">Questions about our services?</p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-white/60 mb-1">Email us at</span>
                    <a href={`mailto:${BRAND.email}`} className="font-medium text-white hover:text-accent transition-colors">{BRAND.email}</a>
                  </div>
                  <div>
                    <span className="block text-white/60 mb-1">Call us at</span>
                    <a href={`tel:${BRAND.phoneDigits}`} className="font-medium text-white hover:text-accent transition-colors">{BRAND.phone}</a>
                  </div>
                  <div className="sm:col-span-2 mt-2 pt-4 border-t border-white/10">
                    <span className="block text-white/60 mb-1">Visit us at</span>
                    <p className="font-medium text-white">{BRAND.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
