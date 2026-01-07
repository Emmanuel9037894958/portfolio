export default function Contact() {
  return (
    <section
      id="contact"
      className="py-8 bg-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Contact
          </h2>

          <p className="mt-4 text-gray-600">
            I’m open to frontend development opportunities, freelance projects,
            and professional collaborations. If you’d like to work together,
            feel free to reach out.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            {/* Email */}
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:emmauelamamchukwu506@gmail.com"
                className="text-blue-600 hover:text-blue-700 hover:underline active:text-blue-800 transition"
              >
                emmauelamamchukwu506@gmail.com
              </a>
            </p>

            {/* Phone */}
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+2349037894958"
                className="text-blue-600 hover:text-blue-700 hover:underline active:text-blue-800 transition"
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
