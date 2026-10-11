import React from "react";

export const ImageSkeleton: React.FC<{ className?: string }> = ({
  className = "w-full h-64",
}) => {
  return (
    <div
      className={`skeleton-shimmer rounded-3xl flex flex-col items-center justify-center text-[#33205B]/40 border border-[#33205B]/10 overflow-hidden ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#33205B]/10 flex items-center justify-center mb-2 animate-pulse">
        <span className="text-xs">⚡</span>
      </div>
      <span className="text-xs font-bold tracking-wider uppercase font-['Space_Grotesk'] text-[#33205B]/60">
        Loading SG Industry Asset...
      </span>
    </div>
  );
};

export const FullWidthImageSkeleton: React.FC<{ className?: string }> = ({
  className = "w-full h-96 sm:h-[480px]",
}) => {
  return (
    <div
      className={`skeleton-shimmer rounded-3xl w-full border-2 border-[#33205B]/10 flex flex-col items-center justify-center text-[#33205B]/40 ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#33205B]/15 flex items-center justify-center mb-3">
        <span className="text-xl">✨</span>
      </div>
      <span className="text-sm font-bold tracking-wider uppercase font-['Space_Grotesk'] text-[#33205B]/70">
        High-Resolution Fabrication Visual Loading...
      </span>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#33205B]/10 space-y-4">
      <div className="w-14 h-14 skeleton-shimmer rounded-2xl"></div>
      <div className="h-7 skeleton-shimmer rounded-lg w-3/4"></div>
      <div className="h-4 skeleton-shimmer rounded-md w-full"></div>
      <div className="h-4 skeleton-shimmer rounded-md w-4/5"></div>
      <div className="h-56 skeleton-shimmer rounded-2xl w-full mt-4"></div>
    </div>
  );
};

export const ProprietorSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#33205B]/10 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-5 h-96 skeleton-shimmer rounded-2xl"></div>
      <div className="md:col-span-7 space-y-4">
        <div className="h-6 skeleton-shimmer rounded-md w-1/3"></div>
        <div className="h-10 skeleton-shimmer rounded-lg w-3/4"></div>
        <div className="h-4 skeleton-shimmer rounded-md w-full"></div>
        <div className="h-4 skeleton-shimmer rounded-md w-5/6"></div>
        <div className="h-48 skeleton-shimmer rounded-2xl w-full mt-6"></div>
      </div>
    </div>
  );
};
