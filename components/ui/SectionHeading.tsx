"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
