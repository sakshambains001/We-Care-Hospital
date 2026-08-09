import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Clock, Menu, X, HeartPulse } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Departments", id: "departments" },
    { label: "Doctors", id: "doctors" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Health Tips", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Banner Bar for Emergency and Quick Info */}
      <div className="w-full bg-slate-900 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-teal-400" />
              info@wecarehospital.com
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock size={13} className="text-teal-400" />
              24/7 Outpatients & Inpatients
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold bg-rose-600/25 text-rose-300 border border-rose-500/30 px-2.5 py-0.5 rounded-full animate-pulse">
              <Phone size={13} className="text-rose-400" />
              24/7 Emergency: +1-800-555-CARE
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo and Hospital Name */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-left cursor-pointer group"
        >
          <div className="p-2 bg-teal-500 text-white rounded-lg group-hover:bg-teal-600 transition-colors">
            <HeartPulse size={24} />
          </div>
          <div>
            <span className="block text-xl font-extrabold text-slate-900 tracking-tight">
              We Care
            </span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-teal-600 -mt-1">
              Hospital & Research Center
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-teal-600 cursor-pointer ${
                activeSection === item.id
                  ? "text-teal-600 font-semibold"
                  : "text-slate-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Book Appointment Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-cta-booking"
            onClick={() => handleNavClick("booking")}
            className="cursor-pointer bg-teal-600 text-white hover:bg-teal-700 font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="nav-mobile-cta"
            onClick={() => handleNavClick("booking")}
            className="cursor-pointer bg-teal-600 text-white hover:bg-teal-700 font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-all"
          >
            Book Now
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar / Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[112px] bg-slate-900/40 backdrop-blur-xs z-40"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed right-0 top-[112px] bottom-0 w-72 bg-white shadow-xl border-l border-slate-100 z-50 p-6 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Navigation Menu
                </span>
                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      id={`nav-mobile-link-${item.id}`}
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors hover:bg-slate-50 ${
                        activeSection === item.id
                          ? "text-teal-600 bg-teal-50/50 font-bold"
                          : "text-slate-700 hover:text-teal-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-6 flex flex-col gap-4">
                <button
                  id="nav-mobile-booking-drawer"
                  onClick={() => handleNavClick("booking")}
                  className="w-full text-center bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 shadow-sm transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
                <div className="text-center text-xs text-slate-500">
                  <span className="block font-medium">Emergency Line</span>
                  <a
                    href="tel:+18005552273"
                    className="text-rose-600 font-bold hover:underline"
                  >
                    +1-800-555-CARE
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
