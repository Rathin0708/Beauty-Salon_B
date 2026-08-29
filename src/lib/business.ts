export const business = {
  name: "Yahweh Family Makeup Studio",
  category: "Beauty Salon",
  rating: 4.3,
  reviewCount: 7,
  phone: "+91 98439 03303",
  phoneHref: "tel:+919843903303",
  whatsappHref: "https://wa.me/919843903303",
  address: {
    line1: "Sangunagar",
    line2: "Vadakankulam, Tamil Nadu 627116",
    country: "India",
    full: "Sangunagar, Vadakankulam, Tamil Nadu 627116, India",
  },
  hours: "Open Daily · Closes 9:00 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Yahweh Family Makeup Studio, Sangunagar, Vadakankulam, Tamil Nadu 627116, India") +
    "&output=embed",
  mapDirectionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Yahweh Family Makeup Studio, Sangunagar, Vadakankulam, Tamil Nadu 627116, India"),
  instagramHref: "https://instagram.com/",
} as const;
