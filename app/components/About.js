export default function About() {
  return (
    <section
      id="about"
      className="
        py-14
        bg-gray-50 dark:bg-gray-800
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white transition-colors">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            I am a frontend web developer focused on building clean,
            responsive, and accessible web interfaces. I enjoy translating
            design concepts into high-quality code and creating user
            experiences that are both functional and visually refined.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            I work primarily with modern JavaScript frameworks and tools,
            paying close attention to performance, scalability, and
            maintainability. My goal is to deliver solutions that meet
            real business needs while maintaining high engineering standards.
          </p>

        </div>
      </div>
    </section>
  );
}
