import { Facebook, Instagram, Twitter } from "lucide-react";
import { navLinks, site } from "@/lib/site-config";

const socialIcons = { Instagram, Facebook, Twitter } as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-plum-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl text-gold-gradient">{site.name}</p>
          <p className="mt-2 text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Hair, skin and bridal artistry for everyone. Walk in as you are, leave feeling more
            like yourself.
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick links</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit us</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{site.address}</p>
          <a
            href={`tel:${site.phone}`}
            className="mt-3 block text-sm text-muted-foreground hover:text-gold"
          >
            {site.phone}
          </a>
          <div className="mt-6 flex gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-sm border border-gold/40 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[0.7rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Demo site — fictional business.
          </p>
          <p className="tracking-[0.16em] uppercase">Designed for salons that care</p>
        </div>
      </div>
    </footer>
  );
}
