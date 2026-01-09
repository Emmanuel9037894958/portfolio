import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300 py-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors">
              Amamchukwu Emmanuel
            </h1>

            <p className="mt-4 text-base md:text-lg max-w-xl text-gray-600 dark:text-gray-400 transition-colors">
              Frontend Web Developer focused on building modern, responsive, and
              user-centered web applications. I specialize in translating ideas
              into clean, scalable interfaces using contemporary web
              technologies, with strong attention to performance and usability.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="
    relative
    px-6 py-3 text-sm rounded-md
    bg-gray-900 text-white
    hover:bg-gray-800
    dark:bg-white dark:text-gray-900
    dark:hover:bg-gray-200
    transition
    after:absolute
    after:inset-x-2
    after:-bottom-2
    after:h-3
    after:rounded-full
    after:bg-gray-900/30
    dark:after:bg-white/30
    after:blur-md
    after:content-['']
  "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
    relative
    px-6 py-3 text-sm rounded-md
    border border-gray-300 text-white
    hover:border-gray-400
    dark:border-gray-600
    dark:hover:border-gray-500
    transition
    after:absolute
    after:inset-x-2
    after:-bottom-2
    after:h-3
    after:rounded-full
    after:bg-gray-400/30
    dark:after:bg-gray-500/30
    after:blur-md
    after:content-['']
  "
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Gradient ring */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600
                  blur-sm opacity-80
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* Image container */}
              {/* Profile image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                  {/* Rotating gradient ring */}
                  <div
                    className="
        absolute inset-0 rounded-full
        bg-gradient-to-tr from-green-400 via-purple-500 to-pink-500
        animate-spin-slow
        blur-sm
        opacity-80
      "
                  />

                  {/* Inner mask to create ring thickness */}
                  <div
                    className="
        absolute inset-[6px] rounded-full
        bg-white dark:bg-gray-900
        z-10
      "
                  />

                  {/* Image container */}
                  <div
                    className="
        relative z-20
        w-full h-full
        rounded-full overflow-hidden
        border-4 border-white dark:border-gray-900
      "
                  >
                    <Image
                      src="/profile.jpeg"
                      alt="Amamchukwu Emmanuel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0 z-20 rounded-full
                  bg-black/0 group-hover:bg-black/20
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
