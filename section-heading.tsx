import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "default" | "light";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "default",
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} withRule={align === "left"}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "max-w-[20ch] text-balance font-display text-[clamp(2rem,calc(5vw+1rem),3.5rem)] font-medium leading-[1.05] tracking-tight",
          light ? "text-paper" : "text-ink",
          align === "center" && "max-w-[24ch]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed",
            light ? "text-paper/70" : "text-foreground/65",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
