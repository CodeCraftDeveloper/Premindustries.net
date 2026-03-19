"use client";

import { motion } from "framer-motion";

export { motion };

const premiumEase = [0.22, 1, 0.36, 1];

const createReveal = ({ x = 0, y = 0, delay = 0, duration = 0.95, scale = 1 }) => ({
  hidden: {
    opacity: 0,
    x,
    y,
    scale,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration,
      delay,
      ease: premiumEase,
    },
  },
});

export const homeViewport = {
  once: true,
  amount: 0.22,
};

export const revealLeft = createReveal({ y: 30, duration: 0.9 });
export const revealRight = createReveal({ y: 30, duration: 0.9 });
export const revealUp = createReveal({ y: 40 });
export const revealSoft = createReveal({ y: 24, duration: 0.85 });
export const revealCard = createReveal({ y: 30, duration: 0.75, scale: 0.98 });

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerCards = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const getAosProps = () => ({});
