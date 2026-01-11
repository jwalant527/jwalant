'use client';

import { motion } from 'framer-motion';

// Theme 5: Slate Monochrome - Minimal & Sophisticated
// Primary: Slate Gray (#64748b)
// Accent: Zinc (#71717a)
// Background: True Black (#000000)

export default function ThemeTest5() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Theme 5: </span>
            <span className="bg-gradient-to-r from-slate-400 to-zinc-300 bg-clip-text text-transparent">
              Slate Monochrome
            </span>
          </h1>
          <p className="text-zinc-500 text-xl">Minimal, Sophisticated, Timeless</p>
        </div>

        {/* Hero Section */}
        <div className="bg-zinc-950 rounded-2xl p-12 mb-8 border border-zinc-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-white">Jwalant Bhatt</h2>
            <div className="text-3xl font-semibold text-slate-400">Platform Engineer at NIH</div>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-zinc-700 text-zinc-300 rounded-full font-medium hover:bg-zinc-900 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="bg-zinc-950 rounded-2xl p-12 mb-8 border border-zinc-800">
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Kubernetes', 'Docker', 'AWS', 'Python', 'Terraform', 'Jenkins', 'GitLab', 'ArgoCD'].map((tech) => (
              <div key={tech} className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition text-center">
                <span className="text-zinc-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-600 transition">
          <h3 className="text-2xl font-bold text-white mb-3">Microservice Vote Tracking</h3>
          <p className="text-zinc-400 mb-4">
            Microservice-based architecture with APIs for real-time vote tallies. 30% performance increase.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Flask', 'Kubernetes', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-900 text-zinc-400 rounded-full text-sm border border-zinc-800">
                {tech}
              </span>
            ))}
          </div>
          <button className="text-zinc-300 hover:text-white font-medium">View Project →</button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-zinc-400 hover:text-zinc-300 underline">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
}
