import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImage}
        alt="Interior of Bella Studio salon with velvet chairs, gold mirrors and warm lighting"
        width={1600}
        height={1104}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-plum-deep/72" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-plum)" }}
      />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Unisex Salon · Est. 2009</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl leading-[1.03] sm:text-7xl lg:text-8xl">
              Look Your Best,
              <span className="mt-1 block italic text-gold-gradient">Every Day</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
              Hair, skin and bridal artistry for everyone — delivered by senior stylists in a
              calm, unhurried space designed around you.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="gold" size="xl" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                4.9 · 1,200+ happy guests
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
