'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiLinkedin, FiTwitter } from 'react-icons/fi';

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
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jwalantb/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/jwalant527', label: 'Twitter' },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-white dark:bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30 dark:from-dark-800/30 dark:via-transparent dark:to-dark-800/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss DevOps strategies? I'm always open to
            connecting with fellow enthusiasts.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">
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
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-800/50 rounded-xl hover:shadow-lg transition-shadow border border-primary-100 dark:border-dark-700"
                  >
                    <div className="p-3 bg-primary-500 text-white rounded-lg">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-600 dark:text-dark-400">{info.title}</div>
                      <div className="text-dark-900 dark:text-white font-medium">{info.value}</div>
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
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">
                Follow Me
              </h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-4 bg-dark-100 dark:bg-dark-800 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
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
              className="p-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl text-white text-center"
            >
              <h4 className="text-xl font-bold mb-2">Let's Build Something Great</h4>
              <p className="opacity-90">
                I'm always up for talking shop.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
