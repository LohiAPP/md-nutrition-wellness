import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as FileText } from "../_libs/lucide-react.mjs";
import { t as BRAND } from "./site-data-CBQ7sV2k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DRjyK-n8.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: "Terms & Conditions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-muted-foreground font-medium",
					children: ["Last Updated: ", currentDate]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ivory/30 relative py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-48 w-48 rounded-full bg-teal/10 blur-3xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-green/10 blur-3xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h3:text-primary prose-h3:text-xl prose-h3:mt-10 prose-h3:border-b prose-h3:border-border/60 prose-h3:pb-2 prose-a:text-primary prose-a:font-medium hover:prose-a:text-primary/80 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-charcoal relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "lead text-lg text-charcoal/80 font-medium",
								children: [
									"Welcome to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: BRAND.name }),
									". By accessing or using mdnutritioncentre.com, you agree to comply with these Terms & Conditions."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you do not agree with these terms, please do not use the website." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "1. About Our Website" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The website provides information about ",
								BRAND.name,
								", its nutrition and wellness services, consultation options, programs, and related resources."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The information provided on the website is intended for general informational purposes and may be updated from time to time." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "2. Nutrition and Wellness Services" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [BRAND.name, " may provide services including:"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-2 gap-3 not-prose my-6",
								children: [
									"Personalized Nutrition Coaching",
									"Healthy Weight Management",
									"Diabetes-Friendly Nutrition",
									"Prediabetes Nutrition Guidance",
									"PCOS & Women's Wellness",
									"21-Day Transformation Program",
									"Corporate Wellness",
									"Online Nutrition Consultations"
								].map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-xl bg-ivory/50 px-4 py-3 border border-border/50 text-sm font-medium text-charcoal/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs",
										children: "✓"
									}), service]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The availability of specific services may vary." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "3. No Medical Diagnosis or Emergency Care" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-6 rounded-xl border-l-4 border-destructive bg-destructive/5 p-4 text-sm text-charcoal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-destructive mb-1 mt-0",
									children: "Medical Disclaimer"
								}), "Information provided through this website and nutrition or wellness services does not replace medical diagnosis, medical treatment, prescribed medication, or emergency medical care. If you have a medical condition, take medication, or require medical treatment, you should consult an appropriately qualified healthcare professional. Do not use information from this website as a substitute for professional medical advice."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "4. Consultation Requests" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Submitting a consultation form constitutes a request for an appointment. Submitting the form does not automatically guarantee an appointment. An appointment becomes confirmed only after ",
								BRAND.name,
								" confirms the date, time, and consultation format."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "5. Appointment Information" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When requesting a consultation, you may be asked to provide information such as your name, age, phone/WhatsApp number, email address, preferred consultation type, preferred date/time, and general wellness goals. You are responsible for providing accurate information." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "6. Consultation Availability" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Requested appointment dates and times are subject to availability. ",
								BRAND.name,
								" may contact you through your selected communication method to confirm or modify the requested appointment."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "7. Rescheduling and Cancellation" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"If you need to reschedule or cancel an appointment, please contact ",
								BRAND.name,
								" as early as possible. Any applicable cancellation, rescheduling, or refund terms will be communicated according to the relevant policy."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "8. Fees and Payments" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If consultation or program fees apply, the applicable charges will be communicated or displayed before payment. Where online payments are available, payments may be processed through third-party payment providers. Additional terms of the applicable payment provider may also apply." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "9. Refunds" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Any refunds will be handled according to the applicable Refund & Cancellation Policy, where such a policy applies." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "10. Website Content" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We make reasonable efforts to provide accurate and useful information. However, we do not guarantee that all website content will always be complete, accurate, current, or free from errors. Information may be changed or updated without prior notice." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "11. User Responsibilities" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You agree to use the website lawfully, provide accurate information when submitting forms, not misuse the website, not attempt to gain unauthorized access, not interfere with the operation or security of the website, and respect applicable laws and regulations." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "12. Intellectual Property" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Unless otherwise stated, website content including text, graphics, logos, images, designs, and other materials may belong to ",
								BRAND.name,
								" or its respective licensors. You may not reproduce, copy, modify, distribute, publish, or commercially exploit website content without appropriate permission."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "13. Third-Party Services and Links" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The website may contain links, embedded content, widgets, or services provided by third parties, including Google Maps, WhatsApp, Google Analytics, Trustpilot, or other services. Third-party services operate under their own terms and privacy policies. ",
								BRAND.name,
								" is not responsible for the policies, availability, or content of third-party services."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "14. Website Availability" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We aim to keep the website available and functioning properly, but we do not guarantee uninterrupted or error-free access. The website may occasionally be unavailable because of maintenance, technical issues, hosting problems, or circumstances outside our control." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "15. Limitation of Liability" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"To the extent permitted by applicable law, ",
								BRAND.name,
								" shall not be liable for losses or damages arising from reliance on general information provided on the website or from temporary website unavailability. Nothing in these Terms & Conditions is intended to exclude or limit liability that cannot legally be excluded or limited."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "16. Privacy" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your use of the website is also subject to our Privacy Policy, which explains how personal information may be collected and used." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "17. Changes to These Terms" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We may update these Terms & Conditions from time to time. Updated terms will be published on this page with a revised “Last Updated” date." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "18. Governing Law" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These Terms & Conditions shall be interpreted in accordance with applicable laws of India, subject to the jurisdiction of the appropriate courts." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "19. Contact Us" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "not-prose mt-6 rounded-2xl bg-charcoal text-white p-6 sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold mb-4",
									children: "Questions about these terms?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white/60 mb-1",
											children: "Email us at"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${BRAND.email}`,
											className: "font-medium text-white hover:text-accent transition-colors",
											children: BRAND.email
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white/60 mb-1",
											children: "Call us at"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${BRAND.phoneDigits}`,
											className: "font-medium text-white hover:text-accent transition-colors",
											children: BRAND.phone
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2 mt-2 pt-4 border-t border-white/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-white/60 mb-1",
												children: "Visit us at"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-white",
												children: BRAND.city
											})]
										})
									]
								})]
							})
						]
					})
				]
			})
		})
	})] });
}
//#endregion
export { Terms as component };
