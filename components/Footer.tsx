"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t.footer.builtBy}{" "}
          <span className="font-medium text-gray-900 dark:text-gray-200">
            Chen Mingtao
          </span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          {t.footer.viewSource}{" "}
          <Link
            href="https://github.com/ccmtt/personal"
            className="text-blue-600 dark:text-blue-400 hover:underline"
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