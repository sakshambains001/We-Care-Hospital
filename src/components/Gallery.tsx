import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FACILITIES } from "../data";
import { Facility } from "../types";
import { X, Eye, EyeOff, LayoutGrid } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<Facility | null>(null);

  // Dynamic Categories list
  const categories = ["all", "Lobby & Admission", "Surgical Suite", "Critical Care", "Patient Wards", "Diagnostics", "Emergency Transit"];

  const filteredFacilities = activeCategory === "all"
    ? FACILITIES
    : FACILITIES.filter(fac => fac.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-100/50 px-3 py-1 rounded-full">
            Our Campus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Advanced Clinical Infrastructure & Facilities
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Take a virtual tour of our sanitized wards, modular surgery suites, and comforting waiting areas designed around modern ergonomic criteria.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="w-full mb-10 overflow-x-auto scrollbar-none pb-2">
          <div className="flex justify-start md:justify-center gap-2 min-w-max px-1">
            {categories.map((cat) => (
              <button
                id={`gal-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4.5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? "bg-teal-600 border-teal-600 text-white shadow-xs"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cat === "all" ? "All Facilities" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((fac, idx) => (
              <motion.button
                id={`fac-card-${fac.id}`}
                key={fac.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxImage(fac)}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-xs hover:shadow-md transition-all text-left cursor-pointer focus:outline-hidden"
              >
                {/* Photo */}
                <div className="aspect-4/3 w-full overflow-hidden relative">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Backdrop Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white shadow">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>

                {/* Info Bar */}
                <div className="p-5 bg-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    {fac.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                    {fac.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
              {/* Backdrop Click */}
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxImage(null)} />

              {/* Lightbox Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
              >
                {/* Close Button */}
                <button
                  id="lightbox-close"
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer bg-white/10 hover:bg-white/25 rounded-full"
                >
                  <X size={24} />
                </button>

                {/* High-def Image rendering */}
                <div className="relative overflow-hidden rounded-2xl max-h-[70vh] bg-black shadow-2xl">
                  <img
                    src={lightboxImage.imageUrl}
                    alt={lightboxImage.title}
                    className="w-full h-full max-h-[70vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Captions bar below */}
                <div className="text-center mt-4 text-white space-y-1">
                  <span className="text-xs uppercase font-semibold text-teal-400 tracking-wider">
                    {lightboxImage.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold">{lightboxImage.title}</h4>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
