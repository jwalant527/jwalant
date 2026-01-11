'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'jwalantbhatt1998@gmail.com',
    href: 'mailto:jwalantbhatt1998@gmail.com',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    value: 'Memphis, TN',
    href: '#',
  },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/jwalant527', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jwalantb/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/jwalant527', label: 'Twitter' },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form.');

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5 dark:from-primary-500/5 dark:via-transparent dark:to-primary-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 uppercase tracking-tight">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss DevOps strategies? I'm always open to
            connecting with fellow enthusiasts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-tight">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-sm hover:shadow-md transition-shadow border border-neutral-300 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500"
                  >
                    <div className="p-3 bg-primary-500 text-black rounded-sm">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">{info.title}</div>
                      <div className="text-neutral-900 dark:text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-tight">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-4 bg-neutral-200 dark:bg-neutral-900 rounded-sm hover:bg-primary-500 hover:text-black dark:hover:bg-primary-500 transition-colors border border-neutral-300 dark:border-neutral-800"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 bg-primary-500 rounded-sm text-black shadow-md shadow-primary-500/30"
            >
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Let's Build Something Great</h4>
              <p className="opacity-90">
                I'm always up for talking shop.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-100 dark:bg-neutral-950 rounded-sm p-8 shadow-md border border-neutral-300 dark:border-neutral-800"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-tight">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-neutral-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-neutral-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-neutral-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-neutral-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-primary-500 text-black rounded-sm font-medium shadow-md shadow-primary-500/30 hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
