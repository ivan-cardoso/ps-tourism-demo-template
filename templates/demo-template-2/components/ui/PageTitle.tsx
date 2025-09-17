import cn from "@/utils/cn";
import AnimatedElement from "@/components/ui/AnimatedElement";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  className?: string;
}

export default function PageTitle({
  title,
  subtitle,
  label,
  centered = true,
  className,
}: PageTitleProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
      {label && (
        <AnimatedElement animation="fade-in">
          <span className="inline-block px-4 py-2 bg-primary/50 text-accent text-sm font-medium rounded-full mb-6 capitalize">
            {label}
          </span>
        </AnimatedElement>
      )}

      <AnimatedElement animation="fade-up" delay={100}>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
          {title}
        </h1>
      </AnimatedElement>

      {subtitle && (
        <AnimatedElement animation="fade-up" delay={200}>
          <p className="text-lg lg:text-xl text-white/80 max-w-xl mx-auto">
            {subtitle}
          </p>
        </AnimatedElement>
      )}
    </div>
  );
}
