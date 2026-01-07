import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Amamchukwu Emmanuel
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
              Frontend Web Developer focused on building modern, responsive, and
              user-centered web applications. I specialize in translating ideas
              into clean, scalable interfaces using contemporary web
              technologies, with strong attention to performance and usability.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-sm rounded-md hover:border-gray-400 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile image with always-visible gradient ring */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Gradient ring (always visible) */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600
                  blur-sm
                  opacity-80
                  animate-spin-slow
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* Image container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/profile.jpeg"
                  alt="Amamchukwu Emmanuel"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Subtle dark overlay on hover */}
              <div
                className="
                  absolute inset-0 z-20 rounded-full
                  bg-black/0
                  group-hover:bg-black/20
                  transition-colors duration-300
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
