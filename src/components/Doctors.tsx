import React from "react";
import { motion } from "motion/react";
import { DOCTORS, DEPARTMENTS } from "../data";
import { Doctor } from "../types";
import { Calendar, Award, Star, Stethoscope } from "lucide-react";

interface DoctorsProps {
  onBookDoctor: (departmentId: string, doctorId: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({
  onBookDoctor,
  activeFilter,
  setActiveFilter
}) => {
  // Dynamically filter doctors
  const filteredDoctors = activeFilter === "all" 
    ? DOCTORS 
    : DOCTORS.filter(doc => doc.departmentId === activeFilter);

  return (
    <section id="doctors" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-100/50 px-3 py-1 rounded-full">
            Our Medical Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Meet Our Highly Qualified Specialists
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            All our surgeons and consultants hold advanced degrees from prestigious global universities. Use the filters below to browse our team by clinical specialty.
          </p>
        </div>

        {/* Horizontal Scrollable Category Filter */}
        <div className="w-full mb-12 overflow-x-auto scrollbar-none pb-4">
          <div className="flex gap-2.5 min-w-max px-1">
            <button
              id="filter-all"
              onClick={() => setActiveFilter("all")}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                activeFilter === "all"
                  ? "bg-teal-600 border-teal-600 text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              All Specialties ({DOCTORS.length})
            </button>
            {DEPARTMENTS.map((dept) => {
              const docCount = DOCTORS.filter(d => d.departmentId === dept.id).length;
              return (
                <button
                  id={`filter-${dept.id}`}
                  key={dept.id}
                  onClick={() => setActiveFilter(dept.id)}
                  className={`cursor-pointer px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    activeFilter === dept.id
                      ? "bg-teal-600 border-teal-600 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {dept.name} ({docCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDoctors.map((doc, idx) => {
            const deptName = DEPARTMENTS.find(d => d.id === doc.departmentId)?.name || doc.departmentId;
            return (
              <motion.div
                id={`doc-card-${doc.id}`}
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-teal-500/20 transition-all flex flex-col overflow-hidden group"
              >
                {/* Image Section with Overlays */}
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Experience Ribbon */}
                  <span className="absolute top-4 left-4 bg-teal-600 text-white font-bold text-[10px] sm:text-xs uppercase px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Award size={12} />
                    {doc.experienceYears}+ Years Exp.
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-5 flex-grow flex flex-col text-left">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    {deptName}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {doc.name}
                  </h3>
                  <span className="block text-xs font-semibold text-slate-600 mt-0.5">
                    {doc.specialization}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1 italic">
                    {doc.qualification}
                  </span>

                  {doc.bio && (
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed line-clamp-2">
                      {doc.bio}
                    </p>
                  )}

                  {/* Booking CTA Button */}
                  <button
                    id={`doc-book-btn-${doc.id}`}
                    onClick={() => onBookDoctor(doc.departmentId, doc.id)}
                    className="cursor-pointer mt-5 w-full bg-teal-50 hover:bg-teal-600 hover:text-white border border-teal-100 hover:border-teal-600 text-teal-700 font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-2xs group-hover:shadow-xs"
                  >
                    <Calendar size={14} />
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State when no doctors match */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8 max-w-md mx-auto mt-6">
            <Stethoscope className="text-slate-300 mx-auto mb-4 animate-bounce" size={48} />
            <h3 className="text-base font-bold text-slate-800">No active doctors found</h3>
            <p className="text-xs text-slate-500 mt-1">
              We are currently onboarding specialists for this division. Please contact our front desk at +1-800-555-CARE for prompt assistance.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
