"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "ZentraPay",
      type: "Payment Gateway",
      image: "/zentrapay-payment.png",
    },
    {
      name: "EnergyVest",
      type: "Investment Platform",
      image: "/energyvest-investment.png",
    },
    {
      name: "Macdeo-Resources",
      type: "Business Website",
      image: "/macdeo-business.png",
    },
    {
      name: "Admin Dashboard",
      type: "Management System UI",
      image: "/admin-dashboard.png",
    },
    {
      name: "School Website",
      type: "Educational Platform",
      image: "/school-website.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Selected Projects
          </h2>
          <p className="mt-4 text-gray-600">
            A curated selection of real-world web applications I have designed
            and built, spanning payment systems, investment platforms,
            enterprise dashboards, business websites, and educational solutions.
          </p>
        </div>
      </div>

      {/* Continuous Slider */}
      <div className="relative mt-16">
        <div className="flex w-max animate-projects-slide">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[420px] mx-4 flex-shrink-0"
            >
              <div className="relative h-[420px] md:h-[360px] rounded-2xl bg-white shadow-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {project.type}
                </span>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond these showcased works, I have contributed to and developed
            numerous additional projects across diverse domains. My focus
            remains on building scalable, performance-driven, and visually
            refined web experiences that solve real business problems and
            deliver long-term value. I continuously explore new technologies
            and design patterns to ensure every solution meets modern industry
            standards.
          </p>
        </div>
      </div>
    </section>
  );
}
