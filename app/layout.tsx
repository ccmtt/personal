import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { ThemeProvider } from "@/i18n/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageTransitionProvider } from "@/components/PageTransition";
import GeometricBackground from "@/components/GeometricBackground";
import ParticleTrail from "@/components/ParticleTrail";

export const metadata: Metadata = {
  title: "Chen Mingtao",
  description: "Developer-focused personal website",
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
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <GeometricBackground />
        <ParticleTrail />
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