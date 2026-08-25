import aboutImage from "@/assets/about-salon.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { value: "15+", label: "Years of craft" },
  { value: "12", label: "Senior stylists" },
  { value: "1.2k", label: "Five-star reviews" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -inset-3 -z-10 rounded-sm border border-gold/25" />
          <img
            src={aboutImage}
            alt="Bella Studio stylist finishing a client's blow-dry"
            width={1000}
            height={1200}
            loading="lazy"
            className="h-[520px] w-full rounded-sm object-cover shadow-[var(--shadow-lux)]"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              A salon that treats beauty as
              <span className="italic text-gold-gradient"> care, not rush</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Bella Studio began with one idea: everyone deserves to leave feeling more like
              themselves. Our stylists spend time understanding your hair, your skin and how much
              effort your mornings actually allow — then build a look that holds up long after you
              walk out.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We use gentle, professional-grade products, keep the space warm and unhurried, and
              welcome every guest the same way, whether it's a fifteen-minute trim or a full
              bridal day.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl text-gold">{stat.value}</dt>
                  <dd className="mt-2 text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
