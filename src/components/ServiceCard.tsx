import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Zap, Layers, Sparkles, Box, Disc, Hammer } from "lucide-react";
import type { ServiceItem } from "../data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [imageError, setImageError] = useState(false);

  const getIcon = () => {
    switch (service.slug) {
      case "precision-laser-cutting":
        return <Zap className="w-6 h-6 text-[#FF5B45]" />;
      case "cnc-bending":
        return <Layers className="w-6 h-6 text-[#00BFA6]" />;
      case "architectural-screens":
        return <Sparkles className="w-6 h-6 text-[#FFC928]" />;
      case "industrial-enclosures":
        return <Box className="w-6 h-6 text-[#2864F0]" />;
      case "flange-rings-baseplates":
        return <Disc className="w-6 h-6 text-[#00BFA6]" />;
      case "custom-metal-fabrication":
      default:
        return <Hammer className="w-6 h-6 text-[#FF5B45]" />;
    }
  };

  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#33205B]/10 hover:border-[#33205B] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between metal-reflection">
      <div>
        {/* Top Badging & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border"
            style={{
              backgroundColor: `${service.badgeColor}15`,
              borderColor: `${service.badgeColor}30`,
            }}
          >
            {getIcon()}
          </div>
          <span
            className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full font-tech"
            style={{
              backgroundColor: `${service.badgeColor}20`,
              color: service.badgeColor,
            }}
          >
            Verified Workshop Service
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold font-display text-[#33205B] group-hover:text-[#FF5B45] transition-colors mb-1.5">
          {service.title}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#33205B]/60 mb-4 font-tech">
          {service.tagline}
        </p>

        {/* Short explanation */}
        <p className="text-sm text-[#33205B]/80 leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Full-width Uncropped Image Showcase */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#FFF9F0] border border-[#33205B]/10 mb-6 p-2 flex items-center justify-center min-h-[220px]">
          {!imageError ? (
            <img
              src={service.heroImage}
              alt={service.heroImageAlt}
              onError={() => setImageError(true)}
              className="w-full h-auto max-h-64 object-contain rounded-xl group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 flex flex-col items-center justify-center p-6 text-center bg-[#f4ede0] rounded-xl">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ backgroundColor: `${service.badgeColor}20` }}
              >
                {getIcon()}
              </div>
              <span className="text-sm font-bold text-[#33205B] font-display">{service.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#33205B]/10 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#33205B] group-hover:text-[#FF5B45] transition-colors font-tech"
        >
          <span>Explore Service Details</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
