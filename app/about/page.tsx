"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";
import {
  LargeBlob,
  DotsCluster,
  CircleDecor,
  StarDecor,
  Zigzag,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const skills = [
  { name: "Full-stack Web Development", level: 90 },
  { name: "System Design & Architecture", level: 75 },
  { name: "TypeScript / JavaScript", level: 95 },
  { name: "React and Next.js", level: 92 },
  { name: "Node.js Backend Services", level: 85 },
  { name: "API Design & Integration", level: 88 },
];

const whatIDoItems = [
  { icon: "🎨", text: "Turning ideas into reality through code" },
  { icon: "⚡", text: "Building performant and scalable systems" },
  { icon: "🔧", text: "Solving complex problems with elegant solutions" },
];

export default function About() {
  const { t } = useLocale();

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <LargeBlob className="absolute -top-40 -right-20 w-[500px] h-[500px] opacity-30 dark:opacity-20 animate-spin-slow" style={{ animationDuration: "35s" }} />
      <LargeBlob className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-25 dark:opacity-15" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
      <CircleDecor className="absolute top-40 right-[5%] w-40 h-40 opacity-60 dark:opacity-40 animate-float" />
      <CircleDecor className="absolute bottom-60 left-[3%] w-32 h-32 opacity-50 dark:opacity-35" />
      <DotsCluster className="absolute top-1/4 left-[2%] w-32 h-32 opacity-70 dark:opacity-50" />
      <Zigzag className="absolute top-1/3 right-[8%] w-24 h-8 opacity-50" />
      <StarDecor className="absolute top-20 left-1/4 w-5 h-5 animate-pulse opacity-70" />

      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="relative inline-block">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-purple-400/40 dark:border-purple-400/30" style={{ transform: "scale(1.3)" }} />
              <div className="absolute inset-0 rounded-full border-[1px] border-blue-400/30 dark:border-blue-400/20" style={{ transform: "scale(1.5)" }} />

              <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-2xl">
                CMT
              </div>

              <StarDecor className="absolute -top-1 -left-1 w-6 h-6 animate-pulse" />
              <StarDecor className="absolute -top-1 -right-1 w-5 h-5 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <StarDecor className="absolute -bottom-1 -left-1 w-4 h-4 animate-pulse" style={{ animationDelay: "1s" }} />
              <StarDecor className="absolute -bottom-1 -right-1 w-5 h-5 animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-cyan-500/20 dark:to-purple-500/20 border border-blue-100 dark:border-white/10 mb-6"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
            <span className="text-sm text-gray-600 dark:text-white/70">Available for projects</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            {t.about.title}
          </motion.h1>
        </motion.section>

        {/* Bio Section */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="relative p-8 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 shadow-sm"
            variants={itemVariants}
          >
            <CircleDecor className="absolute -top-8 -right-8 w-32 h-32 opacity-20" />
            <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-center relative z-10">
              <p className="text-lg font-medium text-gray-800 dark:text-white/90">{t.about.bio}</p>
              <p>{t.about.bio2}</p>
            </div>
          </motion.div>
        </motion.section>

        {/* What I Do - Grid Cards */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6 text-center"
            variants={itemVariants}
          >
            {t.about.whatIDo}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {whatIDoItems.map((item, index) => (
              <motion.div
                key={item.text}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-cyan-500/10 dark:to-purple-500/10 border border-blue-100 dark:border-white/10 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-700 dark:text-white/70">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section with Progress Bars */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6 text-center"
            variants={itemVariants}
          >
            {t.about.technicalFocus}
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-400/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-white/90">{skill.name}</span>
                  <span className="text-xs text-gray-400 dark:text-white/40">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* What I'm Not */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6"
            variants={itemVariants}
          >
            {t.about.whatImNot}
          </motion.h2>
          <motion.ul className="space-y-3" variants={containerVariants}>
            {[t.about.notDesigner, t.about.notMobile, t.about.notDevops].map((item, index) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:border-red-300 dark:hover:border-red-500/30 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <span className="mr-3 text-red-400 dark:text-red-400/70">✕</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Currently Learning */}
        <motion.section
          className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-100 dark:border-green-500/20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-4"
            variants={itemVariants}
          >
            {t.about.currentlyLearning}
          </motion.h2>
          <motion.p className="text-gray-700 dark:text-white/70" variants={itemVariants}>
            {t.about.currentlyLearningText}
          </motion.p>
          <motion.div className="mt-4 flex flex-wrap gap-2" variants={itemVariants}>
            {["Rust", "WebAssembly", "Edge Computing"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}