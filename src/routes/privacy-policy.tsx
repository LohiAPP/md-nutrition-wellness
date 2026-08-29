import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${BRAND.name}` },
      { name: "description", content: `Privacy Policy for ${BRAND.name}` },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
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
                <strong>{BRAND.name}</strong> (“we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you provide when using our website, mdnutritioncentre.com.
              </p>
              <p>
                This Privacy Policy explains what information we may collect, why we collect it, how we use it, and how we protect it.
              </p>

              <h3>1. Information We Collect</h3>
              <p>Depending on how you interact with our website, we may collect:</p>
              
              <div className="grid sm:grid-cols-2 gap-6 not-prose my-6">
                <div className="rounded-2xl bg-ivory p-6 border border-border">
                  <h4 className="font-display font-bold text-primary mb-3">Personal Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Full name & Age</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Phone & WhatsApp number</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Email address</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Appointment preferences</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> General wellness goals</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-ivory p-6 border border-border">
                  <h4 className="font-display font-bold text-primary mb-3">Technical Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> IP address & Location</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Browser & Device type</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Operating system</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Pages visited</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span> Date and time of visit</li>
                  </ul>
                </div>
              </div>

              <h3>2. How We Use Your Information</h3>
              <p>We may use the information you provide to:</p>
              <ul>
                <li>Respond to enquiries and process consultation requests.</li>
                <li>Confirm or manage appointments.</li>
                <li>Contact you through your preferred communication method.</li>
                <li>Provide information about our nutrition and wellness services.</li>
                <li>Improve our website, services, and understand website performance.</li>
                <li>Maintain website security and comply with applicable legal requirements.</li>
              </ul>
              <p>
                We do not use personal information for purposes unrelated to the services or communication described above without appropriate notice or consent where required.
              </p>

              <h3>3. Nutrition and Health Information</h3>
              <p>Our website may allow you to provide general information about your nutrition or wellness goals.</p>
              <div className="my-6 rounded-xl border-l-4 border-accent bg-accent/5 p-4 text-sm text-charcoal">
                <strong>Important:</strong> Please avoid submitting highly sensitive medical information through general contact forms or ordinary WhatsApp enquiries. If detailed health information is required for a consultation, it should be provided through an appropriate secure process communicated by {BRAND.name}.
              </div>

              <h3>4. Cookies and Website Technologies</h3>
              <p>Our website may use cookies and similar technologies to keep the website functioning properly, understand website traffic, measure website performance, improve user experience, and support analytics.</p>

              <h3>5. Google Analytics</h3>
              <p>We may use Google Analytics to understand how visitors use our website. Google Analytics may collect information such as website visits, pages viewed, device/browser information, and interaction with website content.</p>

              <h3>6. Third-Party Services</h3>
              <p>Our website may use third-party services such as Google Analytics, Google Maps, WhatsApp, Trustpilot, website hosting, and appointment services. These third parties may process information according to their own privacy policies.</p>

              <h3>7. How We Protect Your Information</h3>
              <p>We take reasonable measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss. However, no method of transmission or electronic storage can be guaranteed to be completely secure.</p>

              <h3>8. Data Retention</h3>
              <p>
                We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining records, resolving disputes, and complying with legal obligations.
              </p>

              <h3>9. Sharing of Information</h3>
              <p><strong>We do not sell personal information.</strong> Information may be shared with trusted service providers where necessary to operate the website, communicate with users, manage appointments, or comply with legal obligations.</p>

              <h3>10. Your Rights</h3>
              <p>Depending on applicable law, you may have rights regarding your personal information, including the right to request access, request correction, request deletion, withdraw consent, and ask questions about how your information is handled.</p>

              <h3>11. Contact Us</h3>
              <div className="not-prose mt-6 rounded-2xl bg-charcoal text-white p-6 sm:p-8">
                <p className="font-display text-lg font-bold mb-4">Have questions about your privacy?</p>
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
