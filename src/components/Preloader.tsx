import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show preloader on first session visit or fresh load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#33205B] text-[#FFF9F0] px-4"
          role="status"
          aria-label="Loading SG Industry website"
        >
          {/* Logo Showcase */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <div className="bg-white/95 rounded-2xl p-4 shadow-2xl inline-block border border-white/20">
              <img
                src="/images/logo.png"
                alt="SG Industry"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Precision Laser Line Animation */}
          <div className="w-64 sm:w-80 relative">
            {/* Track */}
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF5B45] via-[#00BFA6] to-[#FFC928]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Glowing Laser Spark Head */}
            <motion.div
              className="absolute -top-1 w-3.5 h-3.5 rounded-full bg-[#FF5B45] shadow-[0_0_12px_#FF5B45]"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
          </div>

          {/* Progress & Tagline */}
          <div className="mt-4 flex items-center justify-between w-64 sm:w-80 text-xs font-['Space_Grotesk'] text-[#FFF9F0]/70">
            <span className="uppercase tracking-widest text-[10px] text-[#00BFA6] font-bold">
              Calibrating Precision
            </span>
            <span className="font-extrabold text-[#FFC928]">{progress}%</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xs text-white/50 tracking-widest uppercase font-semibold"
          >
            Metal, shaped into art.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
