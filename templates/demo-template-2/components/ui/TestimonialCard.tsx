import Card from "./Card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  className?: string;
  testimonial: {
    text: string;
    author: string;
    location?: string;
    authorAvatar?: string;
    rating?: number;
    date?: string;
    occasion?: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full p-6 flex flex-col justify-between bg-background">
      <div>
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent/90 fill-current" />
          ))}
        </div>

        <blockquote className="text-dark/80 mb-6 italic">
          "{testimonial.text}"
        </blockquote>
      </div>

      <div className="mt-auto flex items-center space-x-3 ">
        <div className="flex-shrink-0 ">
          <img
            src={
              testimonial.authorAvatar ||
              `/placeholder.svg?height=40&width=40&query=customer`
            }
            alt={`${testimonial.author} avatar`}
            className="w-12 h-12 rounded-full object-cover bg-primary"
          />
        </div>

        <div>
          <div className="font-semibold text-primary text-lg">
            {testimonial.author}
          </div>
          <div className="text-base text-dark/60">{testimonial.location}</div>
        </div>
      </div>
    </Card>
  );
}
