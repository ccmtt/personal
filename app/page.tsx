"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const recentWritings = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-05-20",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    date: "2026-05-15",
  },
];

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
      <motion.section
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
          variants={itemVariants}
        >
          {t.home.title}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>
        <motion.p
          className="text-gray-500 leading-relaxed max-w-lg"
          variants={itemVariants}
        >
          {t.home.description}
        </motion.p>
      </motion.section>

      <motion.section
        className="mt-16 sm:mt-20 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.home.projectsTitle}
        </motion.h2>
        <motion.div className="space-y-4" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Link
              href="/projects/personal-site"
              className="group block p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {t.home.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Personal Website
              </p>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/projects"
            className="inline-flex items-center mt-5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {t.home.viewAllProjects}
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-14 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.home.recentWritingTitle}
        </motion.h2>
        <motion.div className="space-y-4" variants={containerVariants}>
          {recentWritings.map((writing) => (
            <motion.div key={writing.slug} variants={itemVariants}>
              <Link
                href={`/writing/${writing.slug}`}
                className="group flex items-center text-sm hover:text-blue-600 transition-colors"
              >
                <time className="text-gray-400 font-mono text-xs">
                  {writing.date}
                </time>
                <span className="mx-3 text-gray-300">·</span>
                <span className="text-gray-700 group-hover:text-blue-600">
                  {writing.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/writing"
            className="inline-flex items-center mt-5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {t.home.viewAllWriting}
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-14 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-semibold text-gray-900">
            {t.home.getInTouchTitle}
          </h2>
          <p className="text-gray-500 mt-2 mb-5">
            {t.home.getInTouchDescription}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            {t.home.contactMe}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}