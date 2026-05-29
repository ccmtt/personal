"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a1a]/50">
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-sm text-white/40">
          {t.footer.builtBy}{" "}
          <span className="font-medium text-white/60">Chen Mingtao</span>
        </p>
        <p className="text-xs text-white/30 mt-3">
          {t.footer.viewSource}{" "}
          <Link
            href="https://github.com/ccmtt/personal"
            className="text-cyan-400/50 hover:text-cyan-300/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}