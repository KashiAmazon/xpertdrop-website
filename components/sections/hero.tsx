"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Button from "@/components/ui/button";
import GrowthLine from "@/components/ui/growth-line";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-secondary/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="container-xd relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            Amazon &amp; eBay Growth Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Scale your Amazon &amp; eBay business with a{" "}
            <span className="text-gradient">dedicated growth team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            XpertDrop helps Amazon sellers, eBay sellers, and private label brands across the
            US, UK, Canada, Australia, and Europe grow with structured strategy, hands-on
            store management, and transparent reporting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="#contact" variant="primary" icon={<ArrowUpRight size={16} />}>
              Book Free Consultation
            </Button>
            <Button
              href="#services"
              variant="secondary"
              className="!bg-white/5 !text-white !border-white/15 hover:!border-accent hover:!text-accent"
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-6"
          >
            <GrowthLine className="h-14 w-40" />
            <p className="text-sm text-white/50">
              Consistent, data-driven growth across every account we manage.
            </p>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02]"
          >
            {/* Founder image placeholder */}
            <div className="flex h-full w-full flex-col items-center justify-end">
              <svg viewBox="0 0 200 240" className="h-[92%] w-auto text-white/15" fill="currentColor">
                <circle cx="100" cy="70" r="42" />
                <path d="M20 240c0-55 36-100 80-100s80 45 80 100" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur">
              Founder photo placeholder
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.6 },
              x: { duration: 0.7, delay: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="glass absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-white/15 px-4 py-3 shadow-xl sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20 text-secondary-light">
              <TrendingUp size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-white">5+ Years</p>
              <p className="text-xs text-white/50">Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.8 },
              x: { duration: 0.7, delay: 0.8 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="glass absolute right-0 top-1/2 flex items-center gap-3 rounded-2xl border border-white/15 px-4 py-3 shadow-xl sm:-right-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
              <Users size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Amazon &amp; eBay</p>
              <p className="text-xs text-white/50">Experts</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="glass absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/15 px-4 py-3 shadow-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20 text-secondary-light">
              <ShieldCheck size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Trusted</p>
              <p className="text-xs text-white/50">eCommerce Solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
