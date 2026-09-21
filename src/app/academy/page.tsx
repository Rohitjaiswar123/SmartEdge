"use client";

import * as React from "react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GraduationCap, ArrowRight, BookOpen, Video, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { AmbientLighting } from "@/components/ui/ambient-lighting";

const TRACKS = [
  {
    title: "Modern Web Engineering & Core Web Vitals",
    level: "Intermediate / Enterprise",
    modules: "6 Modules • 18 Lessons",
    desc: "Master Next.js App Router, headless architectures, dynamic caching, and sub-second performance optimization.",
    skills: ["Next.js", "Tailwind CSS", "AEO/GEO Markup", "CWV Auditing"],
  },
  {
    title: "Google Business Profile & Local Map Pack Domination",
    level: "Business Owners & Marketers",
    modules: "4 Modules • 12 Lessons",
    desc: "Algorithmic strategies to rank #1 on Google Maps in your metro area, automate 5-star reviews, and generate consistent high-intent inbound calls.",
    skills: ["Google Maps Ranking", "NAP Consistency", "Review Automation", "Geo-Tagging"],
  },
  {
    title: "Business Process Automation with WhatsApp API",
    level: "Operations & Sales Leads",
    modules: "5 Modules • 15 Lessons",
    desc: "How to build zero-touch lead distribution pipelines, instant WhatsApp notifications, and automated invoice reminders without complex code.",
    skills: ["WhatsApp Cloud API", "CRM Webhooks", "Zapier/Make", "Lead Scoring"],
  },
  {
    title: "Custom CRM & Software Architecture Blueprint",
    level: "Founders & CTOs",
    modules: "7 Modules • 21 Lessons",
    desc: "Designing tailored business management software, clinic portals, and role-based systems that eliminate expensive SaaS seat fees.",
    skills: ["Database Architecture", "Role-Based Access", "API Security", "Multi-Tenancy"],
  },
];

export default function AcademyPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <AmbientLighting variant="section" intensity="subtle" />
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" /> SmartEdge Academy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Knowledge, Playbooks & Digital Mastery
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Executive masterclasses and technical workshops designed to help your team leverage modern software, automation pipelines, and search engine mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TRACKS.map((track, idx) => (
          <GlowingCard key={idx} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {track.level}
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {track.modules}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {track.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {track.desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {track.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300"
                  >
                    {skill}
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
                <span>Request Workshop for Your Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Academy & Team Workshop"
      />
    </div>
  );
}
