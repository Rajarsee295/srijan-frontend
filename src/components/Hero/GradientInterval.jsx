import React from 'react';
import { motion } from 'framer-motion';
import './GradientInterval.css';

const GradientInterval = () => {
  return (
    <div className="gradient-interval">
      {/* Floating particles */}
      <div className="interval-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="interval-particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, Math.random() * 0.5 + 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars-container">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="shooting-star"
            initial={{
              x: -100,
              y: Math.random() * 50,
              opacity: 0
            }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 100 : 2020,
              y: Math.random() * 50 + (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 324),
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle constellation dots */}
      <div className="constellation-dots">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="constellation-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="interval-text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="interval-line top"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.h3
          className="interval-title"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DIVE INTO THE
          <span className="interval-highlight"> WORLD </span>
          OF SRIJAN
        </motion.h3>

          <div className='flex flex-wrap gap-20 mt-10'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-hgwXanM7Qw?si=wQgR4P_R9l-7msrW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/9KluVGTXHl0?si=K-AyZBUs_HhMiB8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        

        <motion.div
          className="interval-line bottom"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        <motion.div
          className="interval-ornament"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
        >
          ✦
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GradientInterval;