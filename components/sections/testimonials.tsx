import { Star, UserRound } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const SLOTS = [1, 2, 3];

export default function Testimonials() {
  return (
    <section className="bg-background-soft py-24 sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Client reviews will appear here as they're collected. We only publish testimonials that clients have explicitly approved."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SLOTS.map((slot, i) => (
            <Reveal key={slot} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-dashed border-border bg-card p-7 shadow-sm">
                <div className="flex gap-1 text-accent/40">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="flex-1 text-sm italic leading-relaxed text-foreground-muted/70">
                  “Testimonial placeholder — this space is reserved for a verified client review.”
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-soft text-foreground-muted/50">
                    <UserRound size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary dark:text-white">Client name placeholder</p>
                    <p className="text-xs text-foreground-muted/70">Business / platform placeholder</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
