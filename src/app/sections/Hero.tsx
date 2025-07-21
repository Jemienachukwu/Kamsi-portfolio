"use client";

import Image from "next/image";
import kaka from "../../../public/kaka.jpg";

import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full py-24">
      <div className="max-w-screen-lg mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-semibold text-black leading-tight mb-4">
            Hey, I'm Kamsi your next social media manager.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I help brands grow with strategic content, visuals, and authentic
            engagement.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-5">
            <a href="https://instagram.com/yourprofile" target="_blank">
              <FaInstagram className="text-black hover:text-gray-600 text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="text-black hover:text-gray-600 text-2xl" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank">
              <FaTwitter className="text-black hover:text-gray-600 text-2xl" />
            </a>
            <a href="https://tiktok.com/@yourprofile" target="_blank">
              <FaTiktok className="text-black hover:text-gray-600 text-2xl" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={kaka} // replace with your image
            alt="Profile"
            width={400}
            height={400}
            className="rounded-xl object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
