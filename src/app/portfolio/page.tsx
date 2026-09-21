"use client";

import * as React from "react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { AmbientLighting } from "@/components/ui/ambient-lighting";

const PROJECTS = [
  {
    title: "Apex Multi-Specialty Clinic",
    industry: "Healthcare",
    services: ["Website Development", "Clinic CRM", "Google Maps Top #1", "WhatsApp Reminders"],
    metrics: "+340% Inbound Patient Bookings",
    summary:
      "Engineered an ultra-fast patient booking platform connected to WhatsApp confirmation triggers, coupled with localized Google Maps optimization that placed them #1 across 5 specialized medical keywords.",
    impact: [
      "Page load speed cut from 4.2s to 0.7s on mobile",
      "No-show appointment rates decreased by 48%",
      "Organic monthly phone inquiries surged from 45 to 220+",
    ],
  },
  {
    title: "UrbanCraft Luxury Properties",
    industry: "Real Estate",
    services: ["Landing Page Development", "CRM Lead Routing", "Meta Ads", "Analytics"],
    metrics: "₹4.8 Cr Verified Sales Pipeline",
    summary:
      "Designed an interactive 3D floor plan showcase website with instant WhatsApp agent connect and server-side conversion tracking for targeted Meta lead generation campaigns.",
    impact: [
      "Cost per qualified buyer lead reduced by 42%",
      "Sales rep response time reduced to under 60 seconds",
      "Over 180 site visits scheduled within 45 days",
    ],
  },
  {
    title: "Vanguard Industrial Tooling",
    industry: "Manufacturing & B2B",
    services: ["Custom ERP", "Vendor Portal", "Corporate Web", "Technical SEO"],
    metrics: "65% Reduction in Quoting Cycle Time",
    summary:
      "Replaced clunky spreadsheets with a cloud-native custom B2B inventory and RFQ portal, allowing industrial buyers to calculate custom specifications and request quotes in real time.",
    impact: [
      "Average RFQ turnaround dropped from 72 hours to 4 hours",
      "Automated stock sync across 3 distributed regional warehouses",
      "Top 3 organic Google rankings for 18 core industrial tool keywords",
    ],
  },
  {
    title: "Aura Dental Care Chain",
    industry: "Healthcare",
    services: ["GBP Optimization", "Review Automation", "Local SEO"],
    metrics: "4.9★ with 680+ Google Reviews",
    summary:
      "Implemented automated post-treatment QR code feedback filters that boosted verified Google reviews while privately routing service complaints to senior management.",
    impact: [
      "Over 350 genuine 5-star Google reviews added in 6 months",
      "120% growth in Map Pack direction requests",
      "Ranked in the 3-Pack across 4 clinic branches",
    ],
  },
];

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <AmbientLighting variant="section" intensity="subtle" />
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5" /> Proven Case Studies
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Engineered for Measurable Commercial Results
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Explore how SmartEdge deploys custom web applications, automation pipelines, and search engine dominance to drive tangible revenue for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <GlowingCard key={idx} className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {project.industry}
                </span>
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                  {project.metrics}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {project.summary}
              </p>

              <div className="pt-4 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Key Deliverables & Outcomes:
                </p>
                <div className="space-y-1.5">
                  {project.impact.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-1.5">
                {project.services.map((svc, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <span>Request Similar Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Case Study Consultation"
      />
    </div>
  );
}
