"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type React from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedElement({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  as: Component = "div",
}: AnimatedElementProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <Component
      ref={ref}
      className={cn(`animate-${animation}`, isInView && "in-view", className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
