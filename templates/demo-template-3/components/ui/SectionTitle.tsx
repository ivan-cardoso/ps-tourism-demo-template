import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightedText?: string;
  variant?: "default" | "white";
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  highlightedText,
  variant = "default",
}: SectionTitleProps) {
  const renderTitle = () => {
    if (!highlightedText) {
      return title;
    }

    const parts = title.split(highlightedText);
    if (parts.length === 1) {
      return title;
    }

    return (
      <>
        {parts[0]}
        <span className="font-cursive text-accent">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  const textColorClass = variant === "white" ? "text-white" : "text-dark";
  const subtitleColorClass =
    variant === "white" ? "text-white/80" : "text-accent";

  return (
    <div className={cn("mb-8 md:mb-12", centered && "text-center", className)}>
      {subtitle && (
        <p
          className={cn(
            "font-semibold text-base uppercase tracking-wider mb-3",
            subtitleColorClass
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight",
          textColorClass
        )}
      >
        {renderTitle()}
      </h2>
    </div>
  );
}
