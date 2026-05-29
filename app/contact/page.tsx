"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";
import { useState } from "react";
import { LargeBlob, CircleDecor, DotsCluster, StarDecor, PlusSigns } from "@/components/HandDrawn";

const socialLinks = [
  {
    name: "GitHub",
    username: "@ccmtt",
    url: "https://github.com/ccmtt",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    gradient: "from-gray-700 to-gray-900",
  },
  {
    name: "WeChat",
    username: "15051113629",
    url: "",
    icon: (
      <img src="/wechat.svg" className="w-6 h-6" alt="WeChat" />
    ),
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Phone",
    username: "15051113629",
    url: "tel:+8615051113629",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
];

const contactInfo = [
  {
    title: "WeChat Preferred",
    description: "Add me on WeChat for quicker response. Usually reply within a few hours.",
    icon: "💬",
    color: "green",
  },
  {
    title: "Call Available",
    description: "Available for calls during business hours. For urgent matters, text first.",
    icon: "📱",
    color: "blue",
  },
];

export default function Contact() {
  const { t } = useLocale();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <LargeBlob className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-30 dark:opacity-20 animate-spin-slow" style={{ animationDuration: "35s" }} />
      <LargeBlob className="absolute -bottom-60 -left-40 w-[700px] h-[700px] opacity-25 dark:opacity-15" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
      <CircleDecor className="absolute top-20 right-[8%] w-40 h-40 opacity-60 dark:opacity-40 animate-float" />
      <CircleDecor className="absolute bottom-32 left-[5%] w-32 h-32 opacity-50 dark:opacity-35" />
      <DotsCluster className="absolute top-1/3 left-[3%] w-32 h-32 opacity-70 dark:opacity-50" />
      <PlusSigns className="absolute top-1/4 right-[5%] w-12 h-12 opacity-50" />
      <StarDecor className="absolute bottom-1/4 right-[10%] w-5 h-5 animate-pulse opacity-70" />

      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 relative z-10">
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            {t.contact.description}
          </motion.p>
        </motion.section>

        {/* Social Links */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className={`group relative p-6 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-cyan-400/30 transition-all duration-300 overflow-hidden ${social.url ? 'cursor-pointer' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + index * 0.1 } }}
              whileHover={social.url ? { y: -4 } : {}}
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
              onClick={() => {
                if (social.name === 'WeChat') {
                  navigator.clipboard.writeText(social.username);
                }
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white mb-4 shadow-lg ${hoveredSocial === social.name ? "scale-110" : ""} transition-transform duration-300`}>
                  {social.icon}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-white/40">{social.name}</div>
                <div className="text-base font-medium text-gray-900 dark:text-white mt-1">{social.username}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 + index * 0.1 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl mb-3">{info.icon}</div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">{info.title}</h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mt-1">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}