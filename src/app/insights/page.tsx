"use client";

import * as React from "react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import { AmbientLighting } from "@/components/ui/ambient-lighting";

const POSTS = [
  {
    title: "Why Modern Next.js Websites Outconvert WordPress Templates by 300%",
    category: "Web Engineering",
    readTime: "6 min read",
    date: "September 2026",
    summary:
      "A deep dive into sub-second Core Web Vitals, server components, automated image optimization, and why mobile visitors abandon legacy bloated themes.",
  },
  {
    title: "The 15-Step Blueprint to Rank in Google Maps Top 3 Pack",
    category: "Local SEO & GBP",
    readTime: "8 min read",
    date: "September 2026",
    summary:
      "How to optimize Google Business Profile categories, secondary keywords, geo-tagged metadata, and automated WhatsApp review triggers for instant call surges.",
  },
  {
    title: "Custom CRM vs. Off-the-Shelf SaaS: The Hidden Cost of Monthly Per-User Fees",
    category: "Software Architecture",
    readTime: "7 min read",
    date: "August 2026",
    summary:
      "When does building a proprietary software portal or custom CRM make economic sense for growing clinics, real estate firms, and manufacturers?",
  },
  {
    title: "How to Automate 80% of Sales Follow-Ups with the WhatsApp Business API",
    category: "Business Automation",
    readTime: "5 min read",
    date: "August 2026",
    summary:
      "Stop letting hot leads turn cold. How to configure instantaneous automated replies, payment reminders, and CRM pipelines that convert in under 60 seconds.",
  },
];

export default function InsightsPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <AmbientLighting variant="section" intensity="subtle" />
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" /> Engineering & Growth Insights
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Practical Playbooks for Modern Business Growth
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Articles, research breakdowns, and actionable guides from the SmartEdge engineering and growth team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POSTS.map((post, idx) => (
          <GlowingCard key={idx} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider text-[10px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">{post.date}</span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 dark:text-blue-300"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlowingCard>
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService="Insights Newsletter & Advisory"
      />
    </div>
  );
}
