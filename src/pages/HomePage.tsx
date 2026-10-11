import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  FileCode,
  Clock,
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { companyData, createWhatsAppUrl } from "../data/company";
import { servicesData } from "../data/services";
import { testimonialsData } from "../data/testimonials";
import { ServiceCard } from "../components/ServiceCard";
import { Gallery } from "../components/Gallery";
import { FAQAccordion, type FAQItem } from "../components/FAQAccordion";
import { EnquiryForm } from "../components/EnquiryForm";
import { ProprietorSection } from "../components/ProprietorSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageMetadata } from "../seo/PageMetadata";

export const HomePage: React.FC = () => {
  const homeFaqs: FAQItem[] = [
    {
      question: "Where is SG Industry located and can I visit the workshop?",
      answer:
        "Our workshop is located at C-13, near Autonagar, B Block, Auto Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530012. You can visit Mr. Masada Siva Srinu directly during working hours (Monday to Saturday, 9:00 AM – 7:30 PM) to review CAD drawings or check physical component samples.",
    },
    {
      question: "What machinery does SG Industry use for cutting and bending?",
      answer:
        "We operate an in-house APEX FLCM 2584 GS-G20 CNC Fiber Laser Cutting Machine bed capable of clean, high-precision vector profile cutting across sheet metals, accompanied by our computer-controlled CNC press brake for multi-axis sheet metal bending.",
    },
    {
      question: "What range of services do you offer?",
      answer:
        "We offer complete sheet metal processing: Precision CNC Fiber Laser Cutting, CNC Press Brake Bending, Architectural & Decorative Metal Screens (Jali), Industrial Control Enclosures & Cabinets, Heavy Steel Flange Rings & Base Plates, and Turnkey Batch Metal Fabrication.",
    },
    {
      question: "What drawings or files should I provide for an enquiry?",
      answer:
        "We prefer 2D CAD vector files in .DXF or .DWG format at 1:1 scale. If CAD files are not available, you can share clear dimensioned PDF drawings, sketches, or physical sample components for a feasibility review.",
    },
    {
      question: "Can SG Industry cut customer-supplied sheet metal?",
      answer:
        "Yes! We regularly cut and bend client-supplied sheets and plates. Please ensure the sheets are flat, clean, and free of heavy rust or oil that could interfere with the laser nozzle.",
    },
    {
      question: "How do I get an instant price quotation?",
      answer:
        "You can submit your drawing through our online enquiry form, call Mr. Masada Siva Srinu at 098663 78877, or send a WhatsApp message with sheet grade, thickness, and quantity for immediate quotation.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Share Requirement or Drawing",
      description:
        "Send your CAD file (.DXF / .DWG / PDF) or bring your sample component to our Gajuwaka workshop.",
      icon: <FileCode className="w-5 h-5 text-[#FF5B45]" />,
    },
    {
      step: "02",
      title: "Feasibility & Nesting Review",
      description:
        "Our team evaluates sheet thickness, laser cutting path, and press brake tooling clearances.",
      icon: <Cpu className="w-5 h-5 text-[#00BFA6]" />,
    },
    {
      step: "03",
      title: "Transparent Quotation",
      description:
        "Receive a clear estimate based on material utilization, cutting length, and forming operations.",
      icon: <Sparkles className="w-5 h-5 text-[#FFC928]" />,
    },
    {
      step: "04",
      title: "CNC Production",
      description:
        "Your components are cut on our APEX Fiber Laser and formed on our CNC press brake with continuous checks.",
      icon: <Layers className="w-5 h-5 text-[#2864F0]" />,
    },
    {
      step: "05",
      title: "Quality Check & Handover",
      description:
        "Finished parts are inspected against drawing dimensions and prepared for pickup or delivery.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00BFA6]" />,
    },
  ];

  return (
    <>
      <PageMetadata
        title="SG Industry | Precision Laser Cutting & CNC Bending in Vizag"
        description="SG Industry in Gajuwaka, Visakhapatnam: In-house APEX Fiber Laser Cutting & CNC Bending for sheet metal, architectural screens, and industrial components."
        canonicalPath="/"
      />

      {/* SECTION 01 — HERO */}
      <section className="relative overflow-hidden bg-[#33205B] text-[#FFF9F0] pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="down">
                {/* Official Logo Display */}
                <div className="bg-white/95 rounded-2xl p-2.5 shadow-2xl inline-block border border-white/20 mb-2">
                  <img
                    src="/images/logo.png"
                    alt="SG Industry Official Logo"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-wider uppercase text-[#00BFA6] font-tech block sm:inline-block">
                  <span className="w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse"></span>
                  <span>APEX CNC Fiber Laser &amp; Press Brake · Auto Nagar, Vizag</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display leading-[1.08] text-white">
                  Metal, shaped into <span className="text-[#FF5B45] underline decoration-[#00BFA6] decoration-wavy decoration-2">art.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-[#FFF9F0]/85 max-w-2xl leading-relaxed">
                  From clean, high-speed vector profiles on our APEX Fiber Laser bed to multi-axis press brake bending, SG Industry transforms sheet metal requirements into practical, well-crafted engineering results.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF5B45] text-white font-extrabold text-base hover:bg-[#ff452b] transition-all duration-200 shadow-xl shadow-[#FF5B45]/30 hover:scale-[1.02] active:scale-[0.98] text-center font-tech"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-[#FFF9F0] border border-white/20 font-bold text-base transition-all duration-200 text-center font-tech"
                  >
                    <span>Explore All 6 Services</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Value Props Strip */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/15 text-xs text-[#FFF9F0]/80 font-tech">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00BFA6] shrink-0" />
                    <span>In-House APEX Fiber Laser</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFC928] shrink-0" />
                    <span>CNC Press Brake Bending</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle className="w-4 h-4 text-[#FF5B45] shrink-0" />
                    <span>Auto Nagar, Gajuwaka</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Graphic Showcase — Full Uncropped View */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#1b1030] p-2 group">
                  <img
                    src="/images/hero/hero-laser.png"
                    alt="Precision laser cutting sparks and intricate metal cut panel at SG Industry"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-102 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle live tag overlay */}
                  <div className="mt-3 bg-[#33205B]/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00BFA6] font-extrabold font-tech">
                        Active In-House Machine Bed
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white font-display">
                        APEX FLCM 2584 GS-G20 CNC Fiber Laser
                      </div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#FF5B45] animate-ping"></span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-[#FF5B45] via-[#00BFA6] to-[#FFC928]"></div>
      </section>

      {/* FIXED FULL-SCREEN BACKGROUND PARALLAX SECTION 1 */}
      <section
        className="relative bg-fixed-parallax bg-fixed bg-cover bg-center py-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/hero/hero-laser.png')" }}
      >
        <div className="absolute inset-0 bg-[#33205B]/85 backdrop-blur-[3px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white space-y-6">
          <ScrollReveal direction="up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] font-tech px-4 py-1.5 rounded-full bg-white/10 border border-white/20 inline-block">
              ENGINEERED TOLERANCES · ARTISTIC CRAFTSMANSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white mt-4">
              Where High-Tonnage Machinery Meets Architectural Precision.
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Every curve, pierce, flange, and bend is executed under the direct oversight of our proprietor, Masada Siva Srinu, ensuring zero defects and swift job turnaround.
            </p>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center font-tech">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#00BFA6]">0.05 mm</span>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Repeatable Accuracy</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#FF5B45]">APEX CNC</span>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Fiber Laser Cutting Bed</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC928]">100%</span>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">Verified In-House Workshop</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 02 — WORKSHOP INTRODUCTION & FULL-WIDTH UN变ROPPED APEX MACHINE */}
      <section id="about" className="py-20 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Machine Photo — Full Width Uncropped */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="right">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#33205B]/10 shadow-2xl bg-white p-3 group">
                  <img
                    src="/images/services/laser-cutting.jpg"
                    alt="In-house APEX CNC Fiber Laser cutting machine bed at SG Industry workshop in Auto Nagar, Gajuwaka"
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-101 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white border-t border-[#33205B]/10 mt-2">
                    <p className="text-xs font-bold text-[#33205B] font-display">
                      Our APEX FLCM 2584 GS-G20 CNC Fiber Laser Cutting Bed
                    </p>
                    <p className="text-[11px] text-[#33205B]/70 mt-0.5 font-tech">
                      C-13, Auto Nagar, B Block, Gajuwaka, Visakhapatnam 530012
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Introduction Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech">
                  <span>About SG Industry</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B] mt-1">
                  Industrial Sheet Metal Cutting &amp; Forming Excellence
                </h2>
                <p className="text-base text-[#33205B]/80 leading-relaxed">
                  SG Industry is a full-capability precision metal fabrication unit in Auto Nagar, Gajuwaka, Visakhapatnam. Founded and directed by Masada Siva Srinu, we combine state-of-the-art APEX CNC Fiber Laser cutting with computer-controlled press brake bending.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-[#33205B]/10 shadow-sm">
                    <h3 className="font-bold text-base text-[#33205B] flex items-center gap-2 font-display">
                      <Zap className="w-4 h-4 text-[#FF5B45]" />
                      Laser Cutting
                    </h3>
                    <p className="text-xs text-[#33205B]/75 mt-2 leading-relaxed">
                      Slices through mild steel, stainless steel, aluminum, and brass with clean, dross-free edges and intricate geometry.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#33205B]/10 shadow-sm">
                    <h3 className="font-bold text-base text-[#33205B] flex items-center gap-2 font-display">
                      <Layers className="w-4 h-4 text-[#00BFA6]" />
                      CNC Press Brake Bending
                    </h3>
                    <p className="text-xs text-[#33205B]/75 mt-2 leading-relaxed">
                      Forms sheet metal blanks into accurate angles, U-channels, trays, and multi-flange structural components.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#33205B]/80 leading-relaxed pt-1">
                  From large-scale architectural screens and electrical control cabinets to pipe flanges and batch equipment brackets, we deliver verified machine capacity, rapid nesting turnaround, and honest pricing.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — ALL AVAILABLE SERVICES (ALL 6 SERVICES) */}
      <section id="services" className="py-20 bg-white border-y border-[#33205B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="down">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech">
                Comprehensive Metalworking Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
                All Available Fabrication Services
              </h2>
              <p className="text-base text-[#33205B]/70 mt-3">
                Explore our full suite of precision laser cutting, CNC bending, and custom sheet metal fabrication services in Visakhapatnam.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — PROPRIETOR DETAILS & BUSINESS CARD SPEC (THERE ONLY!) */}
      <ProprietorSection />

      {/* SECTION 05 — AUTHENTIC WORK GALLERY (UNC变ROPPED FULL-WIDTH IMAGES) */}
      <section id="our-work" className="py-20 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal direction="down">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00BFA6] font-tech">
                Authentic Workshop Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
                Finished Work &amp; Machinery Gallery
              </h2>
              <p className="text-base text-[#33205B]/70 mt-3">
                Full-width, uncropped views of real parts produced at SG Industry—from massive architectural wave screens to high-volume industrial flange rings.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.1}>
            <Gallery />
          </ScrollReveal>
        </div>
      </section>

      {/* FIXED FULL-SCREEN BACKGROUND PARALLAX SECTION 2 — TEXT SCROLLING OVER ARCHITECTURAL METAL */}
      <section
        className="relative bg-fixed-parallax bg-fixed bg-cover bg-center py-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/gallery/architectural-wave-screen.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1b1030]/90 backdrop-blur-[2px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white space-y-6">
          <ScrollReveal direction="up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00BFA6] font-tech px-4 py-1.5 rounded-full bg-white/10 border border-white/20 inline-block">
              MATERIALS &amp; CAPACITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-4">
              Compatible with Industry-Standard Grades
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              We process Mild Steel (CR/HR), Stainless Steel (304 / 316), Galvanized Iron (GI), Aluminum, and specialized structural sheets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-left font-tech">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <span className="text-xs text-[#00BFA6] font-bold uppercase">Material 01</span>
                <h4 className="text-base font-bold text-white mt-1">Mild Steel (MS)</h4>
                <p className="text-xs text-white/70 mt-1">0.5mm to heavy structural plates</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <span className="text-xs text-[#FF5B45] font-bold uppercase">Material 02</span>
                <h4 className="text-base font-bold text-white mt-1">Stainless Steel (SS)</h4>
                <p className="text-xs text-white/70 mt-1">Grade 304, 316 architectural finish</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <span className="text-xs text-[#FFC928] font-bold uppercase">Material 03</span>
                <h4 className="text-base font-bold text-white mt-1">Galvanized (GI)</h4>
                <p className="text-xs text-white/70 mt-1">Corrosion-resistant panels &amp; trays</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <span className="text-xs text-[#2864F0] font-bold uppercase">Material 04</span>
                <h4 className="text-base font-bold text-white mt-1">Aluminum &amp; Brass</h4>
                <p className="text-xs text-white/70 mt-1">Lightweight brackets &amp; jali panels</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 06 — HOW A JOB WORKS (WORKFLOW) */}
      <section id="workflow" className="py-20 bg-[#33205B] text-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="down">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] font-tech">
                Transparent Execution
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-2">
                How a Job Works with SG Industry
              </h2>
              <p className="text-base text-[#FFF9F0]/80 mt-3">
                From your initial CAD file or sketch to the final inspected part, here is our simple 5-step process.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => (
              <ScrollReveal key={step.step} direction="up" delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:bg-white/10 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-tech font-extrabold text-2xl text-[#FFC928]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-base text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-xs text-[#FFF9F0]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5B45] text-white font-bold text-sm hover:bg-[#ff452b] transition-all shadow-md font-tech"
            >
              <span>Submit Your Drawing for Feasibility Check</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CUSTOMER FEEDBACK & REVIEWS */}
      <section className="py-20 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="down">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech">
                Verified Client Feedback
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
                What Fabrication Clients Say
              </h2>
              <p className="text-base text-[#33205B]/70 mt-3">
                Real feedback from industrial fabricators, mechanical contractors, and equipment builders in Visakhapatnam.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test, index) => (
              <ScrollReveal key={test.id} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-[#33205B]/10 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 text-[#FFC928] mb-4">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-[#33205B]/85 italic leading-relaxed mb-6">
                      "{test.content}"
                    </p>
                  </div>

                  <div className="border-t border-[#33205B]/10 pt-4">
                    <p className="font-bold text-sm text-[#33205B] font-display">{test.author}</p>
                    <p className="text-xs text-[#33205B]/60">
                      {test.role} · {test.companyOrLocation}
                    </p>
                    <span className="inline-block mt-2 text-[10px] uppercase tracking-wider font-extrabold text-[#00BFA6] bg-[#00BFA6]/10 px-2.5 py-0.5 rounded-md font-tech">
                      {test.serviceMentioned}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 bg-white border-t border-[#33205B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center mb-10">
            <ScrollReveal direction="down">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00BFA6] font-tech">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-[#33205B]/70 mt-2">
                Clear answers regarding drawings, machinery, material options, and order turnaround.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.1}>
            <FAQAccordion items={homeFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 09 — CONTACT & LOCATION WITH PROPRIETOR DIRECT PHONE */}
      <section id="contact" className="py-20 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Verified Location */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="right">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
                  Visit or Connect with SG Industry
                </h2>
                <p className="text-sm text-[#33205B]/80 leading-relaxed">
                  Have a drawing ready or want to discuss feasibility for laser cutting or bending? Masada Siva Srinu and our workshop team are ready to assist.
                </p>

                {/* Info Cards */}
                <div className="space-y-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-[#33205B]/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5B45]/10 text-[#FF5B45] flex items-center justify-center shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#33205B] font-display">Workshop Address</h4>
                      <p className="text-xs text-[#33205B]/75 mt-1 leading-relaxed">
                        {companyData.address.full}
                      </p>
                      <a
                        href={companyData.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5B45] mt-2 hover:underline font-tech"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#33205B]/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#33205B] font-display">
                        Proprietor Phone (Masada Siva Srinu)
                      </h4>
                      <p className="text-xs text-[#33205B]/75 mt-1">
                        Call directly for urgent orders and quotes:
                      </p>
                      <a
                        href={`tel:${companyData.phone}`}
                        className="inline-block text-lg font-extrabold text-[#33205B] hover:text-[#FF5B45] transition-colors mt-1 font-tech"
                      >
                        {companyData.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#33205B]/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2864F0]/10 text-[#2864F0] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#33205B] font-display">Working Hours</h4>
                      <p className="text-xs text-[#33205B]/75 mt-1 font-tech">
                        {companyData.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#00BFA6] text-[#33205B] font-extrabold text-sm hover:bg-[#00d6ba] transition-all shadow-md shadow-[#00BFA6]/20 font-tech"
                  >
                    <span>Chat on WhatsApp Directly with Masada Siva Srinu</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Validated Enquiry Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.1}>
                <EnquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CLOSING INVITATION CTA */}
      <section className="py-20 bg-[#33205B] text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-6">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC928] font-tech">
              PRECISION · QUALITY · DEPENDABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-2">
              Have a metal part requirement?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
              Bring your CAD drawing or explain the component you need. Masada Siva Srinu and the SG Industry team will review feasibility and calculate optimal pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-[#FF5B45] text-white font-extrabold text-base hover:bg-[#ff452b] transition-all shadow-lg font-tech"
              >
                Request a Quotation ↗
              </a>
              <a
                href={`tel:${companyData.phone}`}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all font-tech"
              >
                Call {companyData.phoneDisplay}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
