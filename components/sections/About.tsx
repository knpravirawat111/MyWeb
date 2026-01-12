"use client";

import { motion } from "framer-motion";
import {
  aboutContent,
  workExperience,
  responsibilities,
  education,
  achievements,
} from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A blend of professional expertise and personal passion"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Professional Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {aboutContent.professional}
            </p>

            {/* Work Experience Timeline */}
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">Experience</h3>
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-500/30"
                >
                  {work.current && (
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  )}
                  {!work.current && (
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                  )}
                  <h4 className="font-medium text-slate-900 dark:text-white">{work.role}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{work.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{work.duration}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Personal
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {aboutContent.personal}
            </p>

            {/* Education */}
            <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Education</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">{education.degree}</span>
                  <span className="text-sm text-slate-500">{education.year}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{education.university}</p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">CGPA: {education.cgpa}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {achievement.value}
              </div>
              <div className="mt-2 font-medium text-slate-900 dark:text-white">
                {achievement.title}
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {achievement.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-center font-semibold text-slate-900 dark:text-white mb-6">
            What I Do
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {responsibilities.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm border border-slate-200 dark:border-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
