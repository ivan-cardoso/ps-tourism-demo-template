import type React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "neutral" | "white" | "primary";
  pattern?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "default",
  pattern = false,
}: SectionWrapperProps) {
  const backgroundClasses = {
    default: "bg-background",
    neutral: "bg-neutral/25",
    white: "bg-white",
    primary: "bg-primary",
  };

  const backgroundPatternUrl = {
    default: "url('/images/cottage-pattern.png')",
    neutral: "url('/images/cottage-pattern.png')",
    white: "url('/images/cottage-pattern.png')",
    primary: "url('/images/cottage-pattern.png')",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-20 relative",
        backgroundClasses[background],
        className
      )}
    >
      {pattern && (
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: backgroundPatternUrl[background],
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
}
