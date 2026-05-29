"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

export default function LanguageSwitch() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="relative text-sm font-medium text-gray-600 dark:text-white/50 hover:text-blue-600 dark:hover:text-white/80 px-3 py-1.5 rounded-md border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-colors"
      aria-label={`Switch to ${locale === "en" ? "中文" : "English"}`}
    >
      <span className="font-mono text-xs">{locale === "en" ? "EN" : "中"}</span>
    </button>
  );
}