"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Button from "@/components/ui/button";
import GrowthLine from "@/components/ui/growth-line";

export default function Hero() {
  return (
<section
  id="top"
  className="relative overflow-hidden bg-white pt-28 pb-24 sm:pt-36 sm:pb-28"
>
  {/* Ambient gradient background */}
      <div className="absolute inset-0 overflow-hidden">

<div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

<div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-60" />

</div>
  
      <div className="container-xd relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700""
          >
            Amazon &amp; eBay Growth Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl""
          >
            Scale your Amazon &amp; eBay business with a{" "}
            <span className="text-gradient">dedicated growth team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600""
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
            <p className="text-sm text-slate-500"">
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
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 p-2 shadow-2xl""
          >
           {/* Founder image placeholder */}
          <Image
  src="/founder.png"
  alt="Founder"
  fill
  className="object-cover rounded-[2rem]"
/>
            
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
