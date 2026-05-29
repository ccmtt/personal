"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-[#0a0a1a]/50">
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        <p className="text-sm text-gray-600 dark:text-white/40">
          {t.footer.builtBy}{" "}
          <span className="font-medium text-gray-900 dark:text-white/60">Chen Mingtao</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-white/30 mt-3">
          {t.footer.viewSource}{" "}
          <Link
            href="https://github.com/ccmtt/personal"
            className="text-blue-600 dark:text-cyan-400/50 hover:text-blue-700 dark:hover:text-cyan-300/70 transition-colors"
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