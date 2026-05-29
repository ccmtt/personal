"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="max-w-2xl mx-auto flex gap-6 p-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-blue-600"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}