import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1360px] px-5 sm:px-7 lg:px-10 xl:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
