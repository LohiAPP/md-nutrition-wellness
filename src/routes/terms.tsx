import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${BRAND.name}` },
      { name: "description", content: `Terms and Conditions for ${BRAND.name}` },
    ],
  }),
  component: Terms,
});

function Terms() {
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
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Terms & Conditions</h1>
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
                Welcome to <strong>{BRAND.name}</strong>. By accessing or using mdnutritioncentre.com, you agree to comply with these Terms & Conditions.
              </p>
              <p>
                If you do not agree with these terms, please do not use the website.
              </p>

              <h3>1. About Our Website</h3>
              <p>The website provides information about {BRAND.name}, its nutrition and wellness services, consultation options, programs, and related resources.</p>
              <p>The information provided on the website is intended for general informational purposes and may be updated from time to time.</p>

              <h3>2. Nutrition and Wellness Services</h3>
              <p>{BRAND.name} may provide services including:</p>
              <div className="grid sm:grid-cols-2 gap-3 not-prose my-6">
                {[
                  "Personalized Nutrition Coaching",
                  "Healthy Weight Management",
                  "Diabetes-Friendly Nutrition",
                  "Prediabetes Nutrition Guidance",
                  "PCOS & Women's Wellness",
                  "21-Day Transformation Program",
                  "Corporate Wellness",
                  "Online Nutrition Consultations"
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-ivory/50 px-4 py-3 border border-border/50 text-sm font-medium text-charcoal/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                    {service}
                  </div>
                ))}
              </div>
              <p>The availability of specific services may vary.</p>

              <h3>3. No Medical Diagnosis or Emergency Care</h3>
              <div className="my-6 rounded-xl border-l-4 border-destructive bg-destructive/5 p-4 text-sm text-charcoal">
                <p className="font-bold text-destructive mb-1 mt-0">Medical Disclaimer</p>
                Information provided through this website and nutrition or wellness services does not replace medical diagnosis, medical treatment, prescribed medication, or emergency medical care. If you have a medical condition, take medication, or require medical treatment, you should consult an appropriately qualified healthcare professional. Do not use information from this website as a substitute for professional medical advice.
              </div>

              <h3>4. Consultation Requests</h3>
              <p>Submitting a consultation form constitutes a request for an appointment. Submitting the form does not automatically guarantee an appointment. An appointment becomes confirmed only after {BRAND.name} confirms the date, time, and consultation format.</p>

              <h3>5. Appointment Information</h3>
              <p>When requesting a consultation, you may be asked to provide information such as your name, age, phone/WhatsApp number, email address, preferred consultation type, preferred date/time, and general wellness goals. You are responsible for providing accurate information.</p>

              <h3>6. Consultation Availability</h3>
              <p>Requested appointment dates and times are subject to availability. {BRAND.name} may contact you through your selected communication method to confirm or modify the requested appointment.</p>

              <h3>7. Rescheduling and Cancellation</h3>
              <p>If you need to reschedule or cancel an appointment, please contact {BRAND.name} as early as possible. Any applicable cancellation, rescheduling, or refund terms will be communicated according to the relevant policy.</p>

              <h3>8. Fees and Payments</h3>
              <p>If consultation or program fees apply, the applicable charges will be communicated or displayed before payment. Where online payments are available, payments may be processed through third-party payment providers. Additional terms of the applicable payment provider may also apply.</p>

              <h3>9. Refunds</h3>
              <p>Any refunds will be handled according to the applicable Refund & Cancellation Policy, where such a policy applies.</p>

              <h3>10. Website Content</h3>
              <p>We make reasonable efforts to provide accurate and useful information. However, we do not guarantee that all website content will always be complete, accurate, current, or free from errors. Information may be changed or updated without prior notice.</p>

              <h3>11. User Responsibilities</h3>
              <p>You agree to use the website lawfully, provide accurate information when submitting forms, not misuse the website, not attempt to gain unauthorized access, not interfere with the operation or security of the website, and respect applicable laws and regulations.</p>

              <h3>12. Intellectual Property</h3>
              <p>Unless otherwise stated, website content including text, graphics, logos, images, designs, and other materials may belong to {BRAND.name} or its respective licensors. You may not reproduce, copy, modify, distribute, publish, or commercially exploit website content without appropriate permission.</p>

              <h3>13. Third-Party Services and Links</h3>
              <p>The website may contain links, embedded content, widgets, or services provided by third parties, including Google Maps, WhatsApp, Google Analytics, Trustpilot, or other services. Third-party services operate under their own terms and privacy policies. {BRAND.name} is not responsible for the policies, availability, or content of third-party services.</p>

              <h3>14. Website Availability</h3>
              <p>We aim to keep the website available and functioning properly, but we do not guarantee uninterrupted or error-free access. The website may occasionally be unavailable because of maintenance, technical issues, hosting problems, or circumstances outside our control.</p>

              <h3>15. Limitation of Liability</h3>
              <p>To the extent permitted by applicable law, {BRAND.name} shall not be liable for losses or damages arising from reliance on general information provided on the website or from temporary website unavailability. Nothing in these Terms & Conditions is intended to exclude or limit liability that cannot legally be excluded or limited.</p>

              <h3>16. Privacy</h3>
              <p>Your use of the website is also subject to our Privacy Policy, which explains how personal information may be collected and used.</p>

              <h3>17. Changes to These Terms</h3>
              <p>We may update these Terms & Conditions from time to time. Updated terms will be published on this page with a revised “Last Updated” date.</p>

              <h3>18. Governing Law</h3>
              <p>These Terms & Conditions shall be interpreted in accordance with applicable laws of India, subject to the jurisdiction of the appropriate courts.</p>

              <h3>19. Contact Us</h3>
              <div className="not-prose mt-6 rounded-2xl bg-charcoal text-white p-6 sm:p-8">
                <p className="font-display text-lg font-bold mb-4">Questions about these terms?</p>
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
