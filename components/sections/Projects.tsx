"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Enterprise applications I've built and contributed to"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600">
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {project.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <svg
                          className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contributions */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                    My Contributions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.contributions.map((contribution, cIndex) => (
                      <span
                        key={cIndex}
                        className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Tech:</span>
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-slate-500 dark:text-slate-400"
        >
          More projects coming soon as I expand into AI-powered applications.
        </motion.p>
      </div>
    </section>
  );
}
