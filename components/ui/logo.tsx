import Link from "next/link";
import { cn } from "@/lib/utils";
import { business } from "@/lib/business";

type LogoProps = {
  tone?: "default" | "light";
  className?: string;
  showCity?: boolean;
};

/** The JB wordmark: a monogram tile beside a typeset brand lockup. */
export function Logo({ tone = "default", className, showCity = true }: LogoProps) {
  const light = tone === "light";
  return (
    <Link
      href="#top"
      aria-label={`${business.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-sm border font-display text-[0.95rem] leading-none transition-colors duration-300",
          light
            ? "border-paper/30 text-paper group-hover:bg-paper group-hover:text-ink"
            : "border-ink/25 text-ink group-hover:bg-ink group-hover:text-paper",
        )}
      >
        {business.monogram}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] tracking-tight",
            light ? "text-paper" : "text-ink",
          )}
        >
          {business.name}
        </span>
        {showCity ? (
          <span
            className={cn(
              "mt-1 text-[0.5625rem] font-medium uppercase tracking-[0.12em]",
              light ? "text-paper/55" : "text-foreground/45",
            )}
          >
            {business.address.city} · Pakistan
          </span>
        ) : null}
      </span>
    </Link>
  );
}
