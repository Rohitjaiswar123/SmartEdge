"use client";

import React from "react";
import {
  Building2,
  Building,
  Briefcase,
  Store,
  Factory,
  GraduationCap,
  Hospital,
  Stethoscope,
  Truck,
  ShoppingCart,
  Users,
  UserCheck,
  UserPlus,
  UserCog,
  Database,
  Layers,
  Boxes,
  Package,
  Warehouse,
  Receipt,
  CreditCard,
  FileText,
  Filter,
  BadgeCheck,
  Clock,
  Calendar,
  CalendarDays,
  CalendarCheck,
  LayoutDashboard,
  Gauge,
  Settings,
  Workflow,
  GitBranch,
  Network,
  ShieldCheck,
  Lock,
  Cloud,
  Server,
  Cpu,
  Laptop,
  Globe,
  Smartphone,
  Layout,
  RefreshCw,
  Wrench,
  Zap,
  Search,
  MapPin,
  Compass,
  Star,
  Share2,
  Award,
  TrendingUp,
  Globe2,
  Bot,
  MessageSquare,
  Headphones,
  Mail,
  PenTool,
  Megaphone,
  DollarSign,
  Camera,
  Palette,
  FileCode,
  LineChart,
  BarChart3,
  CheckCircle2,
  Sparkles,
  LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  // Custom Software & Business Management
  "custom business software": Briefcase,
  "crm development": Users,
  "erp development": Database,
  "hospital management software": Hospital,
  "clinic management software": Stethoscope,
  "inventory management software": Boxes,
  "billing software": Receipt,
  "lead management systems": Filter,
  "employee management systems": UserCheck,
  "attendance systems": Clock,
  "customer portals": LayoutDashboard,
  "vendor portals": Truck,
  "admin dashboards": Gauge,
  "appointment management systems": CalendarDays,
  "workflow management systems": Workflow,
  "business management software": Building2,
  "saas application development": Cloud,

  // Website Solutions
  "website development": Globe,
  "business website development": Building2,
  "corporate website development": Globe,
  "healthcare websites": Stethoscope,
  "real estate websites": Building,
  "manufacturing websites": Factory,
  "logistics websites": Truck,
  "educational websites": GraduationCap,
  "e-commerce development": ShoppingCart,
  "landing page development": Layout,
  "portfolio websites": Briefcase,
  "lead generation websites": Filter,
  "website redesign": RefreshCw,
  "website maintenance": Wrench,
  "website speed optimization": Zap,
  "seo-friendly website development": Search,
  "mobile-responsive development": Smartphone,

  // Google Business Profile & Local SEO
  "google business profile optimization": MapPin,
  "gbp optimization": MapPin,
  "google maps ranking": MapPin,
  "local seo": Compass,
  "review management": Star,
  "profile setup": UserCheck,
  "local citations": Share2,
  "geo-targeted keywords": Filter,
  "map pack ranking": Award,
  "local lead generation": TrendingUp,
  "multi-location local seo": Globe2,

  // Automation & AI Solutions
  "ai & automation solutions": Bot,
  "whatsapp ai chatbot": MessageSquare,
  "customer support automation": Headphones,
  "lead automation": Filter,
  "workflow automation": Workflow,
  "ai agents": Bot,
  "business automation": Zap,
  "process automation": Cpu,
  "crm automation": Users,
  "email automation": Mail,

  // Web Applications & Software
  "web application development": Laptop,
  "custom web portals": LayoutDashboard,
  "cloud-based web applications": Cloud,
  "progressive web apps": Smartphone,

  // Digital Marketing, SEO & Ads
  "search engine optimization — seo": Search,
  "search engine optimization": Search,
  "seo services": Search,
  "technical seo": FileCode,
  "content marketing": PenTool,
  "search engine marketing": TrendingUp,
  "google ads & meta ads": Megaphone,
  "ppc advertising": Megaphone,
  "google ads management": Megaphone,
  "meta ads / facebook ads": Share2,
  "retargeting campaigns": Filter,
  "lead generation": Filter,
  "social media management": Share2,
  "social media strategy": TrendingUp,
  "instagram growth": Camera,
  "linkedin b2b marketing": Briefcase,
  "review & reputation management": Star,

  // Creative & Design
  "ui/ux & graphic design": Palette,
  "ui/ux design": Palette,
  "mobile app ui": Smartphone,
  "brand identity design": Sparkles,
  "logo design": PenTool,
  "graphic design": Palette,
  "graphic & creative design": Palette,
  "corporate branding": Award,
  "reel creation & short-form video": Camera,
  "content strategy & copywriting": PenTool,

  // E-Commerce & Mobile
  "e-commerce solutions": ShoppingCart,
  "shopify development": ShoppingCart,
  "woocommerce development": ShoppingCart,
  "custom e-commerce": ShoppingCart,
  "payment gateway integration": CreditCard,
  "product catalog management": Boxes,
  "mobile app development": Smartphone,
  "ios app development": Smartphone,
  "android app development": Smartphone,
  "cross-platform app development": Layers,
  "react native apps": Smartphone,
  "flutter apps": Zap,

  // Cloud, Security, Analytics
  "cloud & devops services": Cloud,
  "aws cloud hosting": Cloud,
  "server migration": Server,
  "devops & ci/cd pipelines": GitBranch,
  "cyber security & code audit": ShieldCheck,
  "website security audit": ShieldCheck,
  "penetration testing": Lock,
  "maintenance & technical support": Wrench,
  "data analytics & business intelligence": BarChart3,
  "google analytics 4 setup": BarChart3,
  "custom analytics dashboards": LineChart,
  "analytics & tracking setup": BarChart3,
};

