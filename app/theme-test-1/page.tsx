'use client';

import { motion } from 'framer-motion';

// Theme 1: Deep Ocean Blue - Professional & Cool
// Primary: Deep Blue (#1e40af)
// Accent: Cyan (#06b6d4)
// Background: Dark Navy (#0f172a)

export default function ThemeTest1() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Theme 1: </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Deep Ocean
            </span>
          </h1>
          <p className="text-slate-400 text-xl">Professional, Cool, Tech-Forward</p>
        </div>

        {/* Hero Section */}
        <div className="bg-slate-900 rounded-2xl p-12 mb-8 border border-slate-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-white">Jwalant Bhatt</h2>
            <div className="text-3xl font-semibold text-blue-500">Platform Engineer at NIH</div>
            <p className="text-slate-300 text-lg max-w-2xl">
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:opacity-90 transition">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-medium hover:bg-blue-950 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-900 rounded-2xl p-12 mb-8 border border-slate-800">
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Kubernetes', 'Docker', 'AWS', 'Python', 'Terraform', 'Jenkins', 'GitLab', 'ArgoCD'].map((tech) => (
              <div key={tech} className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-500 transition text-center">
                <span className="text-slate-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-600 transition">
          <h3 className="text-2xl font-bold text-white mb-3">Microservice Vote Tracking</h3>
          <p className="text-slate-400 mb-4">
            Microservice-based architecture with APIs for real-time vote tallies. 30% performance increase.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Flask', 'Kubernetes', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-950 text-blue-400 rounded-full text-sm border border-blue-800">
                {tech}
              </span>
            ))}
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Project →</button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">← Back to Main Site</a>
        </div>
      </div>
    </div>
  );
}
