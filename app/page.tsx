"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";
import {
  LargeBlob,
  DotsCluster,
  PlusSigns,
  CircleDecor,
  StarDecor,
  HashMarks,
} from "@/components/HandDrawn";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const recentWritings = [
  { slug: "getting-started-with-nextjs", title: "Getting Started with Next.js", date: "2026-05-20" },
  { slug: "typescript-best-practices", title: "TypeScript Best Practices", date: "2026-05-15" },
];

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Large background decorations - clearly visible */}
        <LargeBlob className="absolute -top-40 -right-40 w-[600px] h-[600px] animate-spin-slow opacity-40 dark:opacity-25" style={{ animationDuration: "30s" }} />
        <LargeBlob className="absolute -bottom-60 -left-60 w-[700px] h-[700px] opacity-30 dark:opacity-20" style={{ animationDuration: "25s", animationDirection: "reverse" }} />

        {/* Side decorations */}
        <CircleDecor className="absolute top-20 left-[5%] w-32 h-32 opacity-70 dark:opacity-50 animate-float" />
        <CircleDecor className="absolute bottom-40 right-[8%] w-24 h-24 opacity-60 dark:opacity-40" />
        <DotsCluster className="absolute top-1/3 right-[5%] w-36 h-36 opacity-80 dark:opacity-60" />
        <DotsCluster className="absolute bottom-1/4 left-[3%] w-28 h-28 opacity-70 dark:opacity-50" />

        {/* Top and bottom decorations */}
        <PlusSigns className="absolute top-[15%] left-1/2 -translate-x-1/2 w-16 h-16 opacity-60" />
        <PlusSigns className="absolute bottom-[20%] right-[15%] w-12 h-12 opacity-50" />
        <HashMarks className="absolute top-[25%] right-[12%] w-16 h-6 opacity-50" />
        <HashMarks className="absolute bottom-[30%] left-[10%] w-14 h-5 opacity-50" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            className="space-y-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Avatar with multiple decorative layers */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                {/* Outer decorative rings */}
                <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-blue-400/50 dark:border-cyan-400/40" style={{ transform: "scale(1.5)" }} />
                <div className="absolute inset-0 rounded-full border-[2px] border-purple-400/40 dark:border-purple-400/30" style={{ transform: "scale(1.8)" }} />

                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 blur-xl" />

                {/* Avatar circle */}
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
                  CMT
                </div>

                {/* Floating stars around avatar */}
                <StarDecor className="absolute -top-2 -left-2 w-6 h-6 animate-pulse" />
                <StarDecor className="absolute -top-2 -right-2 w-5 h-5 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <StarDecor className="absolute -bottom-2 -left-2 w-4 h-4 animate-pulse" style={{ animationDelay: "1s" }} />
                <StarDecor className="absolute -bottom-2 -right-2 w-5 h-5 animate-pulse" style={{ animationDelay: "1.5s" }} />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" variants={itemVariants}>
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent">
                {t.home.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="text-xl sm:text-2xl text-gray-600 dark:text-white/70 font-light" variants={itemVariants}>
              {t.home.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p className="text-base sm:text-lg text-gray-500 dark:text-white/50 max-w-lg mx-auto leading-relaxed" variants={itemVariants}>
              {t.home.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" variants={itemVariants}>
              <Link
                href="/projects"
                className="group px-8 py-3.5 rounded-full bg-blue-600 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 border border-blue-600 dark:border-white/20 text-white dark:text-white font-medium dark:backdrop-blur-sm hover:bg-blue-700 dark:hover:from-cyan-500/30 dark:hover:via-blue-500/30 dark:hover:to-purple-500/30 transition-all duration-300"
              >
                View Projects
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/70 font-medium hover:border-blue-400 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all duration-300"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-white/20 flex items-start justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gradient-to-b from-cyan-400/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-gray-50/50 dark:bg-transparent relative">
        <div className="max-w-2xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-white/40 mb-10 text-center">
              Featured Project
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href="/projects/personal-site"
              className="group block p-8 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-cyan-500/20 text-green-700 dark:text-cyan-300 border border-green-200 dark:border-cyan-500/30">
                      {t.projects.status}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-white/40">2026</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-300/90 transition-colors">
                    {t.home.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/50 leading-relaxed">Personal Website</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-cyan-500/20 dark:to-purple-500/20 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 dark:group-hover:border-cyan-400/40 transition-all">
                  <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 border border-gray-200 dark:border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div className="flex items-center justify-between mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-white/40">Recent Writing</h2>
            <Link href="/writing" className="text-sm text-blue-600 dark:text-cyan-400/70 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
              View all →
            </Link>
          </motion.div>

          <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {recentWritings.map((writing) => (
              <motion.div key={writing.slug} variants={itemVariants}>
                <Link
                  href={`/writing/${writing.slug}`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-400/30 hover:bg-gray-50 dark:hover:bg-white/[0.08] transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white/90 group-hover:text-blue-600 dark:group-hover:text-cyan-300/90 truncate">
                      {writing.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/40 mt-1">{writing.date}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 dark:text-white/30 group-hover:text-blue-500 dark:group-hover:text-cyan-400/60 group-hover:translate-x-1 transition-all ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 border border-blue-100 dark:border-white/10 shadow-sm dark:backdrop-blur-sm text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background decoration */}
            <CircleDecor className="absolute -top-10 -right-10 w-40 h-40 opacity-30" />
            <CircleDecor className="absolute -bottom-10 -left-10 w-32 h-32 opacity-20" />

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Let&apos;s Connect</h2>
            <p className="text-gray-600 dark:text-white/50 mb-8 max-w-md mx-auto relative z-10">{t.home.getInTouchDescription}</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-blue-600 dark:bg-white/10 border border-blue-600 dark:border-white/20 text-white dark:text-white font-medium hover:bg-blue-700 dark:hover:bg-white/15 dark:hover:border-white/30 transition-all duration-300 relative z-10"
            >
              {t.home.contactMe}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}