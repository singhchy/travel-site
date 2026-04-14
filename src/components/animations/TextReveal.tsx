"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: TextRevealProps) {
  const text = typeof children === "string" ? children : String(children);
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
