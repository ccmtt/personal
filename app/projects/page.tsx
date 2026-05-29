"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "personal-site",
    title: "Personal Website",
    description:
      "This developer-focused personal site built with Next.js, TypeScript, and Tailwind CSS. Includes smooth animations and a clean, minimal design.",
    status: "Active",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: null,
  },
];

export default function Projects() {
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
          Projects
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          A collection of projects I&apos;ve worked on. The personal site itself is the
          first entry.
        </motion.p>
      </motion.section>

      <motion.div
        className="mt-12 space-y-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className="p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                {project.status}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}