
import Image from "next/image";

import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  Code2,
  Database,
  Server,
  Layers3,
  Terminal,
} from "lucide-react";

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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#EDF2EC] py-24 transition-colors duration-500"
    >
      {/* Main Gradient Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #F5F6F1 0%, #EAF0E9 42%, #DCE9DE 75%, #E7EEE6 100%)",
        }}
      />

      {/* Subtle Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,35,29,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(23,35,29,0.07) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Decorative Gradient Lights */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-emerald-400/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-48 left-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-green-700/10 blur-[120px]" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute right-[8%] top-32 -z-10 hidden h-72 w-72 rounded-full border border-emerald-800/10 lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* Text Content */}
          <div className="order-2 md:order-1">

            {/* Name */}
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#17231D] sm:text-5xl lg:text-6xl">
              Amamchukwu

              <span className="mt-1 block bg-gradient-to-r from-[#176B46] via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Emmanuel.
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="mt-5 text-xl font-semibold leading-relaxed text-[#26382D] sm:text-2xl">
              Full-Stack Developer building complete web applications from
              frontend to backend.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-8 text-[#647067] sm:text-lg">
              I'm a Full-Stack Developer passionate about building functional,
              scalable and user-focused digital products. I develop responsive
              interfaces, build backend systems and REST APIs, implement
              authentication, and integrate databases to deliver complete web
              applications that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#172F23] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#176B46] hover:shadow-emerald-900/20"
              >
                Explore My Projects

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#AAB9AD] bg-white/40 px-6 py-3.5 text-sm font-semibold text-[#26382D] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-white/70 hover:text-[#176B46]"
              >
                <Mail size={16} />
                Let's Work Together
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-5">
              <span className="text-xs font-bold tracking-[0.15em] text-[#879389]">
                FIND ME ON
              </span>

              <a
                href="https://github.com/Emmanuel9037894958"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-[#647067] transition-colors hover:text-[#176B46]"
              >
                <Github size={21} />
              </a>

              <a
                href="mailto:digitaldynamoinnovation948@gmail.com"
                aria-label="Send me an email"
                className="text-[#647067] transition-colors hover:text-[#176B46]"
              >
                <Mail size={21} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">

              {/* Profile Glow */}
              <div className="absolute inset-5 rounded-full bg-emerald-500/25 blur-3xl" />

              {/* Animated Gradient Ring */}
              <div className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#176B46,#34D399,#8B5CF6,#14B8A6,#176B46)] motion-reduce:animate-none" />

              {/* Pure White Inner Background */}
              <div className="absolute inset-[5px] rounded-full bg-white" />

              {/* Profile Image With White Border */}
              <div className="absolute inset-[10px] overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-emerald-950/15">
                <Image
                  src="/CEO2.jpg"
                  alt="Amamchukwu Emmanuel, Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Full-Stack Label */}
              <div className="absolute -bottom-3 left-0 flex items-center gap-2 rounded-xl border border-[#DCE5DC] bg-[#F8FAF6]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Code2 size={20} />
                </span>

                <div>
                  <p className="text-xs font-bold text-[#17231D]">
                    Full-Stack Development
                  </p>

                  <p className="text-[10px] text-[#647067]">
                    Frontend · Backend · Database
                  </p>
                </div>
              </div>

              {/* Floating Database Indicator */}
              <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-xl border border-[#DCE5DC] bg-[#F8FAF6]/95 px-3 py-2.5 shadow-lg backdrop-blur-md sm:flex">
                <Database size={17} className="text-emerald-700" />

                <span className="text-xs font-semibold text-[#36483B]">
                  Database Integration
                </span>
              </div>

              {/* Floating API Indicator */}
              <div className="absolute -left-3 top-24 hidden items-center gap-2 rounded-xl border border-[#DCE5DC] bg-[#F8FAF6]/95 px-3 py-2.5 shadow-lg backdrop-blur-md sm:flex">
                <Terminal size={17} className="text-purple-600" />

                <span className="text-xs font-semibold text-[#36483B]">
                  Backend APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Areas */}
        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-[#C9D6CA] pt-8 md:grid-cols-4">
          {developmentAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg border border-emerald-800/10 bg-white/60 p-2.5 text-[#176B46] shadow-sm">
                  <Icon size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#26382D]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#748077]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 hidden items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-[#879389] md:flex">
          SCROLL TO EXPLORE
          <ArrowDown size={15} className="animate-bounce text-[#176B46]" />
        </div>
      </div>
    </section>
  );
}
