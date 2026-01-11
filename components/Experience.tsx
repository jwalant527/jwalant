'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    title: 'Platform Systems Engineer - DevOps',
    company: 'National Centre for Biotechnology Information, NIH',
    period: 'October 2023 - Present',
    description:
      'Engineered sweeper system reducing infrastructure resource usage by 20%. Implemented Istio-based whitelisting for FISMA High compliance. Streamlined deployment monitoring with Kafka integration in CI pipelines. Developed centralized LDAP-based access model eliminating hard-coded permissions.',
    technologies: ['ArgoCD', 'Istio', 'Kafka', 'LDAP', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Element Solutions',
    period: 'September 2022 - April 2023',
    description:
      'Optimized healthcare data processing with scalable pipelines on AWS & GCP using Python. Containerized PoC application with Docker, improving deployment efficiency by 25%. Automated infrastructure provisioning using Terraform, reducing launch time by 60%. Streamlined EC2 configuration with Ansible, improving TTL by 15%.',
    technologies: ['AWS', 'GCP', 'Python', 'Docker', 'Terraform', 'Ansible'],
  },
  {
    title: 'Graduate Grading Assistant',
    company: 'SUNY Binghamton - CS 580',
    period: 'August 2022 - December 2022',
    description:
      'Automated evaluation and preprocessing with Python scripts, reducing grading time by 30%. Guided students in deep learning concepts including CNNs, RNNs & back-propagation. Developed Python program to efficiently process 9000 MNIST images for training models.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Jupyter'],
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
      className="relative py-20 md:py-32 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500 md:-ml-0.5" />

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
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-primary-500 rounded-sm border-4 border-white dark:border-black shadow-lg flex items-center justify-center z-10">
                    <FiBriefcase className="w-4 h-4 text-black" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-12 md:ml-0 ${
                      isEven ? 'md:mr-16' : 'md:ml-16'
                    } w-full md:w-5/12 bg-neutral-100 dark:bg-neutral-950 rounded-sm shadow-md hover:shadow-lg transition-shadow p-6 border border-neutral-300 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500`}
                  >
                    <div
                      className={`flex items-center gap-2 text-primary-500 dark:text-primary-400 mb-2 ${
                        isEven ? 'md:justify-end' : ''
                      }`}
                    >
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>

                    <h4 className="text-lg font-semibold text-primary-500 dark:text-primary-400 mb-4">
                      {exp.company}
                    </h4>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-sm font-medium border border-neutral-300 dark:border-neutral-800 uppercase tracking-wide"
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
