export interface CompanyInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  mapsUrl: string;
  workingHours: string;
  proprietor: {
    name: string;
    title: string;
    image: string;
    statement: string;
    cardFront: string;
    cardBack: string;
  };
  verifiedServices: string[];
}

export const companyData: CompanyInfo = {
  name: "SG Industry",
  tagline: "PRECISION · QUALITY · DEPENDABILITY",
  heroHeadline: "Metal, shaped into art.",
  heroSubheadline:
    "From precise cuts on our APEX Fiber Laser to multi-axis CNC press brake formed components, SG Industry turns metal requirements into practical, well-crafted engineering results in Auto Nagar, Gajuwaka, Visakhapatnam.",
  phone: "+919866378877",
  phoneDisplay: "098663 78877",
  whatsappNumber: "919866378877",
  email: "info@sgindustry.in",
  address: {
    line1: "C-13, near Autonagar, B Block",
    area: "Auto Nagar, Gajuwaka",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530012",
    full: "C-13, near Autonagar, B Block, Auto Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530012",
  },
  mapsUrl: "https://maps.google.com/?q=Auto+Nagar+Gajuwaka+Visakhapatnam+530012",
  workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
  proprietor: {
    name: "Masada Siva Srinu",
    title: "Proprietor & Founder",
    image: "/images/team/masada-siva-srinu.jpg",
    statement:
      "At SG Industry, precision is not just a specification on a CAD drawing—it is our personal commitment to every fabricator, contractor, and engineer who trusts our workshop. We ensure that every laser-cut edge and formed bend leaves our floor ready for assembly with zero compromise on quality.",
    cardFront: "/images/bussinesscard-front.jpg",
    cardBack: "/images/bussinesscard-back.jpg",
  },
  verifiedServices: [
    "Precision CNC Fiber Laser Cutting",
    "CNC Sheet Metal Bending & Press Brake Forming",
    "Architectural & Decorative Metal Screens (Jali / Facades)",
    "Custom Industrial Enclosures & Electrical Cabinets",
    "Flange Rings, Heavy Base Plates & Circular Blanks",
    "Batch Production & Custom Sheet Metal Fabrication",
  ],
};

export const createWhatsAppUrl = (customMessage?: string) => {
  const defaultMsg = encodeURIComponent(
    "Hello Masada Siva Srinu garu / SG Industry, I would like to discuss a laser cutting / CNC bending requirement."
  );
  const msg = customMessage ? encodeURIComponent(customMessage) : defaultMsg;
  return `https://wa.me/${companyData.whatsappNumber}?text=${msg}`;
};
