export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-14
        bg-white dark:bg-gray-900
        scroll-mt-24
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white transition-colors">
            Contact
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors">
            I’m open to frontend development opportunities, freelance projects,
            and professional collaborations. If you’d like to work together,
            feel free to reach out.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            
            {/* Email */}
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:emmauelamamchukwu506@gmail.com"
                className="
                  text-blue-600 dark:text-blue-400
                  hover:underline
                  hover:text-blue-700 dark:hover:text-blue-300
                  transition
                "
              >
                emmauelamamchukwu506@gmail.com
              </a>
            </p>

            {/* Phone */}
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+2349037894958"
                className="
                  text-blue-600 dark:text-blue-400
                  hover:underline
                  hover:text-blue-700 dark:hover:text-blue-300
                  transition
                "
              >
                +234 903 789 4958
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
