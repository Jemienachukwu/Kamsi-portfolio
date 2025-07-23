// components/Contact.tsx
"use client";

import { FaEnvelope, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-16 text-gray-900 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center tracking-tight">
          Lets Work Together
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Whether you are looking to grow your brand, improve your content, or
          just want to say hi I am always open to new projects and
          collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a
                href="mailto:Ofoegbukamsi1@gmail.com"
                className="hover:underline"
              >
                Ofoegbukamsi1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <a
                href="https://www.instagram.com/kamceeo?igsh=MW5rMTJ0YWw0eHdvMA%3D%3D&utm_source=qr"
                className="hover:underline"
                target="_blank"
              >
                @kamceeo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-lg" />
              <a
                href="https://www.linkedin.com/in/kamsi-ofoegbu-00095b253?trk=contact-info"
                className="hover:underline"
                target="_blank"
              >
                Kamsi Ofoegbu
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaTiktok className="text-lg" />
              <a
                href="https://www.tiktok.com/@kamsisdigitalhub?_t=ZN-8yDfuwKEIVy&_r=1"
                className="hover:underline"
                target="_blank"
              >
                @kamsisdigitalhub
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <form className="space-y-6 w-full">
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Message</label>
              <textarea
                rows={4}
                placeholder="Say something..."
                className="border-b border-gray-300 bg-transparent focus:outline-none focus:border-black py-1 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
