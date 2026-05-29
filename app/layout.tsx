import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { ThemeProvider } from "@/i18n/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageTransitionProvider } from "@/components/PageTransition";
import GeometricBackground from "@/components/GeometricBackground";
import ParticleTrail from "@/components/ParticleTrail";
import GlowCursor from "@/components/GlowCursor";
import CursorSparkle from "@/components/CursorSparkle";
import RippleEffect from "@/components/RippleEffect";

export const metadata: Metadata = {
  title: {
    default: "Chen Mingtao",
    template: "%s | Chen Mingtao",
  },
  description: "SRE engineer personal website. Specializing in automation, monitoring, and AI application development.",
  keywords: ["SRE", "DevOps", "automation", "AI", "SRE tools", "monitoring", "infrastructure"],
  authors: [{ name: "Chen Mingtao" }],
  creator: "Chen Mingtao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chenmingtao.com",
    siteName: "Chen Mingtao",
    title: "Chen Mingtao",
    description: "SRE engineer personal website. Specializing in automation, monitoring, and AI application development.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Chen Mingtao - Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chen Mingtao",
    description: "SRE engineer personal website. Specializing in automation, monitoring, and AI application development.",
    images: ["/og-image.svg"],
    creator: "@chenmingtao",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chen Mingtao",
              "url": "https://chenmingtao.com",
              "jobTitle": "SRE Engineer",
              "description": "SRE engineer specializing in automation, monitoring, and AI application development.",
              "sameAs": [
                "https://github.com/ccmtt"
              ],
              "knowsAbout": [
                "SRE",
                "Automation",
                "Monitoring",
                "AI",
                "DevOps",
                "Infrastructure"
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <GeometricBackground />
        <ParticleTrail />
        <GlowCursor />
        <CursorSparkle />
        <RippleEffect />
        <ThemeProvider>
          <LocaleProvider>
            <Navigation />
            <main className="flex-1">
              <PageTransitionProvider>{children}</PageTransitionProvider>
            </main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}