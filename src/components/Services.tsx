import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Check } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Our Care Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Comprehensive Medical Facilities & Services
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            From critical care intervention to preventative immunizations, We Care Hospital is fully engineered to support you at every phase of your recovery.
          </p>
        </div>

        {/* 10-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              id={`service-card-${srv.id}`}
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-teal-500/20 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-100/50 transition-colors flex-shrink-0">
                    <LucideIcon name={srv.iconName} size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                    {srv.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Bulleted Sub-Details */}
                {srv.details && srv.details.length > 0 && (
                  <ul className="space-y-2 border-t border-slate-100 pt-4 mb-2">
                    {srv.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
