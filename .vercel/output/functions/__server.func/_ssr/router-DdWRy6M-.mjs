import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { E as Facebook, _ as Menu, g as MessageCircle, m as Phone, n as Youtube, r as X, v as MapPin, x as Instagram, y as Linkedin } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ContactModal } from "./ContactModal-DafnsAV_.mjs";
import { i as SERVICES, r as NAV, t as BRAND } from "./site-data-CBQ7sV2k.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DdWRy6M-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CGBFeoCQ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(true);
		}, 5e3);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						"aria-label": `${BRAND.name} — Home`,
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: `${BRAND.name} logo`,
							width: 160,
							height: 64,
							className: "h-11 w-auto sm:h-12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: BRAND.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							className: "rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:bg-ivory data-[status=active]:text-primary",
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIsModalOpen(true),
							className: "hidden items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), "Free Consultation"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-background lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-ivory data-[status=active]:bg-ivory data-[status=active]:text-primary",
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setOpen(false);
							setIsModalOpen(true);
						},
						className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Free Consultation"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false)
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-charcoal text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center rounded-2xl bg-white p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: `${BRAND.name} logo`,
									width: 200,
									height: 80,
									className: "h-14 w-auto"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md font-display text-xl font-semibold text-white",
								children: BRAND.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm text-white/70",
								children: "Personalized nutrition guidance and wellness coaching to help you achieve sustainable health, better energy, and a confident lifestyle."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.facebook.com/mdnutritioncentre/",
										target: "_blank",
										rel: "noreferrer",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white",
										"aria-label": "Facebook",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/md_nutrition_centre_/",
										target: "_blank",
										rel: "noreferrer",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white",
										"aria-label": "MD Nutrition Centre Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://youtu.be/ByvxZW5tcJE",
										target: "_blank",
										rel: "noreferrer",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white",
										"aria-label": "YouTube",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.linkedin.com/in/mahammedmujeeb/",
										target: "_blank",
										rel: "noreferrer",
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white",
										"aria-label": "LinkedIn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold uppercase tracking-widest text-white/60",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-sm",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "text-white/85 transition-colors hover:text-white",
							children: n.label
						}) }, n.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-widest text-white/60",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2.5 text-sm",
							children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								hash: s.slug,
								className: "text-white/85 transition-colors hover:text-white",
								children: s.title.replace(" Support", "")
							}) }, s.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-sm font-semibold uppercase tracking-widest text-white/60",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${BRAND.email}`,
									className: "inline-flex items-center gap-2 text-white/90 hover:text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
										" ",
										BRAND.email
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${BRAND.phoneDigits}`,
									className: "inline-flex items-center gap-2 text-white/90 hover:text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										" ",
										BRAND.phone
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BRAND.whatsapp,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 text-white/90 hover:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-2 text-white/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
										" ",
										BRAND.city
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-sm font-semibold uppercase tracking-widest text-white/60",
							children: "Legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy-policy",
									className: "text-white/85 transition-colors hover:text-white",
									children: "Privacy Policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "text-white/85 transition-colors hover:text-white",
									children: "Terms & Conditions"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/health-disclaimer",
									className: "text-white/85 transition-colors hover:text-white",
									children: "Health Disclaimer"
								}) })
							]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 py-10 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col md:flex-row gap-6 items-start justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 text-sm font-semibold uppercase tracking-widest text-white/60",
								children: "Find Us Here"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-48 sm:h-64 w-full overflow-hidden rounded-2xl border border-white/10 shadow-sm",
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
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BRAND.name,
						". All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Coaching by Mahammed Mujeeb · Certified Wellness Coach in Nutrition" })]
				})
			})
		]
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: BRAND.whatsapp,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with MD Nutrition Centre on WhatsApp",
		className: "fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center transition-transform hover:-translate-y-0.5 hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/whatsapp.png",
			alt: "WhatsApp",
			className: "h-full w-full object-contain drop-shadow-lg"
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition." },
			{
				name: "description",
				content: "Personalized nutrition guidance and wellness coaching in Guntur. Weight loss, PCOS/PCOD, diabetes, thyroid and sustainable lifestyle support."
			},
			{
				name: "author",
				content: "MD Nutrition Centre"
			},
			{
				name: "theme-color",
				content: "#007B83"
			},
			{
				property: "og:title",
				content: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition."
			},
			{
				property: "og:description",
				content: "Evidence-based nutrition, personalized coaching and sustainable lifestyle support. Book your free health assessment today."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition."
			},
			{
				name: "description",
				content: "Wellness Hub is a modern, responsive website for MD Nutrition Centre, offering expert guidance for health, wellness, and nutrition."
			},
			{
				property: "og:description",
				content: "Wellness Hub is a modern, responsive website for MD Nutrition Centre, offering expert guidance for health, wellness, and nutrition."
			},
			{
				name: "twitter:description",
				content: "Wellness Hub is a modern, responsive website for MD Nutrition Centre, offering expert guidance for health, wellness, and nutrition."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bb694517-20c3-4095-b7a1-3a4e7edae3d2/id-preview-d7aabeb6--89e5364a-b156-4373-a82a-a139df4abb99.lovable.app-1783067182360.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bb694517-20c3-4095-b7a1-3a4e7edae3d2/id-preview-d7aabeb6--89e5364a-b156-4373-a82a-a139df4abb99.lovable.app-1783067182360.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "48x48",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "96x96",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/favicon.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
			]
		})
	});
}
var $$splitComponentImporter$9 = () => import("./terms-DRjyK-n8.mjs");
var Route$10 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: `Terms & Conditions — ${BRAND.name}` }, {
		name: "description",
		content: `Terms and Conditions for ${BRAND.name}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./success-stories-DV_HUdHg.mjs");
