"use client";

import { motion } from "framer-motion";
import { skills, certifications } from "@/lib/data";
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

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
  color: string;
  icon: React.ReactNode;
  badge?: string;
}

function SkillCategory({ title, skills: skillList, color, icon, badge }: SkillCategoryProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
          <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        </div>
        {badge && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400">
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-slate-600 dark:text-slate-300">{skill.name}</span>
              <span className="text-xs text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full rounded-full bg-gradient-to-r ${
                  badge ? "from-green-500 to-emerald-500" : "from-blue-500 to-purple-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with and continuously learn"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          <SkillCategory
            title="Core Technologies"
            skills={skills.core}
            color="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

          <SkillCategory
            title="Backend & Database"
            skills={skills.backend}
            color="bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            }
          />

          <SkillCategory
            title="AI & Modern Backend"
            skills={skills.learning}
            color="bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            badge="Learning"
          />

          <SkillCategory
            title="Version Control"
            skills={skills.tools}
            color="bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-center font-semibold text-slate-900 dark:text-white mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm text-slate-700 dark:text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
