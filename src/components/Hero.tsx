import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Sparkles, CheckCircle } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-teal-50/20 to-white overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Rich Copywriting & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Elegant Subtitle Tagline */}
            <span className="inline-flex items-center gap-1.5 bg-teal-100/60 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 border border-teal-200/40">
              <Sparkles size={12} className="text-teal-600 animate-pulse" />
              Your Trusted Healthcare Partner
            </span>

            {/* Core H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
              Compassionate Care, <br />
              <span className="text-teal-600">Advanced Medicine.</span>
            </h1>

            {/* High-quality Body Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
              At We Care Hospital, we integrate clinical brilliance with human warmth to provide world-class medical treatments. Our expert specialists and modular facilities are dedicated to restoring your wellness and peace of mind 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-8 w-full sm:w-auto">
              <button
                id="hero-book-cta"
                onClick={() => onNavigate("booking")}
                className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Calendar size={18} />
                Book an Appointment
              </button>
              <button
                id="hero-depts-cta"
                onClick={() => onNavigate("departments")}
                className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold px-7 py-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                Explore Departments
                <ArrowRight size={16} className="text-slate-500" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-8 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-semibold">ISO 9001 Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-semibold">24/7 Rapid Response</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-semibold">Top Medical Experts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Healthcare Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative block behind image */}
              <div className="absolute inset-0 bg-teal-600 rounded-3xl rotate-3 scale-[0.98] opacity-10 -z-10" />
              
              {/* Main Medical Photo */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="We Care Hospital consultation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Quick Stats Card */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-3.5 max-w-xs"
              >
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl font-bold text-lg">
                  99%
                </div>
                <div>
                  <span className="block font-bold text-slate-900 text-sm">Patient Satisfaction</span>
                  <span className="block text-xs text-slate-500">Based on annual care surveys</span>
                </div>
              </motion.div>

              {/* Floating emergency assist card */}
              <div className="absolute -top-5 -right-5 bg-white p-3.5 rounded-2xl shadow-md border border-slate-50 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-xs font-bold text-slate-800">ACLS Ambulances Active</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
