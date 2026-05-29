import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageTransitionProvider } from "@/components/PageTransition";

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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}