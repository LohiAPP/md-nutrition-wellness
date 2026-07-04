import { Activity, Apple, Brain, ClipboardCheck, HeartPulse, Salad, Sparkles, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import svcWeight from "@/assets/svc-weight.jpg";
import svcWellness from "@/assets/svc-wellness.jpg";
import svcEducation from "@/assets/svc-education.jpg";
import svcAssessment from "@/assets/svc-assessment.jpg";
import svcPcos from "@/assets/svc-pcos.jpg";
import svcDiabetes from "@/assets/svc-diabetes.jpg";
import svcThyroid from "@/assets/svc-thyroid.jpg";
import svcActive from "@/assets/svc-active.jpg";

export const BRAND = {
  name: "MD Nutrition Centre",
  tagline: "Strong Body. Sharp Mind. Smart Nutrition.",
  phone: "+91 97009 07707",
  phoneDigits: "919700907707",
  whatsapp: "https://wa.me/919700907707",
  email: "mdnutritioncentre@gmail.com",
  city: "Guntur, India",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "weight-management",
    title: "Weight Management Support",
    description:
      "Achieve sustainable weight loss with personalized nutrition plans and expert lifestyle coaching.",
    icon: Activity,
    image: svcWeight,
  },
  {
    slug: "wellness-coaching",
    title: "Wellness Coaching",
    description:
      "Build healthy daily habits and improve your overall lifestyle with practical wellness support.",
    icon: Sparkles,
    image: svcWellness,
  },
  {
    slug: "nutrition-education",
    title: "Nutrition Education",
    description:
      "Learn how to make smart, sustainable food choices for long-term health.",
    icon: Apple,
    image: svcEducation,
  },
  {
    slug: "personal-assessment",
    title: "Personal Health Assessment",
    description:
      "Understand your current lifestyle and get clear guidance for improvement.",
    icon: ClipboardCheck,
    image: svcAssessment,
  },
  {
    slug: "pcos-pcod",
    title: "PCOS / PCOD Support",
    description:
      "Personalized nutrition and lifestyle support for hormonal wellness and better energy.",
    icon: HeartPulse,
    image: svcPcos,
  },
  {
    slug: "diabetes",
    title: "Diabetes Support",
    description:
      "Lifestyle-focused nutrition guidance to support better sugar control and metabolic health.",
    icon: Waves,
    image: svcDiabetes,
  },
  {
    slug: "thyroid",
    title: "Thyroid Care Support",
    description:
      "Practical nutrition and lifestyle coaching to support metabolism, energy, weight management, and overall thyroid wellness.",
    icon: Brain,
    image: svcThyroid,
  },
  {
    slug: "active-lifestyle",
    title: "Active Lifestyle Programs",
    description:
      "Develop strong daily habits with coaching focused on nutrition, fitness, sleep, consistency, and overall wellness.",
    icon: Salad,
    image: svcActive,
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
  {
    q: "How long are the consultation sessions?",
    a: "Sessions typically last between 30 to 45 minutes and are tailored to your individual needs.",
  },
  {
    q: "Are follow-ups included in the program?",
    a: "Yes, regular follow-ups are part of every program to track your progress and adjust your plan as needed.",
  },
  {
    q: "What makes MD Nutrition Centre special?",
    a: "Our personalized approach, expert coaching by Mohammed Mujeeb, and focus on lasting lifestyle changes set us apart.",
  },
];

export const SPECIALISED = [
  {
    title: "Sugar Control",
    desc: "Balanced blood sugar levels for more energy, better health and a happier life.",
    icon: "droplet",
  },
  {
    title: "Blood Pressure Balance",
    desc: "Maintain healthy blood pressure levels and improve heart health naturally.",
    icon: "heart",
  },
  {
    title: "Cholesterol Management",
    desc: "Improve cholesterol levels, support heart health and reduce health risks.",
    icon: "shield",
  },
  {
    title: "Complete Wellness & Weight Management",
    desc: "Holistic care for your body and mind to achieve lasting wellness and healthy weight.",
    icon: "sparkles",
  },
] as const;

export const SUPPORT_PILLARS = [
  "Personalized Plans",
  "Expert Guidance",
  "Proven Results",
  "Ongoing Support",
] as const;

export const STORIES = [
  {
    name: "Mohammed Abdul Shafi.",
    goal: "Sustainable Weight Management",
    result: "14 kg lost over 6 months*",
    quote:
      "The plan felt realistic from day one. There were no crash diets or unrealistic restrictions—just simple, sustainable habits that fit my lifestyle. Over time, I felt healthier, more energetic, and more confident in my daily life.",
    image: "/testimonial (2).jpeg",
  },
  {
    name: "Suresh P V.",
    goal: "Diabetes Support",
    result: "Suresh | Civil Contractor | Diabetic for 20+ years → Now Insulin-Free",
    quoteTitle: "20 Years of Diabetes — Finally Free from Insulin!",
    quote:
      "My name is Suresh, and I have been living with diabetes for over 20 years. For the last 5 of those years, I was even dependent on insulin injections daily. I had almost accepted that this was just my life.\n\nJoining MD Nutrition Centre completely changed that.\n\nAfter following the guidance here, I no longer need insulin. I am now managing with just a single tablet per day — and honestly, even that feels like a miracle compared to where I was.\n\nThe biggest change I notice is my energy. I used to feel constantly drained and low. Now I wake up with energy, I work with energy, and I finish my day with energy still left in me.\n\nI am a Civil Contractor by profession, and my work demands a lot physically. Earlier, even completing my daily tasks felt like a struggle. Today, I handle my contracts with full strength and confidence.\n\nMy skin problems related to diabetes have also improved significantly.\n\nThis is not just a health centre — it is a life-changing community. If you are struggling with diabetes and feel like there is no way out, I urge you to visit MD Nutrition Centre at least once.\n\nI am living proof that recovery is possible.",
    image: "/testimonial (3).jpeg",
  },
  {
    name: "Sravani P.",
    goal: "PCOS Wellness",
    result: "Energy & cycles improved in 3 months",
    quote:
      "The coaching went beyond food. Sleep, stress, movement — everything came together. My PCOS symptoms are finally manageable.",
    image: "/testimonial (4).jpeg",
  },
];