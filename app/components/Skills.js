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
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Skills
          </h2>

          <p className="mt-4 text-gray-600">
            Technologies and tools I use to build modern, scalable, and
            user-focused web applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                border border-gray-200 rounded-md px-4 py-3
                text-sm text-gray-700 text-center
                transition-all duration-200 ease-out
                hover:border-gray-300
                hover:shadow-md
                hover:-translate-y-1
                hover:text-orange-500
                bg-white
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
