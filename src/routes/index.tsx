import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ChevronDown,
  Compass,
  LineChart,
  Quote,
  Sparkles,
  Target,
  Droplet,
  HeartPulse,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero-nutrition.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import specSugar from "@/assets/spec-sugar.jpg";
import specBp from "@/assets/spec-bp.jpg";
import specChol from "@/assets/spec-cholesterol.jpg";
import specWellness from "@/assets/spec-wellness.jpg";
import founderAsset from "@/assets/mohammed-mujeeb.jpg.asset.json";
import { BRAND, FAQS, SERVICES, STORIES } from "@/lib/site-data";
import { ContactModal } from "@/components/site/ContactModal";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { useState, useRef } from "react";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Nutrition Centre — Strong Body. Sharp Mind. Smart Nutrition." },
      {
        name: "description",
        content:
          "Evidence-based nutrition coaching in Guntur. Personalized plans for weight loss, PCOS/PCOD, diabetes, thyroid and sustainable lifestyle change.",
      },
      { property: "og:title", content: "MD Nutrition Centre — Smart Nutrition Coaching" },
      {
        property: "og:description",
        content:
          "Personalized wellness coaching to help you achieve sustainable health, better energy and a confident lifestyle.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  "Evidence-Based Nutrition",
  "Personalized Coaching",
  "Sustainable Lifestyle Support",
];

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book Your Free Health Assessment",
    desc: "Reach out on call or WhatsApp and pick a slot that works for you.",
  },
  {
    icon: Compass,
    title: "Understand Your Health Goals",
    desc: "We map your lifestyle, medical history and what a healthier you looks like.",
  },
  {
    icon: Target,
    title: "Get a Personalized Plan",
    desc: "A realistic nutrition and lifestyle plan designed around your body and routine.",
  },
  {
    icon: LineChart,
    title: "Follow-Up & Progress Tracking",
    desc: "Regular check-ins keep you consistent and adjust the plan as you progress.",
  },
];

