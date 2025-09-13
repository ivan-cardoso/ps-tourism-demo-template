/* "use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import cn from "@/utils/cn"

interface AnimatedElementProps {
  children: ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function AnimatedElement({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  as: Element = "div",
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClass = `animate-${animation}`

  return (
    <Element
      ref={ref}
      className={cn(animationClass, isVisible && "animate", className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Element>
  )
}
 */
"use client";

import type React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import type { JSX } from "react/jsx-runtime";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedElement({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  as: Component = "div",
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "slide-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    "slide-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    "scale-up": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
