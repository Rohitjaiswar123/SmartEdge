"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Layers,
  MapPin,
  Bot,
  Zap,
  TrendingUp,
  Search,
  ShieldCheck,
  Star,
  Users,
  BarChart3,
  ChevronRight,
  PhoneCall,
  Flame,
  Clock,
  Compass,
  Check,
  ChevronDown,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingCard } from "@/components/ui/glowing-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ProjectModal } from "@/components/project-modal";
import { HeroCarousel } from "@/components/hero-carousel";
import { ClientMarquee } from "@/components/client-marquee";
import { ServiceItemIcon } from "@/components/service-icon";
import { SERVICES, INDUSTRIES, STATS, FAQS } from "@/data/services-data";

const INDUSTRY_MARQUEE = [
  { title: "Healthcare & Clinics", category: "Hospital & Patient Systems", iconText: "MED" },
  { title: "Real Estate Developers", category: "Property Portals & CRMs", iconText: "PROP" },
  { title: "Manufacturing Units", category: "B2B ERPs & Catalog Sites", iconText: "MFG" },
  { title: "Logistics & Transport", category: "Fleet Trackers & Operations", iconText: "LOG" },
  { title: "Educational Institutes", category: "Admission Portals & LMS", iconText: "EDU" },
  { title: "Retail & E-commerce", category: "Headless Stores & UPI Checkout", iconText: "SHOP" },
  { title: "Hospitality & Dining", category: "Map Pack #1 & Booking Engines", iconText: "HOSP" },
  { title: "Corporate & Law Firms", category: "Document Portals & Authority", iconText: "CORP" },
];

