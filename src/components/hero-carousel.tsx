"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  BarChart3,
  Zap,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Stethoscope,
  Truck,
  CheckCircle2
} from "lucide-react";

const SLIDES = [
  {
    id: "growth-workspace",
    tag: "YOUR BUSINESS. CONNECTED.",
    title: "YOUR GROWTH WORKSPACE",
    content: (
      <div className="relative space-y-4">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-6 -right-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-cyan-200/80 dark:border-cyan-800/80 shadow-lg text-xs font-bold text-slate-900 dark:text-white"
        >
          <div className="p-1 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Less busywork.</p>
            <p className="font-extrabold text-cyan-700 dark:text-cyan-400">More possibilities.</p>
          </div>
        </motion.div>

        {/* Main Workspace Card */}
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Your business, upgraded.</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">One connected digital ecosystem.</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              Connected
            </span>
          </div>
        </div>

        {/* Grid of Sub-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Card 1: Websites */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">Beautiful websites.</span>
            </div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">Better first impressions.</p>
            <div className="pt-1 flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600">
              <span>Explore website solutions</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Card 2: Growth Stats */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                ROOM TO GROW
              </span>
              <BarChart3 className="w-4 h-4 text-cyan-500" />
            </div>
            {/* Visual Bar Chart Graphics */}
            <div className="flex items-end gap-1.5 h-10 pt-1">
              <div className="w-1/5 bg-cyan-200 dark:bg-cyan-950 rounded-t h-[30%]" />
              <div className="w-1/5 bg-cyan-300 dark:bg-cyan-900 rounded-t h-[50%]" />
              <div className="w-1/5 bg-cyan-400 dark:bg-cyan-700 rounded-t h-[65%]" />
              <div className="w-1/5 bg-cyan-500 dark:bg-cyan-500 rounded-t h-[85%]" />
              <div className="w-1/5 bg-blue-600 dark:bg-blue-400 rounded-t h-[100%]" />
            </div>
            <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Built for your next chapter ↗</p>
          </div>
        </div>

        {/* Bottom Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-300/50 dark:border-cyan-800/60 text-xs font-semibold text-cyan-900 dark:text-cyan-200"
        >
          <div className="p-1 rounded-lg bg-cyan-500 text-white flex-shrink-0">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold">Get discovered.</p>
              <p className="text-[10px] text-cyan-700 dark:text-cyan-300">Right where it matters.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "client-portfolio",
    tag: "REAL BUSINESSES. PROVEN RESULTS.",
    title: "SELECTED PORTFOLIO HIGHLIGHTS",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <Stethoscope className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">Al Madinah Dental</span>
            </div>
            <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">+340% Bookings</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">WhatsApp Automation</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <Building2 className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">Dr. Mandhani ENT</span>
            </div>
            <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400">#1 Google Map Pack</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Local SEO Dominance</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <Truck className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">National Towing</span>
            </div>
            <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400">Instant Dispatch</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">24/7 Web Pipeline</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b233a] text-white border border-slate-800 shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-serif font-bold text-white tracking-widest truncate">CALYX</span>
            </div>
            <p className="text-[11px] font-bold text-cyan-600 dark:text-cyan-300">B2B E-Commerce</p>
            <p className="text-[10px] text-slate-300">Custom Web Suite</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 flex items-center justify-between text-xs text-blue-800 dark:text-blue-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span>Built & delivered for high-growth ambitious clients.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "custom-software",
    tag: "SCALABLE ARCHITECTURE",
    title: "CUSTOM B2B SOFTWARE & ERPS",
    content: (
      <div className="space-y-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">Order & Inventory Pipeline</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              Live API
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 rounded bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Auto-RFQ Quoting</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 4 hr turnaround</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Vendor Portal Sync</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">99.9% Uptime</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-between">
          <div>
            <p className="text-xs font-bold">Need custom internal software?</p>
            <p className="text-[11px] text-indigo-100">Replace manual sheets with cloud apps.</p>
          </div>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    ),
  },
  {
    id: "whatsapp-ai",
    tag: "ZERO-TOUCH AUTOMATION",
    title: "WHATSAPP & AI ASSISTANTS",
    content: (
      <div className="space-y-3">
        <div className="p-4 rounded-2xl bg-emerald-950/90 text-white border border-emerald-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-400" />
              <span className="text-xs font-bold text-white">Official WhatsApp API</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40">
              24/7 Active
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-700/50 space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-300">
              <span>Instant Lead Response</span>
              <span className="font-bold text-white">&lt; 30 seconds</span>
            </div>
            <p className="text-[11px] text-emerald-100">
              "Hi! Thanks for contacting us. Your free consultation link has been generated..."
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Multiply 5-star Google reviews via automated QR requests.</span>
        </div>
      </div>
    ),
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = SLIDES[currentIndex];

  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Outer Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-25 dark:opacity-40 animate-pulse pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-3xl bg-slate-50/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
        {/* Slide Header Tag & Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              {activeSlide.tag}
            </span>
          </div>

          {/* Slide Switchers */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
              className="hover:text-blue-600 transition-colors p-0.5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span>0{currentIndex + 1} / 0{SLIDES.length}</span>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % SLIDES.length)}
              className="hover:text-blue-600 transition-colors p-0.5"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="min-h-[290px] flex flex-col justify-between"
          >
            {activeSlide.content}
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators / Dots Bar */}
        <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-blue-600 dark:bg-blue-400"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
            {isPaused ? "Paused" : "Auto-rotating"}
          </span>
        </div>
      </div>
    </div>
  );
}
