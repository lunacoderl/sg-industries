import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { PageMetadata } from "../seo/PageMetadata";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageMetadata
        title="404 — Page Not Found | SG Industry"
        description="The requested page could not be found. Return to SG Industry homepage."
        canonicalPath="/404"
        noIndex={true}
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FFF9F0]">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#33205B]/10 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#33205B] text-[#FFF9F0] flex items-center justify-center mx-auto shadow-lg">
            <span className="font-display font-extrabold text-3xl text-[#FF5B45]">404</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-[#33205B]">
              This piece isn't in our collection.
            </h1>
            <p className="text-sm text-[#33205B]/75 mt-3 leading-relaxed">
              The page may have moved or the link may be incorrect. Let's get you back on track with our workshop services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5B45] text-white font-bold text-sm hover:bg-[#ff452b] transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#33205B]/20 text-[#33205B] font-bold text-sm hover:bg-[#FFF9F0] transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
