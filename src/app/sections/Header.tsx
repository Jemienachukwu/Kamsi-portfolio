"use client";

import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <span className="text-xl font-semibold tracking-tight text-gray-800">
            kamsi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-700 font-medium">
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#services" className="hover:text-black transition">
            Services
          </a>
          <a href="#tools" className="hover:text-black transition">
            Tools
          </a>
          <a href="#experience" className="hover:text-black transition">
            Experience
          </a>
          <a href="#testimonials" className="hover:text-black transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* Social Icons (optional) */}
        <div className="hidden md:flex space-x-4 text-gray-600">
          <a
            href="https://www.instagram.com/kamceeo?igsh=MW5rMTJ0YWw0eHdvMA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-black"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@kamsisdigitalhub?_t=ZN-8yDfuwKEIVy&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-black"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.linkedin.com/in/kamsi-ofoegbu-00095b253?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#services" className="hover:text-black">
              Services
            </a>
            <a href="#tools" className="hover:text-black">
              Tools
            </a>
            <a href="#experience" className="hover:text-black">
              Experience
            </a>
            <a href="#testimonials" className="hover:text-black">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
