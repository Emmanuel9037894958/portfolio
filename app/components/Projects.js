
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Layers3,
  ExternalLink,
  Database,
  Server,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "AutoConnet",
    type: "Full-Stack Marketplace",
    number: "01",
    description:
      "A live service marketplace connecting customers with skilled professionals. Built with provider registration, service discovery, profile management, payment verification, database integration, and an admin approval workflow.",
    image: null,
    accent: "from-emerald-500/20 to-teal-500/5",
    technologies: [
      "Next.js",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Paystack",
      "Authentication",
    ],
    link: "https://auto-connet.vercel.app/",
    linkLabel: "Visit Live Website",
    featured: true,
  },
  {
    name: "ZentraPay",
    type: "Payment Gateway Concept",
    number: "02",
    image: "/zentrapay-payment.png",
    description:
      "A payment-focused digital platform concept designed around smooth transactions and a straightforward user experience.",
    accent: "from-emerald-500/20 to-teal-500/5",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "EnergyVest",
    type: "Investment Platform Concept",
    number: "03",
    image: "/energyvest-investment.png",
    description:
      "An investment platform concept focused on presenting financial information through a clear and organized interface.",
    accent: "from-blue-500/20 to-cyan-500/5",
    technologies: ["React", "JavaScript", "Responsive Design"],
  },
  {
    name: "Macdeo-Resources",
    type: "Business Website Concept",
    number: "04",
    image: "/macdeo-business.png",
    description:
      "A business website concept created to establish an online presence and communicate business information professionally.",
    accent: "from-orange-500/20 to-amber-500/5",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Admin Dashboard",
    type: "Management System UI",
    number: "05",
    image: "/admin-dashboard.png",
    description:
      "A dashboard interface concept for presenting information, organizing data, and supporting administrative workflows.",
    accent: "from-purple-500/20 to-violet-500/5",
    technologies: ["React", "JavaScript", "Dashboard UI"],
  },
  {
    name: "School Website",
    type: "Educational Website Concept",
    number: "06",
    image: "/school-website.png",
    description:
      "An educational website concept designed to make school information and important resources accessible online.",
    accent: "from-pink-500/20 to-rose-500/5",
    technologies: ["Next.js", "JavaScript", "Responsive Design"],
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative w-[310px] shrink-0 overflow-hidden rounded-2xl border bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/10 dark:bg-gray-900 sm:w-[390px] ${
        project.featured
          ? "border-emerald-500/40"
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project screenshot`}
            fill
            sizes="(max-width: 640px) 310px, 390px"
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-5"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7">
            <div className="w-full rounded-2xl border border-white/20 bg-gray-950/95 p-5 text-white shadow-2xl sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Globe size={22} />
                  </div>
                  <div>
                    <p className="text-lg font-bold">AutoConnet</p>
                    <p className="text-[10px] text-gray-400">
                      Connecting Skills. Creating Opportunities.
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Server className="text-emerald-400" size={19} />
                  <p className="mt-2 text-xs font-semibold">Backend</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Application logic
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Database className="text-emerald-400" size={19} />
                  <p className="mt-2 text-xs font-semibold">Database</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Supabase
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <ShieldCheck className="text-emerald-400" size={19} />
                  <p className="mt-2 text-xs font-semibold">Payments</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Paystack
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs text-gray-400">
                A real marketplace built to connect customers and skilled
                service providers.
              </p>
            </div>
          </div>
        )}

        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          Project {project.number}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {project.type}
          </span>
          {project.link && (
            <ExternalLink size={17} className="shrink-0 text-emerald-500" />
          )}
        </div>

        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>

        <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
          <span className="text-xs font-medium text-gray-500">
            {project.featured ? "Full-Stack Development" : "Web Development"}
          </span>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400"
            >
              {project.linkLabel}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="text-xs font-semibold text-gray-500">
              Concept Project
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-gray-950 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <Layers3
              size={15}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              My Portfolio
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Selected{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            I build complete web applications, combining modern frontend
            experiences with backend functionality, database integration,
            authentication, and practical business solutions.
          </p>
        </motion.div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-gray-950 sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-gray-950 sm:w-24" />

          <div className="projects-marquee flex w-max gap-6 py-4">
            {duplicatedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.name}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500 dark:text-gray-400">
          Explore my work as the projects move across the screen
        </p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-6xl px-6"
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
              Building Beyond Ideas
            </span>
            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
              I enjoy turning ideas into useful digital products. From
              responsive user interfaces to backend systems, APIs,
              authentication, and database integration, I focus on building
              complete web applications that solve practical problems.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-marquee {
          animation: projects-scroll 45s linear infinite;
          will-change: transform;
        }

        .projects-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes projects-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
