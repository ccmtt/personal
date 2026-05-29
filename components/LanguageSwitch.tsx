"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

export default function LanguageSwitch() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="relative text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 rounded-md border border-gray-200 hover:border-blue-300"
      aria-label={`Switch to ${locale === "en" ? "中文" : "English"}`}
    >
      <span className="font-mono">{locale === "en" ? "EN" : "中"}</span>
      <motion.span
        className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-blue-600"
        layoutId="lang-indicator"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
}