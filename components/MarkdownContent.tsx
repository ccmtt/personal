"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <motion.div
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4" variants={itemVariants}>
              {children}
            </motion.h1>
          ),
          h2: ({ children }) => (
            <motion.h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3" variants={itemVariants}>
              {children}
            </motion.h2>
          ),
          h3: ({ children }) => (
            <motion.h3 className="text-xl font-medium text-gray-800 dark:text-white mt-6 mb-2" variants={itemVariants}>
              {children}
            </motion.h3>
          ),
          p: ({ children }) => (
            <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" variants={itemVariants}>
              {children}
            </motion.p>
          ),
          ul: ({ children }) => (
            <motion.ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4" variants={itemVariants}>
              {children}
            </motion.ul>
          ),
          ol: ({ children }) => (
            <motion.ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4" variants={itemVariants}>
              {children}
            </motion.ol>
          ),
          li: ({ children }) => (
            <motion.li variants={itemVariants}>{children}</motion.li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-800 dark:text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-500 dark:text-gray-400">{children}</em>
          ),
          a: ({ href, children }) => (
            <motion.a
              href={href}
              className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 underline transition-colors"
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </motion.a>
          ),
          blockquote: ({ children }) => (
            <motion.blockquote
              className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
              variants={itemVariants}
            >
              {children}
            </motion.blockquote>
          ),
          code: ({ children }) => (
            <code className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-sm font-mono text-purple-600 dark:text-purple-400">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <motion.pre
              className="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"
              variants={itemVariants}
            >
              {children}
            </motion.pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}