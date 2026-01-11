'use client';

import { motion } from 'framer-motion';

// Theme 3: Violet Night - Creative & Bold
// Primary: Purple (#a855f7)
// Accent: Fuchsia (#e879f9)
// Background: Deep Purple Black (#1e1b4b)

export default function ThemeTest3() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Theme 3: </span>
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
              Violet Night
            </span>
          </h1>
          <p className="text-slate-400 text-xl">Creative, Bold, Energetic</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-950 rounded-2xl p-12 mb-8 border border-purple-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-white">Jwalant Bhatt</h2>
            <div className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Platform Engineer at NIH
            </div>
            <p className="text-slate-300 text-lg max-w-2xl">
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-medium hover:opacity-90 transition shadow-lg shadow-purple-500/50">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-medium hover:bg-purple-950 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="bg-indigo-950 rounded-2xl p-12 mb-8 border border-purple-900">
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Kubernetes', 'Docker', 'AWS', 'Python', 'Terraform', 'Jenkins', 'GitLab', 'ArgoCD'].map((tech) => (
              <div key={tech} className="p-4 bg-purple-950/50 rounded-lg border border-purple-800 hover:border-fuchsia-500 transition text-center shadow-lg hover:shadow-purple-500/50">
                <span className="text-purple-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-indigo-950 rounded-2xl p-8 border border-purple-900 hover:border-purple-600 transition hover:shadow-lg hover:shadow-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">Microservice Vote Tracking</h3>
          <p className="text-slate-300 mb-4">
            Microservice-based architecture with APIs for real-time vote tallies. 30% performance increase.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Flask', 'Kubernetes', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700">
                {tech}
              </span>
            ))}
          </div>
          <button className="text-fuchsia-400 hover:text-fuchsia-300 font-medium">View Project →</button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-purple-400 hover:text-purple-300 underline">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
}
