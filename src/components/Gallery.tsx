import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "../data/gallery";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer font-tech ${
              selectedCategory === cat
                ? "bg-[#33205B] text-[#FFF9F0] shadow-md scale-105"
                : "bg-white text-[#33205B]/80 hover:bg-[#33205B]/10 hover:text-[#33205B] border border-[#33205B]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid — Full Width Uncropped Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {filteredItems.map((item, idx) => {
          const isLoaded = loadedImages[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#33205B]/10 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Skeleton Loader */}
              <div className="relative w-full bg-[#FFF9F0] p-3 overflow-hidden flex items-center justify-center min-h-[260px]">
                {!isLoaded && (
                  <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center text-xs font-bold text-[#33205B]/40 font-tech">
                    Loading Fabricated Component...
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.alt}
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full h-auto max-h-[380px] object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#33205B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#33205B] font-bold text-xs shadow-xl font-tech">
                    <Eye className="w-4 h-4 text-[#FF5B45]" />
                    <span>View Full Uncropped Image</span>
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 bg-white border-t border-[#33205B]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#FF5B45] uppercase tracking-wider mb-2 font-tech">
                    <span>{item.category}</span>
                    <span className="text-[#33205B]/60 font-semibold">{item.tag}</span>
                  </div>
                  <h4 className="font-bold text-lg text-[#33205B] font-display group-hover:text-[#FF5B45] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#33205B]/75 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal — Maximum Resolution Uncropped Viewer */}
      {lightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#33205B]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-10"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
              );
            }}
            className="absolute left-3 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
              );
            }}
            className="absolute right-3 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Uncropped Full-Width Image & Caption Box */}
          <div
            className="max-w-5xl max-h-[92vh] w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-grow min-h-[350px] max-h-[72vh] bg-[#FFF9F0] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-md"
              />
            </div>

            <div className="p-6 bg-white border-t border-[#33205B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF5B45] uppercase tracking-wider font-tech">
                  {activeItem.category} · {activeItem.tag}
                </span>
                <h3 className="text-xl font-bold text-[#33205B] font-display">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#33205B]/75 mt-0.5">{activeItem.description}</p>
              </div>
              <a
                href="/#contact"
                onClick={() => setLightboxIndex(null)}
                className="shrink-0 px-6 py-3 rounded-full bg-[#FF5B45] text-white text-xs font-bold hover:bg-[#ff452b] text-center font-tech shadow-md"
              >
                Inquire for Similar Fabrication
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
