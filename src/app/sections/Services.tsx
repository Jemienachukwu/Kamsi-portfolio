"use client";
import { motion } from "framer-motion";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineCampaign, MdOutlineInsights } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-white text-black"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 mb-12">
            No guesswork. Just results-driven digital services tailored for your
            brand.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Social Media Management */}
          <motion.div
            className="grid md:grid-cols-6 gap-6 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="md:col-span-1 text-3xl text-gray-700">
              <HiOutlineLightBulb />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-xl font-semibold mb-2">
                Social Media Management
              </h3>
              <p className="text-gray-700">
                Strategy, scheduling, and performance tracking for platforms
                like Instagram, TikTok, and LinkedIn. Grow your audience and
                boost engagement with content that speaks your brand.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                “Kamsi helped us double our reach in 3 months.”
              </p>
            </div>
          </motion.div>

          <hr className="border-t border-gray-200 my-6" />

          {/* Content Creation */}
          <motion.div
            className="grid md:grid-cols-6 gap-6 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:col-span-1 text-3xl text-gray-700">
              <FiEdit3 />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-700">
                From reels to carousels, I create bold visual content that
                reflects your voice and drives engagement. Storytelling that’s
                sharp, stylish, and scroll-stopping.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                “We finally have a content system that works.”
              </p>
            </div>
          </motion.div>

          <hr className="border-t border-gray-200 my-6" />

          {/* Digital Marketing */}
          <motion.div
            className="grid md:grid-cols-6 gap-6 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="md:col-span-1 text-3xl text-gray-700">
              <MdOutlineCampaign />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-700">
                I run campaigns that convert combining paid media, analytics,
                and creative strategy to grow your brand online.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                “Sales improved by 35% thanks to her marketing direction.”
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-800 mb-4">
            Looking for custom support or a full-service package?
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 border border-black bg-black text-white transition rounded-xl"
          >
            Let’s Chat
          </Link>
        </div>
      </div>
    </section>
  );
}
