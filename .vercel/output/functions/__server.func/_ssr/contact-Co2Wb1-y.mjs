import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleCheck, g as MessageCircle, m as Phone, u as Send, v as MapPin } from "../_libs/lucide-react.mjs";
import { i as SERVICES, t as BRAND } from "./site-data-CBQ7sV2k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Co2Wb1-y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function handleSubmit(e) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const text = `Hi MD Nutrition Centre,%0A%0AName: ${form.get("name")}%0AMobile: ${form.get("mobile")}%0AHealth goal: ${form.get("goal")}%0APreferred consultation: ${form.get("type")}%0A%0AMessage: ${form.get("message")}`;
		window.open(`https://wa.me/${BRAND.phoneDigits}?text=${text}`, "_blank");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
					children: "Book your free health assessment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
					children: "Share a few details and we’ll get in touch to schedule your consultation — online or at our Guntur centre."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.15fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								required: true,
								placeholder: "Your full name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mobile Number",
								name: "mobile",
								required: true,
								type: "tel",
								placeholder: "+91 …"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-sm font-medium text-charcoal",
									children: "Health Goal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "goal",
									required: true,
									defaultValue: "",
									className: "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select a goal"
										}),
										SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s.title,
											children: s.title
										}, s.slug)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Other",
											children: "Something else"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-sm font-medium text-charcoal",
									children: "Preferred Consultation Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										"Online",
										"In-person",
										"Either"
									].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-ivory/40 px-3 py-2.5 text-sm font-medium text-charcoal transition hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-ivory has-[:checked]:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "type",
											value: opt,
											required: true,
											className: "sr-only"
										}), opt]
									}, opt))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-sm font-medium text-charcoal",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 4,
									placeholder: "Tell us a little about your health journey",
									className: "w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send via WhatsApp"]
					}),
					sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Message ready — opening WhatsApp…"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${BRAND.phoneDigits}`,
						className: "flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-ivory text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block font-display text-lg font-bold text-charcoal",
							children: BRAND.phone
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BRAND.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/10 text-[#128C7E]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block font-display text-lg font-bold text-charcoal",
							children: "Chat with us"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start gap-4 rounded-2xl border border-border bg-ivory p-6 shadow-soft sm:flex-row flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: "Visit Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-display text-lg font-bold text-charcoal",
										children: "MD Nutrition Centre"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted-foreground",
										children: "Guntur, Andhra Pradesh, India"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://maps.app.goo.gl/cgJp4DHoNVzPNeeY7",
										target: "_blank",
										rel: "noreferrer",
										className: "mt-2 inline-block text-sm font-medium text-primary hover:underline",
										children: "Get Directions →"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 h-[300px] sm:h-[400px] w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: "https://maps.google.com/maps?q=MD%20NUTRITION%20CENTRE%20Guntur&t=&z=15&ie=UTF8&iwloc=&output=embed",
											width: "100%",
											height: "100%",
											style: { border: 0 },
											allowFullScreen: true,
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade",
											title: "MD Nutrition Centre Location"
										})
									})
								]
							})]
						})
					})
				]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-sm font-medium text-charcoal",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		name,
		required,
		placeholder,
		className: "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
	})] });
}
//#endregion
export { Contact as component };
