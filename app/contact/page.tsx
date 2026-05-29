"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

export default function Contact() {
  const { t } = useLocale();

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
          {t.contact.title}
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          {t.contact.description}
        </motion.p>
      </motion.section>

      <motion.div
        className="mt-12 space-y-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        <motion.div
          className="p-6 rounded-xl border border-gray-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          <h2 className="text-lg font-semibold mb-2">{t.contact.email}</h2>
          <p className="text-gray-600">{t.contact.emailDescription}</p>
          <a
            href="mailto:chenmingtao@example.com"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            chenmingtao@example.com
          </a>
        </motion.div>

        <motion.div
          className="p-6 rounded-xl border border-gray-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          <h2 className="text-lg font-semibold mb-2">{t.contact.github}</h2>
          <p className="text-gray-600">{t.contact.githubDescription}</p>
          <a
            href="https://github.com/ccmtt"
            className="text-blue-600 hover:underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ccmtt
          </a>
        </motion.div>

        <motion.div
          className="p-6 rounded-xl border border-gray-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          <h2 className="text-lg font-semibold mb-2">{t.contact.collaboration}</h2>
          <p className="text-gray-600">{t.contact.collaborationDescription}</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-50 rounded-xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          <h2 className="text-lg font-semibold mb-2">{t.contact.responseTime}</h2>
          <p className="text-gray-600">{t.contact.responseTimeDescription}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}