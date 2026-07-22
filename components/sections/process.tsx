import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="bg-primary py-24 text-white sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from first call to long-term growth"
          light
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-white/10 lg:block" />
          <div className="grid gap-8 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-5 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-heading text-lg font-bold text-accent">
                    {step.step}
                  </span>
                  <div className="lg:mt-5">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {step.description}
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
