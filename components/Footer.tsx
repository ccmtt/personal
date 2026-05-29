"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-blue-500/20 bg-gray-950/50">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-gray-500">
          {t.footer.builtBy}{" "}
          <span className="font-medium text-gray-300">
            Chen Mingtao
          </span>
        </p>
        <p className="text-xs text-gray-600 mt-2">
          {t.footer.viewSource}{" "}
          <Link
            href="https://github.com/ccmtt/personal"
            className="text-blue-400 hover:text-cyan-400 transition-colors"
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