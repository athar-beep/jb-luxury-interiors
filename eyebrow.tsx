import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = React.ComponentPropsWithoutRef<"p"> & {
  withRule?: boolean;
  tone?: "default" | "light";
};

/** Small uppercase section label with an optional leading rule. */
export function Eyebrow({
  className,
  children,
  withRule = true,
  tone = "default",
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      {withRule ? (
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-8 shrink-0",
            tone === "light" ? "bg-paper/40" : "bg-ink/30",
          )}
        />
      ) : null}
      <span className={cn("eyebrow", tone === "light" && "text-paper/70")}>
        {children}
      </span>
    </p>
  );
}
