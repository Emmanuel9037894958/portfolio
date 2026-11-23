
"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Laptop,
  Rocket,
  BriefcaseBusiness,
  ArrowUpRight,
  Server,
  Database,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive interfaces using React, Next.js, JavaScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing server-side functionality, application logic and REST APIs using Node.js, Express.js and Next.js API Routes.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Connecting applications to databases and managing application data using Supabase, PostgreSQL, MySQL, MongoDB and Firebase.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "Implementing user authentication, registration, login systems and access control for web applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-gray-50 transition-colors duration-300 dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="mb-5 flex items-center gap-3">
          

           
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* About content */}
            <div>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white md:text-5xl">
                I build complete digital solutions from{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  frontend to backend.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-gray-600 dark:text-gray-400">
                I'm Amamchukwu Emmanuel, a Full-Stack Developer passionate
                about building modern, responsive and functional web
                applications. I enjoy transforming ideas into complete digital
                products that combine excellent user experiences with reliable
                backend functionality.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
                My frontend development work involves JavaScript, React,
                Next.js and Tailwind CSS. On the backend, I work with Node.js,
                Express.js and Next.js API Routes to develop application logic,
                server-side functionality and REST APIs.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
                I also work with Supabase, PostgreSQL, MySQL, MongoDB and
                Firebase for database integration and application data
                management. My experience includes implementing authentication
                systems and connecting frontend applications to backend
                services.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
                Beyond writing code, I focus on building practical solutions
                that solve real-world problems, support business objectives and
                provide meaningful value to users. I continuously improve my
                skills by working on projects and exploring better development
                practices.
              </p>

              {/* Development stack */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Frontend",
                  "Backend",
                  "REST APIs",
                  "Databases",
                  "Authentication",
                  "Full-Stack Applications",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20"
              >
                Let's work together
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Full-stack highlights */}
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Full-stack development statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <Workflow size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  From User Interface to Complete Applications
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  I bring frontend interfaces, backend systems, APIs,
                  authentication and databases together to develop complete
                  web applications.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
