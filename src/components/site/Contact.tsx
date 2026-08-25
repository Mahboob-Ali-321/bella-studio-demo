import { useState, type FormEvent } from "react";
import { Clock, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-ring";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // Demo only — wire this to your booking backend or email service.
    setTimeout(() => {
      setSubmitting(false);
      event.currentTarget?.reset();
      toast.success("Request received", {
        description: "This is a demo form — our team would call you within the hour.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Book With Us"
          title="Reserve your chair"
          subtitle="Send a request or message us on WhatsApp — walk-ins welcome when we have space."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-border bg-card p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={`mt-3 ${fieldClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 555 000 0000"
                    className={`mt-3 ${fieldClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="eyebrow">
                    Service
                  </label>
                  <select id="service" name="service" required className={`mt-3 ${fieldClass}`}>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="eyebrow">
                    Preferred date
                  </label>
                  <input id="date" name="date" type="date" className={`mt-3 ${fieldClass}`} />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you have in mind…"
                  className={`mt-3 resize-none ${fieldClass}`}
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="gold" size="xl" disabled={submitting}>
                  {submitting ? "Sending…" : "Request Appointment"}
                </Button>
                <Button variant="goldOutline" size="xl" asChild>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </form>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-sm border border-border">
                <iframe
                  title={`Map showing ${site.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full grayscale-[35%]"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-sm border border-border bg-card p-7">
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span className="text-muted-foreground">{site.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                    <a href={`tel:${site.phone}`} className="text-muted-foreground hover:text-gold">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                    <a
                      href={`mailto:${site.email}`}
                      className="text-muted-foreground hover:text-gold"
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="flex items-center gap-2 eyebrow">
                    <Clock className="size-3.5" /> Business hours
                  </p>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    {site.hours.map((slot) => (
                      <div key={slot.day} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{slot.day}</dt>
                        <dd className="text-foreground/90">{slot.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
