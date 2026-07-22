import { ImageIcon } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

const CASE_STUDY_SLOTS = [1, 2, 3];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 sm:py-28">
      <div className="container-xd">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real case studies, coming soon"
          description="We publish detailed case studies only once results are verified with the client. This section is reserved for those write-ups as they're finalised."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDY_SLOTS.map((slot, i) => (
            <Reveal key={slot} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-card shadow-sm">
                <div className="flex h-40 items-center justify-center bg-background-soft text-foreground-muted/50">
                  <ImageIcon size={28} />
                  <span className="ml-2 text-xs font-medium">Screenshot placeholder</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    Case Study Placeholder
                  </span>
                  <div className="space-y-2 text-sm text-foreground-muted">
                    <p><span className="font-semibold text-primary dark:text-white">Client Challenge:</span> To be added</p>
                    <p><span className="font-semibold text-primary dark:text-white">Solution:</span> To be added</p>
                    <p><span className="font-semibold text-primary dark:text-white">Implementation:</span> To be added</p>
                    <p><span className="font-semibold text-primary dark:text-white">Result:</span> To be added</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xs text-foreground-muted/70">Revenue growth &amp; timeline pending</span>
                    <Button href="#contact" variant="ghost" className="!px-0 !py-0 text-sm">
                      Read More
                    </Button>
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
