import React from "react";
import { Link } from "react-router-dom";
import { PageMetadata } from "../seo/PageMetadata";
import { companyData } from "../data/company";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageMetadata
        title="Privacy Policy | SG Industry"
        description="Privacy policy and data handling guidelines for SG Industry, Gajuwaka, Visakhapatnam."
        canonicalPath="/privacy-policy"
      />

      <div className="py-16 bg-[#FFF9F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#33205B]/10 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B45]">
              Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#33205B] mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#33205B]/60 mt-1">
              Last updated: October 2026 · SG Industry
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#33205B]/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                1. Information We Collect
              </h2>
              <p>
                When you interact with SG Industry through our website enquiry form, phone call, or WhatsApp, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your name and contact phone number.</li>
                <li>Your business or organization name (if provided).</li>
                <li>Project details, material specifications, and CAD drawings (.dxf, .dwg, PDF).</li>
                <li>Communication records regarding quotations and job confirmations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used strictly for legitimate business and manufacturing purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Evaluating drawing feasibility, cutting paths, and nesting yield.</li>
                <li>Preparing and delivering job quotations.</li>
                <li>Communicating production progress and coordinating collection or delivery.</li>
                <li>Maintaining invoice and accounting records as required by applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                3. Technical Drawing &amp; Intellectual Property Confidentiality
              </h2>
              <p>
                We recognize that CAD designs and parts drawings represent valuable client intellectual property. Any drawings, sketches, or technical specifications shared with SG Industry are treated with confidentiality and used solely for estimating and executing your specified job. We do not sell, license, or distribute your proprietary drawings to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                4. Cookies and Analytics
              </h2>
              <p>
                Our website operates on static hosting and does not use intrusive marketing cookies or third-party trackers that profile your browsing activity across other websites. Essential browser session storage may be utilized purely to maintain website performance and user preferences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#33205B] mb-2 font-display">
                5. Contacting Us About Your Data
              </h2>
              <p>
                If you have questions regarding this privacy policy or wish to update or remove your contact details from our records, please contact us directly:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-[#FFF9F0] border border-[#33205B]/10">
                <p className="font-bold text-[#33205B]">{companyData.name}</p>
                <p className="text-xs text-[#33205B]/75 mt-1">{companyData.address.full}</p>
                <p className="text-xs text-[#33205B]/75 mt-1">Phone: {companyData.phoneDisplay}</p>
              </div>
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
