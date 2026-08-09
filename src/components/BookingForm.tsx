import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEPARTMENTS, DOCTORS } from "../data";
import { BookingFormData } from "../types";
import { Calendar, Phone, Mail, User, Clock, FileText, CheckCircle2, Ticket, X, MapPin } from "lucide-react";

interface BookingFormProps {
  preselectedDeptId?: string;
  preselectedDocId?: string;
  clearPreselection?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedDeptId = "",
  preselectedDocId = "",
  clearPreselection
}) => {
  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    email: "",
    departmentId: "",
    doctorId: "",
    date: "",
    time: "",
    message: ""
  });

  // Client-side validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<{
    id: string;
    doctorName: string;
    departmentName: string;
  } | null>(null);

  // Available timeslots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  // Sync pre-selected inputs from outer clicks (e.g. doctor card)
  useEffect(() => {
    if (preselectedDeptId) {
      setFormData(prev => ({
        ...prev,
        departmentId: preselectedDeptId,
        doctorId: preselectedDocId // Pre-fill doctor too
      }));
    }
  }, [preselectedDeptId, preselectedDocId]);

  // Handle department change - reset doctor selection to prevent invalid state
  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const deptId = e.target.value;
    setFormData(prev => ({
      ...prev,
      departmentId: deptId,
      doctorId: "" // Reset doctor
    }));
    if (errors.departmentId) {
      setErrors(prev => ({ ...prev, departmentId: "" }));
    }
  };

  // Filter doctors based on selected department
  const filteredDoctors = formData.departmentId
    ? DOCTORS.filter((doc) => doc.departmentId === formData.departmentId)
    : [];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error inline
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Provide a valid phone number (e.g., 10 digits).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Provide a valid email address.";
    }

    if (!formData.departmentId) {
      newErrors.departmentId = "Please select a department.";
    }

    if (!formData.doctorId) {
      newErrors.doctorId = "Please select an available doctor.";
    }

    if (!formData.date) {
      newErrors.date = "Preferred appointment date is required.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Appointment date cannot be in the past.";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please choose a preferred time slot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const matchedDoc = DOCTORS.find(d => d.id === formData.doctorId);
      const matchedDept = DEPARTMENTS.find(d => d.id === formData.departmentId);
      
      const referenceId = `WCH-${Math.floor(100000 + Math.random() * 900000)}`;
      
      setGeneratedTicket({
        id: referenceId,
        doctorName: matchedDoc?.name || "Senior Consultant",
        departmentName: matchedDept?.name || "Outpatient Department"
      });
      setIsSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      departmentId: "",
      doctorId: "",
      date: "",
      time: "",
      message: ""
    });
    setGeneratedTicket(null);
    if (clearPreselection) {
      clearPreselection();
    }
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white border-b border-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Appointments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Schedule a Personal Consultation
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            Fill out the request form below with your diagnostic details. Our reservation desk will verify clinician availability and send you a final approval.
          </p>
        </div>

        {/* Dynamic Booking Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Informative instructions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Important Instructions for your Visit
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We Care Hospital operates under high-fidelity diagnostic safety regulations. To ensure your appointment goes smoothly, please remember to:
            </p>

            <div className="space-y-4 w-full">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-teal-600 bg-teal-50 p-2.5 rounded-lg h-fit">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Arrive 15 Minutes Early</span>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">Allows our reception desk to complete diagnostic registrations and record baseline vitals.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-teal-600 bg-teal-50 p-2.5 rounded-lg h-fit">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Bring Previous Records</span>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">Carry past prescriptions, medical scans, laboratory reports, and active insurance details.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-teal-600 bg-teal-50 p-2.5 rounded-lg h-fit">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Cancellation Policy</span>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">If you need to reschedule or cancel, please provide a notification at least 12 hours in advance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Booking Form */}
          <div className="lg:col-span-7">
            <form
              id="appointment-booking-form"
              onSubmit={handleSubmit}
              className="bg-slate-50/60 p-6 sm:p-10 rounded-3xl border border-slate-100/80 space-y-6 text-left"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User size={13} className="text-teal-600" />
                    Patient's Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Amanda Sterling"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                      errors.fullName ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.fullName}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone size={13} className="text-teal-600" />
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 555-019-2834"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                      errors.phone ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.phone}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail size={13} className="text-teal-600" />
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. amanda@domain.com"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                      errors.email ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.email}</span>
                  )}
                </div>

                {/* Select Department */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="departmentId" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock size={13} className="text-teal-600" />
                    Select Department <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="departmentId"
                    name="departmentId"
                    value={formData.departmentId}
                    onChange={handleDeptChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none cursor-pointer ${
                      errors.departmentId ? "border-rose-400" : "border-slate-200"
                    }`}
                  >
                    <option value="">-- Choose Specialization --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  {errors.departmentId && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.departmentId}</span>
                  )}
                </div>

                {/* Select Doctor (Dynamically Filtered) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="doctorId" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User size={13} className="text-teal-600" />
                    Select Specialist <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="doctorId"
                    name="doctorId"
                    value={formData.doctorId}
                    disabled={!formData.departmentId}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all cursor-pointer ${
                      !formData.departmentId ? "opacity-60 bg-slate-50 cursor-not-allowed" : ""
                    } ${errors.doctorId ? "border-rose-400" : "border-slate-200"}`}
                  >
                    <option value="">
                      {!formData.departmentId 
                        ? "Choose department first" 
                        : "-- Select Specialist Doctor --"}
                    </option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.specialization})
                      </option>
                    ))}
                  </select>
                  {errors.doctorId && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.doctorId}</span>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar size={13} className="text-teal-600" />
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                      errors.date ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                  {errors.date && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.date}</span>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="time" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock size={13} className="text-teal-600" />
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all cursor-pointer ${
                      errors.time ? "border-rose-400" : "border-slate-200"
                    }`}
                  >
                    <option value="">-- Choose Timeslot --</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <span className="text-[11px] text-rose-500 font-medium">{errors.time}</span>
                  )}
                </div>

              </div>

              {/* Message / Reason for Visit */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <FileText size={13} className="text-teal-600" />
                  Reason for Visit / Symptoms (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your symptoms, past diagnosis, or any specific requests..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                id="booking-submit-btn"
                type="submit"
                className="cursor-pointer w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book Appointment
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Booking Confirmation Receipt Modal (Simulated) */}
      <AnimatePresence>
        {isSubmitted && generatedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Simulated Receipt Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 z-10"
            >
              {/* Header Badge */}
              <div className="bg-teal-600 p-6 text-white text-center flex flex-col items-center">
                <CheckCircle2 size={44} className="text-white mb-2" />
                <h3 className="text-lg font-bold">Appointment Confirmed!</h3>
                <p className="text-teal-100 text-xs mt-0.5">We Care Hospital Scheduler</p>
              </div>

              {/* Receipt Ticket Pattern */}
              <div className="p-6 sm:p-8 space-y-6 bg-white relative">
                {/* Simulated Ticket reference */}
                <div className="bg-slate-50 border border-dashed border-slate-200 p-4 rounded-2xl flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Ticket size={12} className="text-teal-600" />
                    Appointment Reference
                  </span>
                  <span className="text-xl font-extrabold text-slate-900 tracking-wider">
                    {generatedTicket.id}
                  </span>
                </div>

                {/* Specific Patient & Care Details */}
                <div className="space-y-4 text-left border-b border-slate-100 pb-4">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-xs text-slate-400 font-semibold">Patient:</span>
                    <span className="text-xs text-slate-800 font-bold col-span-2">{formData.fullName}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-xs text-slate-400 font-semibold">Department:</span>
                    <span className="text-xs text-slate-800 font-bold col-span-2">{generatedTicket.departmentName}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-xs text-slate-400 font-semibold">Specialist:</span>
                    <span className="text-xs text-slate-800 font-bold col-span-2">{generatedTicket.doctorName}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-xs text-slate-400 font-semibold">Schedule:</span>
                    <span className="text-xs text-slate-800 font-bold col-span-2">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                </div>

                {/* Location details */}
                <div className="flex items-start gap-2.5 text-xs text-slate-500 text-left">
                  <MapPin size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 block">Where to report:</span>
                    We Care Hospital Lobby, 1st Floor, Admission & Desk Section, Main Campus.
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-xl text-[11px] text-amber-800 text-left leading-relaxed">
                  <strong>Notice:</strong> Please carry your national identity card and any past prescription notes. If you suffer from allergies or are on ongoing medication, highlight this at the desk.
                </div>

                {/* Close Button */}
                <button
                  id="booking-receipt-close"
                  onClick={handleCloseModal}
                  className="cursor-pointer w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-sm transition-all text-center block shadow-sm"
                >
                  Return to Portal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
