import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as FAQS } from "./site-data-CBQ7sV2k.mjs";
import { t as FinalCTA } from "./CTA-J7tmP2Ow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-Cmy3wVVa.js
var import_jsx_runtime = require_jsx_runtime();
function Faqs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "FAQs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
						children: "Frequently asked questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
						children: "Everything you may want to know before booking your free health assessment."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					open: i === 0,
					className: "group px-6 py-5 open:bg-ivory/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer list-none items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-semibold text-charcoal",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { Faqs as component };
