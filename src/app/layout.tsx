import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, projectsSchema } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasnaindev-portfolio.netlify.app"),
  referrer: 'origin-when-cross-origin',

  title: {
    default: "hasnainDev | Full Stack Developer — React, Node.js, Next.js",
    template: "%s | hasnainDev",
  },
  description:
    "Portfolio of hasnainDev — Software Engineer II with 4+ years building scalable enterprise web apps. Expert in React, Next.js, Node.js, TypeScript, and MERN/MEVN stack. Open source contributor.",

  keywords: [
    "hasnainDev",
    "hasnainDev Portfolio",
    "hasnain developer",
    "Software Engineer II",
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Frontend Lead",
    "JavaScript Engineer",
    "JavaScript Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "MEVN Stack Developer",
    "Vue.js Developer",
    "Python Developer",
    "Warehouse Management System Developer",
    "Enterprise Web Application Developer",
    "Open Source Developer",
    "NPM Package Author",
    "Software Engineer Bangalore",
    "Web Developer India",
    "Developer Portfolio",
    "Web Application Portfolio",
    "Software Engineer Portfolio India",
  ],

  authors: [{ name: "hasnainDev", url: "https://hasnaindev-portfolio.netlify.app" }],
  creator: "hasnainDev",
  publisher: "hasnainDev",

  applicationName: "hasnainDev Portfolio",
  category: "technology",
  classification: "Software Engineer Portfolio",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
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

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    title: "hasnainDev | Full Stack Developer Portfolio",
    description:
      "Software Engineer II with 4+ years of experience. React, Next.js, Node.js, TypeScript. Frontend Lead for enterprise Warehouse Management System. Open source contributor.",
    url: "https://hasnaindev-portfolio.netlify.app",
    siteName: "hasnainDev Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "hasnainDev — Full Stack Developer Portfolio Preview",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "hasnainDev | Full Stack Developer — React, Node.js, Next.js",
    description:
      "Software Engineer II specializing in scalable enterprise web apps. Expert in MERN/MEVN stack and open source tools.",
    images: [
      {
        url: "/portfolio_hero_section.png",
        alt: "hasnainDev Portfolio Preview",
      },
    ],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  other: {
    "theme-color": "#0f172a",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Theme color (Chrome/Android) ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── JSON-LD: WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── JSON-LD: Projects ItemList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}