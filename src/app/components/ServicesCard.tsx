"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type ServiceCardProps = {
  title: string;
  summary: string;
  details: string;
};

export default function ServiceCard({
  title,
  summary,
  details,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition"
      >
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{summary}</p>
        </div>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4 text-sm text-gray-700"
          >
            <p>{details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
