import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleCheck, C as HeartPulse, D as Dumbbell, I as ArrowRight, M as ChevronLeft, O as Droplet, P as Brain, R as Activity, S as Heart, d as Scale, j as ChevronRight, r as X, s as Target, t as Zap } from "../_libs/lucide-react.mjs";
import { N as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactModal-DafnsAV_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function ConsultationForm({ isPopup = false }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [formData, setFormData] = (0, import_react.useState)({
		goal: "",
		age: "",
		gender: "",
		weight: "",
		height: "",
		neck: "",
		waist: "",
		hip: "",
		timeline: "",
		triedBefore: "",
		contactTime: "",
		contactMode: "",
		name: "",
		phone: "",
		whatsapp: "",
		sameAsPhone: false,
		email: "",
		instagram: ""
	});
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const updateForm = (key, value) => {
		setFormData((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			if (key === "sameAsPhone" && value) next.whatsapp = next.phone;
			return next;
		});
	};
	const bmiData = (0, import_react.useMemo)(() => {
		if (!formData.weight || !formData.height) return null;
		const w = parseFloat(formData.weight);
		const h = parseFloat(formData.height) / 100;
		if (h <= 0 || w <= 0) return null;
		const bmi = w / (h * h);
		let category = "";
		if (bmi < 18.5) category = "Underweight";
		else if (bmi < 25) category = "Normal weight";
		else if (bmi < 30) category = "Overweight";
		else category = "Obese";
		return {
			bmi: bmi.toFixed(1),
			category
		};
	}, [formData.weight, formData.height]);
	const bodyFatData = (0, import_react.useMemo)(() => {
		const w = parseFloat(formData.weight);
		const h = parseFloat(formData.height);
		const n = parseFloat(formData.neck);
		const waist = parseFloat(formData.waist);
		const hip = parseFloat(formData.hip);
		const gender = formData.gender;
		const age = parseFloat(formData.age);
		if (!w || !h || !n || !waist || !gender) return { error: "Please enter valid measurements" };
		if (gender === "Female" && !hip) return { error: "Please enter valid measurements" };
		if (gender === "Male" && waist <= n) return { error: "Please enter valid measurements" };
		if (gender === "Female" && waist + hip <= n) return { error: "Please enter valid measurements" };
		let bf = 0;
		if (gender === "Male") bf = 86.01 * Math.log10(waist - n) - 70.041 * Math.log10(h) + 36.76;
		else if (gender === "Female") bf = 163.205 * Math.log10(waist + hip - n) - 97.684 * Math.log10(h) - 78.387;
		if (isNaN(bf) || bf < 0 || bf > 100) return { error: "Please enter valid measurements" };
		let category = "";
		if (gender === "Male") if (bf <= 5) category = "Essential fat";
		else if (bf <= 13) category = "Athletes";
		else if (bf <= 17) category = "Fitness";
		else if (bf <= 24) category = "Average";
		else category = "Obese";
		else if (bf <= 13) category = "Essential fat";
		else if (bf <= 20) category = "Athletes";
		else if (bf <= 24) category = "Fitness";
		else if (bf <= 31) category = "Average";
		else category = "Obese";
		const fatMass = w * bf / 100;
		const leanMass = w - fatMass;
		let bmiEstimate = null;
		if (bmiData && age) {
			const gv = gender === "Male" ? 1 : gender === "Female" ? 0 : .5;
			bmiEstimate = 1.2 * parseFloat(bmiData.bmi) + .23 * age - 10.8 * gv - 5.4;
		}
		return {
			bf: bf.toFixed(1),
			category,
			fatMass: fatMass.toFixed(1),
			leanMass: leanMass.toFixed(1),
			bmiEstimate: bmiEstimate ? bmiEstimate.toFixed(1) : "N/A"
		};
	}, [
		formData.weight,
		formData.height,
		formData.neck,
		formData.waist,
		formData.hip,
		formData.gender,
		formData.age,
		bmiData
	]);
	const canGoNext = () => {
		switch (step) {
			case 1: return !!formData.goal;
			case 2: return !!formData.age && !!formData.gender && !!formData.weight && !!formData.height;
			case 3: return !bodyFatData.error;
			case 4: return !!formData.timeline;
			case 5: return !!formData.triedBefore;
			case 6: return !!formData.contactTime;
			case 7: return !!formData.contactMode;
			case 8: return !!formData.name && !!formData.phone && !!formData.email && formData.phone.length >= 10;
			default: return true;
		}
	};
	const nextStep = () => {
		if (canGoNext()) setStep((s) => Math.min(s + 1, 8));
	};
	const prevStep = () => setStep((s) => Math.max(s - 1, 1));
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!canGoNext()) return;
		setIsSubmitted(true);
		const message = `Hello MD Nutrition Centre! I would like to book my free consultation. Here are my details:

*Personal Info*
Name: ${formData.name}
Phone: ${formData.phone}
Age: ${formData.age} yrs
Height: ${formData.height} cm
Weight: ${formData.weight} kg

*Assessment Results*
Goal: ${formData.goal}
BMI: ${bmiData?.bmi || "N/A"} (${bmiData?.category || "N/A"})
Body Fat: ${bodyFatData?.bodyFat || "N/A"}% (${bodyFatData?.category || "N/A"})
Target Timeline: ${formData.timeline}
Tried Before: ${formData.previousTransformation}
Best Time to Contact: ${formData.contactTime}
Preferred Contact Mode: ${formData.contactMode}

Looking forward to starting my journey!`;
		const whatsappUrl = `https://wa.me/919700907707?text=${encodeURIComponent(message)}`;
		setTimeout(() => {
			window.open(whatsappUrl, "_blank");
		}, 800);
	};
	const handleSingleChoice = (key, value) => {
		updateForm(key, value);
		setTimeout(() => {
			setStep((s) => Math.min(s + 1, 8));
		}, 200);
	};
	const currentStepInfo = [
		{
			label: "Step 1: What’s your Goal?",
			title: "What’s your Goal?",
			percent: 13
		},
		{
			label: "Step 2: Fill this quick sheet to know your Body Type",
			title: "Fill this quick sheet to know your Body Type",
			percent: 25
		},
		{
			label: "Step 3: Let’s calculate your Body Fat %",
			title: "Let’s calculate your Body Fat %",
			percent: 38
		},
		{
			label: "Step 4: How quick do you want to reach your goal?",
			title: "How quick do you want to reach your goal?",
			percent: 50
		},
		{
			label: "Step 5: Have you tried to transform before?",
			title: "Have you tried to transform before?",
			percent: 63
		},
		{
			label: "Step 6: When is the Best Time to contact you?",
			title: "When is the Best Time to contact you?",
			percent: 75
		},
		{
			label: "Step 7: Please select a mode of First Contact",
			title: "Please select a mode of First Contact",
			percent: 88
		},
		{
			label: "Step 8: Personal Info",
			title: "Personal Info",
			percent: 100
		}
	][step - 1];
	if (isSubmitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 px-6 text-center animate-rise h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#067100] mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-bold text-charcoal",
				children: "Thank you!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground max-w-sm",
				children: "Your request has been submitted successfully. Our team will contact you shortly."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col h-full bg-white ${isPopup ? "" : "rounded-3xl shadow-soft border border-border p-3 sm:p-4"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center text-[11px] font-medium mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: currentStepInfo.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [currentStepInfo.percent, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 w-full bg-gray-100 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-gradient-cta transition-all duration-500 ease-in-out",
						style: { width: `${currentStepInfo.percent}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base sm:text-lg font-display font-bold text-charcoal mb-3 shrink-0",
				children: currentStepInfo.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto hide-scrollbar pb-1",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-1.5",
						children: [
							{
								icon: Activity,
								label: "Fat loss / Get lean"
							},
							{
								icon: Dumbbell,
								label: "Build Muscle / Get Strong"
							},
							{
								icon: Zap,
								label: "Improve energy and fitness"
							},
							{
								icon: Heart,
								label: "General health and lifestyle upgrade"
							},
							{
								icon: Scale,
								label: "Weight Gain"
							},
							{
								icon: Droplet,
								label: "Diabetes Support"
							},
							{
								icon: HeartPulse,
								label: "PCOD / PMOS Support"
							},
							{
								icon: Brain,
								label: "Thyroid Care"
							},
							{
								icon: Target,
								label: "Cholesterol / BP Support"
							}
						].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleSingleChoice("goal", opt.label),
							className: `flex flex-col items-center justify-center text-center gap-1.5 p-2 rounded-xl border-2 transition-all ${formData.goal === opt.label ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(opt.icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold leading-tight",
								children: opt.label
							})]
						}, opt.label))
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Age"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: formData.age,
									onChange: (e) => updateForm("age", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "Years"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Gender"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.gender,
									onChange: (e) => updateForm("gender", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Male",
											children: "Male"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Female",
											children: "Female"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Other",
											children: "Other"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Weight (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.1",
									value: formData.weight,
									onChange: (e) => updateForm("weight", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "kg"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Height (cm)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.1",
									value: formData.height,
									onChange: (e) => updateForm("height", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "cm"
								})] })
							]
						}), bmiData ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 bg-ivory rounded-2xl p-5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Your BMI is:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-display font-bold text-primary",
								children: bmiData.bmi
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left sm:text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "BMI Category:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg font-semibold text-charcoal",
									children: bmiData.category
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 bg-gray-50 rounded-2xl p-5 border border-border text-center text-muted-foreground text-sm",
							children: "Enter details to calculate BMI"
						})]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Neck (cm)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.1",
									value: formData.neck,
									onChange: (e) => updateForm("neck", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "cm"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Waist (cm)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.1",
									value: formData.waist,
									onChange: (e) => updateForm("waist", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "cm"
								})] }),
								formData.gender === "Female" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal mb-1.5",
									children: "Hip (cm)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.1",
									value: formData.hip,
									onChange: (e) => updateForm("hip", e.target.value),
									className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
									placeholder: "cm"
								})] })
							]
						}), bodyFatData.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 bg-red-50 rounded-2xl p-5 border border-red-100 text-center text-red-600 text-sm",
							children: bodyFatData.error
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 bg-[#F4F9F9] rounded-2xl p-5 border border-primary/20 grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Body Fat %"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xl font-bold text-primary",
									children: [bodyFatData.bf, "%"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg font-semibold text-charcoal",
									children: bodyFatData.category
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Fat Mass"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-lg font-semibold text-charcoal",
									children: [bodyFatData.fatMass, " kg"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Lean Mass"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-lg font-semibold text-charcoal",
									children: [bodyFatData.leanMass, " kg"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 pt-2 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Body Fat by BMI method (Estimate)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium text-charcoal",
										children: [bodyFatData.bmiEstimate, "%"]
									})]
								})
							]
						})]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: [
							"0 months – 3 months",
							"3 months – 6 months",
							"6 months – 9 months",
							"Haven’t decided yet"
						].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSingleChoice("timeline", opt),
							className: `p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${formData.timeline === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"}`,
							children: opt
						}, opt))
					}),
					step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: ["Yes", "No"].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSingleChoice("triedBefore", opt),
							className: `p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${formData.triedBefore === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"}`,
							children: opt
						}, opt))
					}),
					step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: [
							"Morning (8am to 11am)",
							"Noon (12pm to 3pm)",
							"Evening (4pm to 7pm)"
						].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSingleChoice("contactTime", opt),
							className: `p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${formData.contactTime === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"}`,
							children: opt
						}, opt))
					}),
					step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: [
							"WhatsApp Text",
							"Call",
							"Instagram"
						].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSingleChoice("contactMode", opt),
							className: `p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${formData.contactMode === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"}`,
							children: opt
						}, opt))
					}),
					step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-charcoal mb-1.5",
								children: "Full Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: formData.name,
								onChange: (e) => updateForm("name", e.target.value),
								className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
								placeholder: "Your full name"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-charcoal mb-1.5",
								children: "Phone Number *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-gray-50 text-charcoal text-sm font-medium",
									children: "+91"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									maxLength: 10,
									value: formData.phone,
									onChange: (e) => {
										updateForm("phone", e.target.value);
										if (formData.sameAsPhone) updateForm("whatsapp", e.target.value);
									},
									className: "w-full p-3 rounded-r-xl border border-border outline-none focus:border-primary",
									placeholder: "10-digit number"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-charcoal",
									children: "WhatsApp Number *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-xs text-muted-foreground cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: formData.sameAsPhone,
										onChange: (e) => updateForm("sameAsPhone", e.target.checked),
										className: "rounded border-gray-300 text-primary focus:ring-primary"
									}), "Same as Phone Number"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-gray-50 text-charcoal text-sm font-medium",
									children: "+91"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									maxLength: 10,
									disabled: formData.sameAsPhone,
									value: formData.whatsapp,
									onChange: (e) => updateForm("whatsapp", e.target.value),
									className: "w-full p-3 rounded-r-xl border border-border outline-none focus:border-primary disabled:bg-gray-100 disabled:text-gray-500",
									placeholder: "10-digit number"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-charcoal mb-1.5",
								children: "Email Address *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: formData.email,
								onChange: (e) => updateForm("email", e.target.value),
								className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
								placeholder: "your@email.com"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium text-charcoal mb-1.5",
								children: ["Instagram Username ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground font-normal",
									children: "(Optional)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: formData.instagram,
								onChange: (e) => updateForm("instagram", e.target.value),
								className: "w-full p-3 rounded-xl border border-border outline-none focus:border-primary",
								placeholder: "@username"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-sand/50 p-3 rounded-xl border border-sand mt-4 text-xs text-muted-foreground text-center",
								children: "Note: We will contact you for a free consultation."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mt-4 pt-4 border-t border-border shrink-0",
				children: [
					step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: prevStep,
						className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#067100] bg-white px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gray-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Previous"]
					}),
					step < 8 && step !== 1 && step !== 4 && step !== 5 && step !== 6 && step !== 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: nextStep,
						disabled: !canGoNext(),
						className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#067100] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#005f00] disabled:opacity-50 disabled:cursor-not-allowed",
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
					}) : null,
					step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleSubmit,
						disabled: !canGoNext(),
						className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#067100] px-4 py-2.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-[#005f00] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
						children: ["Submit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		]
	});
}
function ContactModal({ isOpen, onClose }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!isOpen || !mounted) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm transition-opacity",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative shrink-0 bg-gradient-cta p-6 text-white text-center rounded-t-3xl border-b border-white/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white hover:text-charcoal",
						"aria-label": "Close modal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-white/80 mb-2",
						children: "MD Nutrition Centre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold sm:text-3xl",
						children: "Start Your Transformation! 💪"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/90 max-w-md mx-auto",
						children: "Tell us about yourself and we’ll create a personalized nutrition and wellness plan for you."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-hidden p-6 sm:p-8 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, { isPopup: true })
			})]
		})
	}), document.body);
}
//#endregion
export { ContactModal as n, ConsultationForm as t };
