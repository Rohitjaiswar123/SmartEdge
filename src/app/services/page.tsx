"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  SlidersHorizontal,
  Laptop,
  Layers,
  MapPin,
  Bot,
  TrendingUp,
  Palette,
} from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { ProjectModal } from "@/components/project-modal";
import { SERVICES, ServiceItem } from "@/data/services-data";

const CATEGORIES = [
  { id: "all", label: "All 18 Services" },
  { id: "website-software", label: "Website & Software" },
  { id: "automation-ai", label: "Automation & AI" },
  { id: "digital-growth", label: "Digital Growth" },
  { id: "creative", label: "Creative & Design" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState("Website Development");

  const filteredServices = React.useMemo(() => {
    return SERVICES.filter((svc) => {
      const matchesCategory =
        activeCategory === "all" || svc.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        svc.title.toLowerCase().includes(query) ||
        svc.shortDescription.toLowerCase().includes(query) ||
        svc.items.some((item) => item.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Complete Service Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          All 18 Solutions Built for Business Scale
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          SmartEdge combines website development, custom software architectures, local Google Maps ranking, and intelligent AI automation into one unified growth engine.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sub-services (e.g. CRM, ERP)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Services List Grid */}
      <div className="space-y-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No services matched &ldquo;{searchQuery}&rdquo;. Try another term or select &ldquo;All 18 Services&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => (
              <GlowingCard
                key={svc.id}
                id={svc.slug}
                className="flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Service #{svc.number}
                    </span>
                    {svc.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  {/* Included Items */}
                  <div className="pt-4 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Includes:
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
                      {svc.items.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="truncate">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                  <button
                    type="button"
                    onClick={() => openModal(svc.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </GlowingCard>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
