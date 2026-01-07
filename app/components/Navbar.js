"use client";

import { useState } from "react";
import Image from "next/image";

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
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo (fixed height container) */}
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
        scale-160
        transition-transform duration-200
        hover:scale-[1.6]
      "
                priority
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm text-gray-700">
            {links.map((link) => (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="cursor-pointer transition group-hover:text-gray-900"
                >
                  {link.label}
                </a>
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-gray-900 mb-1"></span>
            <span className="block w-6 h-[2px] bg-gray-900 mb-1"></span>
            <span className="block w-6 h-[2px] bg-gray-900"></span>
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
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          {/* Mobile logo (same rule) */}
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
            className="text-2xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-sm text-gray-700">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-600 transition"
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
