"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";
import { useState, useRef } from "react";
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
    name: "Email",
    username: "chenmingtao@example.com",
    url: "mailto:chenmingtao@example.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Twitter",
    username: "@chenmingtao",
    url: "https://twitter.com/chenmingtao",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500",
  },
];

const contactInfo = [
  {
    title: "Open to Collaboration",
    description: "Interested in freelance projects, full-time opportunities, or creative collaborations",
    icon: "🤝",
    color: "blue",
  },
  {
    title: "Quick Response",
    description: "Usually respond within 24 hours. For urgent matters, reach out directly via email",
    icon: "⚡",
    color: "amber",
  },
];

export default function Contact() {
  const { t } = useLocale();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + index * 0.1 } }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
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
            </motion.a>
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

        {/* Contact Form */}
        <motion.form
          className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 shadow-sm"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`relative w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 ${
                isSubmitted
                  ? "bg-green-500"
                  : isSubmitting
                  ? "bg-gray-400 cursor-wait"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-xl hover:shadow-blue-500/25"
              }`}
              whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : isSubmitted ? "✓ Message Sent!" : "Send Message"}
              </span>
              {!isSubmitting && !isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}