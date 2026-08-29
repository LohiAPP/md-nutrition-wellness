import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Sparkles, p as Quote } from "../_libs/lucide-react.mjs";
import { a as STORIES } from "./site-data-CBQ7sV2k.mjs";
import { t as FinalCTA } from "./CTA-J7tmP2Ow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-stories-DV_HUdHg.js
var import_jsx_runtime = require_jsx_runtime();
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "Success Stories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
						children: "Real People. Real Results."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
						children: "Our programs are designed to create sustainable lifestyle changes, helping clients feel healthier, more confident, and more energetic."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: STORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-3xl border border-border bg-white p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 overflow-hidden rounded-2xl border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center gap-1 bg-mist/40 py-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Before"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold text-charcoal",
									children: "Struggling"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center gap-1 bg-gradient-cta py-8 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-widest text-white/80",
									children: "After"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold",
									children: s.result
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mt-6 h-8 w-8 text-primary/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base leading-relaxed text-charcoal",
							children: [
								"“",
								s.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold text-charcoal",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.goal
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Verified client"]
							})]
						})
					]
				}, s.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { Stories as component };
