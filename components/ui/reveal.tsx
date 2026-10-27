"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }: Readonly<{ children: React.ReactNode; className?: string; delay?: number }>) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
