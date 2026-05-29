"use client";

import { motion } from "framer-motion";

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
          About
        </motion.h1>
        <motion.div
          className="prose prose-lg text-gray-700 leading-relaxed space-y-4"
          variants={itemVariants}
        >
          <p>
            Software developer with experience in building web applications and
            distributed systems. I enjoy solving complex problems and writing
            clean, maintainable code that makes a difference.
          </p>
          <p>
            This site serves as my digital garden — a place to share projects,
            write about technical topics, and document my learning journey.
          </p>
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
          Technical Focus
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
          What I Do
        </motion.h2>
        <motion.div className="space-y-4 text-gray-700" variants={itemVariants}>
          <p>
            I build web applications, APIs, and developer tools. My focus is on
            creating reliable, efficient, and user-friendly software solutions.
          </p>
          <p>
            I believe in writing code that is not just functional, but also
            readable and maintainable. Good architecture decisions early on save
            time and headaches later.
          </p>
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
          What I&apos;m Not
        </motion.h2>
        <motion.ul
          className="space-y-2 text-gray-600"
          variants={containerVariants}
        >
          {[
            "Not a UI/UX designer — I focus on implementation",
            "Not focused on mobile apps — web is my canvas",
            "Not a DevOps specialist — I collaborate with those who are",
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
          Currently Learning
        </motion.h2>
        <motion.p className="text-gray-700" variants={itemVariants}>
          System design patterns, performance optimization, and exploring new
          web technologies that emerge from the React ecosystem.
        </motion.p>
      </motion.section>
    </div>
  );
}