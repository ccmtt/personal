"use client";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const skills = [
  "Full-stack web development",
  "System design & architecture",
  "TypeScript / JavaScript",
  "React and Next.js",
  "Node.js backend services",
  "API design & integration",
];

export default function About() {
  const { t } = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
            CMT
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
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
          className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-center"
          variants={itemVariants}
        >
          <p>{t.about.bio}</p>
          <p>{t.about.bio2}</p>
        </motion.div>
      </motion.section>

      {/* Technical Focus */}
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
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              variants={itemVariants}
            >
              <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-3" />
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* What I Do */}
      <motion.section
        className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4"
          variants={itemVariants}
        >
          {t.about.whatIDo}
        </motion.h2>
        <motion.div className="space-y-4 text-gray-700 dark:text-gray-300" variants={itemVariants}>
          <p>{t.about.whatIDoText1}</p>
          <p>{t.about.whatIDoText2}</p>
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
          {[t.about.notDesigner, t.about.notMobile, t.about.notDevops].map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <span className="mr-3 text-gray-400 dark:text-gray-500">—</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Currently Learning */}
      <motion.section
        className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4"
          variants={itemVariants}
        >
          {t.about.currentlyLearning}
        </motion.h2>
        <motion.p className="text-gray-700 dark:text-gray-300" variants={itemVariants}>
          {t.about.currentlyLearningText}
        </motion.p>
      </motion.section>
    </div>
  );
}