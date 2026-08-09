import React from "react";
import { HeartPulse, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { DEPARTMENTS } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Departments", id: "departments" },
    { label: "Doctors", id: "doctors" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Health Tips", id: "blog" },
    { label: "Contact Us", id: "contact" }
  ];

  // Pick first 6 departments for footer link density
  const footerDepts = DEPARTMENTS.slice(0, 6);

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Column 1: Brand & Contact Info (Weight: 4) */}
        <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
          <button
            id="footer-logo"
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-left cursor-pointer group"
          >
            <div className="p-2 bg-teal-500 text-white rounded-lg group-hover:bg-teal-600 transition-colors">
              <HeartPulse size={22} />
            </div>
            <div>
              <span className="block text-lg font-extrabold text-white tracking-tight">
                We Care
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-400 -mt-1">
                Hospital & Research Center
              </span>
            </div>
          </button>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Integrating premier medical capabilities with unconditional human empathy, We Care Hospital is committed to providing outstanding, evidence-based therapies and continuous diagnostics to restore you to peak health.
          </p>

          <div className="space-y-3.5 text-xs">
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin size={14} className="text-teal-400 flex-shrink-0" />
              100 Healthcare Blvd, Suite 400, New York
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Phone size={14} className="text-teal-400 flex-shrink-0" />
              Emergency hotline: +1-800-555-CARE
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Mail size={14} className="text-teal-400 flex-shrink-0" />
              info@wecarehospital.com
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links (Weight: 2) */}
        <div className="lg:col-span-2 flex flex-col items-start text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-2 w-full">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-nav-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className="cursor-pointer hover:text-teal-400 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Department Deep Links (Weight: 3) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-2 w-full">
            Specialties
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {footerDepts.map((dept) => (
              <li key={dept.id}>
                <button
                  id={`footer-dept-${dept.id}`}
                  onClick={() => onNavigate("departments")}
                  className="cursor-pointer hover:text-teal-400 transition-colors"
                >
                  {dept.name} Division
                </button>
              </li>
            ))}
            <li>
              <button
                id="footer-dept-all"
                onClick={() => onNavigate("departments")}
                className="cursor-pointer text-teal-400 font-bold hover:underline"
              >
                View all departments →
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Urgent Emergency & Socials (Weight: 3) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left space-y-6">
          <div className="space-y-3 w-full">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-2 w-full">
              Emergency Services
            </h4>
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-800/80 text-left">
              <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider block mb-1">
                24/7 Trauma Hotline
              </span>
              <a
                href="tel:+18005552273"
                className="text-base sm:text-lg font-extrabold text-rose-400 hover:underline block"
              >
                +1-800-555-CARE
              </a>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                ACLS cardiac ambulances dispatched instantly upon phone clearance.
              </p>
            </div>
          </div>

          <div className="space-y-3 w-full">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Follow Our Insights
            </h4>
            {/* Social Icons row */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-teal-600 transition-all rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-teal-600 transition-all rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-teal-600 transition-all rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-teal-600 transition-all rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <span>© 2026 We Care Hospital. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#sitemap" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
