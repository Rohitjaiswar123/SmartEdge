"use client";

import React from "react";

const CLIENTS = [
  {
    name: "Al Madinah Dental & Cosmetology Care",
    isDark: false,
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1">
          <svg className="w-10 h-10 text-blue-600" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 15C30 15 20 30 20 45C20 65 35 85 45 90C47 91 50 88 50 85C50 75 42 65 42 50C42 35 52 25 65 25C78 25 85 35 85 45C85 55 78 68 70 75C75 70 80 58 80 48C80 32 68 15 50 15Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M30 35C25 45 25 55 35 65C40 70 48 78 50 82C48 72 45 60 40 50C36 42 32 38 30 35Z"
              fill="#2563EB"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-left">
            <span className="block text-sm font-extrabold text-blue-900 dark:text-blue-200 tracking-tight leading-none">
              Al Madinah
            </span>
            <span className="block text-[8px] font-bold text-amber-600 tracking-wider uppercase">
              Dental & Cosmetology Care
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Dr. Mandhani ENT Hospital",
    isDark: false,
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="relative w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
          <div className="w-2.5 h-7 bg-white absolute" />
          <div className="w-7 h-2.5 bg-white absolute" />
          <div className="relative z-10 w-4 h-4 rounded-full border-2 border-red-600 bg-white flex items-center justify-center text-[7px] font-bold text-red-600">
            ENT
          </div>
        </div>
        <div className="text-center">
          <p className="text-[9px] font-extrabold tracking-widest text-slate-800 dark:text-slate-200 uppercase leading-tight">
            THANE ENT
          </p>
          <p className="text-[7px] font-bold text-red-600 tracking-tight">DR. MANDHANI</p>
        </div>
      </div>
    ),
  },
  {
    name: "National Towing Service",
    isDark: false,
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-10 border-2 border-slate-700 dark:border-slate-300 rounded-b-xl flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 p-1">
          <span className="text-[7px] font-black text-red-600 tracking-widest uppercase">NATIONAL</span>
          <span className="text-[6px] font-bold text-blue-800 dark:text-blue-300 uppercase">TOWING SERVICE</span>
        </div>
      </div>
    ),
  },
  {
    name: "OK Agencies",
    isDark: false,
    logo: (
      <div className="flex items-center justify-center">
        <div className="w-11 h-11 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center">
          <span className="text-xs font-black text-blue-800 dark:text-blue-300 tracking-tighter">
            K ↑ A
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Calyx",
    isDark: true,
    logo: (
      <div className="flex items-center justify-center w-full h-full py-1">
        <div className="bg-black px-4 py-2 border border-slate-700">
          <span className="text-base font-serif font-bold text-white tracking-[0.25em]">
            CALYX
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Aditya Vardhan Hospital",
    isDark: false,
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="w-11 h-11 rounded-full border-2 border-teal-600 flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/60 p-1">
          <div className="text-center">
            <span className="block text-[6px] font-extrabold text-teal-800 dark:text-teal-300 leading-tight">
              ADITYAVARDHAN
            </span>
            <span className="block text-[8px] text-red-600 font-bold">+</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function ClientMarquee() {
  // Duplicate array to enable smooth infinite loop
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
