"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

const offsets = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
};

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealOnScrollProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
