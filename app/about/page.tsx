"use client";

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

export default function About() {
  const { t } = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <motion.section
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
          variants={itemVariants}
        >
          {t.about.title}
        </motion.h1>
        <motion.div
          className="prose prose-lg text-gray-700 leading-relaxed space-y-4"
          variants={itemVariants}
        >
          <p>{t.about.bio}</p>
          <p>{t.about.bio2}</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-12 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.about.technicalFocus}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {[
            "Full-stack web development",
            "System design & architecture",
            "TypeScript / JavaScript",
            "React and Next.js",
            "Node.js backend services",
            "API design & integration",
          ].map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <div className="flex items-center text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                {item}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-12 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.about.whatIDo}
        </motion.h2>
        <motion.div className="space-y-4 text-gray-700" variants={itemVariants}>
          <p>{t.about.whatIDoText1}</p>
          <p>{t.about.whatIDoText2}</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-12 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.about.whatImNot}
        </motion.h2>
        <motion.ul
          className="space-y-2 text-gray-600"
          variants={containerVariants}
        >
          {[
            t.about.notDesigner,
            t.about.notMobile,
            t.about.notDevops,
          ].map((item) => (
            <motion.li key={item} variants={itemVariants} className="flex items-start">
              <span className="mr-2 text-gray-400">—</span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section
        className="mt-12 pt-8 border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
          variants={itemVariants}
        >
          {t.about.currentlyLearning}
        </motion.h2>
        <motion.p className="text-gray-700" variants={itemVariants}>
          {t.about.currentlyLearningText}
        </motion.p>
      </motion.section>
    </div>
  );
}