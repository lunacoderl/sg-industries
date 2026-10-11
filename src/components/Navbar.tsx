import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import { companyData } from "../data/company";
import { servicesData } from "../data/services";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="bg-[#33205B] text-[#FFF9F0] text-xs py-2 px-4 border-b border-[#33205B]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse"></span>
            <span>
              <strong>SG Industry:</strong> APEX CNC Fiber Laser &amp; Press Brake Forming in Auto Nagar, Gajuwaka, Vizag
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-['Space_Grotesk']">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-1.5 hover:text-[#FF5B45] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B45]" />
              <span>{companyData.phoneDisplay}</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/80">{companyData.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF9F0]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#33205B]/10"
            : "bg-[#FFF9F0] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark & Official Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="SG Industry Homepage">
              <div className="h-10 sm:h-12 flex items-center">
                <img
                  src="/images/logo.png"
                  alt="SG Industry — Precision Quality Dependability"
                  className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === "/"
                    ? "text-[#FF5B45] bg-[#33205B]/5 font-bold"
                    : "text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    location.pathname.startsWith("/services")
                      ? "text-[#FF5B45] bg-[#33205B]/5 font-bold"
                      : "text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-[#33205B]/10 p-3 mt-1 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-[#FFF9F0] transition-colors group/item border border-transparent hover:border-[#33205B]/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#33205B] group-hover/item:text-[#FF5B45] transition-colors font-display">
                            {service.title}
                          </span>
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: service.badgeColor }}
                          ></span>
                        </div>
                        <span className="text-[11px] text-[#33205B]/70 mt-0.5 line-clamp-1">
                          {service.shortDescription}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#our-work"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5 transition-colors"
              >
                Our Work
              </a>
              <a
                href="/#proprietor"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5 transition-colors"
              >
                Proprietor
              </a>
              <a
                href="/#workflow"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5 transition-colors"
              >
                How It Works
              </a>
              <a
                href="/#faqs"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5 transition-colors"
              >
                FAQs
              </a>
              <a
                href="/#contact"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] hover:bg-[#33205B]/5 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5B45] text-white font-extrabold text-sm hover:bg-[#ff452b] transition-all duration-200 shadow-md shadow-[#FF5B45]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="/#contact"
                className="text-xs px-3.5 py-1.5 rounded-full bg-[#FF5B45] text-white font-bold"
              >
                Quote
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#33205B] hover:bg-[#33205B]/10 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-[#33205B]/40 backdrop-blur-sm z-50">
            <div className="bg-[#FFF9F0] border-b border-[#33205B]/10 p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5 font-display"
                >
                  Home
                </Link>

                <div className="border-t border-[#33205B]/10 pt-3">
                  <span className="text-xs font-bold text-[#33205B]/50 uppercase tracking-wider block mb-2 px-2 font-tech">
                    All Services (6)
                  </span>
                  <div className="grid gap-2 pl-2">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="text-sm font-semibold text-[#33205B] hover:text-[#FF5B45] p-2 rounded-lg bg-white/60 border border-[#33205B]/5 font-display"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#33205B]/10 pt-3 flex flex-col space-y-2">
                  <a
                    href="/#our-work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5"
                  >
                    Our Work Gallery
                  </a>
                  <a
                    href="/#proprietor"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5"
                  >
                    Proprietor: Masada Siva Srinu
                  </a>
                  <a
                    href="/#workflow"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5"
                  >
                    How It Works
                  </a>
                  <a
                    href="/#faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5"
                  >
                    FAQs
                  </a>
                  <a
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-[#33205B] p-2 rounded-lg hover:bg-[#33205B]/5"
                  >
                    Contact &amp; Location
                  </a>
                </div>

                <div className="border-t border-[#33205B]/10 pt-4 flex flex-col gap-3">
                  <a
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 rounded-full bg-[#FF5B45] text-white font-bold shadow-md"
                  >
                    Request a Quotation
                  </a>
                  <a
                    href={`tel:${companyData.phone}`}
                    className="w-full text-center py-3 rounded-full border-2 border-[#33205B] text-[#33205B] font-bold"
                  >
                    Call {companyData.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
