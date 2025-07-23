"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import kaka from "../../../public/kaka.jpg";

const jobs = {
  "Content Creation": [
    {
      title: "Short-form Video Series",
      description:
        "Planned, created, and edited engaging video content tailored to brand tone and audience preferences.",
      images: [kaka, kaka],
    },
  ],
  "Social Media Management": [
    {
      title: "Page Refresh & Content Scheduling",
      description:
        "Managed social content, refined visual style, and aligned post schedule with audience insights.",
      images: [kaka, kaka],
    },
  ],
  "Digital Marketing": [
    {
      title: "Basic Funnel Strategy",
      description:
        "Implemented simple strategies across email and landing pages to encourage clicks and build awareness.",
      images: [kaka, kaka],
    },
  ],
};

export default function Jobs() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Previous Work
        </h2>

        {Object.entries(jobs).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-semibold mb-10">{category}</h3>
            <div className="space-y-20">
              {items.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h4 className="font-bold text-xl mb-2">{job.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {job.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative h-100 w-full rounded-xl overflow-hidden ${
                          i % 2 === 0 ? "row-span-2" : ""
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${job.title} image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <hr className="border-t border-gray-200 my-6" />
          </div>
        ))}
      </div>
    </section>
  );
}
