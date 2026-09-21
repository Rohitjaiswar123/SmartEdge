"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Layers,
  Bot,
  Zap,
  TrendingUp,
  ShieldCheck,
  Star,
  Users,
  ChevronRight,
  PhoneCall,
  Flame,
  Check,
  ChevronDown,
  Building2,
  Cpu,
  Gauge,
  Workflow,
  Globe2,
  BarChart3
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingCard } from "@/components/ui/glowing-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ProjectModal } from "@/components/project-modal";
import { ClientMarquee } from "@/components/client-marquee";
import { AmbientLighting } from "@/components/ui/ambient-lighting";
import { SERVICES, FAQS } from "@/data/services-data";

const CASE_STUDIES = [
  {
    title: "Apex Multi-Specialty Clinic",
    tag: "Healthcare ERP & Map Pack #1",
    metrics: "+340% Inbound Patient Bookings",
    duration: "60 Days",
    desc: "Built custom clinic appointment software with WhatsApp reminder automation, coupled with #1 Google Map Pack ranking.",
    tech: ["Next.js", "Clinic ERP", "WhatsApp API", "Local SEO"],
  },
  {
    title: "UrbanCraft Luxury Properties",
    tag: "Real Estate Web & Meta Funnels",
    metrics: "₹4.8 Cr Pipeline Generated",
    duration: "45 Days",
    desc: "Engineered a high-converting interactive property showcase website with CRM lead routing and high-intent ad funnels.",
    tech: ["Custom Web", "Lead Pipeline", "Meta Ads", "Analytics"],
  },
  {
    title: "Vanguard Industrial Tooling",
    tag: "B2B Vendor & Ordering Portal",
    metrics: "65% Faster RFQ Quoting",
    duration: "90 Days",
    desc: "Replaced manual PDF quoting with a bespoke B2B ordering portal, cutting quote cycle times from 3 days to under 4 hours.",
    tech: ["Custom Software", "Vendor Portal", "ERP Sync", "B2B SEO"],
  },
];

