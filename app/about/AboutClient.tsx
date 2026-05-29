"use client";

import { motion, Variants } from "framer-motion";
import MarkdownContent from "@/components/MarkdownContent";

interface AboutClientProps {
  aboutData: {
    title: string;
    subtitle: string;
    avatar: string;
    status: string;
    bio: string;
    bio2: string;
    location: string;
    education: string;
    currentlyLearning: string;
    currentlyLearningText: string;
    whatIDo: string;
    whatIDoItem1: string;
    whatIDoItem2: string;
    whatIDoItem3: string;
    whatImNot: string;
    notDesigner: string;
    notMobile: string;
    notDevops: string;
    technicalFocus: string;
    skills: string[];
  };
  markdownContent: string;
}

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

const whatIDoItems = [
  { icon: "🎨", textKey: "whatIDoItem1" as const },
  { icon: "⚡", textKey: "whatIDoItem2" as const },
  { icon: "🔧", textKey: "whatIDoItem3" as const },
];

export default function AboutClient({ aboutData, markdownContent }: AboutClientProps) {
  const { t } = { t: (key: string) => key } as { t: (key: string) => string };

  return (
    <div className="relative overflow-hidden">
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

              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img src="/avatar.jpg" alt="Chen Mingtao" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-cyan-500/20 dark:to-purple-500/20 border border-blue-100 dark:border-white/10 mb-6"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
            <span className="text-sm text-gray-600 dark:text-white/70">{aboutData.status}</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            {aboutData.title}
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
            <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-center relative z-10">
              <p className="text-lg font-medium text-gray-800 dark:text-white/90">{aboutData.bio}</p>
              <p>{aboutData.bio2}</p>
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
            {aboutData.whatIDo}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {whatIDoItems.map((item) => (
              <motion.div
                key={item.textKey}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-cyan-500/10 dark:to-purple-500/10 border border-blue-100 dark:border-white/10 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-700 dark:text-white/70">{aboutData[item.textKey]}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Technical Skills */}
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
            {aboutData.technicalFocus}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {aboutData.skills.map((skill) => (
              <motion.div
                key={skill}
                className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-400/30 transition-colors"
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
            {aboutData.whatImNot}
          </motion.h2>
          <motion.ul className="space-y-3" variants={containerVariants}>
            {[aboutData.notDesigner, aboutData.notMobile, aboutData.notDevops].map((item, index) => (
              <motion.li
                key={index}
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
            {aboutData.currentlyLearning}
          </motion.h2>
          <motion.p className="text-gray-700 dark:text-white/70" variants={itemVariants}>
            {aboutData.currentlyLearningText}
          </motion.p>
        </motion.section>

        {/* Markdown Content */}
        <section className="mt-12">
          <MarkdownContent content={markdownContent} />
        </section>
      </div>
    </div>
  );
}