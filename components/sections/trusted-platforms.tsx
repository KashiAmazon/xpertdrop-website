import { PLATFORMS } from "@/lib/constants";
import Reveal from "@/components/ui/reveal";

export default function TrustedPlatforms() {
  return (
    <section className="border-b border-border bg-background-soft py-14">
      <div className="container-xd">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
            Ecosystems we support
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PLATFORMS.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.06}>
              <div className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card px-4 text-center font-heading text-base font-semibold text-primary/70 shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/40 hover:text-secondary dark:text-white/70">
                {platform.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
