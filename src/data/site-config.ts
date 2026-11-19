export const siteImages = {
  logo: "/images/organization-logo.png",
  nisha: "/images/nisha-portrait-clean.png",
  nishaGallery: "/images/nisha-portrait-gallery.png",
  nishaMain: "/images/nisha-portrait-main.png",
} as const;

export const phone = "8802607687";
export const phoneLink = `tel:${phone}`;
export const whatsappLink = `https://wa.me/91${phone}`;
export const address = "ओखला, पुराना जसोला मेन रोड, C-8, चौथी मंजिल, नई दिल्ली – 110025";
export const directionsLink =
  "https://www.google.com/maps/search/?api=1&query=C-8%2C%20Purana%20Jasola%20Main%20Road%2C%20Okhla%2C%20New%20Delhi%20110025";

export const pageLinks = [
  { label: "होम", to: "/" },
  { label: "हमारे बारे में", to: "/about" },
  { label: "हमारे कार्य", to: "/services" },
  { label: "महिला सशक्तिकरण", to: "/women-empowerment" },
  { label: "शिक्षा एवं स्वास्थ्य", to: "/education-health" },
  { label: "अध्यक्ष", to: "/president" },
  { label: "गैलरी", to: "/gallery" },
  { label: "संपर्क", to: "/contact" },
] as const;
