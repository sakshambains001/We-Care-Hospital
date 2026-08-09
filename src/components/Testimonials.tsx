import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Patient Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Loved and Trusted by Our Patients
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            Nothing makes us prouder than seeing our patients return to full, active lives with their families. Read their genuine recovery experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              id={`testi-card-${test.id}`}
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-100/80 flex flex-col justify-between text-left relative group hover:border-teal-500/10 hover:bg-white hover:shadow-md transition-all"
            >
              {/* Decorative top quote icon */}
              <div className="text-teal-500/10 absolute top-4 right-4 group-hover:text-teal-500/20 transition-colors">
                <Quote size={40} strokeWidth={4} />
              </div>

              <div>
                {/* Stars Rating Row */}
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={15}
                      fill={sIdx < test.rating ? "currentColor" : "none"}
                      strokeWidth={2}
                    />
                  ))}
                </div>

                {/* Direct Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Patient Profile */}
              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-4 mt-auto">
                <img
                  src={test.imageUrl}
                  alt={test.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover bg-slate-100 border border-slate-200 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="block font-bold text-slate-800 text-xs sm:text-sm">
                    {test.name}
                  </span>
                  {test.role && (
                    <span className="block text-[11px] font-semibold text-teal-600">
                      {test.role}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
