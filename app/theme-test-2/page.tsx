'use client';

import { motion } from 'framer-motion';

// Theme 2: Emerald Forest - Fresh & Modern
// Primary: Emerald Green (#10b981)
// Accent: Teal (#14b8a6)
// Background: Dark Forest (#022c22)

export default function ThemeTest2() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Theme 2: </span>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Emerald Forest
            </span>
          </h1>
          <p className="text-gray-400 text-xl">Fresh, Modern, Growth-Oriented</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 to-emerald-950/30 rounded-2xl p-12 mb-8 border border-emerald-900/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-white">Jwalant Bhatt</h2>
            <div className="text-3xl font-semibold text-emerald-400">Platform Engineer at NIH</div>
            <p className="text-gray-300 text-lg max-w-2xl">
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium hover:opacity-90 transition">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-full font-medium hover:bg-emerald-950 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-900 rounded-2xl p-12 mb-8 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Kubernetes', 'Docker', 'AWS', 'Python', 'Terraform', 'Jenkins', 'GitLab', 'ArgoCD'].map((tech) => (
              <div key={tech} className="p-4 bg-gradient-to-br from-gray-800 to-emerald-950/20 rounded-lg border border-emerald-900/50 hover:border-emerald-500 transition text-center">
                <span className="text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-emerald-600 transition">
          <h3 className="text-2xl font-bold text-white mb-3">Microservice Vote Tracking</h3>
          <p className="text-gray-400 mb-4">
            Microservice-based architecture with APIs for real-time vote tallies. 30% performance increase.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Flask', 'Kubernetes', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-emerald-950 text-emerald-400 rounded-full text-sm border border-emerald-800">
                {tech}
              </span>
            ))}
          </div>
          <button className="text-teal-400 hover:text-teal-300 font-medium">View Project →</button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-emerald-400 hover:text-emerald-300 underline">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
}
