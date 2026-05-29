"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.writing.title}
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          {t.writing.description}
        </motion.p>
      </motion.section>

      <motion.div
        className="mt-12 space-y-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        {writings.map((writing) => (
          <motion.article
            key={writing.slug}
            className="group border-b border-gray-100 pb-10 last:border-b-0 last:pb-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
          >
            <Link href={`/writing/${writing.slug}`}>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {writing.title}
              </h2>
            </Link>
            <p className="mt-2 text-gray-600 leading-relaxed">{writing.excerpt}</p>
            <time className="inline-block mt-3 text-sm text-gray-400 font-mono">
              {writing.date}
            </time>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}