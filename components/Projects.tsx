'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useRef, MouseEvent } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A full-featured online shopping platform with payment integration and admin dashboard.',
    image: '🛒',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Collaborative task manager with real-time updates and team features.',
    image: '✓',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Beautiful weather app with forecasts and interactive maps.',
    image: '🌤️',
    technologies: ['Vue.js', 'Express', 'OpenWeather API', 'Leaflet'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Excepteur sint occaecat cupidatat non proident. Analytics dashboard for tracking social media metrics and engagement.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation. Tool for creating beautiful portfolio websites with customizable templates.',
    image: '🎨',
    technologies: ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Fitness Tracker',
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate. Track workouts, nutrition, and progress with detailed analytics.',
    image: '💪',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-primary-100 dark:border-dark-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6 md:p-8" style={{ transform: 'translateZ(50px)' }}>
        <div className="text-6xl mb-4">{project.image}</div>

        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-primary-300 rounded-full font-medium"
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
            className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 rounded-lg transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            <FiExternalLink className="w-5 h-5" />
            <span className="text-sm font-medium">Live Demo</span>
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
      className="relative py-20 md:py-32 bg-white dark:bg-dark-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here are some of my recent
            works.
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