export function getServiceIconComponent(name: string): React.ComponentType<LucideProps> {
  const n = (name || "").trim().toLowerCase();
  
  if (ICON_MAP[n]) {
    return ICON_MAP[n];
  }

  // Keyword-based fallback matching
  if (n.includes("hospital")) return Hospital;
  if (n.includes("clinic") || n.includes("doctor") || n.includes("health")) return Stethoscope;
  if (n.includes("crm")) return Users;
  if (n.includes("erp")) return Database;
  if (n.includes("inventor") || n.includes("stock") || n.includes("warehouse")) return Boxes;
  if (n.includes("bill") || n.includes("invoice") || n.includes("receipt") || n.includes("payment")) return Receipt;
  if (n.includes("lead") || n.includes("funnel") || n.includes("filter")) return Filter;
  if (n.includes("employee") || n.includes("staff") || n.includes("hr")) return UserCheck;
  if (n.includes("attend") || n.includes("time") || n.includes("clock")) return Clock;
  if (n.includes("portal") || n.includes("customer")) return LayoutDashboard;
  if (n.includes("vendor") || n.includes("supplier") || n.includes("logistics") || n.includes("towing")) return Truck;
  if (n.includes("dash") || n.includes("admin")) return Gauge;
  if (n.includes("appoint") || n.includes("book") || n.includes("schedul")) return CalendarDays;
  if (n.includes("work") || n.includes("flow") || n.includes("pipeline")) return Workflow;
  if (n.includes("business") || n.includes("corporate")) return Building2;
  if (n.includes("saas") || n.includes("cloud")) return Cloud;
  if (n.includes("school") || n.includes("edu") || n.includes("academ")) return GraduationCap;
  if (n.includes("shop") || n.includes("commerce") || n.includes("cart") || n.includes("store")) return ShoppingCart;
  if (n.includes("landing")) return Layout;
  if (n.includes("portfoli")) return Briefcase;
  if (n.includes("speed") || n.includes("fast") || n.includes("optim")) return Zap;
  if (n.includes("seo") || n.includes("search")) return Search;
  if (n.includes("mobile") || n.includes("app") || n.includes("phone")) return Smartphone;
  if (n.includes("map") || n.includes("local") || n.includes("location") || n.includes("gbp")) return MapPin;
  if (n.includes("review") || n.includes("rating") || n.includes("star")) return Star;
  if (n.includes("chat") || n.includes("whatsapp") || n.includes("message")) return MessageSquare;
  if (n.includes("bot") || n.includes("ai")) return Bot;
  if (n.includes("ad") || n.includes("campaign") || n.includes("ppc")) return Megaphone;
  if (n.includes("media") || n.includes("social")) return Share2;
  if (n.includes("design") || n.includes("ui") || n.includes("ux")) return Palette;
  if (n.includes("secur") || n.includes("audit")) return ShieldCheck;
  if (n.includes("analytic") || n.includes("report") || n.includes("track")) return BarChart3;

  return CheckCircle2;
}

interface ServiceItemIconProps extends LucideProps {
  name: string;
}

export function ServiceItemIcon({ name, ...props }: ServiceItemIconProps) {
  const IconComponent = getServiceIconComponent(name);
  return <IconComponent {...props} />;
}
