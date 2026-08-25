import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const shots = [
  { src: g1, alt: "Balayage colour and glossy blow-dry", label: "Hair Colour", tall: true },
  { src: g2, alt: "Men's fade haircut and beard sculpt", label: "Men's Grooming", tall: false },
  { src: g3, alt: "Bridal makeup with soft glow finish", label: "Bridal Makeup", tall: false },
  { src: g4, alt: "Glossy nude manicure detail", label: "Nail Studio", tall: false },
  { src: g5, alt: "Hair spa and facial treatment", label: "Spa Rituals", tall: false },
  { src: g6, alt: "Sleek precision bob with high shine", label: "Precision Cuts", tall: true },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Looks from the studio floor"
          subtitle="A small selection of recent work by our styling, colour and makeup teams."
        />

        <div className="mt-16 grid auto-rows-[240px] grid-cols-2 gap-4 sm:auto-rows-[280px] lg:grid-cols-3">
          {shots.map((shot, index) => (
            <Reveal
              key={shot.label}
              delay={index * 80}
              className={shot.tall ? "row-span-2" : undefined}
            >
              <figure className="group relative h-full overflow-hidden rounded-sm border border-border">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-deep/95 to-transparent p-5 pt-16">
                  <span className="text-[0.65rem] tracking-[0.24em] uppercase text-gold">
                    {shot.label}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
