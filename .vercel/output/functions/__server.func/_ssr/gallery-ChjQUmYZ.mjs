import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as FinalCTA } from "./CTA-J7tmP2Ow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-ChjQUmYZ.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		src: "/gallery/1 (1).jpeg",
		caption: "Clinic Moments"
	},
	{
		src: "/gallery/1 (2).jpeg",
		caption: "Nutrition Consultation"
	},
	{
		src: "/gallery/1 (3).jpeg",
		caption: "Healthy Habits"
	},
	{
		src: "/gallery/1 (4).jpeg",
		caption: "Wellness Checkup"
	},
	{
		src: "/gallery/1 (5).jpeg",
		caption: "Centre Activities"
	},
	{
		src: "/gallery/1 (6).jpeg",
		caption: "Expert Guidance"
	},
	{
		src: "/gallery/1 (7).jpeg",
		caption: "Patient Transformation"
	},
	{
		src: "/gallery/1 (8).jpeg",
		caption: "Diet Planning"
	},
	{
		src: "/gallery/1 (9).jpeg",
		caption: "Healthy Living"
	},
	{
		src: "/gallery/1 (10).jpeg",
		caption: "MD Nutrition Centre"
	},
	{
		src: "/gallery/1 (11).jpeg",
		caption: "Lifelong Health"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "Gallery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
						children: "A window into our practice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
						children: "Consultations, healthy plates, client interactions and moments from our wellness events."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
					children: "Programs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl text-charcoal",
					children: "Our Wellness & Nutrition Programs"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [
					{
						src: "/image1.jpeg",
						alt: "Weight Management"
					},
					{
						src: "/image2.jpeg",
						alt: "Lifestyle Coaching"
					},
					{
						src: "/image3.jpeg",
						alt: "Chronic Conditions"
					},
					{
						src: "/image4.png",
						alt: "Health Transformation"
					},
					{
						src: "/image5.jpeg",
						alt: "Wellness Experts"
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-white shadow-soft group image-card flex items-center justify-center p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						loading: "lazy",
						className: "w-full h-auto transition-transform duration-500 group-hover:scale-105"
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold sm:text-4xl text-charcoal",
						children: "Centre Gallery"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
					children: ITEMS.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `group relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-soft image-card p-2`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: it.src,
							alt: it.caption,
							loading: "lazy",
							className: "w-full h-auto transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100",
							children: it.caption
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { Gallery as component };
