
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Menu,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  // Track the currently visible section
  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "#top";

      sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;

        if (position <= 150) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors duration-300 dark:border-gray-700/60 dark:bg-gray-950/90">
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex h-12 items-center"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="Amamchukwu Emmanuel"
              width={180}
              height={70}
              priority
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={
                      active === link.href ? "location" : undefined
                    }
                    className={`group relative py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                      active === link.href
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-emerald-500 transition-all duration-300 ${
                        active === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              Let's Talk
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-900 transition-colors hover:border-emerald-500 hover:text-emerald-600 lg:hidden dark:border-gray-700 dark:text-white"
          >
            <Menu size={23} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(85%,380px)] flex-col border-l border-gray-200 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden dark:border-gray-700 dark:bg-gray-950 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-[76px] items-center justify-between border-b border-gray-200 px-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Code2 size={22} />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Emmanuel
              </p>

              <p className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Full-Stack Developer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-emerald-500 hover:text-white dark:bg-gray-800 dark:text-white"
          >
            <X size={21} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 px-6 py-9">

          <ul className="flex flex-col gap-3">
            {links.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={closeMenu}
                  aria-current={
                    active === link.href ? "location" : undefined
                  }
                  className={`group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold transition-all duration-300 ${
                    active === link.href
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Availability */}
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Open to opportunities
              </p>
            </div>

            <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
              Available for full-stack development roles, remote
              opportunities, freelance projects, and collaborations.
            </p>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-gray-200 p-6 dark:border-gray-800">
          <a
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
          >
            Let's work together
            <ArrowUpRight size={18} />
          </a>

          <p className="mt-5 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Amamchukwu Emmanuel
          </p>
        </div>
      </aside>
    </>
  );
}
