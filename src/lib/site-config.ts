/**
 * Single source of truth for client-specific content.
 * Swap these values (plus the images in src/assets and the color tokens in
 * src/styles.css) to re-skin this demo for a different salon.
 */
export const site = {
  name: "Bella Studio",
  tagline: "Unisex Salon & Beauty Lounge",
  phone: "+1 (555) 014-8820",
  whatsapp: "15550148820",
  email: "hello@bellastudio.com",
  address: "24 Rosewood Avenue, Downtown District, Springfield",
  mapQuery: "24 Rosewood Avenue Springfield",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: "Scissors",
    title: "Haircut & Styling",
    description:
      "Precision cuts and blowouts shaped to your face, hair texture and everyday routine.",
    price: "from $35",
  },
  {
    icon: "Palette",
    title: "Hair Color",
    description:
      "Balayage, global colour and grey coverage using ammonia-free premium formulas.",
    price: "from $75",
  },
  {
    icon: "Droplets",
    title: "Hair Spa & Treatments",
    description:
      "Deep-conditioning rituals, keratin smoothing and scalp therapy for lasting shine.",
    price: "from $55",
  },
  {
    icon: "Crown",
    title: "Bridal Makeup",
    description:
      "HD and airbrush bridal looks with draping, trials and on-location styling teams.",
    price: "from $220",
  },
  {
    icon: "Sparkles",
    title: "Waxing & Facial",
    description:
      "Gentle waxing plus clean-up, hydra-glow and anti-tan facials for radiant skin.",
    price: "from $28",
  },
  {
    icon: "Hand",
    title: "Manicure & Pedicure",
    description:
      "Spa manicures, gel extensions and restorative pedicures in a calm private corner.",
    price: "from $30",
  },
] as const;

export const testimonials = [
  {
    name: "Priya Raman",
    role: "Bridal client",
    rating: 5,
    quote:
      "They did my entire bridal look and I have never felt more myself. The trial session alone was worth it — nothing was rushed, everything was considered.",
  },
  {
    name: "Daniel Okafor",
    role: "Regular since 2021",
    rating: 5,
    quote:
      "Best men's cut in the city, full stop. The fade is clean every single time and the head massage at the end is the reason I never switched salons.",
  },
  {
    name: "Elena Whitfield",
    role: "Colour client",
    rating: 5,
    quote:
      "My balayage grew out beautifully instead of turning into a line. They actually listen and tell you honestly what will work with your hair.",
  },
  {
    name: "Marcus Lee",
    role: "Spa & grooming",
    rating: 4,
    quote:
      "The space feels genuinely premium — warm lighting, great music, no waiting around. Booking on WhatsApp takes about ten seconds.",
  },
];
