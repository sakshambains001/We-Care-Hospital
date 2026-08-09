import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEPARTMENTS, DOCTORS } from "../data";
import { Department, Doctor } from "../types";
import { LucideIcon } from "./LucideIcon";
import { X, Calendar, ArrowRight, UserCheck } from "lucide-react";

interface DepartmentsProps {
  onSelectDoctorAndBook: (departmentId: string, doctorId: string) => void;
  onFilterDoctorsByDept: (departmentId: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({
  onSelectDoctorAndBook,
  onFilterDoctorsByDept
}) => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const handleBookDoctor = (doc: Doctor) => {
    onSelectDoctorAndBook(doc.departmentId, doc.id);
    setSelectedDept(null);
  };

  const handleFilterViewAll = (deptId: string) => {
    onFilterDoctorsByDept(deptId);
    setSelectedDept(null);
  };

  return (
    <section id="departments" className="py-16 md:py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Specialized Medical Departments
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            We provide comprehensive treatments across a spectrum of advanced clinical disciplines. Click any department below to view details and meet our active doctors.
          </p>
        </div>

        {/* 12-Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.button
              id={`dept-card-${dept.id}`}
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col items-start text-left cursor-pointer group hover:border-teal-500/30"
            >
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl mb-4 group-hover:bg-teal-100/50 transition-colors">
                <LucideIcon name={dept.iconName} size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {dept.name}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                {dept.description}
              </p>
              <span className="mt-auto text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More & View Doctors <ArrowRight size={13} />
              </span>
            </motion.button>
          ))}
        </div>

        {/* Interactive Department Detail Modal */}
        <AnimatePresence>
          {selectedDept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDept(null)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto z-10 flex flex-col border border-slate-100"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 sticky top-0 bg-white/95 backdrop-blur-md z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                      <LucideIcon name={selectedDept.iconName} size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {selectedDept.name} Department
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                        We Care Medical Excellence
                      </span>
                    </div>
                  </div>
                  <button
                    id="dept-modal-close"
                    onClick={() => setSelectedDept(null)}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Clinical Scope & Focus
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {selectedDept.detailedDescription || selectedDept.description}
                    </p>
                  </div>

                  {/* Doctors List under this Department */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                        Department Specialists ({DOCTORS.filter(d => d.departmentId === selectedDept.id).length})
                      </h4>
                      <button
                        id="dept-modal-view-specialists"
                        onClick={() => handleFilterViewAll(selectedDept.id)}
                        className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 cursor-pointer self-start"
                      >
                        View in Doctors tab <ArrowRight size={12} />
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {DOCTORS.filter((doc) => doc.departmentId === selectedDept.id).map((doc) => (
                        <div
                          id={`dept-modal-doc-${doc.id}`}
                          key={doc.id}
                          className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all text-left"
                        >
                          <img
                            src={doc.imageUrl}
                            alt={doc.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-slate-100 flex-shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col justify-between">
                            <div>
                              <span className="block font-bold text-slate-900 text-sm sm:text-base">
                                {doc.name}
                              </span>
                              <span className="block text-xs font-semibold text-teal-600 mt-0.5">
                                {doc.specialization}
                              </span>
                              <span className="block text-[11px] text-slate-500 mt-0.5">
                                {doc.qualification} • {doc.experienceYears} Years Exp.
                              </span>
                            </div>
                            <button
                              id={`dept-modal-book-doc-${doc.id}`}
                              onClick={() => handleBookDoctor(doc)}
                              className="mt-3 cursor-pointer self-start inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition-colors"
                            >
                              <Calendar size={12} />
                              Book Consultation
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Have questions about {selectedDept.name}? Call our desk:{" "}
                    <span className="font-bold text-slate-700">+1-800-555-CARE</span>
                  </div>
                  <button
                    id="dept-modal-footer-close"
                    onClick={() => setSelectedDept(null)}
                    className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
