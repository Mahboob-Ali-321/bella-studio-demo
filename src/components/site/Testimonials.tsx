import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-plum-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Loved by the people in our chairs"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <figure className="group flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[var(--shadow-glow)]">
                <Quote className="size-7 text-gold/50" />
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-3.5",
                        i < item.rating ? "fill-gold text-gold" : "text-muted-foreground/40",
                      )}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-xl text-gold">{item.name}</p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
