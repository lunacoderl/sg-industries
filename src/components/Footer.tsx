import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, MapPin, ArrowUpRight, Clock, UserCheck } from "lucide-react";
import { companyData, createWhatsAppUrl } from "../data/company";
import { servicesData } from "../data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#33205B] text-[#FFF9F0] pt-16 pb-12 border-t-4 border-[#FF5B45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-xl p-2 inline-block">
                <img
                  src="/images/logo.png"
                  alt="SG Industry Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-[#FFF9F0]/80 leading-relaxed">
              Precision CNC Fiber Laser Cutting &amp; Press Brake Bending in Gajuwaka, Visakhapatnam. Where precision manufacturing meets craft.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#FFC928]" />
              <span className="text-xs text-[#FFC928] font-bold">
                Proprietor: {companyData.proprietor.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00BFA6]"></span>
              <span className="text-xs text-[#00BFA6] font-semibold tracking-wide font-tech">
                Active Workshop in Auto Nagar
              </span>
            </div>
          </div>

          {/* Column 2: All Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFC928] mb-4 font-tech">
              Specialized Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5B45]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00BFA6] mb-4 font-tech">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  About Workshop &amp; Machinery
                </a>
              </li>
              <li>
                <a href="/#our-work" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  Finished Work Gallery
                </a>
              </li>
              <li>
                <a href="/#proprietor" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  Proprietor: Masada Siva Srinu
                </a>
              </li>
              <li>
                <a href="/#workflow" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  How a Job Works
                </a>
              </li>
              <li>
                <a href="/#faqs" className="hover:text-[#FF5B45] text-[#FFF9F0]/80 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF5B45] mb-4 font-tech">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#FFF9F0]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5B45] shrink-0 mt-1" />
                <span>{companyData.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00BFA6] shrink-0" />
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-[#00BFA6] transition-colors font-bold font-tech"
                >
                  {companyData.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFC928] shrink-0" />
                <span className="text-xs">{companyData.workingHours}</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00BFA6] text-[#33205B] font-bold text-xs hover:bg-[#00d6ba] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp with Masada Siva Srinu</span>
              </a>
              <a
                href={companyData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-[#FFF9F0] text-xs hover:bg-white/10 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Directions to Auto Nagar</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F0]/60">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#FFF9F0] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#FFF9F0] transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
