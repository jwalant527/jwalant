'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leading development teams and architecting scalable solutions.',
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Built and maintained multiple client-facing applications.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Studios Co.',
    period: '2018 - 2020',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Developed responsive and interactive user interfaces.',
    technologies: ['JavaScript', 'React', 'CSS', 'HTML'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2017 - 2018',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Learned fundamentals and contributed to various projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50/30 to-white dark:from-dark-800 dark:to-dark-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 md:-ml-0.5" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
              >
                <div className={`flex items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-4`}>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg flex items-center justify-center z-10">
                    <FiBriefcase className="w-4 h-4 text-white" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-12 md:ml-0 ${
                      isEven ? 'md:mr-16' : 'md:ml-16'
                    } w-full md:w-5/12 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-primary-100 dark:border-dark-700`}
                  >
                    <div
                      className={`flex items-center gap-2 text-primary-500 dark:text-primary-400 mb-2 ${
                        isEven ? 'md:justify-end' : ''
                      }`}
                    >
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>

                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {exp.company}
                    </h4>

                    <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-sm bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
