import { Crown, Droplets, Hand, Palette, Scissors, Sparkles, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { Scissors, Palette, Droplets, Crown, Sparkles, Hand } as const;

export function Services() {
  return (
    <section id="services" className="relative bg-plum-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services crafted for every guest"
          subtitle="Transparent pricing, senior stylists and premium products across hair, skin and bridal."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 90}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[var(--shadow-glow)]">
                  <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="inline-flex size-12 items-center justify-center rounded-sm border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs tracking-[0.18em] uppercase text-gold">
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-foreground/75 transition-colors hover:text-gold"
                    >
                      Book Now
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
