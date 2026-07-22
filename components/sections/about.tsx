import { Compass, Handshake, Target } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import AnimatedCounter from "@/components/ui/animated-counter";

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To give eCommerce businesses the strategy, systems, and hands-on support they need to grow with confidence on Amazon and eBay.",
  },
  {
    icon: Compass,
    title: "Vision",
    description:
      "To be the trusted growth partner for sellers worldwide, known for honest advice and measurable results.",
  },
  {
    icon: Handshake,
    title: "Core Values",
    description:
      "Transparency, accountability, and a genuine investment in every client's long-term success.",
  },
];

const STATS = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "", label: "Marketplaces Specialised" },
  { value: 100, suffix: "%", label: "Transparent Reporting" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-xd">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About XpertDrop"
              title="Built by operators who've run stores like yours"
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                XpertDrop was founded on a simple idea: eCommerce sellers deserve a growth
                partner who has actually operated stores, not just studied them. With six
                years of hands-on experience across Amazon private label, wholesale, and
                eBay dropshipping — including running an Australian eBay store that earned
                Top Rated Seller status — our approach is grounded in what genuinely moves
                the needle on marketplaces.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                We work as an extension of your team, combining platform expertise with
                clear communication, so you always know what&apos;s being done and why.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-heading text-3xl font-bold text-primary dark:text-white"
                  />
                  <p className="mt-1 text-xs text-foreground-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <value.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
