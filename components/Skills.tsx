'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', experience: '3+ years', context: 'Primary language for automation & scripting' },
      { name: 'Bash', experience: '3+ years', context: 'Daily use for system administration' },
      { name: 'SQL/PL-SQL', experience: '2+ years', context: 'Database queries & optimization' },
      { name: 'C/C++', experience: '1+ year', context: 'Academic & performance-critical tasks' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'Kubernetes', experience: '2+ years', context: 'Production orchestration at NIH' },
      { name: 'Docker', experience: '3+ years', context: 'Container development & deployment' },
      { name: 'AWS', experience: '2+ years', context: 'Solutions Architect certified' },
      { name: 'Terraform', experience: '2+ years', context: 'Infrastructure as Code' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    skills: [
      { name: 'GitLab CI', experience: '2+ years', context: 'Pipeline design & optimization' },
      { name: 'Jenkins', experience: '2+ years', context: 'Build automation & deployment' },
      { name: 'ArgoCD', experience: '1+ year', context: 'GitOps deployments at NCBI' },
      { name: 'Ansible', experience: '1+ year', context: 'Configuration management' },
    ],
  },
];

function SkillCard({ skill, index, inView }: { skill: { name: string; experience: string; context: string }; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-sm border border-neutral-300 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
    >
      <div className="flex items-baseline justify-between mb-2">
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">{skill.name}</h4>
        <span className="text-xs font-medium text-primary-500 dark:text-primary-400 uppercase tracking-wider">{skill.experience}</span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{skill.context}</p>
    </motion.div>
  );
}

const techIcons = [
  { name: 'Python', icon: '🐍' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'GitLab', icon: '🦊' },
  { name: 'Jenkins', icon: '🔧' },
  { name: 'Ansible', icon: '⚙️' },
  { name: 'ArgoCD', icon: '🚀' },
  { name: 'Kafka', icon: '📊' },
  { name: 'Istio', icon: '🔒' },
  { name: 'Linux', icon: '🐧' },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-white dark:bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">
            Skills & <span className="text-primary-500">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            From container orchestration to infrastructure automation, here's my technical toolkit
            for building reliable, scalable platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-neutral-100 dark:bg-neutral-950 rounded-sm p-6 md:p-8 shadow-md border border-neutral-300 dark:border-neutral-800"
              >
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-tight">
                  {category.category}
                </h3>
                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="bg-neutral-100 dark:bg-neutral-950 rounded-sm p-8 shadow-md border border-neutral-300 dark:border-neutral-800">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center uppercase tracking-tight">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.2 }}
                      className="flex flex-col items-center gap-2 p-4 bg-neutral-200 dark:bg-neutral-900 rounded-sm cursor-pointer hover:shadow-md transition-shadow border border-neutral-300 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500"
                    >
                      <div className="text-4xl">{tech.icon}</div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 text-center uppercase tracking-wide">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-8 p-6 bg-primary-500 rounded-sm text-black text-center shadow-md shadow-primary-500/30"
                >
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90 uppercase tracking-wider">Years of Experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
