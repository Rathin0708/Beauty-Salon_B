const name = "Family Makeup Studio";
const phoneDisplay = "+91 98439 0XXXX";
const phoneDigitsMasked = "91984390XXXX";

export const business = {
  name,
  category: "Beauty Salon",
  rating: 4.3,
  reviewCount: 7,
  phone: phoneDisplay,
  phoneHref: `tel:+${phoneDigitsMasked}`,
  whatsappHref: `https://wa.me/${phoneDigitsMasked}`,
  address: {
    line1: "Dubai",
    line2: "United Arab Emirates",
    country: "United Arab Emirates",
    full: "Dubai, United Arab Emirates",
  },
  hours: "Open Daily · Closes 9:00 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(`${name}, Dubai, United Arab Emirates`) +
    "&output=embed",
  mapDirectionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${name}, Dubai, United Arab Emirates`),
  instagramHref: "https://instagram.com/",
} as const;
