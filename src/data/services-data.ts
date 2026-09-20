export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  slug: string;
  category: "website-software" | "automation-ai" | "digital-growth" | "creative";
  shortDescription: string;
  fullDescription: string;
  ctaText: string;
  ctaAction: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  badge?: string;
  items: string[];
  features: {
    title: string;
    description: string;
  }[];
  metrics?: {
    value: string;
    label: string;
  };
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    number: 1,
    title: "Website Development",
    slug: "website-development",
    category: "website-software",
    isPrimary: true,
    badge: "Primary Service",
    shortDescription:
      "Modern, ultra-fast, mobile-responsive, and conversion-engineered websites built to turn visitors into paying customers.",
    fullDescription:
      "We engineer enterprise-grade web solutions combining headless modern architectures, blazing speed, bespoke interactive design, and rock-solid SEO infrastructure tailored for your industry.",
    ctaText: "Build My Website",
    ctaAction: "project-modal",
    items: [
      "Business Website Development",
      "Corporate Website Development",
      "Healthcare Websites",
      "Real Estate Websites",
      "Manufacturing Websites",
      "Logistics Websites",
      "Educational Websites",
      "E-commerce Development",
      "Landing Page Development",
      "Portfolio Websites",
      "Lead Generation Websites",
      "Website Redesign",
      "Website Maintenance",
      "Website Speed Optimization",
      "SEO-Friendly Website Development",
      "Mobile-Responsive Development",
    ],
    features: [
      {
        title: "Sub-Second Load Times",
        description: "Optimized Next.js architectures with 95+ Google Core Web Vitals scores.",
      },
      {
        title: "Industry-Specific UX",
        description: "Tailored customer journeys designed specifically for healthcare, real estate, manufacturing, and B2B.",
      },
      {
        title: "Conversion-First Architecture",
        description: "Engineered CTAs, WhatsApp triggers, and lead capture funnels integrated at every touchpoint.",
      },
      {
        title: "Built-In SEO & AEO",
        description: "Schema.org markup, semantic HTML, and lightning crawling ready for AI search engines.",
      },
    ],
    metrics: { value: "3.8x", label: "Average conversion increase" },
  },
  {
    id: "custom-software-development",
    number: 2,
    title: "Custom Software Development",
    slug: "custom-software-development",
    category: "website-software",
    isSecondary: true,
    badge: "Second Priority Service",
    shortDescription:
      "Scalable custom business software, ERPs, CRMs, clinic systems, and portals tailored to your operational bottlenecks.",
    fullDescription:
      "Off-the-shelf software forces your business to adapt to rigid workflows. We build tailored software ecosystems that eliminate manual friction, integrate disparate tools, and scale seamlessly with your growth.",
    ctaText: "Discuss Your Software Requirement",
    ctaAction: "project-modal",
    items: [
      "Custom Business Software",
      "CRM Development",
      "ERP Development",
      "Hospital Management Software",
      "Clinic Management Software",
      "Inventory Management Software",
      "Billing Software",
      "Lead Management Systems",
      "Employee Management Systems",
      "Attendance Systems",
      "Customer Portals",
      "Vendor Portals",
      "Admin Dashboards",
      "Appointment Management Systems",
      "Workflow Management Systems",
      "Business Management Software",
      "SaaS Application Development",
    ],
    features: [
      {
        title: "Proprietary Workflows",
        description: "Exact business logic, role-based access control, and intuitive dashboards built for your team.",
      },
      {
        title: "Cross-System Synchronization",
        description: "Seamless real-time integration with billing, payment gateways, WhatsApp, and inventory.",
      },
      {
        title: "Data Sovereignty & Security",
        description: "Enterprise encryption, automated daily backups, and full ownership of your data.",
      },
      {
        title: "Scalable Architecture",
        description: "Microservices and cloud-native architecture capable of handling millions of transactions.",
      },
    ],
    metrics: { value: "65%", label: "Reduction in manual operational hours" },
  },
  {
    id: "google-business-profile-optimization",
    number: 3,
    title: "Google Business Profile Optimization",
    slug: "google-business-profile-optimization",
    category: "digital-growth",
    isTertiary: true,
    badge: "Third Priority Service",
    shortDescription:
      "Dominate local Google Maps search, capture high-intent local calls, and build an unstoppable 5-star review engine.",
    fullDescription:
      "When customers in your city search for your services, SmartEdge ensures your Google Business Profile ranks in the Top 3 Map Pack with complete optimization, keyword authority, and automated review capture.",
    ctaText: "Improve My Google Ranking",
    ctaAction: "project-modal",
    items: [
      "Google Business Profile Optimization",
      "Google Maps Ranking",
      "Local SEO",
      "Category Optimization",
      "Keyword Optimization",
      "Business Description Optimization",
      "Service Optimization",
      "Google Posts",
      "Photo Optimization",
      "Review Strategy",
      "Citation Building",
      "NAP Consistency",
      "Competitor Analysis",
      "Local Keyword Tracking",
      "Call & Enquiry Improvement",
    ],
    features: [
      {
        title: "Top 3 Map Pack Positioning",
        description: "Algorithmic local optimization to consistently outrank local competitors.",
      },
      {
        title: "Automated Review Strategy",
        description: "QR-code and WhatsApp automated review requests that multiply 5-star customer feedback.",
      },
      {
        title: "100% NAP Consistency",
        description: "Synchronized Name, Address, and Phone citations across top directories and aggregators.",
      },
      {
        title: "Direct Call & WhatsApp Surge",
        description: "Optimized click-to-call, service menus, and weekly geo-tagged image posts.",
      },
    ],
    metrics: { value: "+280%", label: "Average increase in phone calls & directions" },
  },
  {
    id: "business-automation",
    number: 4,
    title: "Business Automation",
    slug: "business-automation",
    category: "automation-ai",
    badge: "High ROI Solution",
    shortDescription:
      "Automate repetitive tasks, speed up lead follow-ups, synchronize invoices, and run your business on autopilot 24/7.",
    fullDescription:
      "Transform manual bottlenecks into lightning-fast automated pipelines. From instant WhatsApp lead follow-ups to automated billing reminders, SmartEdge builds reliable workflows that never sleep.",
    ctaText: "Automate My Business",
    ctaAction: "project-modal",
    items: [
      "Business Process Automation",
      "Lead Automation",
      "CRM Automation",
      "WhatsApp Automation",
      "Email Automation",
      "Follow-up Automation",
      "Appointment Reminder Automation",
      "Sales Workflow Automation",
      "Customer Enquiry Automation",
      "Review Request Automation",
      "Invoice Reminder Automation",
      "Internal Notification Systems",
      "Marketing Automation",
    ],
    features: [
      {
        title: "Zero-Minute Lead Response",
        description: "Engage fresh inquiries on WhatsApp and email in under 30 seconds automatically.",
      },
      {
        title: "Multi-Platform Connectors",
        description: "Bridge web forms, CRMs, Google Sheets, WhatsApp Business API, and accounting tools.",
      },
      {
        title: "Proactive Notifications",
        description: "Instant Slack, WhatsApp, or email alerts for VIP inquiries, low stock, or missed follow-ups.",
      },
      {
        title: "Automated Collections",
        description: "Polite, timely automated payment reminders that shorten your accounts receivable cycle.",
      },
    ],
    metrics: { value: "< 30s", label: "Instant customer response speed" },
  },
  {
    id: "web-application-development",
    number: 5,
    title: "Web Application Development",
    slug: "web-application-development",
    category: "website-software",
    shortDescription:
      "High-performance cloud web apps, interactive booking platforms, internal systems, and customer-facing portals.",
    fullDescription:
      "We design and build robust web applications featuring real-time data sync, dynamic role permissions, intuitive UX, and bulletproof security for modern distributed enterprises.",
    ctaText: "Build My Web App",
    ctaAction: "project-modal",
    items: [
      "Business Web Applications",
      "Admin Dashboards",
      "Booking Platforms",
      "CRM Applications",
      "Customer Portals",
      "Internal Management Systems",
      "Reporting Dashboards",
      "Workflow Applications",
      "SaaS Platforms",
    ],
    features: [
      {
        title: "Real-time Synchronization",
        description: "Live data feeds and WebSocket push notifications for active teams.",
      },
      {
        title: "Role-Based Security",
        description: "Granular access controls for admins, managers, clients, and partners.",
      },
      {
        title: "Modular Component Systems",
        description: "Clean maintainable React/Next.js frontend with decoupled API services.",
      },
      {
        title: "Responsive Across Devices",
        description: "Flawless performance on desktop monitors, iPads, and smartphones.",
      },
    ],
  },
  {
    id: "ai-automation-solutions",
    number: 6,
    title: "AI & Automation Solutions",
    slug: "ai-automation-solutions",
    category: "automation-ai",
    badge: "Next-Gen Tech",
    shortDescription:
      "Custom AI chatbots, intelligent WhatsApp agents, automated lead qualification, and AI-driven business workflows.",
    fullDescription:
      "Harness generative AI fine-tuned on your internal product documentation, FAQs, and pricing. SmartEdge builds AI assistants that answer inquiries, qualify leads, and orchestrate complex tasks 24/7.",
    ctaText: "Explore AI Solutions",
    ctaAction: "project-modal",
    items: [
      "AI Chatbots",
      "Website Chatbots",
      "WhatsApp AI Assistants",
      "Lead Qualification Bots",
      "Automated Customer Support",
      "AI-Powered Business Workflows",
      "AI CRM Integration",
      "Internal AI Assistants",
      "AI Content Workflows",
    ],
    features: [
      {
        title: "Trained on Your Knowledge Base",
        description: "Answers user questions with extreme accuracy using RAG and customized prompts.",
      },
      {
        title: "Automated Lead Qualification",
        description: "Scores leads, extracts budgets, and books calendar meetings automatically.",
      },
      {
        title: "Human Handoff Safeguards",
        description: "Seamless escalation to human agents when high-touch consultation is required.",
      },
      {
        title: "Omnichannel Deployment",
        description: "One unified brain deployed across your website, WhatsApp, and internal Slack.",
      },
    ],
  },
  {
    id: "search-engine-optimization",
    number: 7,
    title: "Search Engine Optimization — SEO",
    slug: "search-engine-optimization",
    category: "digital-growth",
    shortDescription:
      "Data-backed Organic SEO, Technical SEO, and Content Strategy to win high-intent Google rankings that drive real revenue.",
    fullDescription:
      "Sustainable organic traffic engineered through rigorous technical audits, topical authority building, search intent architecture, and strategic backlink acquisition.",
    ctaText: "Get Free SEO Audit",
    ctaAction: "project-modal",
    items: [
      "Local SEO",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "Competitor Analysis",
      "Content SEO",
      "Backlink Strategy",
      "Location-Based SEO",
      "SEO Audits",
    ],
    features: [
      {
        title: "AEO & GEO Ready",
        description: "Optimized for both classic Google algorithms and AI Answer Engines (Perplexity, ChatGPT, Claude).",
      },
      {
        title: "Deep Technical Auditing",
        description: "Fix crawl errors, canonical mismatches, slow rendering, and indexing bottlenecks.",
      },
      {
        title: "High-Intent Keyword Mapping",
        description: "Target commercial keywords that generate sales qualified inquiries, not vanity traffic.",
      },
      {
        title: "White-Hat Authority Building",
        description: "Ethical contextual backlinks and authoritative digital PR.",
      },
    ],
  },
  {
    id: "google-ads-meta-ads",
    number: 8,
    title: "Google Ads & Meta Ads",
    slug: "google-ads-meta-ads",
    category: "digital-growth",
    shortDescription:
      "High-ROI paid acquisition campaigns across Google Search, Performance Max, Instagram, and Facebook.",
    fullDescription:
      "Stop wasting ad spend on irrelevant clicks. We build laser-targeted paid search and social campaigns engineered with tight audience exclusions, conversion tracking, and high-converting landing pages.",
    ctaText: "Start Lead Generation",
    ctaAction: "project-modal",
    items: [
      "Google Search Ads",
      "Google Display Ads",
      "Performance Max",
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Remarketing",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    features: [
      {
        title: "Laser Audience Targeting",
        description: "Custom intent, in-market segments, and lookalike modeling based on your best buyers.",
      },
      {
        title: "Creative A/B Testing",
        description: "Continuous testing of ad angles, hooks, headlines, and video creatives.",
      },
      {
        title: "Pixel & CAPI Setup",
        description: "Server-side tracking and Conversion API to capture 100% of event data.",
      },
      {
        title: "Strict Cost Per Lead Focus",
        description: "Aggressive bid management designed to maximize ROI and lower customer acquisition costs.",
      },
    ],
  },
  {
    id: "lead-generation",
    number: 9,
    title: "Lead Generation",
    slug: "lead-generation",
    category: "digital-growth",
    shortDescription:
      "Multi-channel inbound and outbound lead acquisition funnels that fill your sales pipeline with verified prospects.",
    fullDescription:
      "We orchestrate paid ads, SEO, high-converting landing pages, WhatsApp automation, and CRM pipelines into one unified customer acquisition engine for steady business growth.",
    ctaText: "Generate More Leads",
    ctaAction: "project-modal",
    items: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Google Business Profile",
      "Landing Pages",
      "WhatsApp",
      "Social Media",
      "CRM Automation",
    ],
    features: [
      {
        title: "Multi-Touch Attribution",
        description: "Understand exactly which channel, ad, and keyword generated each customer.",
      },
      {
        title: "Lead Scoring & Filtering",
        description: "Filter out spam inquiries and deliver pre-qualified prospects directly to your sales team.",
      },
      {
        title: "Dedicated Landing Pages",
        description: "Fast-loading landing pages with zero distractions and compelling value propositions.",
      },
      {
        title: "Instant CRM Push",
        description: "Leads automatically routed to your sales reps with instant WhatsApp notifications.",
      },
    ],
  },
  {
    id: "social-media-management",
    number: 10,
    title: "Social Media Management",
    slug: "social-media-management",
    category: "creative",
    shortDescription:
      "Build brand authority, community trust, and viral reach across Instagram, LinkedIn, Facebook, and YouTube.",
    fullDescription:
      "Strategic organic social media management that positions your brand as an industry leader. We create cohesive visual identities, engaging video reels, informative carousels, and consistent publishing calendars.",
    ctaText: "Elevate Your Brand",
    ctaAction: "project-modal",
    items: [
      "Instagram Management",
      "Facebook Management",
      "LinkedIn Authority",
      "YouTube Growth",
      "Content Strategy",
      "Post Creation",
      "Reels & Short-form Video",
      "Stories & Highlights",
      "Creative Design",
      "Caption Writing",
      "Hashtag Research",
      "Content Calendar",
      "Community Engagement",
    ],
    features: [
      {
        title: "Strategic Content Pillars",
        description: "Mix of educational, promotional, social proof, and authority-building content.",
      },
      {
        title: "Consistent Visual Aesthetics",
        description: "Polished brand guidelines, typography, and color palette maintained across all posts.",
      },
      {
        title: "Active Community Management",
        description: "Timely responses to comments and direct messages to nurture warm prospects.",
      },
      {
        title: "Monthly Performance Analytics",
        description: "Transparent reports showing reach, engagement rate, profile visits, and lead inquiries.",
      },
    ],
  },
  {
    id: "whatsapp-marketing-automation",
    number: 11,
    title: "WhatsApp Marketing & Automation",
    slug: "whatsapp-marketing-automation",
    category: "automation-ai",
    shortDescription:
      "Direct-to-consumer conversational commerce, broadcast campaigns, automated reminders, and WhatsApp API chatbots.",
    fullDescription:
      "With a 98% open rate, WhatsApp is the most powerful communication channel in modern business. We integrate official WhatsApp Business APIs with your software to automate customer notifications and sales.",
    ctaText: "Launch WhatsApp Solutions",
    ctaAction: "project-modal",
    items: [
      "WhatsApp Business Setup",
      "WhatsApp API Integration",
      "Automated Replies",
      "Lead Follow-Ups",
      "Appointment Reminders",
      "Promotional Campaigns",
      "Customer Support",
      "WhatsApp Chatbots",
      "CRM Integration",
    ],
    features: [
      {
        title: "Official Meta Cloud API",
        description: "Green tick verification readiness, high-volume broadcasting, and anti-ban architecture.",
      },
      {
        title: "Automated Journey Triggers",
        description: "Send automated greetings, payment receipts, order tracking, and feedback surveys.",
      },
      {
        title: "Interactive Catalogs & Buttons",
        description: "Enable customers to browse products and book appointments right inside WhatsApp.",
      },
      {
        title: "Multi-Agent Inbox",
        description: "Equip your customer support team with one shared WhatsApp number and team routing.",
      },
    ],
  },
  {
    id: "crm-setup-integration",
    number: 12,
    title: "CRM Setup & Integration",
    slug: "crm-setup-integration",
    category: "automation-ai",
    shortDescription:
      "End-to-end CRM architecture, deal pipeline setup, automated sales sequences, and real-time executive reporting.",
    fullDescription:
      "Stop losing leads in spreadsheets. We configure and customize leading CRMs (or build custom ones) to give you total visibility over your sales funnel, agent activities, and conversion metrics.",
    ctaText: "Optimize Your CRM",
    ctaAction: "project-modal",
    items: [
      "CRM Setup",
      "Lead Pipeline Setup",
      "Sales Tracking",
      "Customer Management",
      "Follow-Up Automation",
      "WhatsApp Integration",
      "Email Integration",
      "Reporting Dashboards",
    ],
    features: [
      {
        title: "Visual Pipeline Management",
        description: "Clear stage-by-stage progression from cold lead to won client with drag-and-drop ease.",
      },
      {
        title: "Automated Stage Triggers",
        description: "Automatically send contracts, book appointments, or notify managers upon stage change.",
      },
      {
        title: "WhatsApp & Telephony Sync",
        description: "Log every call recording and WhatsApp chat directly inside the customer timeline.",
      },
      {
        title: "Executive Revenue Dashboards",
        description: "Real-time forecast of sales revenue, win rates, and team productivity.",
      },
    ],
  },
  {
    id: "e-commerce-development",
    number: 13,
    title: "E-commerce Development",
    slug: "e-commerce-development",
    category: "website-software",
    shortDescription:
      "High-converting online storefronts, payment gateway integrations, automated inventory, and WhatsApp commerce.",
    fullDescription:
      "Scalable e-commerce platforms engineered for rapid checkout, frictionless payment gateways, automated shipping calculation, and streamlined catalog management.",
    ctaText: "Launch Online Store",
    ctaAction: "project-modal",
    items: [
      "E-commerce Website Development",
      "Product Catalog",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Integration",
      "WhatsApp Integration",
      "Shipping Integration",
      "E-commerce SEO",
      "Analytics",
    ],
    features: [
      {
        title: "Frictionless One-Click Checkout",
        description: "Integrated UPI, Cards, Net Banking, EMI, and Cash on Delivery with maximum success rates.",
      },
      {
        title: "Automated Stock Sync",
        description: "Centralized inventory updates across multiple sales channels and offline warehouses.",
      },
      {
        title: "Abandoned Cart Recovery",
        description: "Automated WhatsApp and email reminders that recover up to 25% of dropped carts.",
      },
      {
        title: "Speed-Optimized Architecture",
        description: "Sub-second product page loads ensuring minimal bounce rates and higher order values.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    number: 14,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "website-software",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android that deliver fast, fluid, and intuitive experiences.",
    fullDescription:
      "We engineer enterprise mobile applications using React Native and Flutter, providing smooth native performance, push notifications, offline capabilities, and seamless backend API integration.",
    ctaText: "Build Mobile App",
    ctaAction: "project-modal",
    items: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "Business Apps",
      "Customer Apps",
      "Employee Apps",
    ],
    features: [
      {
        title: "Unified Cross-Platform Codebase",
        description: "Deploy to both Google Play Store and Apple App Store while cutting development cost.",
      },
      {
        title: "Instant Push Notifications",
        description: "Engage users with personalized automated alerts, order updates, and promotions.",
      },
      {
        title: "Offline-First Support",
        description: "Local database caching ensuring apps function smoothly even in low-connectivity areas.",
      },
      {
        title: "Enterprise Biometric Security",
        description: "Fingerprint and FaceID authentication with end-to-end encrypted storage.",
      },
    ],
  },
  {
    id: "review-reputation-management",
    number: 15,
    title: "Review & Reputation Management",
    slug: "review-reputation-management",
    category: "digital-growth",
    shortDescription:
      "Protect, monitor, and amplify your brand reputation with automated positive review capture and active sentiment defense.",
    fullDescription:
      "A single negative review can turn away dozens of potential customers. SmartEdge implements automated feedback filtering that directs happy clients to Google while routing grievances to private support.",
    ctaText: "Shield Your Reputation",
    ctaAction: "project-modal",
    items: [
      "Google Review Strategy",
      "Review Monitoring",
      "Review Response Management",
      "Customer Feedback Collection",
      "Reputation Reporting",
      "Online Reputation Improvement",
    ],
    features: [
      {
        title: "Intelligent Review Routing",
        description: "Satisfied customers are guided to Google Maps; constructive feedback is captured internally.",
      },
      {
        title: "Professional Response SLA",
        description: "Timely, brand-aligned responses to all incoming reviews within 24 hours.",
      },
      {
        title: "Sentiment Tracking Alerts",
        description: "Real-time alerts for executive management whenever customer ratings dip.",
      },
      {
        title: "Website Social Proof Widgets",
        description: "Live-updating verified customer review carousels embedded on your website.",
      },
    ],
  },
  {
    id: "reel-creation",
    number: 16,
    title: "Reel Creation",
    slug: "reel-creation",
    category: "creative",
    shortDescription:
      "High-engagement short-form video production, viral scripting, dynamic editing, and industry-tailored reels.",
    fullDescription:
      "Capture attention in the first 3 seconds. SmartEdge scripts, edits, and produces short-form video reels that showcase your services, build personal authority, and drive organic algorithmic reach on Instagram and YouTube.",
    ctaText: "Produce Viral Reels",
    ctaAction: "project-modal",
    items: [
      "Promotional Reels",
      "Educational Reels",
      "Corporate Reels",
      "Healthcare Reels",
      "Service Reels",
      "Product Reels",
      "Scripts",
      "Video Editing",
    ],
    features: [
      {
        title: "Thumb-Stopping Hooks",
        description: "Data-tested script structures that maximize watch time and completion rate.",
      },
      {
        title: "Dynamic Modern Editing",
        description: "Kinetic typography, seamless sound design, b-roll footage, and crisp color grading.",
      },
      {
        title: "Industry-Specific Formats",
        description: "Doctor explainers, property walk-throughs, SaaS feature spotlights, and founder stories.",
      },
      {
        title: "Turnkey Video Packages",
        description: "From concept and scriptwriting to final export optimized for 9:16 vertical viewports.",
      },
    ],
  },
  {
    id: "graphic-creative-design",
    number: 17,
    title: "Graphic & Creative Design",
    slug: "graphic-creative-design",
    category: "creative",
    shortDescription:
      "High-impact marketing collaterals, social creatives, corporate pitch decks, brochures, and brand identity systems.",
    fullDescription:
      "First impressions matter. We create world-class graphic designs that elevate your brand prestige, boost ad click-through rates, and make your marketing materials unforgettable.",
    ctaText: "Upgrade Brand Design",
    ctaAction: "project-modal",
    items: [
      "Social Media Posts",
      "Banners",
      "Festival Creatives",
      "Offer Creatives",
      "Brochures",
      "Flyers",
      "Posters",
      "Presentations",
      "Ad Creatives",
      "Website Banners",
      "Branding Material",
    ],
    features: [
      {
        title: "Brand Consistency Across Touchpoints",
        description: "Unified typography, color palettes, and visual tone across all physical and digital media.",
      },
      {
        title: "High-CTR Ad Creatives",
        description: "Visual assets engineered with clear visual hierarchy to boost conversions and reduce ad costs.",
      },
      {
        title: "Print-Ready & Vector Assets",
        description: "Pixel-perfect formats delivered in high-res vector, PDF, and web-ready formats.",
      },
      {
        title: "Fast Turnaround SLA",
        description: "Reliable production schedule for festive campaigns, promotions, and product launches.",
      },
    ],
  },
  {
    id: "analytics-conversion-tracking",
    number: 18,
    title: "Analytics & Conversion Tracking",
    slug: "analytics-conversion-tracking",
    category: "digital-growth",
    shortDescription:
      "Accurate attribution, Google Analytics 4, Tag Manager, Meta Pixel, WhatsApp tracking, and executive dashboards.",
    fullDescription:
      "You cannot improve what you do not measure. SmartEdge implements bulletproof tracking architectures that monitor every visitor click, form submission, phone call, and WhatsApp conversation.",
    ctaText: "Set Up Tracking",
    ctaAction: "project-modal",
    items: [
      "Google Analytics 4",
      "Google Search Console",
      "Google Tag Manager",
      "Meta Pixel",
      "Google Ads Conversion Tracking",
      "WhatsApp Click Tracking",
      "Call Tracking",
      "Lead Tracking",
      "Marketing Dashboards",
    ],
    features: [
      {
        title: "Server-Side & Client-Side Tracking",
        description: "Eliminate ad-blocker loss and iOS 14+ tracking issues with robust CAPI setup.",
      },
      {
        title: "Unified Lead Attribution",
        description: "Know exactly which marketing dollar produced every closed customer deal.",
      },
      {
        title: "Custom Looker Studio Dashboards",
        description: "Automated executive reports accessible anytime without digging through raw analytics.",
      },
      {
        title: "Click-to-Chat & Call Analytics",
        description: "Track phone dial clicks, form drops, and WhatsApp interactions as measurable conversions.",
      },
    ],
  },
];

