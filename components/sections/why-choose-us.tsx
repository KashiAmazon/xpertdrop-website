import {
  BadgeCheck,
  BarChart4,
  MessageSquare,
  ShieldCheck,
  Timer,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICONS = [BadgeCheck, BarChart4, MessageSquare, Timer, ShieldCheck, TrendingUp];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Why Choose XpertDrop"
          title="A partner that treats your account like their own"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 bg-card p-8 transition-colors hover:bg-background-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
