export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string;
  capabilitiesNotice: string;
  applications: {
    title: string;
    description: string;
  }[];
  requirementsChecklist: string[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
  seoTitle: string;
  metaDescription: string;
  canonicalPath: string;
  badgeColor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "laser-cutting",
    slug: "precision-laser-cutting",
    title: "Precision Fiber Laser Cutting",
    tagline: "High-accuracy CNC profile cutting for sheet metals & heavy plates",
    shortDescription:
      "Rapid, burr-free cutting of sheet metals and plates from approved CAD drawings on our in-house APEX FLCM 2584 CNC Fiber Laser bed.",
    heroImage: "/images/services/laser-cutting.jpg",
    heroImageAlt:
      "In-house APEX FLCM 2584 GS-G20 CNC Fiber Laser Cutting Machine bed at SG Industry workshop in Gajuwaka",
    introduction:
      "Our APEX FLCM 2584 GS-G20 CNC Fiber Laser provides exceptional cut edge quality, tight repeatable tolerances, and thermal stability. Suitable for mild steel, stainless steel, aluminum, and galvanized sheet, our high-density beam produces sharp corners, narrow kerfs, and complex geometry without tool wear or mechanical strain.",
    capabilitiesNotice:
      "All jobs are subject to drawing feasibility review, sheet material compatibility, and machine bed scheduling.",
    applications: [
      {
        title: "Perforated & Decorative Screens",
        description:
          "Intricate geometric patterns, floral jali panels, and modern architectural partition screens.",
      },
      {
        title: "Flange Rings & Circular Washers",
        description:
          "Heavy-gauge steel pipe flanges, circular mounting blanks, and arc brackets with accurate bolt holes.",
      },
      {
        title: "Industrial Panels & Machine Covers",
        description:
          "Control cabinet fascia, ventilation grilles, and machinery safety guards with exact hole alignment.",
      },
      {
        title: "Custom Metal Blanks",
        description:
          "Pre-cut flat blanks engineered specifically for subsequent CNC press brake bending or robotic welding.",
      },
    ],
    requirementsChecklist: [
      "2D CAD vector drawing (.dxf, .dwg, or dimensioned PDF)",
      "Material grade (Mild Steel, Stainless Steel, Galvanized, etc.)",
      "Material thickness (gauge / mm)",
      "Batch quantity and tolerance requirements",
      "Any subsequent secondary operations (such as CNC bending)",
    ],
    processSteps: [
      {
        step: "01",
        title: "CAD & Nesting Review",
        description: "We optimize drawing lead-ins and nest components on sheets to maximize material yield.",
      },
      {
        step: "02",
        title: "Laser Parameter Programming",
        description: "Gas pressure, nozzle height, and laser power are dialed in for optimal edge cleanliness.",
      },
      {
        step: "03",
        title: "APEX CNC Fiber Laser Cutting",
        description: "High-speed CNC piercing and precision vector cutting across the entire sheet layout.",
      },
      {
        step: "04",
        title: "Deburring & Inspection",
        description: "Parts are checked for dimensional accuracy and cleaned before client collection or dispatch.",
      },
    ],
    faqs: [
      {
        question: "What sheet thicknesses can be cut?",
        answer:
          "Our APEX fiber laser easily processes thin gauge sheets up to thick structural steel plates. Contact our workshop with your specific material grade for verified gauge capacity.",
      },
      {
        question: "Can I bring my own sheet materials?",
        answer:
          "Yes, we frequently process customer-supplied sheets. Please ensure sheets are clean, flat, and free from heavy oil or excessive rust.",
      },
      {
        question: "What is your typical turnaround time?",
        answer:
          "Urgent prototype blanks can often be quoted and cut within 24 to 48 hours once CAD files and materials are finalized.",
      },
    ],
    relatedServiceSlugs: ["cnc-bending", "architectural-screens"],
    seoTitle: "Precision Laser Cutting in Vizag | SG Industry",
    metaDescription:
      "Expert CNC fiber laser cutting in Gajuwaka, Visakhapatnam. APEX FLCM 2584 cutting bed for sheets, architectural screens, and industrial parts.",
    canonicalPath: "/services/precision-laser-cutting",
    badgeColor: "#FF5B45",
  },
  {
    id: "cnc-bending",
    slug: "cnc-bending",
    title: "CNC Press Brake Bending",
    tagline: "Computer-controlled multi-axis bending with consistent angular accuracy",
    shortDescription:
      "Forming compatible sheet metal into exact angles, channels, multi-flange profiles, and trays with repeatable press brake precision.",
    heroImage: "/images/services/cnc-bending.jpg",
    heroImageAlt:
      "Formed sheet metal trays and channels with 90-degree CNC press brake bends at SG Industry",
    introduction:
      "Our CNC press brake bending service transforms flat sheet metal into rigid three-dimensional forms. By calculating precise bend deductions (K-factors) and utilizing computer-guided backgauges, we guarantee repeatable angle accuracy from single prototypes to multi-thousand piece batches.",
    capabilitiesNotice:
      "Feasibility depends on minimum flange length, V-die opening, punch clearance, and sheet tensile strength.",
    applications: [
      {
        title: "Long Formed Channels & Tracks",
        description:
          "Industrial guide channels, shutter tracks, and U/C-section structural profiles with uniform depth.",
      },
      {
        title: "Multi-Flange Equipment Trays",
        description:
          "Drip pans, electrical tray bases, and box covers with sharp 90-degree formed returns and punched corners.",
      },
      {
        title: "Mounting Brackets & Stiffeners",
        description:
          "L-brackets, Z-sections, and heavy-duty structural gussets that align seamlessly with mating components.",
      },
      {
        title: "Enclosure Bodies & Covers",
        description:
          "Folded cabinet bodies with tight seam fits designed to minimize welding and post-finishing.",
      },
    ],
    requirementsChecklist: [
      "Dimensioned bending drawing showing bend angles, flange lengths, and inside bend radii",
      "Material grade, temper, and verified sheet thickness",
      "Bend direction relative to interior holes or cutouts to prevent distortion",
      "Batch quantities and assembly expectations",
    ],
    processSteps: [
      {
        step: "01",
        title: "Bend Feasibility & Tooling Check",
        description: "We verify punch geometry and V-die clearances to ensure collision-free bending.",
      },
      {
        step: "02",
        title: "Flat Pattern Calculation",
        description: "K-factors are applied so flat laser-cut blanks fold into exact final dimensions.",
      },
      {
        step: "03",
        title: "CNC Backgauge Calibration",
        description: "Multi-axis backgauges position the sheet reliably for consecutive sequential bends.",
      },
      {
        step: "04",
        title: "Angular Inspection & Quality Check",
        description: "Protractors and gauges verify angle tolerances before clearing parts for handover.",
      },
    ],
    faqs: [
      {
        question: "Why combine laser cutting and CNC bending at SG Industry?",
        answer:
          "Performing both under one roof ensures that bend deductions are calibrated directly into flat CAD profiles, so mounting holes never shift or deform after forming.",
      },
      {
        question: "Can you form long channels and shutter profiles?",
        answer:
          "Yes, we specialize in extended-length sheet metal bending for commercial frames, trays, and industrial channels.",
      },
    ],
    relatedServiceSlugs: ["precision-laser-cutting", "industrial-enclosures"],
    seoTitle: "CNC Bending Services in Vizag | SG Industry",
    metaDescription:
      "Reliable CNC sheet metal press brake bending in Gajuwaka, Visakhapatnam. Precise angles, repeatable tolerances, and rapid batch manufacturing.",
    canonicalPath: "/services/cnc-bending",
    badgeColor: "#00BFA6",
  },
  {
    id: "architectural-screens",
    slug: "architectural-screens",
    title: "Architectural & Decorative Metal Screens",
    tagline: "Custom laser-cut Jali panels, facade claddings & artistic partitions",
    shortDescription:
      "Large-format artistic laser cut metal screens, designer gates, balcony railing panels, and elevation claddings crafted to your exact motif.",
    heroImage: "/images/gallery/architectural-wave-screen.jpg",
    heroImageAlt:
      "Full size sheet metal laser cut architectural screen with flowing wave and crescent geometry at SG Industry",
    introduction:
      "We bring architectural concepts to life with high-definition laser cutting on large sheet formats. From modern wave motifs and islamic geometric patterns to floral jali dividers and facade claddings, our clean laser cuts provide architect-ready finishes with no ragged edges.",
    capabilitiesNotice:
      "Custom vector patterns can be scaled to fit specific window frames, balcony boundaries, or exterior facade openings.",
    applications: [
      {
        title: "Modern Facade & Elevation Panels",
        description: "Exterior building cladding panels that provide solar shading, ventilation, and distinct aesthetics.",
      },
      {
        title: "Interior Decorative Partitions",
        description: "Luxury space dividers, foyer screens, and decorative ceiling panels for residential and commercial spaces.",
      },
      {
        title: "Designer Gates & Balcony Railings",
        description: "Heavy-duty yet ornate metal panels for boundary gates, stair railings, and safety barriers.",
      },
      {
        title: "Perforated Acoustic & Lighting Grilles",
        description: "Custom perforated panels engineered for diffuse lighting enclosures and acoustic wall baffles.",
      },
    ],
    requirementsChecklist: [
      "Desired pattern design (vector file, reference image, or DWG template)",
      "Overall panel dimensions (height × width × thickness)",
      "Material choice (Mild Steel, Stainless Steel, Corten look, Aluminum)",
      "Perimeter border margins for welding, bolting, or frame installation",
    ],
    processSteps: [
      {
        step: "01",
        title: "Pattern Optimization",
        description: "We verify bridge widths so intricate motifs retain structural rigidity during cutting.",
      },
      {
        step: "02",
        title: "Border & Mounting Hole Layout",
        description: "Solid mounting borders are integrated to make on-site framing fast and secure.",
      },
      {
        step: "03",
        title: "High-Definition Fiber Laser Cut",
        description: "Precision cutting maintains crisp points and sweeping curves without thermal warpage.",
      },
      {
        step: "04",
        title: "Surface Cleaning & Handover",
        description: "Sheets are inspected, slag removed, and prepared for powder coating or fabrication.",
      },
    ],
    faqs: [
      {
        question: "Can you cut custom patterns from an architect's sketch?",
        answer:
          "Yes! Our team can vectorize architectural sketches or photos into cut-ready CAD profiles with proper structural bridging.",
      },
      {
        question: "What is the maximum panel size you can cut?",
        answer:
          "Our large APEX machine bed can accommodate standard industrial sheet sizes including 8ft × 4ft and extended formats.",
      },
    ],
    relatedServiceSlugs: ["precision-laser-cutting", "custom-metal-fabrication"],
    seoTitle: "Architectural Laser Cut Screens & Jali in Vizag | SG Industry",
    metaDescription:
      "Custom laser cut architectural metal screens, decorative jali panels, and facade claddings in Gajuwaka, Visakhapatnam. Precision artistic steel cutting.",
    canonicalPath: "/services/architectural-screens",
    badgeColor: "#FFC928",
  },
  {
    id: "industrial-enclosures",
    slug: "industrial-enclosures",
    title: "Industrial Enclosures & Cabinets",
    tagline: "Custom formed metal enclosures, chassis covers & electrical boxes",
    shortDescription:
      "End-to-end cutting, punching, and multi-bend press brake forming for electrical control boxes, machinery covers, and equipment housings.",
    heroImage: "/images/gallery/cnc-bent-channels.jpg",
    heroImageAlt:
      "Precision CNC cut and bent multi-flange bracket and enclosure component at SG Industry",
    introduction:
      "We manufacture custom sheet metal enclosures, control panel chassis, and machinery guards engineered for exact fit. Combining tight laser cutouts with multi-flange CNC press brake bending ensures clean joints, consistent door sealing, and effortless internal hardware mounting.",
    capabilitiesNotice:
      "Components are formed to strict dimensional drawings for prototype units or continuous batch production.",
    applications: [
      {
        title: "Electrical & Inverter Cabinets",
        description: "Custom dimensioned electrical enclosures with ventilation louvers and gland plate cutouts.",
      },
      {
        title: "Machinery Safety Shrouds",
        description: "Protective guards and motor covers that shield rotating equipment while ensuring airflow.",
      },
      {
        title: "Electronic Chassis & Server Enclosures",
        description: "Precision formed metal chassis with pre-punched PCB standoffs and I/O connector holes.",
      },
      {
        title: "Battery & Power Bank Housings",
        description: "Heavy-duty formed sheet boxes built to withstand vibration and environmental conditions.",
      },
    ],
    requirementsChecklist: [
      "Assembly drawing or detailed flat pattern with bend directions",
      "Material grade and gauge requirements",
      "Knockout and ventilation cutout locations",
      "Batch quantities and turnaround deadlines",
    ],
    processSteps: [
      {
        step: "01",
        title: "Component Nesting & Blanking",
        description: "Flat blanks with exact interior cutouts are cut on our fiber laser cutting bed.",
      },
      {
        step: "02",
        title: "Sequential CNC Press Brake Forming",
        description: "Box-forming tooling sequences bend four sides and mounting flanges without collisions.",
      },
      {
        step: "03",
        title: "Fitment & Dimension Verification",
        description: "Diagonal squareness, corner gaps, and hole alignments are thoroughly inspected.",
      },
      {
        step: "04",
        title: "Batch Packaging",
        description: "Finished enclosures are packed with protective spacing for safe workshop pickup.",
      },
    ],
    faqs: [
      {
        question: "Can you produce prototypes before committing to large volumes?",
        answer:
          "Yes, we can fabricate a single prototype enclosure for physical fitment testing before launching batch production.",
      },
      {
        question: "How do you ensure holes align across multiple folded flanges?",
        answer:
          "By calculating machine-specific bend deductions into our flat laser-cut patterns, every punched hole lands in its exact intended coordinate after bending.",
      },
    ],
    relatedServiceSlugs: ["cnc-bending", "precision-laser-cutting"],
    seoTitle: "Custom Metal Enclosures & Cabinets in Vizag | SG Industry",
    metaDescription:
      "Precision sheet metal enclosure manufacturing and CNC press brake cabinet forming in Gajuwaka, Visakhapatnam. Tailored control panels and equipment chassis.",
    canonicalPath: "/services/industrial-enclosures",
    badgeColor: "#2864F0",
  },
  {
    id: "flange-rings-baseplates",
    slug: "flange-rings-baseplates",
    title: "Flange Rings & Heavy Base Plates",
    tagline: "High-tonnage laser cut pipe flanges, base plates & structural rings",
    shortDescription:
      "High-speed cutting of circular flange blanks, pipe rings, structural base plates, and heavy machinery washers with perfectly concentric holes.",
    heroImage: "/images/gallery/batch-flange-rings.jpg",
    heroImageAlt:
      "Batch of identical precision laser cut steel curved flange rings with hole piercings at SG Industry",
    introduction:
      "SG Industry produces thousands of circular flange rings, heavy column base plates, and structural washer blanks. Our APEX Fiber Laser delivers perfectly perpendicular cut faces, eliminating costly lathe machining operations for standard bolt circle diameters.",
    capabilitiesNotice:
      "Available for single custom structural base plates or high-volume repeat flange production runs.",
    applications: [
      {
        title: "Pipe & Valve Flange Rings",
        description: "Concentric circular flanges with pre-pierced bolt holes ready for pipe welding.",
      },
      {
        title: "Structural Column Base Plates",
        description: "Heavy steel plates with slotted anchor bolt holes for civil and industrial building frameworks.",
      },
      {
        title: "Circular Machinery Shims & Washers",
        description: "Uniform thickness circular spacers and heavy-duty load-distributing washers.",
      },
      {
        title: "Curved Segment Rings & Arcs",
        description: "Precision arc segments for large-diameter tanks, ducting flanges, and kilns.",
      },
    ],
    requirementsChecklist: [
      "Outside diameter (OD), inside diameter (ID), and bolt circle diameter (PCD)",
      "Bolt hole count and hole diameter",
      "Steel plate thickness and grade",
      "Required batch volume",
    ],
    processSteps: [
      {
        step: "01",
        title: "Plate Nesting",
        description: "Circular rings are nested inside larger components to minimize scrap steel costs.",
      },
      {
        step: "02",
        title: "High-Pressure Piercing",
        description: "Controlled oxygen or nitrogen pierce cycles ensure round, taper-free bolt holes.",
      },
      {
        step: "03",
        title: "Continuous CNC Vector Cutting",
        description: "Consistent thermal speed maintains tight circularity across the entire plate run.",
      },
      {
        step: "04",
        title: "PCD & Thickness Inspection",
        description: "Vernier and pitch gauges verify hole patterns against client drawing standards.",
      },
    ],
    faqs: [
      {
        question: "Can bolt holes be laser pierced directly or do they require drilling?",
        answer:
          "Our fiber laser pierces clean, cylindrical bolt holes directly into plates, eliminating secondary drilling operations in most industrial applications.",
      },
      {
        question: "What thicknesses of plate flanges can you produce?",
        answer:
          "We regularly cut structural flanges from 3mm sheet up to heavy structural steel plate thicknesses.",
      },
    ],
    relatedServiceSlugs: ["precision-laser-cutting", "custom-metal-fabrication"],
    seoTitle: "Laser Cut Flange Rings & Base Plates in Vizag | SG Industry",
    metaDescription:
      "Heavy steel flange rings, circular blanks, and column base plates cut on CNC fiber laser in Gajuwaka, Visakhapatnam. Fast batch turnaround.",
    canonicalPath: "/services/flange-rings-baseplates",
    badgeColor: "#00BFA6",
  },
  {
    id: "custom-metal-fabrication",
    slug: "custom-metal-fabrication",
    title: "Batch & Custom Sheet Metal Fabrication",
    tagline: "Turnkey processing from CAD drawing to assembly-ready components",
    shortDescription:
      "Comprehensive sheet metal component manufacturing combining laser blanking, multi-bend forming, hole punching, and quality inspection.",
    heroImage: "/images/gallery/formed-tray-panels.jpg",
    heroImageAlt:
      "Long structural metal trays with 90-degree bent perimeter flanges and mounting holes at SG Industry",
    introduction:
      "SG Industry serves as an agile manufacturing partner for OEMs, equipment builders, and contractors throughout Andhra Pradesh. By integrating advanced fiber laser profiling with CNC press brake folding, we supply turnkey batches of sheet metal parts that fit seamlessly into your production line.",
    capabilitiesNotice:
      "We accommodate rapid prototype batches as well as ongoing scheduled production orders.",
    applications: [
      {
        title: "OEM Component Blanks",
        description: "Repeat batches of cut and bent metal components ready for OEM assembly lines.",
      },
      {
        title: "Custom Framing & Channels",
        description: "Long-flange shutter channels, door frames, and custom architectural profiles.",
      },
      {
        title: "Apparatus & Hopper Pans",
        description: "Tapered chutes, hopper cones, and collection trays formed from single sheet patterns.",
      },
      {
        title: "Heavy Equipment Brackets",
        description: "Reinforced gusset plates, step brackets, and structural stiffeners.",
      },
    ],
    requirementsChecklist: [
      "Complete 2D or 3D drawings with all dimensions and tolerances",
      "Bill of Materials (BOM) with quantities",
      "Material specifications (MS, SS 304/316, GI, Aluminum)",
      "Target completion timeline",
    ],
    processSteps: [
      {
        step: "01",
        title: "Comprehensive Drawing Audit",
        description: "We verify bend allowances, weld relief cutouts, and nesting efficiency.",
      },
      {
        step: "02",
        title: "Precision Blanking",
        description: "APEX CNC Fiber Laser blanks all parts with accurate piercing and edge quality.",
      },
      {
        step: "03",
        title: "Press Brake Forming",
        description: "Sequential CNC bending shapes brackets, trays, and channels to drawing dimensions.",
      },
      {
        step: "04",
        title: "Final QA & Batch Packing",
        description: "Tolerances verified and parts palletized for quick collection at Auto Nagar.",
      },
    ],
    faqs: [
      {
        question: "Can SG Industry handle ongoing monthly production batches?",
        answer:
          "Yes, we support recurring manufacturing orders with dedicated machine scheduling and consistent material lot tracking.",
      },
      {
        question: "How do I start a custom fabrication job?",
        answer:
          "Call Masada Siva Srinu at 098663 78877 or message us on WhatsApp with your drawings to receive an initial feasibility review and estimate.",
      },
    ],
    relatedServiceSlugs: ["precision-laser-cutting", "cnc-bending"],
    seoTitle: "Custom Sheet Metal Fabrication in Vizag | SG Industry",
    metaDescription:
      "Turnkey sheet metal fabrication, laser cutting, and CNC press brake forming in Auto Nagar, Gajuwaka, Visakhapatnam. Batch production for OEMs and contractors.",
    canonicalPath: "/services/custom-metal-fabrication",
    badgeColor: "#FF5B45",
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};
