import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleCheck, I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as ContactModal } from "./ContactModal-DafnsAV_.mjs";
import { i as SERVICES } from "./site-data-CBQ7sV2k.mjs";
import { t as FinalCTA } from "./CTA-J7tmP2Ow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DlM3tW5o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {
			isOpen: isModalOpen,
			onClose: () => setIsModalOpen(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
						children: "Coaching for every stage of your wellness journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
						children: "Choose a focused programme or combine several — every plan is personalised, evidence-based and built to be sustainable."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: s.slug,
					style: { animationDelay: `${i * 80}ms` },
					className: "group flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition-transform hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-ivory text-[#067100]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold text-[#007B83] mb-2",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "flex-1 text-sm leading-relaxed text-[#1F2020]/80",
							children: s.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIsModalOpen(true),
							className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007B83] hover:gap-3 transition-all",
							children: ["Book Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-24 bg-charcoal text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold sm:text-4xl text-white",
						children: "Transform Your Nutrition. Transform Your Lifestyle."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/80 text-lg",
						children: "Start your journey with personalized nutrition plans, lifestyle coaching, and practical wellness guidance designed for long-term results."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setIsModalOpen(true),
					className: "inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 shrink-0",
					children: ["Start Your Transformation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-charcoal sm:text-4xl",
							children: "Weight Management & Nutrition Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-lg text-muted-foreground",
							children: [
								"Weight Management & Fat Loss Support ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								"Personalized nutrition guidance to help clients manage weight, improve metabolism, and build sustainable healthy habits."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-4",
							children: [
								"Weight & Fat Loss Management",
								"Personalized Nutrition Plans",
								"Body Composition Analysis",
								"Metabolic Health Coaching"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-charcoal font-medium",
									children: item
								})]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(true),
							className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5",
							children: "Book Weight Management Consultation"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 lg:order-2 overflow-hidden rounded-3xl shadow-soft bg-[#FFFAE1] image-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/image1.jpeg",
						alt: "Weight Management"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl shadow-soft bg-white image-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/image3.jpeg",
							alt: "Chronic Conditions Support"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-charcoal sm:text-4xl",
							children: "Nutrition Support for Chronic Conditions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: [
								"Diabetes Management",
								"Heart Health Nutrition",
								"Weight Management",
								"Hypertension Diet Plans",
								"Cholesterol Control",
								"Personalized Meal Plans",
								"Ongoing Nutritional Support"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-charcoal font-medium",
									children: item
								})]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(true),
							className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5",
							children: "Book a Consultation"
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { Services as component };
