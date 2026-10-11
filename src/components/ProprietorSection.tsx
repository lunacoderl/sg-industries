import React, { useState } from "react";
import { Phone, MessageSquare, Award, CheckCircle2, Maximize2, X } from "lucide-react";
import { companyData, createWhatsAppUrl } from "../data/company";
import { ScrollReveal } from "./ScrollReveal";

export const ProprietorSection: React.FC = () => {
  const [activeCardModal, setActiveCardModal] = useState<string | null>(null);

  return (
    <section id="proprietor" className="py-20 bg-white border-y border-[#33205B]/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BFA6]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5B45]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech">
              Workshop Leadership &amp; Trust
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-2">
              Meet the Proprietor
            </h2>
            <p className="text-base text-[#33205B]/75 mt-3">
              Direct accountability, verified workshop machinery, and dedicated customer relationships for every metal fabrication job.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Leadership Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Full Uncropped Portrait */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#33205B]/10 shadow-2xl bg-[#FFF9F0] group">
                <img
                  src={companyData.proprietor.image}
                  alt={`${companyData.proprietor.name} — Proprietor of SG Industry`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#33205B]/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA6]"></span>
                    <span className="text-xs font-bold font-tech uppercase text-[#00BFA6]">
                      Direct Workshop Supervision
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
                    {companyData.proprietor.name}
                  </h3>
                  <p className="text-xs text-white/70 font-medium">
                    {companyData.proprietor.title} · SG Industry
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Personal Statement & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33205B]/5 border border-[#33205B]/10 text-xs font-bold text-[#33205B]">
                <Award className="w-4 h-4 text-[#FF5B45]" />
                <span>Proprietor &amp; Managing Director</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B] leading-tight">
                "Quality, Precision, and Dependability in every cut."
              </h3>

              <div className="relative pl-6 border-l-4 border-[#FF5B45] italic text-[#33205B]/85 text-base sm:text-lg leading-relaxed">
                "{companyData.proprietor.statement}"
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#33205B]/10">
                  <div className="flex items-center gap-2 text-[#33205B] font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#00BFA6]" />
                    <span>Direct Communication</span>
                  </div>
                  <p className="text-xs text-[#33205B]/70 leading-relaxed">
                    Discuss your drawings directly with Mr. Siva Srinu to assess tolerances, machine scheduling, and cost.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#33205B]/10">
                  <div className="flex items-center gap-2 text-[#33205B] font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5B45]" />
                    <span>On-Floor Quality Control</span>
                  </div>
                  <p className="text-xs text-[#33205B]/70 leading-relaxed">
                    Every batch is inspected at our Auto Nagar unit before customer handover or site delivery.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={`tel:${companyData.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#33205B] text-white font-bold text-sm hover:bg-[#48307d] transition-all shadow-md font-tech"
                >
                  <Phone className="w-4 h-4 text-[#FF5B45]" />
                  <span>Call Mr. Siva Srinu: {companyData.phoneDisplay}</span>
                </a>
                <a
                  href={createWhatsAppUrl("Hello Mr. Siva Srinu, I would like to consult on a custom metal fabrication requirement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00BFA6] text-[#33205B] font-extrabold text-sm hover:bg-[#00d6ba] transition-all shadow-md font-tech"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Dedicated Business Card Showcase (Front & Back Only Here!) */}
        <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-10 border-2 border-[#33205B]/10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00BFA6] font-tech">
              Official Workshop Card Spec
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-[#33205B] mt-1">
              SG Industry Business Card Credentials
            </h4>
            <p className="text-xs sm:text-sm text-[#33205B]/70 mt-1">
              Click either side to inspect the verified contact details and machinery capabilities at full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Front Card */}
            <div
              className="bg-white rounded-2xl overflow-hidden border-2 border-[#33205B]/15 hover:border-[#FF5B45] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              onClick={() => setActiveCardModal(companyData.proprietor.cardFront)}
            >
              <div className="relative overflow-hidden bg-slate-900">
                <img
                  src={companyData.proprietor.cardFront}
                  alt="SG Industry Official Business Card Front"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#33205B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#33205B] font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Card Front Full-Size</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#33205B]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#FF5B45] font-tech uppercase">
                    Side A · Front
                  </span>
                  <p className="text-xs text-[#33205B]/75 font-semibold">
                    Verified Phone (098663 78877) &amp; Auto Nagar Address
                  </p>
                </div>
                <Maximize2 className="w-4 h-4 text-[#33205B]/40 group-hover:text-[#FF5B45] transition-colors" />
              </div>
            </div>

            {/* Back Card */}
            <div
              className="bg-white rounded-2xl overflow-hidden border-2 border-[#33205B]/15 hover:border-[#00BFA6] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              onClick={() => setActiveCardModal(companyData.proprietor.cardBack)}
            >
              <div className="relative overflow-hidden bg-slate-900">
                <img
                  src={companyData.proprietor.cardBack}
                  alt="SG Industry Official Business Card Back"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#33205B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#33205B] font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Card Back Full-Size</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#33205B]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00BFA6] font-tech uppercase">
                    Side B · Back
                  </span>
                  <p className="text-xs text-[#33205B]/75 font-semibold">
                    CNC Laser Cutting &amp; Bending Capabilities Spec
                  </p>
                </div>
                <Maximize2 className="w-4 h-4 text-[#33205B]/40 group-hover:text-[#00BFA6] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Size Modal for Business Card */}
      {activeCardModal && (
        <div
          className="fixed inset-0 z-50 bg-[#33205B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveCardModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveCardModal(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close card modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCardModal}
              alt="SG Industry Business Card Spec Full Size"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <span className="text-xs font-bold text-[#33205B] font-tech">
                SG Industry Official Card · Auto Nagar, Gajuwaka · Tel: 098663 78877
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
