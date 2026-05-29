"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const projects = [
  {
    slug: "personal-site",
    title: "Personal Website",
    description: "This site itself - built with Next.js and Tailwind CSS",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <motion.section
        className="py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight"
          variants={itemVariants}
        >
          Chen Mingtao
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600"
          variants={itemVariants}
        >
          Software Developer. Building things with code.
        </motion.p>
        <motion.p
          className="mt-2 text-gray-500"
          variants={itemVariants}
        >
          Currently focused on full-stack development and system design.
        </motion.p>
      </motion.section>

      <motion.section
        className="py-8 border-t"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-lg font-semibold mb-4" variants={itemVariants}>
          Projects
        </motion.h2>
        <motion.div className="space-y-4" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Link
                href={`/projects/${project.slug}`}
                className="block p-4 rounded-lg border hover:border-blue-500 transition-colors"
              >
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/projects"
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
          >
            View all projects →
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-8 border-t"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-lg font-semibold mb-4" variants={itemVariants}>
          Recent Writing
        </motion.h2>
        <motion.div className="space-y-3" variants={containerVariants}>
          {recentWritings.map((writing) => (
            <motion.div key={writing.slug} variants={itemVariants}>
              <Link
                href={`/writing/${writing.slug}`}
                className="flex items-center text-sm hover:text-blue-600"
              >
                <span className="text-gray-500">{writing.date}</span>
                <span className="mx-2">·</span>
                <span>{writing.title}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/writing"
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
          >
            View all writing →
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-8 border-t"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-lg font-semibold mb-4" variants={itemVariants}>
          Get in Touch
        </motion.h2>
        <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
          Interested in working together or just want to say hi?
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}