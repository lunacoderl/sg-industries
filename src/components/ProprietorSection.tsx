import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Award,
  Maximize2,
  X,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { companyData, createWhatsAppUrl } from "../data/company";
import { ScrollReveal } from "./ScrollReveal";

export const ProprietorSection: React.FC = () => {
  const [activeCardModal, setActiveCardModal] = useState<string | null>(null);
  const [activePortraitModal, setActivePortraitModal] = useState<boolean>(false);

  const { proprietor } = companyData;

  return (
    <section id="proprietor" className="py-20 sm:py-28 bg-white border-y border-[#33205B]/10 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00BFA6]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF5B45]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45] font-tech px-4 py-1.5 rounded-full bg-[#FF5B45]/10 border border-[#FF5B45]/20 inline-block">
              Workshop Leadership &amp; Engineering Trust
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#33205B] mt-3">
              Meet the Proprietor &amp; Founder
            </h2>
            <p className="text-base sm:text-lg text-[#33205B]/75 mt-3 leading-relaxed">
              Direct technical accountability, on-floor machine supervision, and reliable client relationships for every precision metal fabrication project in Visakhapatnam.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Leadership Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mb-16">
          {/* Left Column: Full Uncropped Portrait (Complete Length & Width Visible Without Cropping) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <ScrollReveal direction="right">
              <div className="bg-[#FFF9F0] rounded-3xl p-3 sm:p-4 border-2 border-[#33205B]/15 shadow-2xl relative">
                {/* Frame with natural proportions - NO cropping, full width and full length */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-white border border-[#33205B]/10 cursor-pointer group shadow-sm flex items-center justify-center"
                  onClick={() => setActivePortraitModal(true)}
                  title="Click to inspect portrait in full resolution"
                >
                  <img
                    src={proprietor.image}
                    alt={`${proprietor.name} — Proprietor of SG Industry`}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="eager"
                  />

                  {/* Clean hover overlay button */}
                  <div className="absolute inset-0 bg-[#33205B]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="px-5 py-2.5 rounded-full bg-white text-[#33205B] font-bold text-xs flex items-center gap-2 shadow-2xl font-tech">
                      <Maximize2 className="w-4 h-4 text-[#FF5B45]" />
                      <span>View Full-Size Portrait</span>
                    </span>
                  </div>
                </div>

                {/* Unobstructed Info Strip Below Image (Does NOT cover the photo!) */}
                <div className="mt-3.5 p-4 sm:p-5 bg-white rounded-2xl border border-[#33205B]/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA6] animate-pulse"></span>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00BFA6] font-tech">
                        Direct Workshop Head
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#FF5B45] bg-[#FF5B45]/10 px-2.5 py-0.5 rounded-full font-tech">
                      {proprietor.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#33205B]">
                    {proprietor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#33205B]/75 font-semibold mt-0.5">
                    {proprietor.designation}
                  </p>
                  <p className="text-xs text-[#33205B]/60 mt-1">
                    SG Industry · Auto Nagar, Gajuwaka, Visakhapatnam
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-[#33205B]/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActivePortraitModal(true)}
                      className="text-xs font-bold text-[#33205B] hover:text-[#FF5B45] flex items-center gap-1.5 transition-colors font-tech cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#00BFA6]" />
                      <span>Click to view full length photo</span>
                    </button>
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-tech">
                      100% Uncropped
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Professional Background, Technical Mastery & Credentials */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              {/* Badges Strip */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33205B]/5 border border-[#33205B]/10 text-xs font-bold text-[#33205B] font-tech">
                  <Award className="w-4 h-4 text-[#FF5B45]" />
                  <span>Proprietor &amp; Managing Director</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] text-xs font-extrabold font-tech">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>On-Floor Technical Leadership</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B] leading-tight">
                "Direct Engineering Oversight from Raw Sheet to Finished Component."
              </h3>

              {/* In-depth Professional Biography */}
              <p className="text-sm sm:text-base text-[#33205B]/85 leading-relaxed">
                {proprietor.bio}
              </p>

              {/* Personal Guarantee Statement */}
              <div className="relative pl-6 py-1 border-l-4 border-[#FF5B45] italic text-[#33205B]/90 text-sm sm:text-base leading-relaxed bg-[#FFF9F0]/60 rounded-r-2xl pr-4">
                "{proprietor.statement}"
              </div>

              {/* 4 Professional Technical Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {proprietor.keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#33205B]/10 hover:border-[#33205B]/25 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-[#33205B] font-bold text-sm mb-1.5 font-display">
                      {idx === 0 && <Cpu className="w-4 h-4 text-[#00BFA6] shrink-0" />}
                      {idx === 1 && <Sparkles className="w-4 h-4 text-[#FF5B45] shrink-0" />}
                      {idx === 2 && <Layers className="w-4 h-4 text-[#2864F0] shrink-0" />}
                      {idx === 3 && <ShieldCheck className="w-4 h-4 text-[#FFC928] shrink-0" />}
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-[#33205B]/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {proprietor.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-2xl border border-[#33205B]/10 text-center shadow-xs"
                  >
                    <span className="text-xl sm:text-2xl font-extrabold text-[#33205B] font-display block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-bold text-[#FF5B45] uppercase tracking-wider font-tech block mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-[#33205B]/60 block mt-0.5">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Communication Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={`tel:${companyData.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#33205B] text-white font-bold text-sm hover:bg-[#48307d] transition-all shadow-lg hover:shadow-xl font-tech"
                >
                  <Phone className="w-4 h-4 text-[#FF5B45]" />
                  <span>Call Mr. Siva Srinu: {companyData.phoneDisplay}</span>
                </a>
                <a
                  href={createWhatsAppUrl(
                    "Hello Mr. Siva Srinu, I would like to consult with you directly regarding a custom metal fabrication requirement at SG Industry."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#00BFA6] text-[#33205B] font-extrabold text-sm hover:bg-[#00d6ba] transition-all shadow-lg hover:shadow-xl font-tech"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Mr. Siva Srinu</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Dedicated Business Card Showcase (Front & Back Only Here!) */}
        <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-10 border-2 border-[#33205B]/10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00BFA6] font-tech px-3.5 py-1 rounded-full bg-[#00BFA6]/10 inline-block">
              Official Workshop Card Credentials
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-[#33205B] mt-2">
              SG Industry Verified Business Card
            </h4>
            <p className="text-xs sm:text-sm text-[#33205B]/70 mt-1">
              Click either card side to inspect the verified address, contact numbers, and registered CNC machinery capabilities at full uncropped resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Front Card (Side A) */}
            <div
              className="bg-white rounded-2xl overflow-hidden border-2 border-[#33205B]/15 hover:border-[#FF5B45] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              onClick={() => setActiveCardModal(proprietor.cardFront)}
              title="Click to view card front full size"
            >
              <div className="relative overflow-hidden bg-slate-900 p-2 sm:p-3 flex items-center justify-center min-h-[220px]">
                <img
                  src={proprietor.cardFront}
                  alt="SG Industry Official Business Card Front — Masada Siva Srinu"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-101 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#33205B]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#33205B] font-bold text-xs flex items-center gap-1.5 shadow-lg font-tech">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF5B45]" />
                    <span>View Card Front Full-Size</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#33205B]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#FF5B45] font-tech uppercase tracking-wider">
                    Side A · Front Face
                  </span>
                  <p className="text-xs text-[#33205B]/75 font-semibold mt-0.5">
                    Verified Phone ({companyData.phoneDisplay}) &amp; Auto Nagar Address
                  </p>
                </div>
                <Maximize2 className="w-4 h-4 text-[#33205B]/40 group-hover:text-[#FF5B45] transition-colors" />
              </div>
            </div>

            {/* Back Card (Side B) */}
            <div
              className="bg-white rounded-2xl overflow-hidden border-2 border-[#33205B]/15 hover:border-[#00BFA6] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              onClick={() => setActiveCardModal(proprietor.cardBack)}
              title="Click to view card back full size"
            >
              <div className="relative overflow-hidden bg-slate-900 p-2 sm:p-3 flex items-center justify-center min-h-[220px]">
                <img
                  src={proprietor.cardBack}
                  alt="SG Industry Official Business Card Back — CNC Laser Cutting & Bending Capabilities"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-101 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#33205B]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#33205B] font-bold text-xs flex items-center gap-1.5 shadow-lg font-tech">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00BFA6]" />
                    <span>View Card Back Full-Size</span>
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#33205B]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00BFA6] font-tech uppercase tracking-wider">
                    Side B · Back Face
                  </span>
                  <p className="text-xs text-[#33205B]/75 font-semibold mt-0.5">
                    CNC Laser Cutting &amp; Bending Machinery Specifications
                  </p>
                </div>
                <Maximize2 className="w-4 h-4 text-[#33205B]/40 group-hover:text-[#00BFA6] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Size Lightbox Modal for Proprietor Portrait */}
      {activePortraitModal && (
        <div
          className="fixed inset-0 z-50 bg-[#33205B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePortraitModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActivePortraitModal(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close portrait modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 max-h-[95vh] flex flex-col items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-center overflow-auto max-h-[80vh]">
              <img
                src={proprietor.image}
                alt={`${proprietor.name} — Full Uncropped Portrait`}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>
            <div className="w-full pt-4 mt-2 border-t border-[#33205B]/10 text-center">
              <h4 className="text-base font-bold text-[#33205B] font-display">
                {proprietor.name} — {proprietor.designation}
              </h4>
              <p className="text-xs text-[#33205B]/70 font-tech mt-0.5">
                SG Industry · C-13 Auto Nagar, Gajuwaka, Visakhapatnam · Tel: {companyData.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Full-Size Modal for Business Cards */}
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
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close card modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCardModal}
              alt="SG Industry Official Business Card Spec Full Size"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <div className="p-4 text-center border-t border-[#33205B]/10 mt-3">
              <span className="text-xs font-bold text-[#33205B] font-tech">
                SG Industry Official Business Card · Auto Nagar, Gajuwaka · Tel: {companyData.phoneDisplay}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
