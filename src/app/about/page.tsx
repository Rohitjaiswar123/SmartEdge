"use client";

import * as React from "react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Code2, ShieldCheck, Zap, HeartHandshake, Target, ArrowRight, Sparkles } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { AmbientLighting } from "@/components/ui/ambient-lighting";

const VALUES = [
  {
    title: "Engineering Excellence Over Fluff",
    icon: Code2,
    desc: "We do not sell surface-level buzzwords. Every line of code, schema tag, and automated pipeline is built to withstand real-world operational pressure.",
  },
  {
    title: "Commercial Alignment",
    icon: Target,
    desc: "We evaluate our work by the commercial metric that matters: revenue generated, hours saved, and customer lifetime value increased.",
  },
  {
    title: "Zero Vendor Lock-in",
    icon: ShieldCheck,
    desc: "We build on open, modern architectures. You maintain 100% data sovereignty, code ownership, and administrative freedom.",
  },
  {
    title: "Relentless Speed & Support",
    icon: Zap,
    desc: "We treat your software infrastructure as a mission-critical asset with dedicated engineering support and rapid turnaround SLAs.",
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <AmbientLighting variant="section" intensity="subtle" />
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> About SmartEdge Business Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Technology Solutions Built for Business Growth
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
          Build. Innovate. Grow.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          SmartEdge is positioned as a comprehensive Technology, Software, Automation & Digital Growth Company. We help businesses build powerful websites, custom software, automated workflows, and digital growth strategies.
        </p>
      </div>

      {/* Brand Identity Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlowingCard className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Our Purpose & Vision
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Bridging the Gap Between Engineering & Business Revenue
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Most businesses find themselves caught between two extremes: traditional marketing agencies that lack technical depth to build real software, and slow software consultancies that know nothing about local SEO, conversion rates, or customer acquisition funnels.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            SmartEdge was founded to combine both under one roof: world-class web engineering and custom software architecture paired with dominant Google Business Profile optimization, business automation, and high-ROI digital growth strategies.
          </p>
        </GlowingCard>

        <GlowingCard className="space-y-4 bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-blue-950/20 border-blue-200/50 dark:border-blue-900/40">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Our Core Priority Pillars
          </span>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Website Development (Primary Service)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Sub-second load times, mobile-responsive layouts, and high-converting customer funnels.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                2
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Custom Software Development
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  CRMs, ERPs, clinic management, vendor portals, and enterprise dashboards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                3
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Google Business Profile Optimization
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Top 3 Google Maps ranking, local SEO, automated review acquisition, and high-intent local calls.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                4
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Business Automation & AI
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  WhatsApp API bots, instant lead notification triggers, and automated workflows.
                </p>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>

      {/* Values Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Our Core Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <GlowingCard key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </GlowingCard>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold">
          Partner with Your Technology & Digital Growth Ally
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Let&apos;s build an unfair digital advantage for your business. Speak with a technical consultant today.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
          >
            Start Your Project Blueprint →
          </button>
        </div>
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Company Introduction Consultation"
      />
    </div>
  );
}
