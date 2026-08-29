// Single-locale dictionary today. To add a language later: add its key to
// `Locale`, add a matching entry to `dictionaries` with the same shape as
// `en`, and wire a locale switcher to call `getDictionary(locale)`.
export type Locale = "en";

export const defaultLocale: Locale = "en";

export interface Dictionary {
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    ratingSuffix: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    points: { title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; image: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    images: { src: string; alt: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    directionsCta: string;
    callCta: string;
    whatsappCta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

const en: Dictionary = {
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Gallery" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Book Now",
  },
  hero: {
    eyebrow: "Bridal & Family Makeup Studio",
    title: "Where every occasion",
    highlight: "gets its glow",
    subtitle:
      "Dubai's trusted studio for bridal makeup, wedding & event preparation, hairstyling and eyebrow beautification — crafted for your family's biggest moments.",
    primaryCta: "Book an Appointment",
    secondaryCta: "Get Directions",
    ratingSuffix: "rated by our clients",
  },
  about: {
    eyebrow: "About the Studio",
    title: "Family-run, detail-obsessed, always on trend",
    body: "We've been styling brides, grooms and families in Dubai with a warm, personal touch. Every look is tailored — from soft everyday glam to full bridal transformations — using techniques that hold up through the whole event, not just the photos.",
    points: [
      { title: "Bridal Specialists", body: "Complete bridal packages from engagement to reception." },
      { title: "Event-Ready Looks", body: "Makeup and hair built to last through long ceremonies." },
      { title: "Personal Attention", body: "A family studio that gets to know every client by name." },
    ],
  },
  services: {
    eyebrow: "What We Offer",
    title: "Services for every celebration",
    subtitle:
      "From the mehndi function to the reception, we cover every look your event needs.",
    items: [
      {
        title: "Bridal Makeup",
        description: "Full bridal makeup packages with trial sessions, tailored to your outfit and skin tone.",
        image:
          "https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Wedding & Event Preparation",
        description: "Coordinated styling for the whole wedding party — mehndi, sangeet, and reception ready.",
        image:
          "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Hair Styling",
        description: "Classic and contemporary hairstyling for brides, family functions and everyday glam.",
        image:
          "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Eyebrow Beautification",
        description: "Precision eyebrow shaping and threading to frame every look.",
        image:
          "https://images.unsplash.com/photo-1608558070426-e4e9b1c954d2?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Party & Occasion Makeup",
        description: "Event-ready glam for engagements, birthdays and festive get-togethers.",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Skin & Face Care",
        description: "Pre-event skin prep so makeup sits flawlessly on the day.",
        image:
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Moments we've helped create",
    subtitle: "A glimpse of the studio and the looks we love creating.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1610047614301-13c63f00c032?q=80&w=900&auto=format&fit=crop",
        alt: "Bridal makeup look with traditional jewelry",
      },
      {
        src: "https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6?q=80&w=900&auto=format&fit=crop",
        alt: "Bride in pink bridal makeup",
      },
      {
        src: "https://images.unsplash.com/photo-1600685890506-593fdf55949b?q=80&w=900&auto=format&fit=crop",
        alt: "Bride with floral bridal makeup",
      },
      {
        src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
        alt: "Makeup products and brushes flatlay",
      },
      {
        src: "https://images.unsplash.com/photo-1608558070426-e4e9b1c954d2?q=80&w=900&auto=format&fit=crop",
        alt: "Eyebrow beautification close-up",
      },
      {
        src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop",
        alt: "Facial skincare treatment",
      },
    ],
  },
  contact: {
    eyebrow: "Visit Us",
    title: "Plan your visit",
    subtitle: "We're in the heart of Dubai — reach out to book your slot.",
    addressLabel: "Address",
    hoursLabel: "Hours",
    phoneLabel: "Phone",
    directionsCta: "Get Directions",
    callCta: "Call Now",
    whatsappCta: "Chat on WhatsApp",
  },
  footer: {
    tagline: "Bridal & Family Makeup Studio · Dubai",
    rights: "All rights reserved.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}
