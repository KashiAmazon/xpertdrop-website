"use client";

import { useState } from "react";
import {
  BarChart3,
  ClipboardCheck,
  LineChart,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Target,
  Truck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { AMAZON_SERVICES, EBAY_SERVICES } from "@/lib/constants";

const AMAZON_ICONS = [Store, Search, ClipboardCheck, Target, ShieldCheck, Settings, LineChart, Package];
const EBAY_ICONS = [Store, Truck, Search, ClipboardCheck, ShoppingCart, BarChart3, TrendingUp, Package];

export default function Services() {
  const [tab, setTab] = useState<"amazon" | "ebay">("amazon");
  const services = tab === "amazon" ? AMAZON_SERVICES : EBAY_SERVICES;
  const icons = tab === "amazon" ? AMAZON_ICONS : EBAY_ICONS;

  return (
    <section id="services" className="bg-background-soft py-24 sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Services"
          title="Full-service support for every stage of growth"
          description="From day-one store setup to advanced scaling, we cover the work that keeps Amazon and eBay accounts healthy and growing."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1.5 shadow-sm">
            {(["amazon", "ebay"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  tab === key
                    ? "bg-secondary text-white shadow-[0_6px_18px_-4px_rgba(37,99,235,0.5)]"
                    : "text-foreground-muted hover:text-secondary"
                }`}
              >
                {key === "amazon" ? "Amazon Services" : "eBay Services"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold text-primary dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
