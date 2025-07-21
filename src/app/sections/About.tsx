"use client";
import Lottie from "lottie-react";
import animation from "../../../public/Work from home.json";
export default function About() {
  return (
    <section id="about" className="w-full  py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        {/* Accent Text/Heading */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <span className="inline-block px-3 py-1 text-sm text-[#A37CDE] bg-[#EDE9F7] rounded-full font-medium">
            Social-first, results-driven
          </span>
          <Lottie animationData={animation} />
        </div>

        {/* Bio Content */}
        <div className="md:col-span-3 text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            I’m a Social Media Manager who helps brands translate their vision
            into scroll-stopping content and engaging digital experiences. My
            work blends visual storytelling with audience psychology — because
            good marketing starts with understanding people.
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              📊 3+ years managing social campaigns for creators & startups
            </li>
            <li>
              🎯 Skilled in Instagram, TikTok, LinkedIn & cross-platform growth
            </li>
            <li>🧠 Strategy-focused but execution-obsessed</li>
            <li>🤝 Big believer in collaboration, data, and empathy</li>
          </ul>
          <a href="mailto:Ofoegbukamsi1@gmail.com">
            <button className="bg-black text-white h-[50px] w-[300px] rounded-lg mt-8  cursor-pointer">
              Work with me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
