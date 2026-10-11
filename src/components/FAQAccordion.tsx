import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#33205B] shadow-md"
                : "bg-white/80 border-[#33205B]/10 hover:border-[#33205B]/30"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base sm:text-lg text-[#33205B] pr-4">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "bg-[#FF5B45] text-white rotate-180"
                    : "bg-[#33205B]/5 text-[#33205B]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#33205B]/80 leading-relaxed border-t border-[#33205B]/5 animate-in fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