const WHY = [
  "Personalized plans based on your body and lifestyle",
  "Scientifically backed nutrition guidance",
  "Simple, realistic, and sustainable approach",
  "Regular follow-up and progress tracking",
  "Support for weight loss, diabetes, PCOS/PCOD, thyroid, and lifestyle transformation",
  "Online and in-person consultation options",
  "Professional wellness coaching by Mohammed Mujeeb",
];

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory/40">
        {/* animated blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-teal/20 animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-green/15 animate-blob" style={{ animationDelay: "-6s" }} />
        
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center relative z-10 pt-8 pb-4 animate-rise">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal">
            80% Nutrition. 20% Exercise. <span className="text-[#067100]">100% Mindset.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            At MD Nutrition Centre, we help you build lifelong healthy habits through personalized nutrition guidance, practical fitness support, and a mindset focused on lasting results.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-6 sm:px-8 sm:pt-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-12 lg:pb-24 relative z-10">
          
          {/* Left Column: Founder Image */}
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft image-card w-full hidden lg:block h-full min-h-[600px]">
            <img
              src="/founder2.jpeg"
              alt="Mahammed Mujeeb - MD Nutrition Centre"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain p-2"
            />
          </div>

          {/* Right Column: Heading + Form Card */}
          <div className="flex flex-col animate-rise bg-white rounded-[2rem] p-5 sm:p-6 shadow-soft border border-white/60">
            <span className="inline-flex self-start items-center gap-1.5 rounded-full border border-teal/25 bg-green-50 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#067100]">
              <Sparkles className="h-3 w-3" /> FREE CONSULTATION
            </span>
            <h1 className="mt-3 font-display text-xl font-extrabold leading-[1.2] text-charcoal sm:text-2xl lg:text-3xl">
              Get FREE Consultation
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill the form below for personalized one-to-one guidance and help you take the first step toward a healthier lifestyle.
            </p>
            
            <div className="mt-4 flex-1 h-auto min-h-[400px]">
               <ConsultationForm isPopup={false} />
            </div>
          </div>
          
          {/* Mobile Image */}
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft image-card w-full block lg:hidden h-[400px]">
            <img
              src="/founder.jpeg"
              alt="Mohammed Mujeeb - MD Nutrition Centre"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Your Nutrition Partner for a Healthier Tomorrow
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At MD Nutrition Centre, we believe that good nutrition should be simple, practical, and sustainable. Our mission is to help you build healthy eating habits that fit your lifestyle—not temporary diets or unrealistic restrictions.<br /><br />
              We provide personalized nutrition guidance tailored to your unique health goals, dietary preferences, and daily routine. Whether you're looking to manage your weight, improve your energy, enhance your overall well-being, or develop healthier habits, we're here to support you every step of the way.<br /><br />
              Our evidence-based, food-first approach focuses on balanced nutrition, long-term lifestyle changes, and ongoing support to help you achieve lasting results with confidence.<br /><br />
              At MD Nutrition Centre, we're more than nutrition experts—we're your trusted partner on the journey to a healthier, happier tomorrow.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              Learn more about our approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "3+", v: "Years of coaching experience" },
              { k: "250+", v: "Clients guided to results" },
              { k: "95%", v: "Client follow-through rate" },
              { k: "4.9★", v: "Average client rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-ivory p-6 shadow-soft">
                <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">{s.k}</p>
                <p className="mt-2 text-sm text-charcoal/75">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative overflow-hidden bg-[#054020] py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border-4 border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-lift image-card">
              <img
                src="/founder.jpeg"
                alt="Mahammed Mujeeb — Senior Wellness Coach & Founder of MD Nutrition Centre"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-lift sm:block">
              <p className="font-display text-lg font-extrabold text-charcoal">Mahammed Mujeeb</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Senior Wellness Coach</p>
            </div>
          </div>

          <div className="order-1 animate-rise lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Meet the Founder
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Transform Your Health.<br />
              <span className="text-gradient-brand">Transform Your Life.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              At MD Nutrition Centre, we believe lasting health begins with the right guidance and sustainable habits. Under the leadership of Senior Wellness Coach Mahammed Mujeeb, we provide personalized nutrition and lifestyle coaching designed to help you achieve healthy weight management, improved well-being, and lifelong wellness.<br /><br />
              Every plan is tailored to your unique goals, preferences, and lifestyle—making healthy living practical, enjoyable, and sustainable.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-white/5 px-5 py-4 italic text-[color:var(--brand-ivory)]/90">
              “Your health transformation is our mission.”
            </blockquote>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "100+", v: "Happy Clients" },
                { k: "100+", v: "Kgs Weight Loss" },
                { k: "98%", v: "Client Satisfaction" },
                { k: "2+", v: "Years of Expertise" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-accent sm:text-3xl">{s.k}</p>
                  <p className="mt-1 text-xs text-white/70">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Weight Loss Management", "Diabetes Coaching", "PCOS/PCOD", "Thyroid Care", "Lifestyle Transformation"].map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (IMAGES) */}
      <section className="bg-ivory py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-charcoal">
            Kind Words from Our Clients
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real people. Every nutrition journey is built on trust, personalized care, and lasting lifestyle change. We are honored to support our clients in achieving their health goals, and their experiences reflect our commitment to evidence-based nutrition and compassionate care.
          </p>
        </div>

        <div className="mt-12 relative max-w-7xl mx-auto">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-5 sm:px-8"
          >
            {[2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="snap-center shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-white shadow-soft p-3 flex flex-col items-center justify-center border border-border">
                <img 
                  src={`/testimonial (${num}).jpeg`} 
                  alt="Client Testimonial" 
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-2">
            <button 
              onClick={() => scrollCarousel('left')} 
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-white transition-colors shadow-sm"
            >
              <ChevronDown className="h-4 w-4 rotate-90" /> Previous
            </button>
            <div className="flex gap-1.5 hidden sm:flex">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? 'w-6 bg-accent' : 'bg-border'}`} />
              ))}
            </div>
            <button 
              onClick={() => scrollCarousel('right')} 
              className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors shadow-sm"
            >
              Next <ChevronDown className="h-4 w-4 -rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[color:var(--brand-sand)]/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Services</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Coaching designed around your body and lifestyle
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s, i) => (
              <div
                key={s.slug}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group card-hover animate-rise flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-primary shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Why Choose MD Nutrition Centre?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At MD Nutrition Centre, we believe lasting results come from evidence-based nutrition, personalized guidance, and consistent support. Our approach is built on science, empathy, and sustainable habits—not fad diets, quick fixes, or extreme restrictions.<br /><br />
              We help you make practical lifestyle changes that fit your routine, so you can achieve your health goals with confidence and maintain them for the long term.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-1">
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <div>
                <strong className="block text-charcoal font-display text-lg">1. Truly Personalized Nutrition Plans</strong>
                <span className="text-sm leading-relaxed text-muted-foreground mt-1 block">Every nutrition plan is thoughtfully designed around your health goals, medical needs, cultural preferences, food choices, and daily lifestyle—never a one-size-fits-all template.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <div>
                <strong className="block text-charcoal font-display text-lg">2. Food-First, Sustainable Approach</strong>
                <span className="text-sm leading-relaxed text-muted-foreground mt-1 block">We believe in the power of real, wholesome food. No crash diets, unnecessary supplements, or extreme restrictions—just balanced, portion-controlled meals that fit your lifestyle and deliver lasting results.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <div>
                <strong className="block text-charcoal font-display text-lg">3. Continuous Guidance & Support</strong>
                <span className="text-sm leading-relaxed text-muted-foreground mt-1 block">Your journey doesn't end with a diet plan. Receive regular progress reviews, ongoing plan adjustments, and convenient WhatsApp support to help you stay motivated, overcome challenges, and achieve your goals.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <div>
                <strong className="block text-charcoal font-display text-lg">4. Science-Backed Care with Compassion</strong>
                <span className="text-sm leading-relaxed text-muted-foreground mt-1 block">Our qualified nutrition professionals combine evidence-based practice with personalized, compassionate care—listening to your needs, understanding your challenges, and guiding you with expertise every step of the way.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SPECIALISED SUPPORT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--brand-ivory)] to-white py-20">
        <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-green/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Specialised Support For</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              <span className="text-gradient-brand">Personalized Guidance.</span> Proven Results. Better Health.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              Whether your goal is healthy weight management, improved nutrition, enhanced energy, or long-term wellness, our personalized coaching is tailored to your unique needs, lifestyle, and health goals.<br /><br />
              We provide practical, evidence-based guidance to help you build sustainable habits and achieve lasting results.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Droplet, image: specSugar, title: "Sugar Control", desc: "Balanced blood sugar levels for more energy, better health and a happier life." },
              { icon: HeartPulse, image: specBp, title: "Blood Pressure Balance", desc: "Maintain healthy blood pressure levels and improve heart health naturally." },
              { icon: ShieldCheck, image: specChol, title: "Cholesterol Management", desc: "Improve cholesterol levels, support heart health and reduce health risks." },
              { icon: Sparkles, image: specWellness, title: "Complete Wellness & Weight Management", desc: "Holistic care for your body and mind to achieve lasting wellness and healthy weight." },
            ].map((c, i) => (
              <div
                key={c.title}
                style={{ animationDelay: `${i * 90}ms` }}
                className="card-hover animate-rise group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white text-center shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                  <div className="absolute -bottom-6 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lift ring-4 ring-white">
                    <c.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-charcoal">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-5 rounded-3xl bg-charcoal p-6 text-center shadow-lift sm:flex-row sm:justify-between sm:p-8 sm:text-left">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/10 text-accent">
                <HeartPulse className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white sm:text-xl">Your Health Is Our Priority.</p>
                <p className="text-sm text-[color:var(--brand-ivory)]/90 italic">We're Here to Support You!</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Leaf, label: "Personalized Plans" },
                { icon: Target, label: "Expert Guidance" },
                { icon: TrendingUp, label: "Proven Results" },
                { icon: Users, label: "Ongoing Support" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-white">
                  <p.icon className="h-4 w-4 text-accent" />
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-charcoal py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-ivory)]">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              A Simple, Four-Step Journey to Better Health
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Our personalized coaching process is designed to make healthy living simple, sustainable, and achievable. From understanding your goals to providing ongoing support, we're with you every step of your wellness journey.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary">01</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">Book Your Free Health Assessment</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                Schedule your FREE health assessment by calling or messaging us on WhatsApp. Choose a convenient time, and we'll help you take the first step toward achieving your health and wellness goals.
              </p>
              <a href="https://calendly.com/mujeeb-nutrition/one-to-one-meeting?month=2026-07" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
                Book Appointment <ArrowRight className="h-3 w-3" />
              </a>
            </li>
            
            <li className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary">02</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">Understand Your Health Goals</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                We take the time to understand your lifestyle, dietary habits, health history, and wellness goals.<br /><br />
                This helps us understand what a healthier version of you looks like and how we can support your transformation journey.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2.5 text-xs font-semibold transition-colors">
                Start Assessment <ArrowRight className="h-3 w-3" />
              </button>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary">03</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">Get Your Personalized Plan</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                Receive a personalized nutrition and lifestyle plan tailored to your body, health goals, dietary preferences, and daily routine. Our practical, evidence-based recommendations are designed to help you build sustainable habits and achieve lasting results.
              </p>
              <a href="https://forms.gle/KyWakw7E8ptdWNvy8" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
                Fill Registration Form <ArrowRight className="h-3 w-3" />
              </a>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur flex flex-col h-full">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary">04</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">Follow-Up & Progress Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                Stay on track with regular follow-up sessions to monitor your progress, address challenges, and refine your nutrition and lifestyle plan as your needs evolve. Ongoing guidance and support help you build lasting healthy habits.
              </p>
              <a href="https://chat.whatsapp.com/IF8lLJ6M1GI77Kv7LwZKWz" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#25D366]/90">
                Join Personal Tracking Group <ArrowRight className="h-3 w-3" />
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* SUCCESS STORIES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Success Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Real People. Real Results.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every health journey is unique, and every success is worth celebrating. Through personalized nutrition guidance, practical lifestyle changes, and ongoing support, our clients have built healthier habits, improved their well-being, and gained greater confidence—one step at a time.<br /><br />
              Their stories reflect the power of consistency, sustainable choices, and a personalized approach to lifelong wellness.
            </p>
          </div>
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
          >
            Read more stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.slice(0, 3).map((s) => (
            <article
              key={s.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft relative"
            >
              {s.image && (
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-4 shrink-0">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
              )}
              {s.quoteTitle && (
                <h4 className="font-display font-bold text-charcoal mb-2">{s.quoteTitle}</h4>
              )}
              <p className="text-sm leading-relaxed text-charcoal whitespace-pre-line line-clamp-[8]">“{s.quote}”</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 mt-auto">
                <div>
                  <p className="font-display text-sm font-bold text-charcoal">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.goal}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Moments from our centre</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[g1, g2, g3, g4].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/60 bg-white shadow-soft"
              >
                <img
                  src={src}
                  alt="MD Nutrition Centre moment"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">FAQs</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Answers you may be looking for</h2>
        </div>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-5 open:bg-ivory/60">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-base font-semibold text-charcoal">{f.q}</span>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faqs" className="text-sm font-semibold text-primary hover:underline">
            View all FAQs
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

// Ensure BRAND import is retained for tree-shaking safety in strict builds
void BRAND;
