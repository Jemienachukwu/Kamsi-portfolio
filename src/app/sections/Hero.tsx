"use client";

import Image from "next/image";
import kaka from "../../../public/kaka.jpg";

import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="w-full py-24">
      <div className="max-w-screen-lg mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-semibold text-black leading-tight mb-4">
            Hey, I am Kamsi your next Creative Digital Specialist
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I help brands grow with strategic content, impactful design, and
            effective social media management.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-gray-700 text-xl">
            <a
              href="https://www.instagram.com/kamceeo?igsh=MW5rMTJ0YWw0eHdvMA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram className=" hover:text-gray-600 " />
            </a>
            <a
              href="https://www.linkedin.com/in/kamsi-ofoegbu-00095b253?trk=contact-info"
              target="_blank"
            >
              <FaLinkedin className=" hover:text-gray-600 " />
            </a>

            <a
              href="https://www.tiktok.com/@kamsisdigitalhub?_t=ZN-8yDfuwKEIVy&_r=1"
              target="_blank"
            >
              <FaTiktok className=" hover:text-gray-600 " />
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
