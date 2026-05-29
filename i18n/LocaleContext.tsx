"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { en } from "@/i18n/en";
import { zh } from "@/i18n/zh";

export type Locale = "en" | "zh";
export type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, zh };

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLocale(saved);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("locale", locale);
    }
  }, [locale, isHydrated]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"));
  };

  const value = {
    locale,
    t: translations[locale],
    setLocale,
    toggleLocale,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}