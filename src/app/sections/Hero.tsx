// components/Hero.tsx
"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12">
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hey, I’m Jane 👋
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A Social Media Manager who brings creativity, strategy, and
          authenticity to every campaign.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:text-pink-600 text-2xl transition" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-600 hover:text-blue-700 text-2xl transition" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl transition" />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-black hover:text-gray-800 text-2xl transition" />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/profile.jpg" // Replace with your image in /public
          alt="Profile"
          width={300}
          height={300}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
