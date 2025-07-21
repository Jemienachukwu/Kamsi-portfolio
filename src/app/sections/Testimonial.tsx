"use client";
import { FaUser } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah B.",
      role: "Founder, Bloom Studio",
      feedback:
        "Working with Kamsi was seamless. Our engagement rates tripled within 2 months thanks to her content strategy and visuals.",
    },
    {
      name: "David K.",
      role: "Marketing Lead, Arvo",
      feedback:
        "Kamsi just gets it. Her understanding of brand voice and audience targeting is next-level. Would recommend her to any growing brand.",
    },
    {
      name: "Lola T.",
      role: "Content Creator & Influencer",
      feedback:
        "She helped me build a consistent visual identity and streamline my posting. I feel more confident and professional now.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-semibold text-black mb-12 text-center">
          What People Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white"
            >
              <FaUser className="text-3xl text-black mb-4" />
              <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                “{item.feedback}”
              </p>
              <div className="mt-4">
                <p className="font-medium text-black">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
