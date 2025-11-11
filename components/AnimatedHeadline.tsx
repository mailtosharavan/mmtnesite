"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHeadline({
  short,
  highlighted,
  sub
}: {
  short: string;
  highlighted: string;
  sub?: string;
}) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold leading-tight"
      >
        <span className="text-slate-700">{short} </span>
        <motion.span
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          {highlighted}
        </motion.span>
      </motion.h1>
      {sub && <motion.p className="mt-4 text-slate-600">{sub}</motion.p>}
    </div>
  );
}