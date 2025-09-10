import type { ReactNode } from "react";
import cn from "@/utils/cn";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "neutral" | "secondary" | "white";
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  background = "default",
  id,
}: SectionWrapperProps) {
  const backgroundClasses = {
    default: "bg-background",
    neutral: "bg-neutral/30",
    secondary: "bg-secondary/30",
    white: "bg-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", backgroundClasses[background], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 re">
        {children}
      </div>
    </section>
  );
}
