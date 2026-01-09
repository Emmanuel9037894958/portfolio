export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design",
    "Web Performance",
  ];

  return (
    <section
      id="skills"
      className="
        py-20
        bg-white dark:bg-gray-900
        scroll-mt-24
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white transition-colors">
            Skills
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors">
            Technologies and tools I use to build modern, scalable, and
            user-focused web applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-md px-4 py-3
                text-sm text-center
                border
                bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700
                text-gray-700 dark:text-gray-300
                transition-all duration-200 ease-out
                hover:-translate-y-1
                hover:shadow-md
                hover:border-gray-300 dark:hover:border-gray-600
                hover:text-orange-500
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
