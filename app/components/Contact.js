
"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    title: "Email",
    value: "digitaldynamoinnovation948@gmail.com",
    description: "Send an email for enquiries and opportunities.",
    href: "mailto:digitaldynamoinnovation948@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+234 903 789 4958",
    description: "Call for direct communication.",
    href: "tel:+2349037894958",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "+234 912 158 2822",
    description: "Let's have a conversation.",
    href: "https://wa.me/2349121582822",
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-gray-900 sm:py-28 scroll-mt-24"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <Send
              size={15}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              Contact
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Let's Talk{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Business
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            Have a project, job opportunity, business enquiry, or collaboration
            in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  contact.title === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400">
                    <Icon size={22} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">
                  {contact.title}
                </h3>

                <p className="mt-2 break-all text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {contact.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {contact.description}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
              Get in touch
            </span>

            <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Let's make it happen.
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Your next project or opportunity could start with one message.
            </p>
          </div>

          <a
            href="mailto:digitaldynamoinnovation948@gmail.com"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20"
          >
            Send an Email
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
