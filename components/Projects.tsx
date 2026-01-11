'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Microservice Vote Tracking Application',
    description:
      'Microservice-based architecture with APIs for real-time vote tallies. Deployed Flask web app on EC2 with Kubernetes orchestration, achieving 30% performance increase. Integrated Jenkins CI/CD pipeline for resilient AWS infrastructure.',
    image: '🗳️',
    technologies: ['Python', 'Flask', 'Kubernetes', 'Jenkins', 'AWS', 'SQL Server'],
    githubUrl: 'https://github.com/jwalant527',
    liveUrl: '#',
  },
  {
    title: 'AWS Fault Injection Testing',
    description:
      'Enhanced infrastructure resilience using AWS Fault Injection Simulator. Tested instance failures, network latency, and API throttling. Orchestrated multi-step errors with Lambda & Step Functions, reducing response time by 15%.',
    image: '⚡',
    technologies: ['AWS', 'Lambda', 'Step Functions', 'SSM', 'Linux'],
    githubUrl: 'https://github.com/jwalant527',
    liveUrl: '#',
  },
  {
    title: 'Handwritten Digit Recognition',
    description:
      'Neural network model using TensorFlow and Pandas achieving 91%+ accuracy. Implemented logistic regression and back-propagation algorithms. Refined performance by 25% through hyperparameter tuning and custom preprocessing.',
    image: '🔢',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/jwalant527',
    liveUrl: '#',
  },
  {
    title: 'ArgoCD Sweeper System',
    description:
      'Automated system to remove stale ArgoCD deployments, reducing infrastructure resource usage by 20%. Integrated with Kubernetes to maintain clean deployment environments and optimize resource allocation.',
    image: '🧹',
    technologies: ['ArgoCD', 'Kubernetes', 'Python', 'Automation'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Istio Service Mesh Implementation',
    description:
      'Implemented Istio-based whitelisting for external endpoints with dynamic service entry generation. Maintained FISMA High compliance while enabling secure communication with vetted external services.',
    image: '🔒',
    technologies: ['Istio', 'Kubernetes', 'Service Mesh', 'Security'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'CI/CD Monitoring with Kafka',
    description:
      'Streamlined deployment monitoring by integrating Kafka event consumption into CI pipelines. Eliminated database dependencies and enabled real-time rollout status checks for faster deployment feedback.',
    image: '📊',
    technologies: ['Kafka', 'CI/CD', 'Jenkins', 'Event Streaming'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-neutral-100 dark:bg-neutral-950 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all border border-neutral-300 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500"
    >
      <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6 md:p-8">
        <div className="text-6xl mb-4">{project.image}</div>

        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h3>

        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-sm font-medium border border-neutral-300 dark:border-neutral-800 uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-sm transition-colors border border-neutral-300 dark:border-neutral-800 uppercase text-sm tracking-wide font-medium"
          >
            <FiGithub className="w-5 h-5" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-black rounded-sm transition-colors shadow-md shadow-primary-500/30 uppercase text-sm tracking-wide font-medium"
          >
            <FiExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Real-world infrastructure and automation projects I've built to solve complex
            deployment challenges and improve system reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
