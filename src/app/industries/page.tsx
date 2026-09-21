"use client";

import * as React from "react";
import { INDUSTRIES } from "@/data/services-data";
import { GlowingCard } from "@/components/ui/glowing-card";
import { CheckCircle2, ArrowRight, Compass, Sparkles } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { AmbientLighting } from "@/components/ui/ambient-lighting";

export default function IndustriesPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedIndustry, setSelectedIndustry] = React.useState("Healthcare");

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <AmbientLighting variant="section" intensity="subtle" />
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" /> Industry Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Verticalized Software & Digital Systems
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          We understand the specific regulatory, operational, and customer journey nuances of your sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((ind, idx) => (
          <GlowingCard key={idx} id={ind.slug} className="flex flex-col justify-between scroll-mt-28">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-extrabold flex items-center justify-center text-sm">
                {ind.slug.slice(0, 3).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {ind.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {ind.desc}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Engineered Deployments:
                </p>
                {ind.solutions.map((sol, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
              <button
                type="button"
                onClick={() => {
                  setSelectedIndustry(ind.title);
                  setModalOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition-opacity"
              >
                <span>Consult for {ind.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={`Industry: ${selectedIndustry}`}
      />
    </div>
  );
}
