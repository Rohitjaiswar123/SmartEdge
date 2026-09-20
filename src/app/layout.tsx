import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smartedgebusiness.com"),
  title: {
    default: "SmartEdge Business Solutions | Technology, Software, Automation & Digital Growth",
    template: "%s | SmartEdge Business Solutions",
  },
  description:
    "SmartEdge Business Solutions helps businesses build powerful websites, custom software, automated workflows, Google Business Profile optimization, and digital growth strategies. Build. Innovate. Grow.",
  keywords: [
    "Website Development",
    "Custom Software Development",
    "Google Business Profile Optimization",
    "Business Automation",
    "CRM Development",
    "ERP Development",
    "Local SEO",
    "AI Chatbots",
    "WhatsApp Automation",
    "Web Application Development",
    "SmartEdge Business Solutions",
  ],
  authors: [{ name: "SmartEdge Business Solutions" }],
  creator: "SmartEdge Business Solutions",
  publisher: "SmartEdge Business Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmartEdge Business Solutions | Build. Innovate. Grow.",
    description:
      "Websites, Software & Digital Solutions Built to Grow Your Business. Technology & Digital Growth Partner.",
    url: "https://smartedgebusiness.com",
    siteName: "SmartEdge Business Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEdge Business Solutions | Technology Solutions Built for Business Growth",
    description:
      "Helping businesses build powerful websites, custom software, automated workflows, and digital growth strategies.",
    creator: "@smartedgebiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
