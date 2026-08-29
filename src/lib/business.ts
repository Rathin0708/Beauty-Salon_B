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
    line1: "Sangunagar",
    line2: "Vadakankulam, Tamil Nadu 627116",
    country: "India",
    full: "Sangunagar, Vadakankulam, Tamil Nadu 627116, India",
  },
  hours: "Open Daily · Closes 9:00 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(`${name}, Sangunagar, Vadakankulam, Tamil Nadu 627116, India`) +
    "&output=embed",
  mapDirectionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${name}, Sangunagar, Vadakankulam, Tamil Nadu 627116, India`),
  instagramHref: "https://instagram.com/",
} as const;
