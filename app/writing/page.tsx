"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

const writings = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-05-20",
    excerpt:
      "A quick overview of Next.js App Router and how to build your first page with the latest features.",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    date: "2026-05-15",
    excerpt:
      "Key patterns and tips for writing type-safe TypeScript code that scales.",
  },
];

export default function Writing() {
  const { t } = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <motion.section
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.writing.title}
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 dark:text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          {t.writing.description}
        </motion.p>
      </motion.section>

      <motion.div
        className="mt-12 space-y-4"
        initial="hidden"
        animate="visible"
      >
        {writings.map((writing) => (
          <motion.article
            key={writing.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <Link href={`/writing/${writing.slug}`} className="group block p-6 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-400/30 hover:bg-gray-50 dark:hover:bg-white/[0.08] transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-medium text-gray-900 dark:text-white/90 group-hover:text-blue-600 dark:group-hover:text-cyan-300/90">
                    {writing.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white/40 leading-relaxed">{writing.excerpt}</p>
                  <time className="inline-block mt-2 text-xs text-gray-400 dark:text-white/40 font-mono">
                    {writing.date}
                  </time>
                </div>
                <svg className="w-5 h-5 text-gray-400 dark:text-white/30 group-hover:text-blue-500 dark:group-hover:text-cyan-400/60 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}