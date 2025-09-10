import cn from "@/utils/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border-6  border-background shadow-sm overflow-hidden",
        hover &&
          "hover:shadow-md  transition-all duration-300 hover:border-neutral/10",
        className
      )}
    >
      {children}
    </div>
  );
}
