
"use client";

import {
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
  Smartphone,
  Gauge,
  Cloud,
  Layers3,
  ShieldCheck,
  Workflow,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive user interfaces for web applications.",
    icon: Code2,
    skills: [
      {
        name: "HTML5",
        description:
          "Writing semantic, accessible and well-structured web pages.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        description:
          "Creating modern layouts, animations and responsive designs.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        description:
          "Developing application logic and interactive web experiences.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        description:
          "Building reusable components and dynamic user interfaces.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        description:
          "Developing modern full-stack applications using the React framework.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        invert: true,
      },
      {
        name: "Tailwind CSS",
        description:
          "Creating maintainable, modern and responsive designs efficiently.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Building server-side applications, backend logic, API endpoints and application functionality.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        description:
          "Running JavaScript on the server and developing backend functionality.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        description:
          "Building backend applications, server routes and API endpoints.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        invert: true,
      },
      {
        name: "Next.js API Routes",
        description:
          "Creating server-side endpoints and backend functionality within Next.js applications.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        invert: true,
      },
      {
        name: "REST API Development",
        description:
          "Developing and integrating APIs for communication between applications and servers.",
        icon: Globe,
      },
      {
        name: "Authentication",
        description:
          "Implementing user registration, login, authentication and access control.",
        icon: ShieldCheck,
      },
    ],
  },

  {
    title: "Database & Data Management",
    description:
      "Working with relational and non-relational databases, authentication services and application data.",
    icon: Database,
    skills: [
      {
        name: "Supabase",
        description:
          "Integrating backend services, authentication and database functionality.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        name: "PostgreSQL",
        description:
          "Working with relational databases and structured application data.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        description:
          "Managing relational databases and application records.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        description:
          "Working with NoSQL databases and flexible document-based data.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        description:
          "Using Firebase services for application backend and data integration.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Supabase Authentication",
        description:
          "Integrating authentication and user management into web applications.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
    ],
  },

  {
    title: "Tools, Deployment & Development",
    description:
      "Managing development workflows, deploying applications and improving production performance.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        description:
          "Tracking code changes and managing project versions.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        description:
          "Managing repositories, source code and project collaboration.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        invert: true,
      },
      {
        name: "Vercel",
        description:
          "Deploying and hosting modern web applications.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        invert: true,
      },
      {
        name: "Database Integration",
        description:
          "Connecting application interfaces and backend systems to databases.",
        icon: Workflow,
      },
      {
        name: "Responsive Design",
        description:
          "Building applications that work across different screen sizes.",
        icon: Smartphone,
      },
      {
        name: "Web Performance",
        description:
          "Improving application speed, responsiveness and user experience.",
        icon: Gauge,
      },
      {
        name: "Cloud Services",
        description:
          "Using hosted services to support application deployment and infrastructure.",
        icon: Cloud,
      },
      {
        name: "Full-Stack Architecture",
        description:
          "Connecting frontend, backend, APIs and databases into complete applications.",
        icon: Layers3,
      },
    ],
  },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 dark:border-gray-800 dark:bg-gray-900 dark:group-hover:bg-emerald-950/40">
          {skill.logo ? (
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              loading="lazy"
              className={`h-8 w-8 object-contain ${
                skill.invert ? "dark:invert" : ""
              }`}
            />
          ) : (
            <Icon
              size={30}
              strokeWidth={1.7}
              className="text-emerald-600 dark:text-emerald-400"
            />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>

          <span className="mt-1 block text-xs font-medium text-emerald-600 dark:text-emerald-400">
            Technical Skill
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {skill.description}
      </p>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-gray-50 py-24 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Technical Expertise
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Full-Stack Development{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Skills
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
            I work across the complete web development process, from designing
            responsive frontend interfaces to building backend systems,
            developing REST APIs, implementing authentication and integrating
            databases. My goal is to deliver complete, functional and
            user-focused digital applications.
          </p>
        </div>

        {/* Full-stack capability overview */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20 sm:grid-cols-4 sm:p-6">
          {[
            {
              icon: Code2,
              title: "Frontend",
              description: "User interfaces",
            },
            {
              icon: Server,
              title: "Backend",
              description: "Server-side logic",
            },
            {
              icon: Database,
              title: "Databases",
              description: "Data management",
            },
            {
              icon: Terminal,
              title: "APIs",
              description: "Application integration",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm dark:bg-gray-900 dark:text-emerald-400">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill groups */}
        <div className="mt-16 space-y-16">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.title}>
                <div className="mb-7 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    <GroupIcon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-20 rounded-2xl border border-gray-200 bg-white p-7 text-center dark:border-gray-800 dark:bg-gray-950 sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            <Layers3 size={24} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            More Than Just Frontend Development
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I build complete web solutions by bringing together frontend
            development, backend engineering, database integration and API
            development to create applications that work from end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
