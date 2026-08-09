import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Features } from "./components/Features";
import { Departments } from "./components/Departments";
import { Doctors } from "./components/Doctors";
import { Services } from "./components/Services";
import { BookingForm } from "./components/BookingForm";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  // States to pass preselected department/doctor down to BookingForm
  const [preselectedDeptId, setPreselectedDeptId] = useState("");
  const [preselectedDocId, setPreselectedDocId] = useState("");

  // Dedicated filter state for Doctors section (e.g. set from Department click)
  const [doctorActiveFilter, setDoctorActiveFilter] = useState("all");

  // Handle dynamic section scrolling on link clicks
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Offset by header height (80px + emergency banner 32px ~ 112px)
      const offset = 112;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update active state manually to prevent latency lag
      setActiveSection(sectionId);
    }
  };

  // Triggered when user selects "Book Consultation" from a specific doctor
  const handleSelectDoctorAndBook = (departmentId: string, doctorId: string) => {
    setPreselectedDeptId(departmentId);
    setPreselectedDocId(doctorId);
    
    // Smooth scroll down to booking block
    setTimeout(() => {
      handleNavigate("booking");
    }, 100);
  };

  // Triggered when user wants to filter doctor view specifically from Department overview
  const handleFilterDoctorsByDept = (departmentId: string) => {
    setDoctorActiveFilter(departmentId);
    
    // Smooth scroll down to doctors list
    setTimeout(() => {
      handleNavigate("doctors");
    }, 100);
  };

  // Reset booking inputs once loaded/confirmed
  const clearPreselection = () => {
    setPreselectedDeptId("");
    setPreselectedDocId("");
  };

  // Intersection Observer scroll spy to auto-highlight Nav as user scrolls
  useEffect(() => {
    const sections = ["home", "about", "departments", "doctors", "services", "gallery", "blog", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // Focus viewport crosshair on the center
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Dynamic Navigation Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Us Section */}
        <AboutUs />

        {/* Why Choose Us / Strengths Section */}
        <Features />

        {/* Departments Grid */}
        <Departments 
          onSelectDoctorAndBook={handleSelectDoctorAndBook}
          onFilterDoctorsByDept={handleFilterDoctorsByDept}
        />

        {/* Specialist Doctors Grid with dynamic Filtering */}
        <Doctors 
          onBookDoctor={handleSelectDoctorAndBook}
          activeFilter={doctorActiveFilter}
          setActiveFilter={setDoctorActiveFilter}
        />

        {/* Medical Services Offered */}
        <Services />

        {/* Integrated Appointment Booking Form */}
        <BookingForm 
          preselectedDeptId={preselectedDeptId}
          preselectedDocId={preselectedDocId}
          clearPreselection={clearPreselection}
        />

        {/* Patient Testimonials Grid */}
        <Testimonials />

        {/* Hospital Facilities Photo Gallery */}
        <Gallery />

        {/* Health tips articles preview */}
        <Blog />

        {/* Contact info, Map, & Direct Messaging */}
        <ContactUs />
      </main>

      {/* Hospital Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
