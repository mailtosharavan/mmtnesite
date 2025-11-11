// hooks/useFadeInOnScroll.ts
"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function useFadeInOnScroll(delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const MotionDiv = motion.div;

  return {
    ref,
    MotionDiv,
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay },
    },
  };
}
