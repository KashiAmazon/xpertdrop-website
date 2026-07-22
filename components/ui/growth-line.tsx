"use client";

import { motion } from "framer-motion";

type GrowthLineProps = {
  className?: string;
  stroke?: string;
};

/**
 * The signature visual motif of the site: an ascending trend line that
 * echoes the "growth" promise across the hero, CTA, and stat sections.
 */
export default function GrowthLine({ className, stroke = "url(#xd-growth-gradient)" }: GrowthLineProps) {
  return (
    <svg
      viewBox="0 0 600 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="xd-growth-gradient" x1="0" y1="220" x2="600" y2="0">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 180 C 90 190, 150 140, 210 130 S 320 90, 380 95 S 470 40, 540 20"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <motion.circle
        cx="540"
        cy="20"
        r="7"
        fill="#38BDF8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
    </svg>
  );
}
