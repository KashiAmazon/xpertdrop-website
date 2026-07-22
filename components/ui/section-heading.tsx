import clsx from "clsx";
import Reveal from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span
        className={clsx(
          "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
          light
            ? "border-white/15 text-accent"
            : "border-border text-secondary bg-secondary/5"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={clsx(
          "mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-primary dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-foreground-muted"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
