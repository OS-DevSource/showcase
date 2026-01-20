import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring font-[var(--font-button)] inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(120deg,rgb(var(--accent)_/_0.95),rgb(var(--spot-1)_/_0.92))] text-primary-foreground shadow-[0_18px_44px_rgba(24,34,104,0.32)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_24px_60px_rgba(24,34,104,0.45)]",
        secondary:
          "border border-border text-foreground hover:border-foreground/70 hover:-translate-y-0.5 hover:bg-muted/60 dark:hover:bg-muted/30",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-muted/60 dark:hover:bg-muted/30",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
