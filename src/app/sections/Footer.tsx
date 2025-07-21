// components/Footer.tsx
import { FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 md:px-16 py-10 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left: Navigation */}
        <nav className="flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#services" className="hover:text-black transition">
            Services
          </a>
          <a href="#tools" className="hover:text-black transition">
            Tools
          </a>
          <a href="#testimonials" className="hover:text-black transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* Center: Copyright */}
        <div className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-gray-700 text-lg">
          <a href="mailto:Ofoegbukamsi1@gmail.com">
            className="hover:text-black transition" aria-label="Email"
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/kamceeo?igsh=MW5rMTJ0YWw0eHdvMA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kamsi-ofoegbu-00095b253?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@kamsisdigitalhub?_t=ZN-8yDfuwKEIVy&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="Tiktok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
