"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-gray-600">
          {t.footer.builtBy}{" "}
          <span className="font-medium text-gray-900">Chen Mingtao</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {t.footer.viewSource}{" "}
          <Link
            href="https://github.com/ccmtt/personal"
            className="text-blue-600 hover:underline"
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