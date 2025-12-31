"use client";

import { motion, Variants } from "framer-motion";

const zoomVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: (i: number = 1) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function AboutCompanyHero() {
  return (
    <div className="hidden lg:flex justify-end items-center gap-6 relative">

      {/* 🔵 POINT 1 */}
      <motion.img
        src="/Innovation.svg"
        alt="Innovation"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute innovation"
      />

      {/* 🔵 POINT 2 */}
      <motion.img
        src="/partnership.svg"
        alt="Partnership Mindset"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        className="absolute partnership"
      />

      {/* 🔵 POINT 3 */}
      <motion.img
        src="/engineering.svg"
        alt="Engineering Excellence"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="absolute engineering"
      />

      {/* 🔵 POINT 4 */}
      <motion.img
        src="/outcome.svg"
        alt="Outcome Focused"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="absolute outcome"
      />

      {/* 👧 GIRL */}
      <motion.img
        src="/girl.svg"
        alt="Innovation"
        width={300}
        height={350}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="girl"
      />
    </div>
  );
}

