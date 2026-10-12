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
    designation: string;
    image: string;
    experience: string;
    specialization: string;
    statement: string;
    bio: string;
    keyPillars: {
      title: string;
      description: string;
    }[];
    stats: {
      label: string;
      value: string;
      desc: string;
    }[];
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
    designation: "Managing Director & Chief Technical Head",
    image: "/images/team/masada-siva-srinu.jpg",
    experience: "12+ Years in Precision Metal Fabrication",
    specialization: "CNC Fiber Laser Profiling, Press Brake Tooling & Turnkey Sheet Metal Engineering",
    statement:
      "At SG Industry, precision is not just a specification on a CAD drawing—it is our personal commitment to every fabricator, contractor, and engineer who trusts our workshop. We ensure that every laser-cut edge and formed bend leaves our floor ready for assembly with zero compromise on quality.",
    bio:
      "With over a decade of deep practical mastery in CNC machine programming, metal nesting optimization, and industrial press brake forming, Masada Siva Srinu founded SG Industry to bridge the gap between technical tolerance and dependable delivery in Visakhapatnam. Under his daily on-floor leadership, our Auto Nagar facility houses advanced APEX CNC Fiber Laser cutting technology and computer-controlled press brakes, personally inspecting client drawings, calibrating machine feed rates, and ensuring pristine burr-free craftsmanship for small prototypes and high-volume industrial batches alike.",
    keyPillars: [
      {
        title: "Direct Drawing & CAD Feasibility Review",
        description:
          "Personally evaluates 2D CAD/DXF drawings, plate nesting layout, and bend clearances to eliminate manufacturing errors before cutting starts.",
      },
      {
        title: "APEX CNC Fiber Laser Parameter Control",
        description:
          "Oversees assist gas selection, cutting nozzle heights, and feed calibrations across Mild Steel, Stainless Steel, and Aluminum plates.",
      },
      {
        title: "Multi-Axis Press Brake Tooling Expertise",
        description:
          "Calculates exact bend deductions (K-factors) and tooling setup to form multi-flange enclosures, channels, and trays with strict angular accuracy.",
      },
      {
        title: "100% On-Floor Inspection & Client Partnership",
        description:
          "Inspects every critical batch before dispatch. Available directly on phone and WhatsApp for immediate project coordination.",
      },
    ],
    stats: [
      {
        label: "Industry Experience",
        value: "12+ Years",
        desc: "Precision fabrication leadership",
      },
      {
        label: "Machine Bed Capacity",
        value: "APEX 2584",
        desc: "In-house CNC fiber laser",
      },
      {
        label: "Repeat Client Trust",
        value: "99%",
        desc: "Industrial & contractor satisfaction",
      },
      {
        label: "Dimensional Tolerance",
        value: "±0.05 mm",
        desc: "Repeatable profile accuracy",
      },
    ],
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
