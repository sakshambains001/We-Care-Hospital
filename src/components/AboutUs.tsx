import React from "react";
import { motion } from "motion/react";
import { Award, Users, Smile, Clock, HeartPulse } from "lucide-react";

export const AboutUs: React.FC = () => {
  const stats = [
    {
      id: "stat-years",
      icon: <Award className="text-teal-600" size={32} />,
      number: "25+",
      label: "Years of Excellence",
      description: "Providing world-class medical treatments since 2001."
    },
    {
      id: "stat-doctors",
      icon: <Users className="text-teal-600" size={32} />,
      number: "50+",
      label: "Expert Doctors",
      description: "Highly qualified in-house specialists and surgeons."
    },
    {
      id: "stat-patients",
      icon: <Smile className="text-teal-600" size={32} />,
      number: "10,000+",
      label: "Happy Patients",
      description: "Restored to health and reunited with their families."
    },
    {
      id: "stat-emergency",
      icon: <Clock className="text-teal-600" size={32} />,
      number: "24/7",
      label: "Emergency Care",
      description: "Immediate life-saving treatments always available."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Legacy of Trust and Healing
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            For over two decades, We Care Hospital has been a sanctuary of healing. We combine groundbreaking diagnostics with unmatched human compassion to redefine clinical standards.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Mission, Vision, and History */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col gap-8 text-left"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HeartPulse className="text-teal-600" size={20} /> Our History
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Established in 2001, We Care Hospital began as a 50-bed pediatric clinic. Today, we are a multi-specialty tertiary care healthcare institution boasting 350+ inpatient beds, 12 cutting-edge operational theatres, and dedicated research wings. Our unwavering standard remains: prioritizing the patient's biological, spiritual, and emotional recovery above all else.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
                <span className="block font-bold text-teal-700 text-base mb-2">Our Mission</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide accessible, affordable, and high-quality clinical care using evidence-based medical sciences and continuous innovation.
                </p>
              </div>
              <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
                <span className="block font-bold text-teal-700 text-base mb-2">Our Vision</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the region's premier healthcare provider, recognized for academic research, technological leadership, and exceptional patient satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Highlights Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6 w-full"
          >
            {stats.map((stat) => (
              <div
                id={stat.id}
                key={stat.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col items-start text-left group hover:border-teal-500/30"
              >
                <div className="p-3 bg-teal-50 rounded-xl mb-4 group-hover:bg-teal-100/55 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-sm font-bold text-teal-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