const TESTIMONIALS = [
  {
    name: "Dr. Mandhani",
    role: "Director & Chief Surgeon",
    company: "Thane ENT Hospital",
    text: "SmartEdge transformed our clinic's digital presence. Their Google Business Profile optimization put our hospital at the top of local search, resulting in a 3x surge in patient appointments.",
    rating: 5,
  },
  {
    name: "Operations Team",
    role: "Director",
    company: "National Towing Service",
    text: "SmartEdge engineered our automated dispatch system and local search acquisition engine. Incoming customer towing requests are processed seamlessly.",
    rating: 5,
  },
  {
    name: "Dr. Al-Madinah",
    role: "Chief Medical Officer",
    company: "Al Madinah Dental Care",
    text: "The web application and custom lead funnels designed by SmartEdge exceeded all our expectations. Patient inquiries have grown month over month.",
    rating: 5,
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalService, setModalService] = React.useState<string>("Website Development");
  const [heroTab, setHeroTab] = React.useState<"web" | "erp" | "growth">("web");
  const [faqActive, setFaqActive] = React.useState<number | null>(0);

  const openModalWith = (serviceName: string) => {
    setModalService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#080c14] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white">
      
      {/* ---------------------------------------------------------------- */}
      {/* 1. HERO SECTION WITH INTERACTIVE CANVAS (MIXPANEL / CHECKLY STYLE) */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#080c14] via-[#0d1424] to-[#080c14] overflow-hidden">
        <AmbientLighting variant="section" intensity="subtle" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(6, 182, 212, 0.25)" />

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
          
          {/* Hero Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Live Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACCEPTED FOR Q4 | 95+ CORE WEB VITALS GUARANTEED</span>
            </motion.div>

            {/* High-Impact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              We Engineer High-Converting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                Websites & Custom Software
              </span>
            </motion.h1>

            {/* Concise Value Proposition Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Sub-second Next.js web applications, custom ERPs, and automated lead funnels engineered to scale your commercial revenue.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => openModalWith("Website Development")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919323130044?text=Hi%20SmartEdge,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-slate-700/80 hover:border-emerald-500/50 bg-slate-900/60 hover:bg-emerald-950/20 text-slate-200 hover:text-emerald-400 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </motion.div>

          </div>

          {/* INTERACTIVE HERO SHOWCASE CANVAS (Mixpanel / Checkly HQ Pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 space-y-6 overflow-hidden"
          >
            {/* Interactive Tab Controls */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 overflow-x-auto gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-500 ml-2 hidden sm:inline">smartedge-architecture-engine.v2</span>
              </div>

              <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setHeroTab("web")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    heroTab === "web"
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Web Engineering</span>
                </button>

                <button
                  onClick={() => setHeroTab("erp")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    heroTab === "erp"
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Custom ERPs & Portals</span>
                </button>

                <button
                  onClick={() => setHeroTab("growth")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    heroTab === "growth"
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Local SEO & AI Search</span>
                </button>
              </div>
            </div>

            {/* Tab Preview Content Window */}
            <div className="min-h-[260px] flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                {heroTab === "web" && (
                  <motion.div
                    key="web"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>LCP Speed Metric</span>
                        <span className="text-emerald-400 font-mono font-bold">98/100</span>
                      </div>
                      <div className="text-sm font-bold text-white">Sub-Second Load Times</div>
                      <p className="text-xs text-slate-400">Next.js 16 server rendering with edge caching & automated WebP images.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Conversion UX</span>
                        <span className="text-cyan-400 font-mono font-bold">High Intent</span>
                      </div>
                      <div className="text-sm font-bold text-white">Lead Capture Funnels</div>
                      <p className="text-xs text-slate-400">WhatsApp triggers, sticky quote buttons, & responsive mobile layouts.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>AI Search Ready</span>
                        <span className="text-indigo-400 font-mono font-bold">Schema.org</span>
                      </div>
                      <div className="text-sm font-bold text-white">AEO Infrastructure</div>
                      <p className="text-xs text-slate-400">Structured JSON-LD schema formatted for AI search assistants & Google crawling.</p>
                    </div>
                  </motion.div>
                )}

                {heroTab === "erp" && (
                  <motion.div
                    key="erp"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-cyan-400 font-mono">Healthcare ERP</div>
                      <div className="text-sm font-bold text-white">Clinic Appointment System</div>
                      <p className="text-xs text-slate-400">Automated doctor schedules, WhatsApp reminders & patient portal.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-emerald-400 font-mono">Industrial B2B</div>
                      <div className="text-sm font-bold text-white">Vendor Order Portal</div>
                      <p className="text-xs text-slate-400">Cut RFQ quoting cycle from 3 days down to 4 hours with live catalog sync.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-purple-400 font-mono">Real Estate CRM</div>
                      <div className="text-sm font-bold text-white">Property Lead Routing</div>
                      <p className="text-xs text-slate-400">Automated lead qualification and CRM pipeline routing for site visits.</p>
                    </div>
                  </motion.div>
                )}

                {heroTab === "growth" && (
                  <motion.div
                    key="growth"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-amber-400 font-mono">Local Search</div>
                      <div className="text-sm font-bold text-white">Google Map Pack #1</div>
                      <p className="text-xs text-slate-400">Rank at the top of local map searches in your district to dominate inbound leads.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-emerald-400 font-mono">Automation</div>
                      <div className="text-sm font-bold text-white">WhatsApp Lead Bots</div>
                      <p className="text-xs text-slate-400">Instant customer engagement within 3 seconds of form submission.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 space-y-2">
                      <div className="text-xs text-blue-400 font-mono">Ad Conversion</div>
                      <div className="text-sm font-bold text-white">High-Intent Funnels</div>
                      <p className="text-xs text-slate-400">Targeted Meta & Google ad funnels built for maximum return on ad spend.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. HIGH-TRUST METRIC BAR */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-slate-800 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">+340%</div>
            <div className="text-xs text-slate-400">Inbound Patient Bookings</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">₹4.8 Cr</div>
            <div className="text-xs text-slate-400">Real Estate Pipeline Generated</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400">65%</div>
            <div className="text-xs text-slate-400">Faster RFQ Quoting Cycle</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">95+</div>
            <div className="text-xs text-slate-400">Core Web Vitals Guaranteed</div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. DE-CONGESTED SERVICE MATRIX (3 CORE CARDS) */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">ENGINEERING CAPABILITIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Three Core Pillars of Digital Growth</h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">No generic IT fluff. Focused engineering capabilities designed to solve commercial bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Web Development */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Web Engineering</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ultra-fast, mobile-responsive Next.js web applications built for conversion, sub-second page loads, and AI search readiness.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Corporate & Business Websites</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Headless E-Commerce & Stores</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Sub-Second Speed Optimization</li>
              </ul>
            </div>
            <button
              onClick={() => openModalWith("Website Development")}
              className="w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all mt-4"
            >
              Explore Web Solutions →
            </button>
          </div>

          {/* Card 2: Custom Software */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Custom Business Software</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bespoke ERPs, CRMs, clinic systems, and ordering portals tailored to eliminate operational friction and scale workflows.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Hospital & Clinic ERP Systems</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Vendor Ordering & Quoting Portals</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom CRM & Database Sync</li>
              </ul>
            </div>
            <button
              onClick={() => openModalWith("Custom Software Development")}
              className="w-full py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all mt-4"
            >
              Discuss Custom Software →
            </button>
          </div>

          {/* Card 3: Growth & SEO */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Digital Growth & Local SEO</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dominate district search rankings with #1 Google Map Pack positioning, WhatsApp lead bots, and Schema.org AI optimization.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Google Map Pack #1 Ranking</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> WhatsApp Automated Funnels</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Schema.org & AEO Indexing</li>
              </ul>
            </div>
            <button
              onClick={() => openModalWith("Google Business Profile Optimization")}
              className="w-full py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all mt-4"
            >
              Get Growth Audit →
            </button>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. CLIENT MARQUEE & CASE STUDIES */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 bg-slate-950/40 border-t border-slate-800 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">PROVEN COMMERCIAL RESULTS</span>
              <h2 className="text-3xl font-extrabold text-white">Selected Case Studies</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">Real commercial metrics delivered for clinics, property developers, & industrial enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-3">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">{cs.tag}</span>
                <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                <div className="text-emerald-400 text-sm font-semibold">{cs.metrics}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logo Marquee */}
        <ClientMarquee />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. DE-CONGESTED FAQ SECTION (ACCORDION) */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400">Everything you need to know about our engineering process and deliverables.</p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 4).map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all"
            >
              <button
                onClick={() => setFaqActive(faqActive === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${faqActive === idx ? "rotate-180 text-cyan-400" : "text-slate-500"}`} />
              </button>
              {faqActive === idx && (
                <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. FINAL CTA BANNER */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 space-y-6 relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Ready to Give Your Business a Smarter Edge?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">Get a custom technical blueprint and fixed-scope quotation within 24 hours.</p>
          <button
            onClick={() => openModalWith("Website Development")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/30 transition-all inline-flex items-center gap-2"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Project Lead Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

    </div>
  );
}
