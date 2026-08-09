import React from "react";
import { motion } from "motion/react";
import { Stethoscope, Activity, Clock, CircleDollarSign, HeartHandshake, ClipboardList } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      id: "feat-docs",
      icon: <Stethoscope className="text-teal-600" size={26} />,
      title: "Experienced Doctors",
      description: "Our staff comprises board-certified specialists, researchers, and surgeons with decades of global clinical expertise."
    },
    {
      id: "feat-equipment",
      icon: <Activity className="text-teal-600" size={26} />,
      title: "Modern Equipment",
      description: "We invest in the latest medical machinery, including modular robotic theatres and 128-slice CT scan suites."
    },
    {
      id: "feat-emergency",
      icon: <Clock className="text-teal-600" size={26} />,
      title: "24/7 Emergency",
      description: "Our rapid-response trauma teams are fully staffed with critical care physicians on stand-by day and night."
    },
    {
      id: "feat-affordable",
      icon: <CircleDollarSign className="text-teal-600" size={26} />,
      title: "Affordable Care",
      description: "We provide tier-1 treatment options with transparent pricing, cashless insurance policies, and flexible packages."
    },
    {
      id: "feat-patient",
      icon: <HeartHandshake className="text-teal-600" size={26} />,
      title: "Patient-Centered",
      description: "We tailor recovery routines around each patient's individual biology, nutrition, and home-care requirements."
    },
    {
      id: "feat-diagnostics",
      icon: <ClipboardList className="text-teal-600" size={26} />,
      title: "Advanced Diagnostics",
      description: "We maintain highly automated, in-house NABL laboratories for accurate blood reports and digital scans."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-100/50 px-3 py-1 rounded-full">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Patients Choose We Care Hospital
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            We hold ourselves to a higher benchmark of safety, precision, and service to ensure you receive nothing but premium medical attention.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              id={feature.id}
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col items-start text-left group hover:-translate-y-1 hover:border-teal-500/20"
            >
              <div className="p-3.5 bg-teal-50 rounded-xl mb-6 group-hover:bg-teal-100/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