const CASE_STUDIES = [
  {
    title: "Apex Multi-Specialty Clinic",
    tag: "Healthcare Software & GBP",
    metrics: "+340% Inbound Patient Bookings",
    duration: "60 Days",
    desc: "Built custom clinic appointment software with WhatsApp reminder automation, coupled with #1 Google Map Pack ranking in their metropolitan district.",
    tech: ["Next.js", "Clinic ERP", "WhatsApp API", "Local SEO"],
  },
  {
    title: "UrbanCraft Luxury Properties",
    tag: "Real Estate Web & Meta Ads",
    metrics: "₹4.8 Cr Pipeline Generated",
    duration: "45 Days",
    desc: "Engineered a high-converting interactive property showcase website with CRM lead routing and high-intent Meta ad funnels.",
    tech: ["Custom Web", "Lead Pipeline", "Meta Ads", "Analytics"],
  },
  {
    title: "Vanguard Industrial Tooling",
    tag: "Manufacturing B2B Portal",
    metrics: "65% Faster RFQ Quoting",
    duration: "90 Days",
    desc: "Replaced manual PDF quoting with a bespoke B2B customer & vendor ordering portal, cutting quote cycle times from 3 days to under 4 hours.",
    tech: ["Custom Software", "Vendor Portal", "ERP Sync", "B2B SEO"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Technical Discovery & Blueprint",
    desc: "We analyze your exact commercial bottlenecks, target buyers, and existing tech stack to map out an unassailable engineering plan.",
  },
  {
    step: "02",
    title: "High-Fidelity Architecture",
    desc: "Designing responsive UI/UX prototypes and clean database schemas with security, speed, and conversion flows baked into every wireframe.",
  },
  {
    step: "03",
    title: "Agile Development Sprints",
    desc: "Clean modular code built with Next.js, TypeScript, cloud APIs, and automated test coverage with bi-weekly progress demos.",
  },
  {
    step: "04",
    title: "Performance, QA & SEO Audit",
    desc: "Rigorous 95+ Core Web Vitals optimization, Schema.org verification, mobile stress testing, and local search calibration.",
  },
  {
    step: "05",
    title: "Deployment & Scaling Engine",
    desc: "Flawless cloud launch accompanied by automated lead tracking, CRM sync, WhatsApp triggers, and continuous growth telemetry.",
  },
];

const TESTIMONIALS = [
  {
    name: "Dr. Mandhani",
    role: "Director & Chief Surgeon, Thane ENT Hospital",
    company: "Thane ENT Hospital",
    logo: "/logos/thane-ent.png",
    text: "SmartEdge completely transformed our hospital's digital presence and patient booking workflow. Their Google Business Profile optimization put our ENT clinic at the top of local search, resulting in a 3x surge in patient appointments.",
    rating: 5,
  },
  {
    name: "Operations Team",
    role: "Director, National Towing Service",
    company: "National Towing Service",
    logo: "/logos/national-towing.jpg",
    text: "SmartEdge engineered our automated dispatch system and local search acquisition engine. Incoming customer towing requests are processed seamlessly, cutting response times drastically.",
    rating: 5,
  },
  {
    name: "Dr. Al-Madinah",
    role: "Chief Medical Officer, Al Madinah Dental & Cosmetology",
    company: "Al Madinah Dental & Cosmetology Care",
    logo: "/logos/al-madinah.png",
    text: "The web application and custom lead funnels designed by SmartEdge exceeded all our expectations. Our patient inquiries for dental and cosmetology care have grown consistently month over month.",
    rating: 5,
  },
  {
    name: "Aditya Vardhan Board",
    role: "Director, Aditya Vardhan Hospital & Trauma Centre",
    company: "Aditya Vardhan Hospital",
    logo: "/logos/adityavardhan.jpg",
    text: "SmartEdge developed a reliable digital portal and optimized our emergency search visibility. Their engineering team is extremely professional, efficient, and technically proficient.",
    rating: 5,
  },
  {
    name: "Calyx Brand Director",
    role: "Managing Director, Calyx",
    company: "Calyx",
    logo: "/logos/calyx.png",
    text: "SmartEdge rebuilt our digital platform using Next.js with lightning fast page loads. The sleek UI design and seamless conversion flows elevated our brand authority immediately.",
    rating: 5,
  },
  {
    name: "K|A Leadership",
    role: "Managing Partner, K|A Agencies",
    company: "K|A Agencies",
    logo: "/logos/ka-agencies.png",
    text: "From custom management software to local search dominance, SmartEdge has been an invaluable technology partner for our operations and growth strategy.",
    rating: 5,
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalService, setModalService] = React.useState<string>("Website Development");
  const [faqActive, setFaqActive] = React.useState<number | null>(0);

  const openModalWith = (serviceName: string) => {
    setModalService(serviceName);
    setModalOpen(true);
  };

  const primaryService = SERVICES[0]; // Website Development
  const secondaryService = SERVICES[1]; // Custom Software Development
  const tertiaryService = SERVICES[2]; // Google Business Profile Optimization
  const automationService = SERVICES[3]; // Business Automation
  const aiService = SERVICES[5]; // AI Solutions

  const otherServices = SERVICES.slice(4).filter(
    (s) => s.id !== "ai-automation-solutions" && s.id !== "business-automation"
  );

  return (
    <div className="relative overflow-hidden">
      {/* ---------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#080c14] dark:via-[#0b101c] dark:to-[#080c14]">
        {/* Aceternity Spotlight Background */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(37, 99, 235, 0.22)" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Text & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Positioning Biscuit Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-200/80 dark:border-cyan-900/60 bg-cyan-50/80 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span>YOUR NEXT STAGE OF GROWTH STARTS HERE</span>
              </motion.div>

              {/* Hero Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
              >
                Great businesses deserve a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
                  smarter edge.
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200"
              >
                Websites, software & digital solutions built to grow your business.
              </motion.h2>

              {/* Supporting line */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
              >
                From your first website to your next big idea. We build the technology, automate the work, and help your business move forward.
              </motion.p>

              {/* CTAs: Primary, Secondary, WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => openModalWith("Website Development")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary CTA */}
                <button
                  type="button"
                  onClick={() => openModalWith("Consultation")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </button>

                {/* WhatsApp Us */}
                <a
                  href="https://wa.me/919323130044?text=Hi%20SmartEdge%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
                  <span>WhatsApp Us</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </motion.div>

              {/* Trust proof checkmarks (Image 2 bottom left) */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Business-first thinking
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Built for what's next
                </span>
              </div>
            </div>

            {/* Right Column: Hero Carousel */}
            <div className="lg:col-span-5 pt-6 lg:pt-0">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. CLIENT PORTFOLIO LOGO MARQUEE */}
      {/* ---------------------------------------------------------------- */}
      <ClientMarquee />

      {/* ---------------------------------------------------------------- */}
      {/* 3. INDUSTRY MARQUEE */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-10 bg-slate-100/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Trusted by Leaders Across High-Growth Industries
          </p>
        </div>
        <InfiniteMovingCards items={INDUSTRY_MARQUEE} speed="normal" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. PRIMARY FEATURED SERVICE: WEBSITE DEVELOPMENT */}
      {/* ---------------------------------------------------------------- */}
      <section id="website-development" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Laptop className="w-3.5 h-3.5" /> Featured Service #1
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Website Development
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              {primaryService.fullDescription}
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => openModalWith("Website Development")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Build My Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Grid & Capability Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Visual Showcase Card */}
          <GlowingCard className="lg:col-span-2 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50/40 dark:from-slate-900 dark:to-blue-950/20 border-blue-200/60 dark:border-blue-900/50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                    https://yourbrand.com (Next.js 15 + Core Web Vitals 99)
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-1 rounded-full">
                  Sub-Second Speed
                </span>
              </div>

              {/* Sub-services pills */}
              <div className="pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                  Complete Website Solutions Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {primaryService.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <ServiceItemIcon name={item} className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom engineering perks */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/80 dark:border-slate-800/80 mt-8">
              {primaryService.features.map((feat, fIdx) => (
                <div key={fIdx} className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {feat.title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </GlowingCard>

          {/* Right Column: High-Impact Website Metrics */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                Performance Guarantee
              </span>
              <h3 className="text-2xl font-bold">
                A Website Designed to Turn Clicks Into Revenue
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Slow websites lose up to 53% of mobile visitors. We optimize image compression, server caching, and responsive layouts to ensure instantaneous browsing on all smartphones.
              </p>
              <div className="pt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">3.8x</span>
                <span className="text-xs text-blue-200">
                  Higher conversion vs generic template builders
                </span>
              </div>
            </div>

            <GlowingCard className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Next-Gen Tech Stack
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                We develop using Next.js, React, Tailwind CSS, and headless content systems, giving you unbreakable security and zero plugin vulnerabilities.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModalWith("Website Development")}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
                >
                  Request Website Estimate →
                </button>
              </div>
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. SECOND FEATURED SERVICE: CUSTOM SOFTWARE DEVELOPMENT */}
      {/* ---------------------------------------------------------------- */}
      <section id="custom-software-development" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24 bg-slate-100/50 dark:bg-slate-900/30 rounded-3xl my-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> Featured Service #2 (Second Priority)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Custom Software Development
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              {secondaryService.fullDescription}
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => openModalWith("Custom Software Development")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Discuss Your Software Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Software Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryService.items.map((softwareItem, sIdx) => (
            <GlowingCard key={sIdx} className="hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <ServiceItemIcon name={softwareItem} className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {softwareItem}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Bespoke role-based access, real-time database sync, and multi-tenant security designed for scale.
                  </p>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Enterprise Callout Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Need a Custom ERP, Clinic System, or Vendor Portal?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Schedule a 30-minute system architecture scoping session with our principal engineers.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModalWith("Custom Software Development")}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity"
          >
            Schedule Software Scope Call →
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. THIRD PRIORITY SERVICE: GOOGLE BUSINESS PROFILE OPTIMIZATION */}
      {/* ---------------------------------------------------------------- */}
      <section id="google-business-profile-optimization" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" /> Featured Service #3 (Third Priority)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Google Business Profile Optimization
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              {tertiaryService.fullDescription}
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => openModalWith("Google Business Profile Optimization")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Improve My Google Ranking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* GBP Strategy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlowingCard className="lg:col-span-2 space-y-8 p-6 sm:p-8">
            <div className="space-y-2.5 pb-4 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
                  <span>15-Point Local Maps Domination Playbook</span>
                </h3>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  15 Action Items
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                A systematic framework designed to maximize local visibility and push your business into the top 3 Google map pack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {tertiaryService.items.map((gbpItem, gIdx) => (
                <div
                  key={gIdx}
                  className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-amber-500/40 transition-colors shadow-xs"
                >
                  <ServiceItemIcon name={gbpItem} className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-800 dark:text-slate-200 break-words">{gbpItem}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1">
                <p className="text-xs font-bold text-amber-800 dark:text-amber-300">
                  Google Map Pack Top 3 Guarantee Focus
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  We reverse-engineer top ranking local competitors, injecting primary geo-keywords and schema markup.
                </p>
              </div>
              <div className="p-4.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  Automated Review Acceleration
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Custom WhatsApp & SMS triggers that collect genuine 5-star Google reviews from satisfied customers.
                </p>
              </div>
            </div>
          </GlowingCard>

          {/* Local Impact Metric */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-100">
                Local Search Dominance
              </span>
              <h4 className="text-2xl font-bold leading-tight">
                76% of Local Map Searches Result in a Direct Phone Call
              </h4>
              <p className="text-xs text-amber-100 leading-relaxed">
                If your business isn&apos;t in the Top 3 Map Pack, your competitors are capturing all your local demand every single day.
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold">+280%</span>
                <span className="text-xs text-amber-100">
                  Average monthly surge in direction requests and calls
                </span>
              </div>
              <button
                type="button"
                onClick={() => openModalWith("Google Business Profile Optimization")}
                className="w-full py-3 rounded-xl bg-white text-amber-900 font-bold text-xs shadow-md hover:bg-amber-50 transition-colors"
              >
                Claim Your Free Local Maps Audit →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. BUSINESS AUTOMATION & AI SOLUTIONS */}
      {/* ---------------------------------------------------------------- */}
      <section id="business-automation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" /> High-Efficiency Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Business Automation & AI Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Eliminate repetitive operational work. Run lead capture, WhatsApp notifications, invoice reminders, and customer support on autopilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Business Automation */}
          <GlowingCard className="space-y-6 flex flex-col justify-between border-cyan-200/60 dark:border-cyan-900/50">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Business Process & Workflow Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Connect your website forms, WhatsApp Business API, CRM, and accounting software into automated pipelines.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {automationService.items.slice(0, 8).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => openModalWith("Business Automation")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <span>Automate My Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>

          {/* Card 2: AI Solutions */}
          <GlowingCard className="space-y-6 flex flex-col justify-between border-purple-200/60 dark:border-purple-900/50">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                AI Assistants & Intelligent Chatbots
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Deploy conversational AI assistants trained on your product catalogue, pricing, and FAQs across Web and WhatsApp.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aiService.items.slice(0, 8).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => openModalWith("AI & Automation Solutions")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 7. OTHER DIGITAL MARKETING & GROWTH SERVICES */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 dark:bg-slate-900/40 rounded-3xl my-8 border border-slate-200/80 dark:border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Complete Digital Growth Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              From organic search engine optimization and high-intent Google Ads to viral reel creation and accurate analytics tracking.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All 18 Services Directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((svc) => (
            <GlowingCard key={svc.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Service #{svc.number}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <ServiceItemIcon name={svc.title} className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {svc.shortDescription}
                </p>
                <div className="pt-4 flex flex-wrap gap-1.5">
                  {svc.items.slice(0, 4).map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <ServiceItemIcon name={sub} className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{sub}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-4">
                <button
                  type="button"
                  onClick={() => openModalWith(svc.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <span>{svc.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* View All Services Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-md hover:opacity-90 transition-opacity"
          >
            <span>View All Services (18 Solutions)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. INDUSTRIES WE SERVE */}
      {/* ---------------------------------------------------------------- */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Domain Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Industries We Empower
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Tailored software architecture, conversion funnels, and local search dominance for your vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <GlowingCard key={idx} className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">
                {ind.slug.slice(0, 3).toUpperCase()}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {ind.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
              <ul className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </GlowingCard>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 9. PORTFOLIO / CASE STUDIES */}
      {/* ---------------------------------------------------------------- */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24 bg-slate-100/60 dark:bg-slate-900/40 rounded-3xl my-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5" /> Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Real commercial outcomes delivered across healthcare, real estate, and manufacturing.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Explore All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <GlowingCard key={idx} className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
                  {study.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
                  {study.title}
                </h3>
                <div className="my-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-lg font-extrabold text-emerald-700 dark:text-emerald-300">
                    {study.metrics}
                  </p>
                  <p className="text-[10px] text-emerald-800 dark:text-emerald-400 font-medium">
                    Verified outcome achieved within {study.duration}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {study.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 flex flex-wrap gap-1.5">
                {study.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlowingCard>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 10. DEVELOPMENT PROCESS */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How We Build & Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A disciplined 5-stage roadmap ensuring rapid delivery, zero technical debt, and maximum commercial return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 space-y-3 relative group hover:border-blue-500/50 transition-colors"
            >
              <span className="text-2xl font-black text-blue-600/30 dark:text-blue-400/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {step.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 11. RESULTS & STATISTICS COUNTER */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl text-white shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-400/30">
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">350+</p>
            <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
              Websites & Systems Deployed
            </p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">99.4%</p>
            <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
              Client Satisfaction SLA
            </p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">10x</p>
            <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
              Average Return on Investment
            </p>
          </div>
          <div className="p-4">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">&lt; 30s</p>
            <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1">
              Automated Lead Follow-up Speed
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 12. TESTIMONIALS */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Client Verification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What Business Leaders Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real feedback from enterprise founders, clinic directors, and manufacturing partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <GlowingCard key={idx} className="flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="h-10 px-2.5 py-1 bg-white rounded-lg border border-slate-200/80 shadow-xs flex items-center justify-center">
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="h-8 max-w-[130px] w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 13. AEO & GEO FAQ SECTION */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" /> Answer Engine Optimization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Clear, authoritative answers about our engineering methodology, software capabilities, and local ranking systems.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setFaqActive(faqActive === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    faqActive === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqActive === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 14. FINAL HIGH-CONVERSION CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 sm:p-14 text-center text-white space-y-8 shadow-2xl">
          {/* Subtle glow background */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Build. Innovate. Grow.
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Upgrade Your Website, Software & Digital Pipeline?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Partner with SmartEdge Business Solutions. We build modern websites that convert, custom software that streamlines operations, and local ranking engines that dominate Google Maps.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openModalWith("Full Digital Architecture")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 transition-all active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => openModalWith("Consultation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all"
              >
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href="https://wa.me/919323130044?text=Hi%20SmartEdge%20Team%2C%20I%20want%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Estimator / Scope Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
}
