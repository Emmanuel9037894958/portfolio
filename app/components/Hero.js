
import Image from "next/image";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  Code2,
  Database,
  Server,
  Layers3,
  Terminal,
  Globe,
} from "lucide-react";

const technologies = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Next.js API Routes",
  "REST APIs",
  "Supabase",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Authentication",
  "Tailwind CSS",
];

const developmentAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Responsive and interactive user interfaces",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Server-side logic and REST API development",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Database design, authentication and data management",
  },
  {
    icon: Layers3,
    title: "Deployment",
    description: "Building and deploying production applications",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-gray-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">
          {/* Text content */}
          <div className="order-2 md:order-1">

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Amamchukwu
              <span className="mt-1 block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Emmanuel.
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold leading-relaxed text-gray-800 sm:text-2xl dark:text-gray-200">
              Full-Stack Developer building complete web applications from
              frontend to backend.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              I'm a Full-Stack Developer passionate about building functional,
              scalable and user-focused digital products. I develop responsive
              interfaces, build backend systems and REST APIs, implement
              authentication, and integrate databases to deliver complete web
              applications that solve real-world problems.
            </p>

            {/* Action buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 dark:bg-emerald-600 dark:shadow-emerald-950/30 dark:hover:bg-emerald-500"
              >
                Explore My Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
              >
                <Mail size={16} />
                Let's Work Together
              </a>
            </div>

            {/* Social links */}
            <div className="mt-9 flex items-center gap-5">
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                FIND ME ON
              </span>

              <a
                href="https://github.com/Emmanuel9037894958"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                <Github size={21} />
              </a>

              <a
                href="mailto:digitaldynamoinnovation948@gmail.com"
                aria-label="Send me an email"
                className="text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                <Mail size={21} />
              </a>
            </div>
          </div>
          

          {/* Profile image */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">
              {/* Soft background glow */}
              <div className="absolute inset-5 rounded-full bg-emerald-500/20 blur-3xl" />

              {/* Animated gradient ring */}
              <div className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#10b981,#8b5cf6,#ec4899,#10b981)] motion-reduce:animate-none" />

              {/* Inner background */}
              <div className="absolute inset-[5px] rounded-full bg-white dark:bg-gray-950" />

              {/* Profile image */}
              
              <div className="absolute inset-[10px] overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-gray-900/10 dark:border-gray-900">
                <Image
                  src="/CEO2.jpg"
                  alt="Amamchukwu Emmanuel, Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating technology label */}
              <div className="absolute -bottom-3 left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <Code2 size={20} />
                </span>

                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">
                    Full-Stack Development
                  </p>

                  <p className="text-[10px] text-gray-500 dark:text-gray-400">
                    Frontend · Backend · Database
                  </p>
                </div>
              </div>

              {/* Floating backend indicator */}
              <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:flex">
                <Database
                  size={17}
                  className="text-emerald-600 dark:text-emerald-400"
                />

                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  Database Integration
                </span>
              </div>

              {/* Floating API indicator */}
              <div className="absolute -left-3 top-24 hidden items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:flex">
                <Terminal
                  size={17}
                  className="text-purple-600 dark:text-purple-400"
                />

                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  Backend APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Development areas */}
        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 dark:border-gray-800 md:grid-cols-4">
          {developmentAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-emerald-50 p-2.5 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Icon size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 hidden items-center justify-center gap-2 text-xs font-medium tracking-widest text-gray-400 md:flex dark:text-gray-500">
          SCROLL TO EXPLORE
          <ArrowDown size={15} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
