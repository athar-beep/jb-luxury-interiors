import * as React from "react";
import { cn } from "@/lib/utils";

/** Small, understated label — used to honestly flag demo/sample content. */
export function Badge({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink/15 bg-paper/70 px-2.5 py-1 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-foreground/70 backdrop-blur",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
