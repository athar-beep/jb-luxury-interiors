import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "group/btn relative inline-flex select-none items-center justify-center gap-2.5",
    "whitespace-nowrap font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em]",
    "transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-editorial",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    "disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Primary CTA — hairline ghost: text with thin rules above & below, no box */
        primary:
          "rounded-none border-y border-ink/35 bg-transparent text-ink hover:border-ink hover:text-ink-700",
        /* Same hairline CTA, white, for use over imagery / dark sections */
        invert:
          "rounded-none border-y border-paper/45 bg-transparent text-paper hover:border-paper hover:text-paper/85",
        clay: "rounded-sm bg-clay px-6 text-chalk shadow-soft hover:bg-ink",
        outline:
          "rounded-sm border border-ink/25 px-6 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        light: "rounded-sm bg-paper px-6 text-ink shadow-soft hover:bg-chalk",
        ghost: "rounded-sm px-4 text-ink hover:bg-ink/[0.06]",
        link: "rounded-none px-0 normal-case tracking-normal link-underline",
      },
      size: {
        sm: "h-9 text-[0.6875rem]",
        default: "h-11",
        lg: "h-[3.25rem]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    /** Renders a sliding arrow after the label. */
    arrow?: boolean;
  };

function SlidingArrow() {
  return (
    <span
      aria-hidden="true"
      className="relative block overflow-hidden"
      style={{ width: "1.05em", height: "1.05em" }}
    >
      <ArrowRight className="absolute inset-0 h-full w-full transition-transform duration-500 ease-editorial group-hover/btn:translate-x-[140%] group-focus-visible/btn:translate-x-[140%]" />
      <ArrowRight className="absolute inset-0 h-full w-full -translate-x-[140%] transition-transform duration-500 ease-editorial group-hover/btn:translate-x-0 group-focus-visible/btn:translate-x-0" />
    </span>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, asChild = false, arrow = false, children, ...props },
    ref,
  ) {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      const child = children as React.ReactElement<{ children?: React.ReactNode }>;
      const content =
        arrow && React.isValidElement(child)
          ? React.cloneElement(child, undefined, child.props.children, <SlidingArrow />)
          : children;
      return (
        <Slot ref={ref} className={classes} {...props}>
          {content}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
        {arrow ? <SlidingArrow /> : null}
      </button>
    );
  },
);
