"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Avatar with glow */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-cyan-500/40 rounded-full w-24 h-24 animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  CMT
                </div>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                {t.home.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl text-blue-200/80 font-light"
              variants={itemVariants}
            >
              {t.home.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t.home.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              variants={itemVariants}
            >
              <Link
                href="/projects"
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 border border-white/10"
              >
                View Projects
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full border border-blue-500/30 text-blue-200 font-medium hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator with glow */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border border-cyan-500/30 flex justify-center pt-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/70 mb-8 text-center">
              Featured Project
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link
              href="/projects/personal-site"
              className="group block p-8 rounded-2xl bg-gray-900/50 border border-blue-500/20 hover:border-cyan-400/40 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      {t.projects.status}
                    </span>
                    <span className="text-xs text-gray-500">2026</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {t.home.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Personal Website
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-md bg-gray-800/50 text-blue-300/80 font-mono border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/70">
              Recent Writing
            </h2>
            <Link
              href="/writing"
              className="text-sm text-blue-400 hover:text-cyan-400 transition-colors"
            >
              View all →
            </Link>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {recentWritings.map((writing) => (
              <motion.div key={writing.slug} variants={itemVariants}>
                <Link
                  href={`/writing/${writing.slug}`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-gray-900/50 border border-blue-500/20 hover:border-cyan-400/40 hover:bg-gray-900/70 transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-white group-hover:text-cyan-400 truncate transition-colors">
                      {writing.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {writing.date}
                    </p>
                  </div>
                  <div className="ml-4">
                    <svg
                      className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-gray-900/50 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-blue-200/70 mb-8 max-w-md mx-auto">
              {t.home.getInTouchDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 border border-white/10"
            >
              {t.home.contactMe}
              <svg
                className="ml-2 w-5 h-5"
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
        </div>
      </section>
    </div>
  );
}