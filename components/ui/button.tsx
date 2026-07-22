import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent";

  const styles = {
    primary:
      "bg-secondary text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] hover:bg-secondary-light hover:shadow-[0_10px_30px_-6px_rgba(37,99,235,0.65)] hover:-translate-y-0.5",
    secondary:
      "bg-white text-primary border border-border hover:border-secondary hover:text-secondary hover:-translate-y-0.5",
    ghost:
      "text-foreground hover:text-secondary",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={clsx(base, styles[variant], className)} {...props}>
      {children}
      {icon}
    </Link>
  );
}
