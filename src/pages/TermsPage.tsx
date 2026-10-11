import React from "react";
import { Link } from "react-router-dom";
import { PageMetadata } from "../seo/PageMetadata";
import { companyData } from "../data/company";

export const TermsPage: React.FC = () => {
  return (
    <>
      <PageMetadata
        title="Terms & Conditions | SG Industry"
        description="Terms and conditions for quotation, manufacturing, and workshop services at SG Industry."
        canonicalPath="/terms-and-conditions"
      />

      <div className="py-16 bg-[#FFF9F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#33205B]/10 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00BFA6]">
              Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B] mt-1">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-[#33205B]/60 mt-1">
              Last updated: October 2026 · SG Industry
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#33205B]/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                1. Quotation &amp; Feasibility Review
              </h2>
              <p>
                All estimates, price quotes, and production timelines provided by SG Industry are subject to initial drawing feasibility, sheet grade availability, and machine bed scheduling. An estimate does not constitute a binding production commitment until the client approves the quotation and job parameters are finalized.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                2. Client-Supplied Drawings &amp; Specifications
              </h2>
              <p>
                Clients are responsible for the dimensional accuracy, hole clearances, and geometric correctness of CAD files (.DXF, .DWG, PDF) submitted for production. While SG Industry reviews files for machine feasibility (e.g. laser kerf, press brake tooling punch clearances), we are not liable for design errors inherent in client-supplied drawings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                3. Customer-Supplied Materials
              </h2>
              <p>
                Where the client provides raw sheet material for laser cutting or bending:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Materials must be reasonably flat, clean, and free of heavy corrosion, oil, or warpage that could damage laser cutting nozzles or lenses.</li>
                <li>SG Industry reserves the right to inspect and decline processing of incompatible or unsafe sheets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                4. Tolerances &amp; Machine Capabilities
              </h2>
              <p>
                Cutting and bending tolerances conform to standard commercial CNC sheet metal fabrication practices. Specific tight tolerance requirements must be explicitly agreed in writing prior to commencing batch production.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                5. Inspection &amp; Collection
              </h2>
              <p>
                Finished components are inspected prior to handover. Clients or their authorized representatives are invited to inspect finished components upon collection at our workshop ({companyData.address.full}).
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#33205B]/10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5B45] hover:underline"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