var Route$9 = createFileRoute("/success-stories")({
	head: () => ({ meta: [
		{ title: "Success Stories — MD Nutrition Centre" },
		{
			name: "description",
			content: "Real stories of sustainable weight loss, diabetes support, PCOS wellness and lifestyle transformation from MD Nutrition Centre clients."
		},
		{
			property: "og:title",
			content: "Success Stories — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "Real people. Real results. Real lifestyle change."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var BASE_URL = "";
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/services",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/success-stories",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/faqs",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.9"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$7 = () => import("./services-DlM3tW5o.mjs");
var Route$7 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — MD Nutrition Centre" },
		{
			name: "description",
			content: "Weight management, wellness coaching, nutrition education, PCOS/PCOD, diabetes, thyroid care, personal assessment and active lifestyle programs."
		},
		{
			property: "og:title",
			content: "Services — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "Personalised nutrition and wellness services designed around your body and lifestyle."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-policy-DHnNo2Mq.mjs");
var Route$6 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: `Privacy Policy — ${BRAND.name}` }, {
		name: "description",
		content: `Privacy Policy for ${BRAND.name}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./health-disclaimer-BJ484dpH.mjs");
var Route$5 = createFileRoute("/health-disclaimer")({
	head: () => ({ meta: [{ title: `Health Disclaimer — ${BRAND.name}` }, {
		name: "description",
		content: `Health Disclaimer for ${BRAND.name}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gallery-ChjQUmYZ.mjs");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — MD Nutrition Centre" },
		{
			name: "description",
			content: "Moments from MD Nutrition Centre — consultations, healthy meals, client interactions and wellness events."
		},
		{
			property: "og:title",
			content: "Gallery — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "A look inside our nutrition and wellness practice."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faqs-Cmy3wVVa.mjs");
var Route$3 = createFileRoute("/faqs")({
	head: () => ({ meta: [
		{ title: "FAQs — MD Nutrition Centre" },
		{
			name: "description",
			content: "Common questions about consultations, services, plans and how MD Nutrition Centre coaching works."
		},
		{
			property: "og:title",
			content: "FAQs — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "Answers to the questions we hear most often."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Co2Wb1-y.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — MD Nutrition Centre" },
		{
			name: "description",
			content: "Book your free health assessment at MD Nutrition Centre. Call, WhatsApp or send us a message online."
		},
		{
			property: "og:title",
			content: "Contact — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "Get in touch to start your wellness journey today."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BDsGJzCE.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — MD Nutrition Centre" },
		{
			name: "description",
			content: "Meet MD Nutrition Centre — evidence-based nutrition and wellness coaching led by certified coach Mahammed Mujeeb in Guntur."
		},
		{
			property: "og:title",
			content: "About — MD Nutrition Centre"
		},
		{
			property: "og:description",
			content: "Our mission is holistic wellness through scientifically backed nutrition guidance and premium coaching."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Dhfq-zoP.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition." },
		{
			name: "description",
			content: "Evidence-based nutrition coaching in Guntur. Personalized plans for weight loss, PCOS/PCOD, diabetes, thyroid and sustainable lifestyle change."
		},
		{
			property: "og:title",
			content: "MD Nutrition Centre — Smart Nutrition Coaching"
		},
		{
			property: "og:description",
			content: "Personalized wellness coaching to help you achieve sustainable health, better energy and a confident lifestyle."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsRoute = Route$10.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$11
});
var SuccessStoriesRoute = Route$9.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var PrivacyPolicyRoute = Route$6.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$11
});
var HealthDisclaimerRoute = Route$5.update({
	id: "/health-disclaimer",
	path: "/health-disclaimer",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var FaqsRoute = Route$3.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	ContactRoute,
	FaqsRoute,
	GalleryRoute,
	HealthDisclaimerRoute,
	PrivacyPolicyRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	SuccessStoriesRoute,
	TermsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
