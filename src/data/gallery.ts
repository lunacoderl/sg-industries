export interface GalleryItem {
  id: string;
  title: string;
  category: "Laser Cutting" | "CNC Bending" | "Finished Components";
  image: string;
  alt: string;
  description: string;
  tag: string;
}

export const galleryCategories = [
  "All",
  "Laser Cutting",
  "CNC Bending",
  "Finished Components",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-wave-screen",
    title: "Large Architectural Laser-Cut Wave Screen",
    category: "Laser Cutting",
    image: "/images/gallery/architectural-wave-screen.jpg",
    alt: "Full size sheet metal laser cut architectural screen with flowing wave and crescent geometry on workshop floor",
    description:
      "Large-format artistic laser cutting showcasing intricate geometric curves, consistent edge quality, and tight spacing without thermal distortion.",
    tag: "Architectural Screen · Wave Geometry",
  },
  {
    id: "gal-apex-machine",
    title: "APEX High-Precision Fiber Laser Cutting Bed",
    category: "Laser Cutting",
    image: "/images/gallery/apex-laser-machine.jpg",
    alt: "APEX FLCM 2584 GS-G20 CNC Fiber Laser Cutting Machine bed inside SG Industry workshop",
    description:
      "Our in-house APEX FLCM 2584 GS-G20 CNC Fiber Laser machine bed engineered for fast, clean, high-precision profile cutting.",
    tag: "APEX FLCM 2584 · CNC Fiber Laser",
  },
  {
    id: "gal-batch-flanges",
    title: "Batch-Cut Heavy Flange Rings & Arc Brackets",
    category: "Finished Components",
    image: "/images/gallery/batch-flange-rings.jpg",
    alt: "Batch of identical precision laser cut steel curved flange rings with hole piercings",
    description:
      "Repeatable batch cutting of curved heavy-gauge steel flanges with accurate bolt hole piercings and clean edge finish.",
    tag: "Batch Production · Curved Flanges",
  },
  {
    id: "gal-cnc-bent-channels",
    title: "CNC Formed Channel Profiles & Punched Rails",
    category: "CNC Bending",
    image: "/images/gallery/cnc-bent-channels.jpg",
    alt: "Stacked CNC press brake bent metal channels with evenly spaced hole patterns",
    description:
      "Accurate multi-bend channel profiles formed to required flange heights and angle tolerances for industrial assemblies.",
    tag: "Press Brake · Formed Channels",
  },
  {
    id: "gal-formed-trays",
    title: "Long Formed Sheet Metal Trays & Pan Components",
    category: "CNC Bending",
    image: "/images/gallery/formed-tray-panels.jpg",
    alt: "Long structural metal trays with 90-degree bent perimeter flanges and mounting holes",
    description:
      "Extended-length sheet metal components formed with sharp 90-degree perimeter bends and uniform flange holes.",
    tag: "CNC Formed · Sheet Trays",
  },
  {
    id: "gal-laser-sparks",
    title: "Fiber Laser Cutting in Active Production",
    category: "Laser Cutting",
    image: "/images/gallery/laser-cutting-sparks.jpg",
    alt: "High-temperature laser cutting nozzle cutting intricate metal sheet with sparks flying",
    description:
      "Focused laser beam piercing and cutting sheet metal blanks according to approved CAD specifications.",
    tag: "Active Cutting · High Precision",
  },
  {
    id: "gal-workshop-entrance",
    title: "SG Industry Workshop Facility in Auto Nagar",
    category: "Finished Components",
    image: "/images/gallery/workshop-entrance.jpg",
    alt: "SG Industry workshop entrance in Gajuwaka showing stacked fabricated metal products and production floor",
    description:
      "Our active workshop facility located at C-13 Auto Nagar, Gajuwaka, Visakhapatnam serving industrial clients.",
    tag: "Auto Nagar, Vizag · Workshop Floor",
  },
];
