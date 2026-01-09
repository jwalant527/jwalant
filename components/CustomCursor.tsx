'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary-500 dark:border-primary-400" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 bg-primary-500 dark:bg-primary-400 rounded-full hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
        }}
      />
    </>
  );
}
