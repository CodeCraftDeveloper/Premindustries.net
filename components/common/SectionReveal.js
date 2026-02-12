"use client";

import { motion } from "framer-motion";

export default function SectionReveal({
  children,
  className,
  style,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.section>
  );
}
