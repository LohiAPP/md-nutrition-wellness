import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Activity, Dumbbell, Zap, Heart, Scale, Droplet, HeartPulse, Brain, Target, ArrowRight } from "lucide-react";

type FormState = {
  goal: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  neck: string;
  waist: string;
  hip: string;
  timeline: string;
  triedBefore: string;
  contactTime: string;
  contactMode: string;
  name: string;
  phone: string;
  whatsapp: string;
  sameAsPhone: boolean;
  email: string;
  instagram: string;
};

export function ConsultationForm({ isPopup = false }: { isPopup?: boolean }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>({
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
    instagram: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateForm = (key: keyof FormState, value: any) => {
    setFormData((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "sameAsPhone" && value) {
        next.whatsapp = next.phone;
      }
      return next;
    });
  };

  const bmiData = useMemo(() => {
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
    return { bmi: bmi.toFixed(1), category };
  }, [formData.weight, formData.height]);

  const bodyFatData = useMemo(() => {
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
    if (gender === "Female" && (waist + hip) <= n) return { error: "Please enter valid measurements" };

    let bf = 0;
    if (gender === "Male") {
      bf = 86.010 * Math.log10(waist - n) - 70.041 * Math.log10(h) + 36.76;
    } else if (gender === "Female") {
      bf = 163.205 * Math.log10(waist + hip - n) - 97.684 * Math.log10(h) - 78.387;
    }

    if (isNaN(bf) || bf < 0 || bf > 100) return { error: "Please enter valid measurements" };

    let category = "";
    if (gender === "Male") {
      if (bf <= 5) category = "Essential fat";
      else if (bf <= 13) category = "Athletes";
      else if (bf <= 17) category = "Fitness";
      else if (bf <= 24) category = "Average";
      else category = "Obese";
    } else {
      if (bf <= 13) category = "Essential fat";
      else if (bf <= 20) category = "Athletes";
      else if (bf <= 24) category = "Fitness";
      else if (bf <= 31) category = "Average";
      else category = "Obese";
    }

    const fatMass = (w * bf) / 100;
    const leanMass = w - fatMass;

    // BMI method estimate
    let bmiEstimate = null;
    if (bmiData && age) {
      const gv = gender === "Male" ? 1 : gender === "Female" ? 0 : 0.5;
      const b = parseFloat(bmiData.bmi);
      bmiEstimate = (1.20 * b) + (0.23 * age) - (10.8 * gv) - 5.4;
    }

    return {
      bf: bf.toFixed(1),
      category,
      fatMass: fatMass.toFixed(1),
      leanMass: leanMass.toFixed(1),
      bmiEstimate: bmiEstimate ? bmiEstimate.toFixed(1) : "N/A"
    };
  }, [formData.weight, formData.height, formData.neck, formData.waist, formData.hip, formData.gender, formData.age, bmiData]);

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
    if (canGoNext()) setStep(s => Math.min(s + 1, 8));
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canGoNext()) return;
    
    console.log("Form Submitted", {
      ...formData,
      bmi: bmiData,
      bodyFat: bodyFatData
    });

    setIsSubmitted(true);
  };

  const handleSingleChoice = (key: keyof FormState, value: string) => {
    updateForm(key, value);
    setTimeout(() => {
      setStep(s => Math.min(s + 1, 8));
    }, 200);
  };

  const steps = [
    { label: "Step 1: What’s your Goal?", title: "What’s your Goal?", percent: 13 },
    { label: "Step 2: Fill this quick sheet to know your Body Type", title: "Fill this quick sheet to know your Body Type", percent: 25 },
    { label: "Step 3: Let’s calculate your Body Fat %", title: "Let’s calculate your Body Fat %", percent: 38 },
    { label: "Step 4: How quick do you want to reach your goal?", title: "How quick do you want to reach your goal?", percent: 50 },
    { label: "Step 5: Have you tried to transform before?", title: "Have you tried to transform before?", percent: 63 },
    { label: "Step 6: When is the Best Time to contact you?", title: "When is the Best Time to contact you?", percent: 75 },
    { label: "Step 7: Please select a mode of First Contact", title: "Please select a mode of First Contact", percent: 88 },
    { label: "Step 8: Personal Info", title: "Personal Info", percent: 100 },
  ];

  const currentStepInfo = steps[step - 1];

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-rise h-full">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#067100] mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal">Thank you!</h3>
        <p className="mt-2 text-muted-foreground max-w-sm">
          Your request has been submitted successfully. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full bg-white ${isPopup ? "" : "rounded-3xl shadow-soft border border-border p-3 sm:p-4"}`}>
      {/* Progress */}
      <div className="mb-3 shrink-0">
        <div className="flex justify-between items-center text-[11px] font-medium mb-1">
          <span className="text-primary">{currentStepInfo.label}</span>
          <span className="text-muted-foreground">{currentStepInfo.percent}%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-cta transition-all duration-500 ease-in-out"
            style={{ width: `${currentStepInfo.percent}%` }}
          />
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-display font-bold text-charcoal mb-3 shrink-0">{currentStepInfo.title}</h3>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-1">
        {step === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {[
              { icon: Activity, label: "Fat loss / Get lean" },
              { icon: Dumbbell, label: "Build Muscle / Get Strong" },
              { icon: Zap, label: "Improve energy and fitness" },
              { icon: Heart, label: "General health and lifestyle upgrade" },
              { icon: Scale, label: "Weight Gain" },
              { icon: Droplet, label: "Diabetes Support" },
              { icon: HeartPulse, label: "PCOS / PCOD Support" },
              { icon: Brain, label: "Thyroid Care" },
              { icon: Target, label: "Cholesterol / BP Support" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSingleChoice("goal", opt.label)}
                className={`flex flex-col items-center justify-center text-center gap-1.5 p-2 rounded-xl border-2 transition-all ${
                  formData.goal === opt.label 
                    ? "border-[#067100] bg-green-50 text-[#067100]" 
                    : "border-border bg-white text-charcoal hover:border-primary/50"
                }`}
              >
                <opt.icon className="h-4 w-4" />
                <span className="text-[10px] font-semibold leading-tight">{opt.label}</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Age</label>
                <input type="number" value={formData.age} onChange={e => updateForm("age", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="Years" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Gender</label>
                <select value={formData.gender} onChange={e => updateForm("gender", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Weight (kg)</label>
                <input type="number" step="0.1" value={formData.weight} onChange={e => updateForm("weight", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="kg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Height (cm)</label>
                <input type="number" step="0.1" value={formData.height} onChange={e => updateForm("height", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="cm" />
              </div>
            </div>

            {bmiData ? (
              <div className="mt-6 bg-ivory rounded-2xl p-5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Your BMI is:</p>
                  <p className="text-3xl font-display font-bold text-primary">{bmiData.bmi}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-muted-foreground">BMI Category:</p>
                  <p className="text-lg font-semibold text-charcoal">{bmiData.category}</p>
                </div>
              </div>
            ) : (
              <div className="mt-6 bg-gray-50 rounded-2xl p-5 border border-border text-center text-muted-foreground text-sm">
                Enter details to calculate BMI
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Neck (cm)</label>
                <input type="number" step="0.1" value={formData.neck} onChange={e => updateForm("neck", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="cm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Waist (cm)</label>
                <input type="number" step="0.1" value={formData.waist} onChange={e => updateForm("waist", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="cm" />
              </div>
              {formData.gender === "Female" && (
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Hip (cm)</label>
                  <input type="number" step="0.1" value={formData.hip} onChange={e => updateForm("hip", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="cm" />
                </div>
              )}
            </div>

            {bodyFatData.error ? (
              <div className="mt-6 bg-red-50 rounded-2xl p-5 border border-red-100 text-center text-red-600 text-sm">
                {bodyFatData.error}
              </div>
            ) : (
              <div className="mt-6 bg-[#F4F9F9] rounded-2xl p-5 border border-primary/20 grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Body Fat %</p>
                  <p className="text-xl font-bold text-primary">{bodyFatData.bf}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Category</p>
                  <p className="text-lg font-semibold text-charcoal">{bodyFatData.category}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fat Mass</p>
                  <p className="text-lg font-semibold text-charcoal">{bodyFatData.fatMass} kg</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lean Mass</p>
                  <p className="text-lg font-semibold text-charcoal">{bodyFatData.leanMass} kg</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Body Fat by BMI method (Estimate)</p>
                  <p className="text-sm font-medium text-charcoal">{bodyFatData.bmiEstimate}%</p>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-2">
            {["0 months – 3 months", "3 months – 6 months", "6 months – 9 months", "Haven’t decided yet"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSingleChoice("timeline", opt)}
                className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${
                  formData.timeline === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 5 && (
          <div className="grid gap-2">
            {["Yes", "No"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSingleChoice("triedBefore", opt)}
                className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${
                  formData.triedBefore === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 6 && (
          <div className="grid gap-2">
            {["Morning (8am to 11am)", "Noon (12pm to 3pm)", "Evening (4pm to 7pm)"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSingleChoice("contactTime", opt)}
                className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${
                  formData.contactTime === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 7 && (
          <div className="grid gap-2">
            {["WhatsApp Text", "Call", "Instagram"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSingleChoice("contactMode", opt)}
                className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${
                  formData.contactMode === opt ? "border-[#067100] bg-green-50 text-[#067100]" : "border-border bg-white text-charcoal hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 8 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
              <input type="text" value={formData.name} onChange={e => updateForm("name", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number *</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-gray-50 text-charcoal text-sm font-medium">+91</span>
                <input type="tel" maxLength={10} value={formData.phone} onChange={e => {
                  updateForm("phone", e.target.value);
                  if (formData.sameAsPhone) updateForm("whatsapp", e.target.value);
                }} className="w-full p-3 rounded-r-xl border border-border outline-none focus:border-primary" placeholder="10-digit number" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-charcoal">WhatsApp Number *</label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                  <input type="checkbox" checked={formData.sameAsPhone} onChange={e => updateForm("sameAsPhone", e.target.checked)} className="rounded border-gray-300 text-primary focus:ring-primary" />
                  Same as Phone Number
                </label>
              </div>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-gray-50 text-charcoal text-sm font-medium">+91</span>
                <input type="tel" maxLength={10} disabled={formData.sameAsPhone} value={formData.whatsapp} onChange={e => updateForm("whatsapp", e.target.value)} className="w-full p-3 rounded-r-xl border border-border outline-none focus:border-primary disabled:bg-gray-100 disabled:text-gray-500" placeholder="10-digit number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
              <input type="email" value={formData.email} onChange={e => updateForm("email", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Instagram Username <span className="text-muted-foreground font-normal">(Optional)</span></label>
              <input type="text" value={formData.instagram} onChange={e => updateForm("instagram", e.target.value)} className="w-full p-3 rounded-xl border border-border outline-none focus:border-primary" placeholder="@username" />
            </div>
            
            <div className="bg-sand/50 p-3 rounded-xl border border-sand mt-4 text-xs text-muted-foreground text-center">
              Note: We will contact you for a free consultation.
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border shrink-0">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#067100] bg-white px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
        )}
        
        {step < 8 && step !== 1 && step !== 4 && step !== 5 && step !== 6 && step !== 7 ? (
          <button
            onClick={nextStep}
            disabled={!canGoNext()}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#067100] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#005f00] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        ) : null}
        
        {step === 8 && (
          <button
            onClick={handleSubmit}
            disabled={!canGoNext()}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#067100] px-4 py-2.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-[#005f00] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            Submit <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
