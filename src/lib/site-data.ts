import { Activity, Apple, Brain, ClipboardCheck, HeartPulse, Salad, Sparkles, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BRAND = {
  name: "MD Nutrition Centre",
  tagline: "Strong Body. Sharp Mind. Smart Nutrition.",
  phone: "+91 97009 07707",
  phoneDigits: "919700907707",
  whatsapp: "https://wa.me/919700907707",
  email: "hello@mdnutritioncentre.com",
  city: "Guntur, India",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "weight-management",
    title: "Weight Management Support",
    description:
      "Achieve sustainable weight loss with personalized nutrition plans and expert lifestyle coaching.",
    icon: Activity,
  },
  {
    slug: "wellness-coaching",
    title: "Wellness Coaching",
    description:
      "Build healthy daily habits and improve your overall lifestyle with practical wellness support.",
    icon: Sparkles,
  },
  {
    slug: "nutrition-education",
    title: "Nutrition Education",
    description:
      "Learn how to make smart, sustainable food choices for long-term health.",
    icon: Apple,
  },
  {
    slug: "personal-assessment",
    title: "Personal Health Assessment",
    description:
      "Understand your current lifestyle and get clear guidance for improvement.",
    icon: ClipboardCheck,
  },
  {
    slug: "pcos-pcod",
    title: "PCOS / PCOD Support",
    description:
      "Personalized nutrition and lifestyle support for hormonal wellness and better energy.",
    icon: HeartPulse,
  },
  {
    slug: "diabetes",
    title: "Diabetes Support",
    description:
      "Lifestyle-focused nutrition guidance to support better sugar control and metabolic health.",
    icon: Waves,
  },
  {
    slug: "thyroid",
    title: "Thyroid Care Support",
    description:
      "Practical nutrition and lifestyle coaching to support metabolism, energy, weight management, and overall thyroid wellness.",
    icon: Brain,
  },
  {
    slug: "active-lifestyle",
    title: "Active Lifestyle Programs",
    description:
      "Develop strong daily habits with coaching focused on nutrition, fitness, sleep, consistency, and overall wellness.",
    icon: Salad,
  },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export const FAQS = [
  {
    q: "How do I book a consultation?",
    a: "You can call or WhatsApp us at +91 97009 07707 to schedule your free health assessment.",
  },
  {
    q: "Are consultations available online?",
    a: "Yes, consultations are available online, through video calls, and in person at the Guntur centre.",
  },
  {
    q: "What services do you offer?",
    a: "We provide support for weight loss, diabetes, PCOS/PCOD, thyroid care, wellness coaching, nutrition education, and lifestyle transformation.",
  },
  {
    q: "Do you give strict diet plans?",
    a: "Our focus is not on extreme restrictions. We provide realistic, practical, and sustainable nutrition guidance.",
  },
];

export const STORIES = [
  {
    name: "Priya S.",
    goal: "Sustainable Weight Loss",
    result: "Lost 12 kg in 6 months",
    quote:
      "The plan felt realistic from day one. No crash diets — just simple daily habits I could actually keep. I feel lighter, sharper and more confident.",
  },
  {
    name: "Rakesh V.",
    goal: "Diabetes Support",
    result: "HbA1c 8.9 → 6.4",
    quote:
      "For the first time my sugar levels feel under control without giving up the foods I love. Mujeeb sir made it easy to understand what my body actually needs.",
  },
  {
    name: "Anitha K.",
    goal: "PCOS Wellness",
    result: "Energy & cycles improved in 3 months",
    quote:
      "The coaching went beyond food. Sleep, stress, movement — everything came together. My PCOS symptoms are finally manageable.",
  },
  {
    name: "Vikram R.",
    goal: "Active Lifestyle",
    result: "Down 8 kg, up 4 hours of daily energy",
    quote:
      "I stopped chasing quick fixes. The follow-ups kept me accountable and the results have stayed with me long after the program.",
  },
];