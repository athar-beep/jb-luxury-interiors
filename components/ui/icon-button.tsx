import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-full",
    "transition-[transform,background-color,color,border-color] duration-300 ease-editorial",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-95",
  ].join(" "),
  {
    variants: {
      variant: {
        solid: "bg-ink text-paper hover:bg-ink-700",
        outline: "border border-ink/20 text-ink hover:bg-ink hover:text-paper",
        glass:
          "border border-paper/25 bg-paper/10 text-paper backdrop-blur-md hover:bg-paper/20",
        clay: "bg-clay text-chalk hover:bg-ink",
      },
      size: {
        sm: "h-9 w-9",
        default: "h-11 w-11",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: { variant: "outline", size: "default" },
  },
);

type IconButtonProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof iconButtonVariants>;

/** An anchor styled as a circular icon control (social / utility actions). */
export const IconButton = React.forwardRef<HTMLAnchorElement, IconButtonProps>(
  function IconButton({ className, variant, size, ...props }, ref) {
    return (
      <a
        ref={ref}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
