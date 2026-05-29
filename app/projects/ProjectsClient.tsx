"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import MarkdownContent from "@/components/MarkdownContent";

interface ProjectMeta {
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  status: string;
  tags: string[];
  gradient: string;
  link: string;
  order: number;
}

interface ProjectsClientProps {
  projects: ProjectMeta[];
}

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "tool", label: "Tools" },
  { id: "experiment", label: "Experiments" },
];

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-white/60">
            A collection of my work and side projects
          </p>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:border-blue-300 dark:hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-10 space-y-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
              layout
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.02] transition-all duration-300 overflow-hidden relative"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Background glow on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`} />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-cyan-500/20 text-green-700 dark:text-cyan-300 border border-green-200 dark:border-cyan-500/30 font-medium">
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-white/40">{project.year}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/50 border border-gray-200 dark:border-white/10">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300/90 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-white/50 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/50 border border-gray-100 dark:border-white/10 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}