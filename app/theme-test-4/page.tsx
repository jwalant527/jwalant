'use client';

import { motion } from 'framer-motion';

// Theme 4: Amber Sunset - Warm & Welcoming
// Primary: Orange (#f97316)
// Accent: Amber (#f59e0b)
// Background: Dark Brown (#1c1917)

export default function ThemeTest4() {
  return (
    <div className="min-h-screen bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Theme 4: </span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Amber Sunset
            </span>
          </h1>
          <p className="text-stone-400 text-xl">Warm, Welcoming, Optimistic</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-stone-900 to-orange-950/30 rounded-2xl p-12 mb-8 border border-orange-900/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-white">Jwalant Bhatt</h2>
            <div className="text-3xl font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Platform Engineer at NIH
            </div>
            <p className="text-stone-300 text-lg max-w-2xl">
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-full font-medium hover:opacity-90 transition shadow-lg shadow-orange-500/50">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-orange-500 text-orange-400 rounded-full font-medium hover:bg-orange-950 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="bg-stone-900 rounded-2xl p-12 mb-8 border border-stone-800">
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Kubernetes', 'Docker', 'AWS', 'Python', 'Terraform', 'Jenkins', 'GitLab', 'ArgoCD'].map((tech) => (
              <div key={tech} className="p-4 bg-gradient-to-br from-stone-800 to-orange-950/20 rounded-lg border border-orange-900/50 hover:border-orange-500 transition text-center">
                <span className="text-stone-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-orange-600 transition">
          <h3 className="text-2xl font-bold text-white mb-3">Microservice Vote Tracking</h3>
          <p className="text-stone-400 mb-4">
            Microservice-based architecture with APIs for real-time vote tallies. 30% performance increase.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Flask', 'Kubernetes', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-orange-950 text-orange-400 rounded-full text-sm border border-orange-800">
                {tech}
              </span>
            ))}
          </div>
          <button className="text-amber-400 hover:text-amber-300 font-medium">View Project →</button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-orange-400 hover:text-orange-300 underline">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
}
