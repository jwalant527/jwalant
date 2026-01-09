'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
