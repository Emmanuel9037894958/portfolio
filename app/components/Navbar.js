"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header
        className="
    w-full
    sticky top-0 z-50
    bg-gradient-to-r
    border-b
    border-purple-200
    dark:border-gray-800
    shadow-[0_2px_12px_rgba(0,0,0,0.35)]
    backdrop-blur bg-white/80
  "
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center h-10">
            <div className="h-10 w-auto overflow-visible">
              <Image
                src="/logo.png"
                alt="Amamchukwu Emmanuel Logo"
                width={300}
                height={300}
                className="
                  h-full
                  w-auto
                  object-contain
                  scale-150
                  transition-transform duration-200
                  hover:scale-[1.6]
                "
                priority
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-sm font-bold text-gray-700 dark:text-gray-300">
            {links.map((link) => (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="transition group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  {link.label}
                </a>

                {/* Underline */}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-[2px]
                    w-0
                    bg-green-500
                    dark:bg-white
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-[2px] bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-[2px] bg-gray-900 dark:bg-gray-100"></span>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg transform backdrop:backdrop-blur transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          {/* Mobile Logo */}
          <div className="h-10 w-auto">
            <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={300}
              className="h-full w-auto object-contain"
            />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl leading-none text-gray-900 dark:text-gray-100"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-md text-gray-900 dark:text-gray-300">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-gray-900 dark:hover:text-white transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
