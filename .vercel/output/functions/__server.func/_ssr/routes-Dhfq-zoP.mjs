import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as HeartPulse, F as BadgeCheck, I as ArrowRight, N as ChevronDown, O as Droplet, a as Users, b as Leaf, c as Sparkles, l as ShieldCheck, o as TrendingUp, s as Target } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ContactModal, t as ConsultationForm } from "./ContactModal-DafnsAV_.mjs";
import { a as STORIES, i as SERVICES, n as FAQS } from "./site-data-CBQ7sV2k.mjs";
import { t as FinalCTA } from "./CTA-J7tmP2Ow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dhfq-zoP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const carouselRef = (0, import_react.useRef)(null);
	const scrollCarousel = (direction) => {
		if (carouselRef.current) carouselRef.current.scrollBy({
			left: direction === "left" ? -340 : 340,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {
			isOpen: isModalOpen,
			onClose: () => setIsModalOpen(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ivory/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-teal/20 animate-blob"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-green/15 animate-blob",
					style: { animationDelay: "-6s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8 text-center relative z-10 pt-8 pb-4 animate-rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal",
							children: "Personalized Nutrition for Lifelong Health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-display text-lg sm:text-xl font-bold text-charcoal max-w-3xl mx-auto",
							children: ["80% Nutrition. 20% Exercise. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#067100]",
								children: "100% Mindset."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto",
							children: "At MD Nutrition Centre, we help you build lifelong healthy habits through personalized nutrition guidance, practical fitness support, and a mindset focused on lasting results."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-6 sm:px-8 sm:pt-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-12 lg:pb-24 relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[2rem] bg-white shadow-soft image-card w-full hidden lg:block h-full min-h-[600px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/founder2.jpeg",
								alt: "Mahammed Mujeeb - MD Nutrition Centre",
								loading: "lazy",
								className: "absolute inset-0 w-full h-full object-contain p-2"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col animate-rise bg-white rounded-[2rem] p-5 sm:p-6 shadow-soft border border-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex self-start items-center gap-1.5 rounded-full border border-teal/25 bg-green-50 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#067100]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " FREE CONSULTATION"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 font-display text-xl font-extrabold leading-[1.2] text-charcoal sm:text-2xl lg:text-3xl",
									children: "Get FREE Consultation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Fill the form below for personalized one-to-one guidance and help you take the first step toward a healthier lifestyle."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex-1 h-auto min-h-[400px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, { isPopup: false })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[2rem] bg-white shadow-soft image-card w-full block lg:hidden h-[400px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/founder.jpeg",
								alt: "Mahammed Mujeeb - MD Nutrition Centre",
								loading: "lazy",
								className: "absolute inset-0 w-full h-full object-cover"
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl",
						children: "Your Nutrition Partner for a Healthier Tomorrow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [
							"At MD Nutrition Centre, we believe that good nutrition should be simple, practical, and sustainable. Our mission is to help you build healthy eating habits that fit your lifestyle—not temporary diets or unrealistic restrictions.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"We provide personalized nutrition guidance tailored to your unique health goals, dietary preferences, and daily routine. Whether you're looking to manage your weight, improve your energy, enhance your overall well-being, or develop healthier habits, we're here to support you every step of the way.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Our evidence-based, food-first approach focuses on balanced nutrition, long-term lifestyle changes, and ongoing support to help you achieve lasting results with confidence.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"At MD Nutrition Centre, we're more than nutrition experts—we're your trusted partner on the journey to a healthier, happier tomorrow."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3",
						children: ["Learn more about our approach ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						{
							k: "3+",
							v: "Years of coaching experience"
						},
						{
							k: "250+",
							v: "Clients guided to results"
						},
						{
							k: "95%",
							v: "Client follow-through rate"
						},
						{
							k: "4.9★",
							v: "Average client rating"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-ivory p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-primary sm:text-4xl",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-charcoal/75",
							children: s.v
						})]
					}, s.v))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[#054020] py-20 text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-blob",
					style: { animationDelay: "-5s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative order-2 lg:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto max-w-md overflow-hidden rounded-[2rem] border-4 border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-lift image-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/founder3.jpeg",
									alt: "Mahammed Mujeeb — Senior Wellness Coach & Founder of MD Nutrition Centre",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-4 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-lift sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-extrabold text-charcoal",
									children: "Mahammed Mujeeb"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-widest text-primary",
									children: "Senior Wellness Coach"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-1 animate-rise lg:order-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Meet the Founder"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl",
								children: [
									"Transform Your Health.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-brand",
										children: "Transform Your Life."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-base leading-relaxed text-white/80 sm:text-lg",
								children: [
									"At MD Nutrition Centre, we believe lasting health begins with the right guidance and sustainable habits. Under the leadership of Senior Wellness Coach Mahammed Mujeeb, we provide personalized nutrition and lifestyle coaching designed to help you achieve healthy weight management, improved well-being, and lifelong wellness.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Every plan is tailored to your unique goals, preferences, and lifestyle—making healthy living practical, enjoyable, and sustainable."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-6 rounded-2xl border-l-4 border-accent bg-white/5 px-5 py-4 italic text-[color:var(--brand-ivory)]/90",
								children: "“Your health transformation is our mission.”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: [
									{
										k: "100+",
										v: "Happy Clients"
									},
									{
										k: "100+",
										v: "Kgs Weight Loss"
									},
									{
										k: "98%",
										v: "Client Satisfaction"
									},
									{
										k: "2+",
										v: "Years of Expertise"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/10 bg-white/5 p-4 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-extrabold text-accent sm:text-3xl",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-white/70",
										children: s.v
									})]
								}, s.v))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: [
									"Weight Loss Management",
									"Diabetes Coaching",
									"PCOS/PCOD",
									"Thyroid Care",
									"Lifestyle Transformation"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setIsModalOpen(true),
								className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5",
								children: ["Book Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-ivory py-20 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl text-charcoal",
					children: "Kind Words from Our Clients"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed",
					children: "Real stories from real people. Every nutrition journey is built on trust, personalized care, and lasting lifestyle change. We are honored to support our clients in achieving their health goals, and their experiences reflect our commitment to evidence-based nutrition and compassionate care."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 relative max-w-7xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: carouselRef,
					className: "flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-5 sm:px-8",
					children: [
						3,
						7,
						5,
						6,
						4,
						2
					].map((num) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "snap-center shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-white shadow-soft p-3 flex flex-col items-center justify-center border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/testimonial (${num}).jpeg`,
							alt: "Client Testimonial",
							className: "w-full h-auto max-h-[380px] object-contain rounded-xl",
							loading: "lazy"
						})
					}, num))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-6 mt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollCarousel("left"),
							className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-white transition-colors shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 rotate-90" }), " Previous"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5 hidden sm:flex",
							children: [...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 w-2 rounded-full ${i === 0 ? "w-6 bg-accent" : "bg-border"}` }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollCarousel("right"),
							className: "inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors shadow-sm",
							children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 -rotate-90" })]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[color:var(--brand-sand)]/60 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Coaching designed around your body and lifestyle"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3",
						children: ["See all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: SERVICES.slice(0, 8).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { animationDelay: `${i * 70}ms` },
						className: "group card-hover animate-rise flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									width: 800,
									height: 600,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-primary shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.description
							})]
						})]
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
						children: "Why Choose MD Nutrition Centre?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed",
						children: [
							"At MD Nutrition Centre, we believe lasting results come from evidence-based nutrition, personalized guidance, and consistent support. Our approach is built on science, empathy, and sustainable habits—not fad diets, quick fixes, or extreme restrictions.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"We help you make practical lifestyle changes that fit your routine, so you can achieve your health goals with confidence and maintain them for the long term."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-4 sm:grid-cols-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mt-1 h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-charcoal font-display text-lg",
								children: "1. Truly Personalized Nutrition Plans"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-muted-foreground mt-1 block",
								children: "Every nutrition plan is thoughtfully designed around your health goals, medical needs, cultural preferences, food choices, and daily lifestyle—never a one-size-fits-all template."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mt-1 h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-charcoal font-display text-lg",
								children: "2. Food-First, Sustainable Approach"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-muted-foreground mt-1 block",
								children: "We believe in the power of real, wholesome food. No crash diets, unnecessary supplements, or extreme restrictions—just balanced, portion-controlled meals that fit your lifestyle and deliver lasting results."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mt-1 h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-charcoal font-display text-lg",
								children: "3. Continuous Guidance & Support"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-muted-foreground mt-1 block",
								children: "Your journey doesn't end with a diet plan. Receive regular progress reviews, ongoing plan adjustments, and convenient WhatsApp support to help you stay motivated, overcome challenges, and achieve your goals."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mt-1 h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-charcoal font-display text-lg",
								children: "4. Science-Backed Care with Compassion"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-muted-foreground mt-1 block",
								children: "Our qualified nutrition professionals combine evidence-based practice with personalized, compassionate care—listening to your needs, understanding your challenges, and guiding you with expertise every step of the way."
							})] })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-to-b from-[color:var(--brand-ivory)] to-white py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-green/10 blur-3xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
								children: "Specialised Support For"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "Personalized Guidance."
								}), " Proven Results. Better Health."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
								children: [
									"Whether your goal is healthy weight management, improved nutrition, enhanced energy, or long-term wellness, our personalized coaching is tailored to your unique needs, lifestyle, and health goals.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"We provide practical, evidence-based guidance to help you build sustainable habits and achieve lasting results."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								icon: Droplet,
								image: "/splimg1.jpeg",
								title: "Sugar Control",
								desc: "Balanced blood sugar levels support steady energy, better overall health, and a healthier, happier life. Our personalized nutrition plans help you manage your blood sugar naturally through balanced meals, healthy lifestyle habits, and sustainable dietary guidance."
							},
							{
								icon: HeartPulse,
								image: "/splimg2.jpeg",
								title: "Blood Pressure Balance",
								desc: "Support healthy blood pressure and improve heart health with personalized nutrition, balanced eating habits, and sustainable lifestyle changes. Our evidence-based guidance helps you build long-term habits for a healthier heart and overall well-being."
							},
							{
								icon: ShieldCheck,
								image: "/splimg3.jpeg",
								title: "Cholesterol Management",
								desc: "Improve cholesterol levels, support heart health, and reduce the risk of cardiovascular disease with personalized nutrition, heart-healthy eating habits, and sustainable lifestyle changes. Our evidence-based approach helps you achieve lasting results for better long-term health."
							},
							{
								icon: Sparkles,
								image: "/splimg4.jpeg",
								title: "Complete Wellness & Weight Management",
								desc: "Transform your health with personalized nutrition, healthy weight management, and sustainable lifestyle changes. Our holistic approach supports your body and mind, helping you achieve lasting wellness, improved energy, and long-term results."
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animationDelay: `${i * 90}ms` },
							className: "card-hover animate-rise group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white text-center shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.image,
										alt: c.title,
										width: 800,
										height: 600,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -bottom-6 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lift ring-4 ring-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col px-6 pb-6 pt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold uppercase tracking-wide text-charcoal",
									children: c.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: c.desc
								})]
							})]
						}, c.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-5 rounded-3xl bg-charcoal p-6 text-center shadow-lift sm:flex-row sm:justify-between sm:p-8 sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/10 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-7 w-7" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold text-white sm:text-xl",
								children: "Your Health Is Our Priority."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[color:var(--brand-ivory)]/90 italic",
								children: "We're Here to Support You!"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
							children: [
								{
									icon: Leaf,
									label: "Personalized Plans"
								},
								{
									icon: Target,
									label: "Expert Guidance"
								},
								{
									icon: TrendingUp,
									label: "Proven Results"
								},
								{
									icon: Users,
									label: "Ongoing Support"
								}
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.label })]
							}, p.label))
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-20 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-ivory)]",
							children: "How It Works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-white sm:text-4xl",
							children: "A Simple, Four-Step Journey to Better Health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/70 leading-relaxed",
							children: "Our personalized coaching process is designed to make healthy living simple, sustainable, and achievable. From understanding your goals to providing ongoing support, we're with you every step of your wellness journey."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold text-primary",
										children: "01"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-white",
									children: "Book Your Free Health Assessment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/70 flex-1",
									children: "Schedule your FREE health assessment by calling or messaging us on WhatsApp. Choose a convenient time, and we'll help you take the first step toward achieving your health and wellness goals."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://calendly.com/mujeeb-nutrition/one-to-one-meeting?month=2026-07",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90",
									children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold text-primary",
										children: "02"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-white",
									children: "Understand Your Health Goals"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/70 flex-1",
									children: [
										"We take the time to understand your lifestyle, dietary habits, health history, and wellness goals.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"This helps us understand what a healthier version of you looks like and how we can support your transformation journey."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setIsModalOpen(true),
									className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2.5 text-xs font-semibold transition-colors",
									children: ["Start Assessment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold text-primary",
										children: "03"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-white",
									children: "Get Your Personalized Plan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/70 flex-1",
									children: "Receive a personalized nutrition and lifestyle plan tailored to your body, health goals, dietary preferences, and daily routine. Our practical, evidence-based recommendations are designed to help you build sustainable habits and achieve lasting results."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://forms.gle/KyWakw7E8ptdWNvy8",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90",
									children: ["Fill Registration Form ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold text-primary",
										children: "04"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-white",
									children: "Follow-Up & Progress Tracking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/70 flex-1",
									children: "Stay on track with regular follow-up sessions to monitor your progress, address challenges, and refine your nutrition and lifestyle plan as your needs evolve. Ongoing guidance and support help you build lasting healthy habits."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://chat.whatsapp.com/IF8lLJ6M1GI77Kv7LwZKWz",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#25D366]/90",
									children: ["Join Personal Tracking Group ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
							children: "Success Stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Real People. Real Results."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: [
								"Every health journey is unique, and every success is worth celebrating. Through personalized nutrition guidance, practical lifestyle changes, and ongoing support, our clients have built healthier habits, improved their well-being, and gained greater confidence—one step at a time.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Their stories reflect the power of consistency, sustainable choices, and a personalized approach to lifelong wellness."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/success-stories",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3",
					children: ["Read more stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: STORIES.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft relative",
					children: [
						s.quoteTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display font-bold text-charcoal mb-2",
							children: s.quoteTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-charcoal whitespace-pre-line line-clamp-[8]",
							children: [
								"“",
								s.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center justify-between border-t border-border pt-4 mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold text-charcoal",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.goal
							})] })
						})
					]
				}, s.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
							children: "Gallery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Moments from our centre"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3",
						children: ["View full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-3",
					children: [
						"/gallery/1 (1).jpeg",
						"/gallery/1 (2).jpeg",
						"/gallery/1 (3).jpeg"
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-white/60 bg-white shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "MD Nutrition Centre moment",
							width: 800,
							height: 800,
							loading: "lazy",
							className: "aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-5 py-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.22em] text-accent",
						children: "FAQs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
						children: "Answers you may be looking for"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft",
					children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/faqs",
						className: "text-sm font-semibold text-primary hover:underline",
						children: "View all FAQs"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { Home as component };
