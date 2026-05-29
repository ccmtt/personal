"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useLocale();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/writing", label: t.nav.writing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-blue-500/20">
      <nav className="max-w-2xl mx-auto flex items-center justify-between gap-6 p-4">
        <div className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}