export const INDUSTRIES = [
  {
    title: "Healthcare & Clinics",
    slug: "healthcare",
    icon: "Stethoscope",
    desc: "HIPAA-conscious websites, appointment engines, clinic software, and local Google Map domination.",
    solutions: ["Clinic Management Software", "Doctor Appointment Booking", "Healthcare SEO & GBP", "Patient WhatsApp Reminders"],
  },
  {
    title: "Real Estate & Developers",
    slug: "real-estate",
    icon: "Building2",
    desc: "Luxury property portals, lead-generation landing pages, CRM pipelines, and automated site visit scheduling.",
    solutions: ["Project Showcase Websites", "Virtual Tour Portals", "Real Estate Meta & Google Ads", "Lead Distribution Automation"],
  },
  {
    title: "Manufacturing & B2B",
    slug: "manufacturing",
    icon: "Factory",
    desc: "Industrial catalog websites, vendor portals, ERP modules, and B2B lead generation funnels.",
    solutions: ["B2B Corporate Websites", "ERP & Inventory Systems", "Vendor Portals", "International SEO"],
  },
  {
    title: "Logistics & Supply Chain",
    slug: "logistics",
    icon: "Truck",
    desc: "Consignment tracking web apps, fleet management dashboards, and high-performance dispatch systems.",
    solutions: ["Fleet Management Portals", "Consignment Trackers", "Corporate Websites", "Operations Automation"],
  },
  {
    title: "Education & Institutes",
    slug: "education",
    icon: "GraduationCap",
    desc: "Admission lead funnels, student portals, course LMS platforms, and institute reputation marketing.",
    solutions: ["Admission Landing Pages", "Learning Management Systems", "Student Portals", "Social Media & Reels"],
  },
  {
    title: "Retail & E-commerce",
    slug: "ecommerce",
    icon: "ShoppingBag",
    desc: "Blazing fast online stores, automated inventory sync, WhatsApp checkout, and payment gateway integration.",
    solutions: ["Modern Headless Storefronts", "Payment Gateway Setup", "Abandoned Cart Automation", "Product Catalog SEO"],
  },
  {
    title: "Hospitality & Restaurants",
    slug: "hospitality",
    icon: "UtensilsCrossed",
    desc: "Direct table booking systems, QR menus, Google Maps ranking, and local reputation management.",
    solutions: ["Direct Reservation Systems", "GBP Ranking & Reviews", "Dynamic QR Menus", "Instagram Reels & Ads"],
  },
  {
    title: "Professional & Financial Services",
    slug: "professional-services",
    icon: "Briefcase",
    desc: "Authoritative corporate platforms, client document portals, secure billing, and LinkedIn authority.",
    solutions: ["Corporate Web Development", "Client Document Portals", "High-Ticket Lead Generation", "Brand Identity Design"],
  },
];

