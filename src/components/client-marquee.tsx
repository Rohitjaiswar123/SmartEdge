"use client";

import React from "react";

const CLIENTS = [
  {
    name: "Al Madinah Dental & Cosmetology Care",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 w-full h-full">
        <img
          src="/logos/al-madinah.png"
          alt="Al Madinah Dental & Cosmetology Care"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain"
        />
      </div>
    ),
  },
  {
    name: "Dr. Mandhani Thane ENT Hospital",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 w-full h-full">
        <img
          src="/logos/thane-ent.png"
          alt="Thane ENT Dr. Mandhani"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain"
        />
      </div>
    ),
  },
  {
    name: "National Towing Service",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 w-full h-full">
        <img
          src="/logos/national-towing.jpg"
          alt="National Towing Service"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain rounded-md"
        />
      </div>
    ),
  },
  {
    name: "K|A Agencies",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 w-full h-full">
        <img
          src="/logos/ka-agencies.png"
          alt="K|A Agencies"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain"
        />
      </div>
    ),
  },
  {
    name: "Calyx",
    isDark: true,
    logo: (
      <div className="flex items-center justify-center p-2 bg-black rounded-xl shadow-xs border border-slate-800 w-full h-full">
        <img
          src="/logos/calyx.png"
          alt="Calyx"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain"
        />
      </div>
    ),
  },
  {
    name: "Aditya Vardhan Hospital",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 w-full h-full">
        <img
          src="/logos/adityavardhan.jpg"
          alt="Aditya Vardhan Hospital"
          className="max-h-20 max-w-[170px] w-auto h-auto object-contain rounded-md"
        />
      </div>
    ),
  },
];

export function ClientMarquee() {
  const doubleClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-white dark:bg-[#070b12] border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      {/* Header text from Image 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-1.5">
        <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
          REAL BUSINESSES. HANDS-ON EXPERIENCE.
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          Selected clients from Sahil Shaikh's portfolio
        </p>
      </div>

      {/* Marquee Container scrolling from left to right */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused] w-max py-2">
          {doubleClients.map((client, idx) => (
            <div
              key={idx}
              className={`w-[180px] sm:w-[220px] h-[160px] sm:h-[170px] rounded-2xl p-4 flex-shrink-0 flex flex-col items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                client.isDark
                  ? "bg-[#0b233a] border border-slate-800 text-white"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              <div className="flex-1 flex items-center justify-center w-full">
                {client.logo}
              </div>
              <p
                className={`text-[11px] font-semibold text-center leading-snug truncate w-full ${
                  client.isDark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Industry Bar from Image 1 */}
      <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/60 max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs">
        <span className="font-extrabold text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400">
          BUILT FOR AMBITIOUS BUSINESSES ACROSS
        </span>
        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 font-semibold">
          <span className="hover:text-blue-600 transition-colors">Healthcare</span>
          <span>•</span>
          <span className="hover:text-blue-600 transition-colors">Real Estate</span>
          <span>•</span>
          <span className="hover:text-blue-600 transition-colors">Manufacturing</span>
          <span>•</span>
          <span className="hover:text-blue-600 transition-colors">Logistics</span>
          <span>•</span>
          <span className="hover:text-blue-600 transition-colors">Education</span>
          <span>•</span>
          <span className="hover:text-blue-600 transition-colors">E-commerce</span>
        </div>
      </div>
    </section>
  );
}
