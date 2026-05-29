"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="flex gap-6 p-4 border-b">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium transition-colors hover:text-blue-600 ${
            pathname === link.href ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}