export const STATS = [
  { value: "350+", label: "Websites & Systems Deployed" },
  { value: "99.4%", label: "Client Satisfaction Score" },
  { value: "10x", label: "Average Growth in Inbound Leads" },
  { value: "< 30s", label: "Automated Lead Response Time" },
];

export const FAQS = [
  {
    question: "What makes SmartEdge Business Solutions different from typical digital agencies?",
    answer:
      "SmartEdge is positioned as a comprehensive Technology, Software, Automation & Digital Growth Company. Unlike marketing-only agencies that rely solely on ads, we build deep technological assets: high-performance custom websites, proprietary CRM/ERP software, intelligent WhatsApp & AI automated workflows, combined with data-driven Google Maps and search engine optimization. We solve operational bottlenecks while multiplying your inbound leads.",
  },
  {
    question: "Why is Website Development your primary service?",
    answer:
      "Your website is the digital headquarters and anchor for every customer acquisition channel. Whether leads arrive via Google Ads, Meta Ads, WhatsApp, or Google Maps, a slow or poorly structured website will kill conversions. We build modern, lightning-fast, mobile-responsive websites engineered specifically to convert visitors into phone calls, WhatsApp chats, and closed business.",
  },
  {
    question: "Can SmartEdge build custom software tailored to our specific company workflow?",
    answer:
      "Yes, custom software development is our second core pillar. We develop custom ERPs, CRMs, clinic/hospital management software, vendor portals, employee attendance systems, and cloud dashboards designed around your exact business requirements, ensuring zero monthly per-seat bloat and total data ownership.",
  },
  {
    question: "How does Google Business Profile Optimization improve our revenue?",
    answer:
      "Over 76% of people searching for a local service on Google Maps visit or call a business within 24 hours. SmartEdge optimizes your profile categories, keywords, review automation, photo geo-tagging, and citations to ensure you dominate the Top 3 Map Pack in your region, creating a continuous stream of direct phone calls and inquiries.",
  },
  {
    question: "What types of business automation can you implement?",
    answer:
      "We automate repetitive operations including instant WhatsApp lead greetings, automated CRM pipeline updates, appointment reminders, payment and invoice follow-ups, customer review requests, and internal team notifications. This frees your team to focus on closing deals rather than manual data entry.",
  },
  {
    question: "How do we get started with SmartEdge?",
    answer:
      "You can click 'Start Your Project' to fill out our interactive project scope planner, click 'Book Free Consultation' to speak with a technology consultant, or message us directly on WhatsApp for an immediate consultation.",
  },
];
