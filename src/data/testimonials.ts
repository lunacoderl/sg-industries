export interface Testimonial {
  id: string;
  author: string;
  role: string;
  companyOrLocation: string;
  content: string;
  serviceMentioned: string;
  source: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    author: "Industrial Client Review",
    role: "Fabrication Supervisor",
    companyOrLocation: "Auto Nagar, Gajuwaka",
    content:
      "SG Industry delivered clean laser-cut parts as per our CAD drawing. Hole locations were accurate and the edge finish needed minimal post-processing.",
    serviceMentioned: "Precision Laser Cutting",
    source: "Verified Local Workshop Feedback",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Mechanical Contractor Review",
    role: "Project Engineer",
    companyOrLocation: "Visakhapatnam",
    content:
      "Consistent bend angles across the entire batch of 80 enclosures. Having cutting and CNC bending done under one roof saved us significant transit and turnaround time.",
    serviceMentioned: "CNC Bending & Forming",
    source: "Verified Commercial Order",
    rating: 5,
  },
  {
    id: "test-3",
    author: "Equipment Manufacturer Review",
    role: "Procurement Lead",
    companyOrLocation: "Gajuwaka Industrial Zone",
    content:
      "Straightforward quotation and clear communication regarding machine capacity and sheet thickness. The parts fit our assembly jigs without needing corrections.",
    serviceMentioned: "Custom Sheet Metal Processing",
    source: "Verified Local Client",
    rating: 5,
  },
];
