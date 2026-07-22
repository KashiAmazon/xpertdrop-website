import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="#top" className="flex items-center gap-2.5" aria-label="XpertDrop home">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl font-heading text-base font-bold ${
          light ? "bg-white text-primary" : "bg-gradient-to-br from-secondary to-accent text-white"
        }`}
      >
        X
      </span>
      <span
        className={`font-heading text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-primary dark:text-white"
        }`}
      >
        Xpert<span className="text-secondary">Drop</span>
      </span>
    </Link>
  );
}
