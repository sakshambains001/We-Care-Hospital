import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { ContactFormData } from "../types";

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Provide a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000); // Auto close success state after 5s
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-100/50 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            We Are Here To Assist You
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            Have general inquiries, career questions, or feedback? Drop us a line or visit our campus. For emergencies, please call our 24/7 hotline directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Quick details + Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Address card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/85 text-left flex gap-3">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg h-fit flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Our Address</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    100 Healthcare Blvd, <br />
                    Suite 400, New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/85 text-left flex gap-3">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg h-fit flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Phone Line</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    General: +1 (555) 019-2834 <br />
                    Emergency: +1-800-555-CARE
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/85 text-left flex gap-3">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg h-fit flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Email Address</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    info@wecarehospital.com <br />
                    support@wecarehospital.com
                  </p>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/85 text-left flex gap-3">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg h-fit flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Visiting Hours</span>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Outpatients: 8:00 AM - 8:00 PM <br />
                    Inpatients: 24 Hours Open
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xs h-72 relative">
              <iframe
                title="We Care Hospital Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617352726354!2d-73.98685368459392!3d40.74844047932828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1661129841283!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Block - Short Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 text-left mb-6">
              Send a General Message
            </h3>

            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  id="contact-form"
                  onSubmit={handleSend}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 text-left"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                          errors.name ? "border-rose-400" : "border-slate-100"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${
                          errors.email ? "border-rose-400" : "border-slate-100"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700">
                      Write your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ask us anything. We will respond within 12 working hours..."
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none ${
                        errors.message ? "border-rose-400" : "border-slate-100"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 font-medium">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="cursor-pointer w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-4 bg-teal-50 text-teal-600 rounded-full animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you for contacting We Care Hospital. A clinical representative has received your ticket and will email you shortly.
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setIsSent(false)}
                    className="px-5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
