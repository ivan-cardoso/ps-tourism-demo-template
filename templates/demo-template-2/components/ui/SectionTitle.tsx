import cn from "@/utils/cn";
import AnimatedElement from "@/components/ui/AnimatedElement";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  label?: string;
  centered?: boolean;
  className?: string;
  variant?: "default" | "white" | "light" | "secondary";
}

export default function SectionTitle({
  title,
  subtitle,
  label,
  centered = true,
  variant = "default",
  className,
}: SectionTitleProps) {
  const textClasses = {
    default: "text-primary",
    white: "text-white",
    light: "text-background",
    secondary: "bg-secondary",
  };
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
      {label && (
        <AnimatedElement animation="fade-in">
          <span className="inline-block px-4 py-2 bg-primary/50 text-accent text-sm font-medium rounded-full mb-4">
            {label}
          </span>
        </AnimatedElement>
      )}

      <AnimatedElement animation="fade-up" delay={100}>
        <h2
          className={cn(
            "text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-primary mb-4",
            centered && "text-center",
            textClasses[variant]
          )}
        >
          {title}
        </h2>
      </AnimatedElement>

      {subtitle && (
        <AnimatedElement animation="fade-up" delay={200}>
          <p className="text-lg text-dark/90 max-w-3xl mx-auto">{subtitle}</p>
        </AnimatedElement>
      )}
    </div>
  );
}
