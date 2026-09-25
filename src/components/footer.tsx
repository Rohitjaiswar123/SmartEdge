import * as React from "react";
import Link from "next/link";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  Award,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <div className="bg-white p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                <img
                  src="/logos/smartedge-logo.jpg"
                  alt="SmartEdge Business Solutions Logo"
                  className="h-9 w-auto object-contain rounded-md"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Build. Innovate. Grow.</span>
              <br />
              SmartEdge is a premier Technology, Software, Automation & Digital Growth Company. We engineer high-converting websites, bespoke enterprise software, intelligent automation pipelines, and dominant local search presence.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-slate-700/60 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001 Standards
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-slate-800/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-slate-700/60 text-xs font-medium">
                <Cpu className="w-3.5 h-3.5" /> Next.js & Cloud Native
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-slate-800/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-slate-700/60 text-xs font-medium">
                <Award className="w-3.5 h-3.5" /> 4.9★ Google Rated
              </span>
            </div>
          </div>

          {/* Col 2: Website & Software */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Website & Software
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#website-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors font-medium text-slate-800 dark:text-slate-200">
                  Website Development (Primary)
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors font-medium text-slate-800 dark:text-slate-200">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#web-application-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  Web Applications & SaaS
                </Link>
              </li>
              <li>
                <Link href="/services#e-commerce-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-app-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#website-development" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  Website Redesign & Speed
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Automation & Growth */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Automation & Growth
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#google-business-profile-optimization" className="hover:text-blue-600 dark:text-blue-400 transition-colors font-medium text-slate-800 dark:text-slate-200">
                  Google Business Profile (GBP)
                </Link>
              </li>
              <li>
                <Link href="/services#business-automation" className="hover:text-blue-600 dark:text-blue-400 transition-colors font-medium text-slate-800 dark:text-slate-200">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation-solutions" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  AI Chatbots & Workflows
                </Link>
              </li>
              <li>
                <Link href="/services#search-engine-optimization" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link href="/services#google-ads-meta-ads" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  Google & Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services#whatsapp-marketing-automation" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  WhatsApp Marketing & API
                </Link>
              </li>
              <li>
                <Link href="/services#crm-setup-integration" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  CRM Setup & Pipelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Consultation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect & Consult
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">
                  SmartEdge Business Solutions HQ, Tech Park Hub, Mumbai & Pune, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@smartedgebusiness.com" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  contact@smartedgebusiness.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a href="tel:+919323130044" className="hover:text-blue-600 dark:text-blue-400 transition-colors">
                  +91 93231 30044
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/919323130044?text=Hello%20SmartEdge%20Team%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-900 dark:text-white font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} SmartEdge Business Solutions. All rights reserved. Technology, Software, Automation & Digital Growth Partner.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-800 dark:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 dark:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-800 dark:text-slate-200 transition-colors">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
