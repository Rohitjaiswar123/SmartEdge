"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Bot,
  TrendingUp,
  Palette,
  PhoneCall,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ProjectModal } from "./project-modal";
import { ServiceItemIcon } from "./service-icon";

const MEGA_MENU_ITEMS = [
  {
    category: "Website & Software",
    icon: Globe,
    description: "High-performance web apps & custom platforms",
    items: [
      { name: "Website Development", href: "/services#website-development", badge: "Priority #1" },
      { name: "Custom Software Development", href: "/services#custom-software-development", badge: "Priority #2" },
      { name: "Web Applications", href: "/services#web-application-development" },
      { name: "E-commerce Development", href: "/services#e-commerce-development" },
      { name: "Mobile App Development", href: "/services#mobile-app-development" },
      { name: "Website Maintenance & Speed", href: "/services#website-development" },
    ],
  },
  {
    category: "Automation & AI",
    icon: Bot,
    description: "Intelligent workflows, WhatsApp & CRM pipelines",
    items: [
      { name: "Business Automation", href: "/services#business-automation", badge: "High ROI" },
      { name: "CRM Setup & Integration", href: "/services#crm-setup-integration" },
      { name: "WhatsApp Automation", href: "/services#whatsapp-marketing-automation" },
      { name: "AI Chatbots & Agents", href: "/services#ai-automation-solutions" },
    ],
  },
  {
    category: "Digital Growth",
    icon: TrendingUp,
    description: "Maps ranking, SEO, Ads & conversion engines",
    items: [
      { name: "Google Business Profile Optimization", href: "/services#google-business-profile-optimization", badge: "Priority #3" },
      { name: "Search Engine Optimization (SEO)", href: "/services#search-engine-optimization" },
      { name: "Google Ads & Meta Ads", href: "/services#google-ads-meta-ads" },
      { name: "Lead Generation Funnels", href: "/services#lead-generation" },
      { name: "Social Media Management", href: "/services#social-media-management" },
      { name: "Review & Reputation Management", href: "/services#review-reputation-management" },
    ],
  },
  {
    category: "Creative",
    icon: Palette,
    description: "Viral reels, brand assets & marketing collaterals",
    items: [
      { name: "Reel Creation & Short-form Video", href: "/services#reel-creation" },
      { name: "Graphic & Creative Design", href: "/services#graphic-creative-design" },
      { name: "Content Strategy & Copywriting", href: "/services#social-media-management" },
      { name: "Analytics & Tracking Setup", href: "/services#analytics-conversion-tracking" },
    ],
  },
];

const NAV_LINKS = [
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Academy", href: "/academy" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [projectModalOpen, setProjectModalOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
            : "bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-white p-1 sm:p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <img
                src="/logos/smartedge-logo.jpg"
                alt="SmartEdge Business Solutions Logo"
                className="h-8 sm:h-9 w-auto object-contain rounded-md"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  servicesOpen || pathname.startsWith("/services")
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {/* Mega Menu Overlay */}
              {servicesOpen && (
                <div className="absolute top-full -left-48 xl:-left-36 w-[880px] pt-3 animate-in fade-in-0 zoom-in-95 duration-150 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 grid grid-cols-4 gap-6">
                    {MEGA_MENU_ITEMS.map((section) => {
                      const Icon = section.icon;
                      return (
                        <div key={section.category} className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                {section.category}
                              </h4>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex flex-col p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <ServiceItemIcon name={item.name} className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                      <span className="text-xs font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                        {item.name}
                                      </span>
                                    </div>
                                    {item.badge && (
                                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex-shrink-0">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                    <div className="col-span-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">
                        Explore our complete catalogue of 18 technology & digital services.
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        View All Services Directory <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle, WhatsApp & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/919323130044?text=Hi%20SmartEdge%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => setProjectModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm shadow-blue-500/20 hover:shadow-md transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Your Project</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
            >
              All Services (18 Solutions) →
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/919323130044?text=Hi%20SmartEdge%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800"
              >
                WhatsApp Us Directly
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setProjectModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700"
              >
                Start Your Project
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Project Planner Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </>
  );
}
