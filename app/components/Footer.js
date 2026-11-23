
"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
  Code2,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Emmanuel9037894958",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:digitaldynamoinnovation948@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2349121582822",
    icon: MessageCircle,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white pt-16 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Back to homepage"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-600/20">
                AE
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Amamchukwu Emmanuel
                </h3>

                <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
              Building complete web applications with modern frontend
              technologies, backend systems, APIs, and database integration.
              Turning ideas into useful digital products.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border border-gray-200
                      text-gray-600 transition-all duration-300
                      hover:-translate-y-1 hover:border-emerald-500
                      hover:bg-emerald-50 hover:text-emerald-600
                      dark:border-gray-800 dark:text-gray-400
                      dark:hover:bg-emerald-950/40
                      dark:hover:text-emerald-400
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-gray-600 transition-colors
                      hover:text-emerald-600
                      dark:text-gray-400 dark:hover:text-emerald-400
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0 transition-all duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Let's Connect
            </h4>

            <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Have a project, remote job opportunity, or collaboration in
              mind? Let's discuss how we can work together.
            </p>

            <a
              href="mailto:digitaldynamoinnovation948@gmail.com"
              className="
                mt-6 inline-flex items-center gap-2
                rounded-xl bg-emerald-600 px-5 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-1 hover:bg-emerald-700
                hover:shadow-lg hover:shadow-emerald-600/20
              "
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
              Awka, Anambra State, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-gray-200 py-7 text-center sm:flex-row sm:text-left dark:border-gray-800">
          <p className="text-xs leading-6 text-gray-500 dark:text-gray-400">
            © {currentYear} Amamchukwu Emmanuel. All rights reserved.
          </p>

          <a
            href="#top"
            aria-label="Back to top"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-gray-200
              text-gray-600 transition-all
              hover:-translate-y-1 hover:border-emerald-500
              hover:text-emerald-600
              dark:border-gray-800 dark:text-gray-400
              dark:hover:text-emerald-400
            "
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
