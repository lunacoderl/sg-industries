import React, { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageSquare } from "lucide-react";
import { companyData, createWhatsAppUrl } from "../data/company";

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3 print:hidden"
      role="region"
      aria-label="Quick contact actions"
    >
      {/* WhatsApp Action */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#00BFA6] text-[#33205B] shadow-xl hover:bg-[#00d6ba] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:ring-offset-2"
        aria-label="Enquire on WhatsApp with SG Industry"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        {/* Desktop Tooltip */}
        <span className="hidden lg:block absolute right-14 bg-[#33205B] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Direct Phone Dialler */}
      <a
        href={`tel:${companyData.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#FF5B45] text-white shadow-xl hover:bg-[#ff452b] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF5B45] focus:ring-offset-2"
        aria-label={`Call SG Industry at ${companyData.phoneDisplay}`}
      >
        <Phone className="w-5 h-5 fill-current" />
        {/* Desktop Tooltip */}
        <span className="hidden lg:block absolute right-14 bg-[#33205B] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Call {companyData.phoneDisplay}
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#33205B] text-[#FFF9F0] shadow-md hover:bg-[#48307d] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#33205B]"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden lg:block absolute right-12 bg-[#33205B] text-white text-xs font-semibold px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Top
          </span>
        </button>
      )}
    </div>
  );
};
