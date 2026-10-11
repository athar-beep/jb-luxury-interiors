import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const controlBase = [
  "w-full rounded-sm border bg-chalk/70 px-4 text-sm text-foreground",
  "placeholder:text-foreground/40 transition-colors duration-200",
  "focus:border-ink/50 focus:bg-chalk focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep/40",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "aria-[invalid=true]:border-clay aria-[invalid=true]:bg-clay/[0.04]",
].join(" ");

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(function Label({ className, ...props }, ref) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-[0.78rem] font-medium uppercase tracking-[0.12em] text-foreground/70",
        className,
      )}
      {...props}
    />
  );
});

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(controlBase, "h-12 border-ink/15", className)}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(controlBase, "min-h-[8.5rem] border-ink/15 py-3", className)}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentPropsWithoutRef<"select">
>(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(controlBase, "h-12 appearance-none border-ink/15 pr-10", className)}
      {...props}
    >
      {children}
    </select>
  );
});

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? <span className="ml-1 text-clay-deep">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-clay-deep">
          {error}
        </p>
      ) : hint ? (
        <p id={`${htmlFor}-hint`} className="text-xs text-foreground/45">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
