import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium font-heading transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
        secondary:
          "bg-secondary text-primary hover:bg-secondary/90 focus:ring-secondary",
        accent: "bg-accent text-white hover:bg-accent/90 focus:ring-primary",
        outline:
          "border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
