"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Globe2,
  ShoppingBag,
  Tag,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Soft blurred gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#2563EB]/15 blur-[110px]" />
        <div className="absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-[#F97316]/15 blur-[110px]" />
        <div className="absolute top-1/3 right-1/4 h-[260px] w-[260px] rounded-full bg-[#2563EB]/10 blur-[100px]" />
      </div>

      <div className="container-xd relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column — copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-[#2563EB]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]"
          >
            <Award size={14} />
            Amazon &amp; eBay Growth Agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-[#0F172A] sm:text-5xl lg:text-[3.4rem]"
          >
            Scale your store with a{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">
              premium growth partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#0F172A]/60 sm:text-lg"
          >
            XpertDrop helps Amazon sellers, eBay sellers, and private label brands across
            the US, UK, Canada, Australia, and Europe grow with structured strategy,
            hands-on store management, and transparent reporting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-8px_rgba(249,115,22,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea6c0e] hover:shadow-[0_14px_36px_-8px_rgba(249,115,22,0.65)]"
            >
              Book Free Consultation
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2563EB] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]/5"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#0F172A]/10 pt-8"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                <Award size={16} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0F172A]">5+ Years</p>
                <p className="text-xs text-[#0F172A]/50">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316]">
                <Users size={16} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0F172A]">300+</p>
                <p className="text-xs text-[#0F172A]/50">Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                <Globe2 size={16} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Global</p>
                <p className="text-xs text-[#0F172A]/50">Marketplace</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column — visual */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[30px] bg-gradient-to-br from-[#2563EB] via-[#2563EB] to-[#1d4fd1] shadow-[0_30px_70px_-20px_rgba(37,99,235,0.55)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
            <Image
              src="/founder.png"
              alt="XpertDrop founder"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
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
            className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-[#0F172A]/5 bg-white/90 px-4 py-3 shadow-[0_16px_40px_-14px_rgba(15,23,42,0.25)] backdrop-blur sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
              <ShoppingBag size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">Amazon</p>
              <p className="text-xs text-[#0F172A]/50">Expert</p>
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
            className="absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl border border-[#0F172A]/5 bg-white/90 px-4 py-3 shadow-[0_16px_40px_-14px_rgba(15,23,42,0.25)] backdrop-blur sm:-right-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
              <Tag size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">eBay</p>
              <p className="text-xs text-[#0F172A]/50">Expert</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-[#0F172A]/5 bg-white/90 px-4 py-3 shadow-[0_16px_40px_-14px_rgba(15,23,42,0.25)] backdrop-blur"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
              <Award size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">5+ Years</p>
              <p className="text-xs text-[#0F172A]/50">In eCommerce</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
