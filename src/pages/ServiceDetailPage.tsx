import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle,
  FileText,
  Phone,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "../data/services";
import { companyData, createWhatsAppUrl } from "../data/company";
import { galleryItems } from "../data/gallery";
import { FAQAccordion } from "../components/FAQAccordion";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageMetadata } from "../seo/PageMetadata";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Related work from gallery
  const relatedGalleryItems = galleryItems.filter((item) =>
    service.slug === "precision-laser-cutting"
      ? item.category === "Laser Cutting" || item.category === "Finished Components"
      : item.category === "CNC Bending" || item.category === "Finished Components"
  );

  // Related other services
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageMetadata
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalPath={service.canonicalPath}
        ogImage={service.heroImage}
      />

      {/* 1. SERVICE HERO */}
      <section className="relative bg-[#33205B] text-[#FFF9F0] pt-14 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#FFF9F0]/60 mb-6 font-semibold">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#FF5B45]">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="down">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest"
                  style={{
                    backgroundColor: `${service.badgeColor}25`,
                    color: service.badgeColor,
                  }}
                >
                  <span>SG Industry Service</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  {service.title} in Gajuwaka, Visakhapatnam
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-[#FFF9F0]/85 leading-relaxed">
                  {service.shortDescription}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#quote-section"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF5B45] text-white font-extrabold text-sm hover:bg-[#ff452b] transition-all shadow-lg"
                  >
                    <span>Request Quotation for {service.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={createWhatsAppUrl(`Hi SG Industry, I need a quotation for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00BFA6] text-[#33205B] font-extrabold text-sm hover:bg-[#00d6ba] transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white group">
                  <img
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="p-4 bg-white text-[#33205B] border-t border-[#33205B]/10">
                    <p className="text-xs font-bold">{service.heroImageAlt}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#FF5B45] to-[#00BFA6]"></div>
      </section>

      {/* 2. SIMPLE EXPLANATION & NOTICE */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal direction="up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45]">
              Overview &amp; Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B] mt-2">
              How {service.title} Works
            </h2>
            <p className="text-base text-[#33205B]/85 leading-relaxed mt-4">
              {service.introduction}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-[#33205B]/5 border border-[#33205B]/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00BFA6] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#33205B]/80 leading-relaxed font-medium">
                <strong>Machine Feasibility Notice:</strong> {service.capabilitiesNotice}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. APPLICATIONS AND EXAMPLES */}
      <section className="py-16 bg-white border-y border-[#33205B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00BFA6]">
              Practical Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B] mt-2">
              Common Components &amp; Use Cases
            </h2>
            <p className="text-sm text-[#33205B]/70 mt-2">
              Illustrative component types frequently processed using {service.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.applications.map((app, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-[#FFF9F0] p-6 rounded-2xl border border-[#33205B]/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#33205B] text-white flex items-center justify-center font-bold text-xs mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-base text-[#33205B] font-display mb-2">
                      {app.title}
                    </h3>
                    <p className="text-xs text-[#33205B]/75 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REQUIREMENTS CHECKLIST */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#33205B]/10 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#FF5B45]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B]">
                  What Helps Us Review Your Requirement?
                </h2>
              </div>
              <p className="text-sm text-[#33205B]/75 mb-6">
                To evaluate feasibility, estimate cutting time or bending tooling, and provide a timely quotation, having the following details ready is helpful:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.requirementsChecklist.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FFF9F0] border border-[#33205B]/5"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00BFA6] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#33205B] font-semibold">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. PROCESS & CONSIDERATIONS */}
      <section className="py-16 bg-[#33205B] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC928]">
              Step-by-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mt-2">
              From Drawing to Finished Part
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <ScrollReveal key={step.step} direction="up" delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-display text-3xl font-extrabold text-[#FF5B45]">
                      {step.step}
                    </span>
                    <h3 className="font-bold text-base text-white mt-3 mb-2">{step.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED WORK EXAMPLES */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00BFA6]">
                Our Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B] mt-1">
                Real Examples of {service.title}
              </h2>
            </div>
            <Link
              to="/#our-work"
              className="text-xs font-bold text-[#FF5B45] hover:underline flex items-center gap-1"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGalleryItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#33205B]/10 shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#eee6d8]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5B45]">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-base text-[#33205B] mt-1 font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#33205B]/70 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICE FAQS & OTHER SERVICES */}
      <section className="py-16 bg-white border-t border-[#33205B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B45]">
                Common Enquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B] mt-1">
                {service.title} FAQs
              </h2>
            </div>
            <FAQAccordion items={service.faqs} />
          </div>

          {/* Related Services Links */}
          <div className="pt-8 border-t border-[#33205B]/10">
            <h3 className="text-lg font-bold text-[#33205B] font-display mb-4">
              Explore Related Services:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="p-5 rounded-2xl border border-[#33205B]/15 hover:border-[#FF5B45] hover:bg-[#FFF9F0] transition-colors flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-base text-[#33205B] group-hover:text-[#FF5B45] transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-xs text-[#33205B]/70 mt-1 line-clamp-1">
                      {other.shortDescription}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#33205B] group-hover:text-[#FF5B45] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUOTE CTA BANNER */}
      <section id="quote-section" className="py-16 bg-[#FFF9F0] text-center border-t border-[#33205B]/10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B]">
            Ready to discuss your {service.title} job?
          </h2>
          <p className="text-sm text-[#33205B]/80 max-w-xl mx-auto">
            Contact SG Industry in Auto Nagar, Gajuwaka. Call our workshop or message us on WhatsApp with your drawing or dimensions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${companyData.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#33205B] text-white font-bold text-sm hover:bg-[#48307d] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Workshop: {companyData.phoneDisplay}</span>
            </a>
            <a
              href={createWhatsAppUrl(`Hi SG Industry, I need a quotation for ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00BFA6] text-[#33205B] font-bold text-sm hover:bg-[#00d6ba] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
