import { Department, Doctor, Service, Testimonial, Facility, Article } from "./types";

export const DEPARTMENTS: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    iconName: "Heart",
    description: "Comprehensive heart care including diagnostic tests, non-invasive procedures, and complex cardiological surgeries.",
    detailedDescription: "Our Cardiology department is equipped with state-of-the-art diagnostic tools such as 3D Echocardiography, Cardiac MRI, and an advanced Cath Lab. We specialize in managing coronary artery disease, heart failure, arrhythmias, and congenital heart defects with a focus on both preventive care and interventional success."
  },
  {
    id: "neurology",
    name: "Neurology",
    iconName: "Brain",
    description: "Expert diagnosis and treatment of brain, spinal cord, nerve, and neuromuscular disorders.",
    detailedDescription: "Led by internationally trained neurologists, we provide comprehensive management for stroke, epilepsy, Parkinson's disease, Alzheimer's, multiple sclerosis, and chronic migraines. Our department features advanced neuroimaging, EEG, and sleep labs for highly precise assessments."
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    iconName: "Bone",
    description: "Specialized care for bones, joints, ligaments, tendons, and muscles, including joint replacements and trauma recovery.",
    detailedDescription: "Our Orthopedics department is a center of excellence for total hip and knee replacements, spine surgery, sports medicine, and complex fracture management. We utilize minimally invasive arthroscopic techniques to accelerate patient recovery and restore mobility."
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    iconName: "Baby",
    description: "Compassionate, child-friendly medical care for infants, children, and adolescents.",
    detailedDescription: "From routine vaccinations and developmental milestones tracking to critical pediatric ICU care, our pediatricians provide a warm, nurturing environment. We focus on physical, emotional, and social development of children, supported by a specialized emergency wing."
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    iconName: "Activity",
    description: "Complete women's healthcare, comprehensive maternity services, and advanced laparoscopic surgeries.",
    detailedDescription: "We offer end-to-end maternity care including high-risk pregnancy management, pre-natal classes, and state-of-the-art labor suites. Additionally, our gynecologists specialize in adolescent health, menopausal management, and minimally invasive robotic surgeries."
  },
  {
    id: "dermatology",
    name: "Dermatology",
    iconName: "Sparkles",
    description: "Treatment for skin, hair, and nail disorders, along with advanced aesthetic and cosmetic treatments.",
    detailedDescription: "Our dermatologists handle acute and chronic skin disorders, including eczema, psoriasis, acne, and skin cancers. We also host a modern laser and aesthetics clinic offering safe, evidence-based treatments for skin rejuvenation and scar management."
  },
  {
    id: "ent",
    name: "ENT (Ear, Nose, Throat)",
    iconName: "Ear",
    description: "Advanced diagnostics and treatment for ear, nose, throat, and head & neck disorders.",
    detailedDescription: "We offer comprehensive services ranging from hearing assessments and sinus treatments to complex surgeries like cochlear implants, thyroidectomies, and tonsillectomies. Our advanced endoscopy suites ensure accurate diagnosis."
  },
  {
    id: "general_surgery",
    name: "General Surgery",
    iconName: "Scissors",
    description: "Minimally invasive laparoscopic and open surgical interventions for a wide range of medical conditions.",
    detailedDescription: "Our surgical team is adept in standard and complex laparoscopic procedures (keyhole surgeries) for hernias, gallstones, appendicitis, and gastrointestinal issues. We prioritize safety, minimal scarring, and prompt postoperative recovery."
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    iconName: "ShieldAlert",
    description: "Advanced diagnostic imaging including high-field MRI, multi-slice CT scans, Ultrasound, and X-Rays.",
    detailedDescription: "Operating 24/7, our radiology suite is fitted with digital X-Ray systems, high-resolution ultrasound machines, 128-slice CT scanners, and 3T MRI systems. We provide precise and timely diagnostic reports to support critical healthcare decisions."
  },
  {
    id: "dental",
    name: "Dental Care",
    iconName: "Smile",
    description: "Comprehensive oral healthcare, root canals, orthodontics, implants, and cosmetic dentistry.",
    detailedDescription: "Our dental unit provides modern solutions for all oral health needs, including pain-free root canals, dental implants, laser dentistry, crowns, and teeth whitening. We maintain rigorous sterilization protocols to ensure ultimate patient safety."
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology (Eye Care)",
    iconName: "Eye",
    description: "Comprehensive eye checkups, advanced cataract surgery, glaucoma management, and vision correction.",
    detailedDescription: "Equipped with high-tech laser systems, we specialize in micro-incision cataract surgeries (MICS), LASIK vision correction, diabetic retinopathy management, and glaucoma screenings. Our specialists work diligently to preserve and enhance your vision."
  },
  {
    id: "urology",
    name: "Urology",
    iconName: "Droplet",
    description: "Expert care for urinary tract conditions, kidney stones, and male reproductive system health.",
    detailedDescription: "We specialize in the medical and surgical management of kidney stones (using advanced laser lithotripsy), prostate disorders, urinary tract infections, and uro-oncology. Our treatments emphasize minimally invasive and endoscopic approaches."
  }
];

export const DOCTORS: Doctor[] = [
  // Cardiology
  {
    id: "doc-robert-chen",
    name: "Dr. Robert Chen",
    departmentId: "cardiology",
    specialization: "Interventional Cardiology",
    qualification: "MD, DM (Cardiology), FACC",
    experienceYears: 15,
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Chen is a leading cardiologist specializing in coronary angioplasty, pacemaker installations, and minimally invasive cardiac procedures. He has authored multiple papers on acute coronary syndrome."
  },
  {
    id: "doc-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    departmentId: "cardiology",
    specialization: "Pediatric & Preventive Cardiology",
    qualification: "MD, FACC, FAHA",
    experienceYears: 18,
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Jenkins focuses on non-invasive cardiac imaging, heart failure management, and pediatric heart defects. She is highly passionate about preventive cardiovascular education."
  },

  // Neurology
  {
    id: "doc-alistair-vance",
    name: "Dr. Alistair Vance",
    departmentId: "neurology",
    specialization: "Stroke & Neurocritical Care",
    qualification: "MD, PhD (Neurology)",
    experienceYears: 20,
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    bio: "With over two decades of expertise, Dr. Vance leads our neuro-intensive care team. His research focuses on emergency stroke interventions and recovery."
  },
  {
    id: "doc-maya-lin",
    name: "Dr. Maya Lin",
    departmentId: "neurology",
    specialization: "Neuromuscular & Sleep Disorders",
    qualification: "MD (Neurology), DNB",
    experienceYears: 12,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Lin specializes in diagnosing complex muscle and nerve conditions, managing epilepsy, and conducting sleep study evaluations."
  },

  // Orthopedics
  {
    id: "doc-marcus-sterling",
    name: "Dr. Marcus Sterling",
    departmentId: "orthopedics",
    specialization: "Joint Replacement & Spine Surgery",
    qualification: "MS, MCh (Orthopedics), FACS",
    experienceYears: 16,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Sterling is highly acclaimed for total knee and hip replacements. He is an expert in navigating computer-assisted joint surgeries."
  },
  {
    id: "doc-elena-rostova",
    name: "Dr. Elena Rostova",
    departmentId: "orthopedics",
    specialization: "Sports Medicine & Arthroscopy",
    qualification: "MD (Orthopedic Surgery)",
    experienceYears: 11,
    imageUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Rostova specializes in keyhole ligament reconstruction, rotator cuff repairs, and athletic injury rehabilitation."
  },

  // Pediatrics
  {
    id: "doc-sophia-martinez",
    name: "Dr. Sophia Martinez",
    departmentId: "pediatrics",
    specialization: "General Pediatrics & Neonatology",
    qualification: "MD (Pediatrics), FAAP",
    experienceYears: 14,
    imageUrl: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Martinez is dedicated to newborn critical care and developmental health. She works closely with families on preventive childhood medicine."
  },
  {
    id: "doc-david-kim",
    name: "Dr. David Kim",
    departmentId: "pediatrics",
    specialization: "Pediatric Allergy & Pulmonology",
    qualification: "MD, FAAP",
    experienceYears: 10,
    imageUrl: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Kim treats chronic childhood asthma, seasonal allergies, and respiratory disorders. He maintains a warm, child-friendly consulting room."
  },

  // Gynecology & Obstetrics
  {
    id: "doc-amanda-ross",
    name: "Dr. Amanda Ross",
    departmentId: "gynecology",
    specialization: "High-Risk Obstetrics & Urogynecology",
    qualification: "MD, OBGYN, FACS",
    experienceYears: 17,
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&id=ross",
    bio: "Dr. Ross guides mothers through critical high-risk pregnancies and specializes in pelvic floor reconstruction procedures."
  },
  {
    id: "doc-priya-patel",
    name: "Dr. Priya Patel",
    departmentId: "gynecology",
    specialization: "Infertility & Laparoscopic Gynecology",
    qualification: "MD, DGO, Reproductive Fellow",
    experienceYears: 13,
    imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Patel offers advanced counseling and treatments in IVF, fertility management, and minimally invasive uterine surgeries."
  },

  // Dermatology
  {
    id: "doc-clara-dupont",
    name: "Dr. Clara DuPont",
    departmentId: "dermatology",
    specialization: "Medical & Aesthetic Dermatology",
    qualification: "MD (Dermatology), FAAD",
    experienceYears: 9,
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. DuPont balances therapeutic care for complex skin conditions with high-precision cosmetic laser and anti-aging treatments."
  },
  {
    id: "doc-james-wilson",
    name: "Dr. James Wilson",
    departmentId: "dermatology",
    specialization: "Dermatopathology & Skin Oncology",
    qualification: "MD, FAAD",
    experienceYears: 15,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&id=wilson",
    bio: "Dr. Wilson focuses on the early detection and micrographic surgery of skin cancers, as well as biopsy analysis."
  },

  // ENT
  {
    id: "doc-thomas-wright",
    name: "Dr. Thomas Wright",
    departmentId: "ent",
    specialization: "Otology & Cochlear Implants",
    qualification: "MS (ENT), FRCS",
    experienceYears: 14,
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&id=wright",
    bio: "Dr. Wright is a micro-ear surgery specialist. He has successfully performed over 300 pediatric and adult cochlear implants."
  },
  {
    id: "doc-linda-zhao",
    name: "Dr. Linda Zhao",
    departmentId: "ent",
    specialization: "Rhinology & Sinus Surgery",
    qualification: "MD, ENT Specialist",
    experienceYears: 10,
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&id=zhao",
    bio: "Dr. Zhao manages chronic sinusitis, nasal polyps, and sleep apnea with advanced endoscopic balloon sinuplasty."
  },

  // General Surgery
  {
    id: "doc-arthur-pendelton",
    name: "Dr. Arthur Pendelton",
    departmentId: "general_surgery",
    specialization: "Laparoscopic & Bariatric Surgery",
    qualification: "MS, FACS, FICS",
    experienceYears: 22,
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&id=pendelton",
    bio: "Dr. Pendelton is a master general surgeon specializing in laparoscopic weight-loss surgeries, hernia repairs, and advanced gastrointestinal tract surgeries."
  },
  {
    id: "doc-rachel-green",
    name: "Dr. Rachel Green",
    departmentId: "general_surgery",
    specialization: "Endocrine & Trauma Surgery",
    qualification: "MD (General Surgery)",
    experienceYears: 12,
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&id=rgreen",
    bio: "Dr. Green specializes in thyroid and breast surgeries, and plays a vital leadership role in our 24/7 emergency surgical response."
  },

  // Radiology & Imaging
  {
    id: "doc-samuel-cho",
    name: "Dr. Samuel Cho",
    departmentId: "radiology",
    specialization: "Neuroradiology & Interventional Radiology",
    qualification: "MD (Radiology), FSIR",
    experienceYears: 13,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&id=cho",
    bio: "Dr. Cho combines diagnostic mastery with minimally invasive image-guided techniques to treat vascular and neurological anomalies."
  },
  {
    id: "doc-fiona-gallagher",
    name: "Dr. Fiona Gallagher",
    departmentId: "radiology",
    specialization: "Breast & Musculoskeletal Imaging",
    qualification: "MD, FRCR",
    experienceYears: 16,
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&id=gallagher",
    bio: "Dr. Gallagher oversees our diagnostic imaging quality, specializing in advanced mammography, MRI evaluations, and guided biopsies."
  },

  // Dental Care
  {
    id: "doc-michael-chang",
    name: "Dr. Michael Chang",
    departmentId: "dental",
    specialization: "Implantology & Orthodontics",
    qualification: "DDS, MS (Orthodontics)",
    experienceYears: 11,
    imageUrl: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400&id=chang",
    bio: "Dr. Chang specializes in advanced dental implants, aligner therapy, and complete smile design. He is highly gentle with nervous patients."
  },
  {
    id: "doc-emily-watson",
    name: "Dr. Emily Watson",
    departmentId: "dental",
    specialization: "Pediatric Dentistry & Endodontics",
    qualification: "BDS, MDS (Pedodontics)",
    experienceYears: 8,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&id=watson",
    bio: "Dr. Watson focuses on pain-free root canals and making children feel incredibly comfortable and safe in the dentist's chair."
  },

  // Ophthalmology
  {
    id: "doc-vincent-brooks",
    name: "Dr. Vincent Brooks",
    departmentId: "ophthalmology",
    specialization: "Vitreoretinal Surgery & LASIK",
    qualification: "MD, FCOphth",
    experienceYears: 15,
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&id=brooks",
    bio: "Dr. Brooks is an expert in surgical retina care, complex cataract micro-surgery, and corrective custom LASIK services."
  },
  {
    id: "doc-natalie-portman",
    name: "Dr. Natalie Portman",
    departmentId: "ophthalmology",
    specialization: "Glaucoma & Corneal Disease",
    qualification: "MD (Ophthalmology)",
    experienceYears: 12,
    imageUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?auto=format&fit=crop&q=80&w=400&id=portman",
    bio: "Dr. Portman treats corneal pathologies and advanced glaucoma. She champions early eye screening to prevent vision impairment."
  },

  // Urology
  {
    id: "doc-gregory-house",
    name: "Dr. Gregory House",
    departmentId: "urology",
    specialization: "Endourology & Kidney Stones Specialist",
    qualification: "MD (Urology), FACS",
    experienceYears: 25,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&id=house",
    bio: "Dr. House is a globally renowned urologist specializing in laser lithotripsy for complex stones and robotic prostatectomies."
  },
  {
    id: "doc-lisa-cuddy",
    name: "Dr. Lisa Cuddy",
    departmentId: "urology",
    specialization: "Uro-Oncology & Female Urology",
    qualification: "MD, FACS",
    experienceYears: 19,
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&id=cuddy",
    bio: "Dr. Cuddy focuses on managing bladder and kidney cancers, urinary incontinence, and minimally invasive urinary reconstruction."
  }
];

export const SERVICES: Service[] = [
  {
    id: "emergency",
    name: "Emergency & Trauma Care",
    iconName: "ShieldAlert",
    description: "24/7 rapid-response emergency wing equipped with specialized trauma beds and acute life support.",
    details: ["Critical cardiac care", "Polytrauma management", "In-house toxicology and critical care physicians available 24/7"]
  },
  {
    id: "diagnostic",
    name: "Diagnostic & Lab Services",
    iconName: "FileSpreadsheet",
    description: "NABL accredited laboratories offering high-precision biochemistry, pathology, immunology, and radiography services.",
    details: ["Ultra-fast turnaround time", "Digital radiology integration", "Home sample collection with electronic reporting"]
  },
  {
    id: "pharmacy",
    name: "Pharmacy Services",
    iconName: "ShoppingBag",
    description: "Fully stocked in-hospital pharmacy open 24/7, offering authentic medicines, vaccines, and surgical supplies.",
    details: ["Temperature-controlled vaccine storage", "E-prescription scanning for reduced waiting times", "Experienced pharmacist counseling"]
  },
  {
    id: "icu",
    name: "ICU & Critical Care",
    iconName: "Activity",
    description: "Advanced intensive care units with individual invasive ventilators, cardiac monitors, and high nurse-to-patient ratio.",
    details: ["Specialized Medical, Surgical, and Pediatric ICUs", "Continuous dynamic monitoring of vital organs", "Infection-controlled isolated recovery units"]
  },
  {
    id: "surgical",
    name: "Surgical Services",
    iconName: "Scissors",
    description: "Fully-equipped modular operating theatres designed to support both standard laparoscopies and intricate cardiac or neurosurgeries.",
    details: ["Laminar airflow infection control system", "Robotic and laparoscopic assistance", "Post-operative intensive care recovery units"]
  },
  {
    id: "maternity",
    name: "Maternity & Childbirth",
    iconName: "Baby",
    description: "Premium delivery rooms, painless labor options, and comprehensive neonatology ICU support for complete peace of mind.",
    details: ["LDRP (Labor, Delivery, Recovery, Postpartum) suites", "Highly experienced obstetrical anesthesia team", "Comprehensive lactation support and counseling"]
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehab",
    iconName: "Accessibility",
    description: "Customized physical therapy programs to restore strength and joint function following joint replacement, stroke, or injury.",
    details: ["Sports orthopedic rehab", "Neurological stroke restoration programs", "Ergonomic guidance and geriatric conditioning"]
  },
  {
    id: "vaccination",
    name: "Vaccination & Prevention",
    iconName: "HeartHandshake",
    description: "Structured immunization programs for newborns, kids, and international travelers, along with disease prevention checkups.",
    details: ["Childhood immunization schedule tracking", "Adult and geriatric flu/pneumonia vaccines", "Comprehensive wellness consultation"]
  },
  {
    id: "health_packages",
    name: "Health Checkup Packages",
    iconName: "ClipboardList",
    description: "Carefully designed wellness packages catering to different age groups, lifestyles, and diagnostic requirements.",
    details: ["Comprehensive Executive Cardiac Screening", "Senior Citizen Wellness Package", "Women's Health & Gynae Screening Package"]
  },
  {
    id: "ambulance",
    name: "Ambulance Services",
    iconName: "Truck",
    description: "GPS-enabled Advanced Cardiac Life Support (ACLS) ambulances available 24/7 to provide critical pre-hospital care.",
    details: ["On-board ventilator, defibrillator, and oxygen delivery", "Direct link to hospital emergency control room", "Paramedic-led response team"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "David Sterling",
    role: "Cardiology Patient",
    quote: "The cardiology department at We Care saved my life. Dr. Robert Chen diagnosed my blockage instantly and explained the angioplasty with extreme clarity. The nursing staff was unbelievably attentive.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Evelyn Monroe",
    role: "Maternity Care",
    quote: "From pre-natal checkups to the delivery of my daughter, the experience was flawless. The LDRP rooms felt like a luxury hotel, and Dr. Amanda Ross was incredibly reassuring during labor. Thank you, We Care!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "John Fitzpatrick",
    role: "Orthopedics Surgery",
    quote: "I underwent a complete knee replacement surgery under Dr. Marcus Sterling. Within weeks, I was back on my feet, walking without pain. The physiotherapy department is top-notch and highly motivating.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-4",
    name: "Samantha Reed",
    role: "Pediatric Patient Mother",
    quote: "My 4-year-old son had severe asthma breathing trouble. We rushed to the emergency at 2 AM. The pediatric emergency team acted immediately, and Dr. Kim was so friendly that my son didn't even cry once.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-reception",
    title: "Welcoming Reception Lobby",
    category: "Lobby & Admission",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fac-operating",
    title: "Modular Operation Theatre",
    category: "Surgical Suite",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fac-icu",
    title: "Advanced Critical Care ICU",
    category: "Critical Care",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fac-ward",
    title: "Premium Patient Rooms",
    category: "Patient Wards",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fac-lab",
    title: "Automated Diagnostic Laboratory",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fac-ambulance",
    title: "Advanced Life Support Fleet",
    category: "Emergency Transit",
    imageUrl: "https://images.unsplash.com/photo-1587742012753-43f1406e2cf2?auto=format&fit=crop&q=80&w=600"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "10 Simple Habits for a Strong and Healthy Heart",
    excerpt: "Small life modifications can dramaticially reduce cardiovascular diseases. Discover what cardiologists recommend for daily living.",
    content: "Maintaining cardiovascular health doesn't require drastic lifestyle overhauls. According to our top cardiologists, implementing simple, consistent habits can reduce the risk of heart disease by up to 80%.\n\nFirst, focus on dynamic physical activity. Aim for at least 30 minutes of moderate-intensity exercise, like brisk walking or swimming, five times a week. This strengthens the heart muscle and lowers blood pressure.\n\nSecond, adapt your diet to include antioxidant-rich foods. Focus on the Mediterranean pattern: healthy fats from olives and avocados, abundant leafy green vegetables, whole grains, and lean proteins like fish.\n\nThird, manage stress levels. Chronic stress increases cortisol, elevating heart rate and blood pressure. Practices like deep diaphragmatic breathing, yoga, and ensuring 7-8 hours of sound sleep are highly therapeutic for cardiovascular function.",
    category: "Cardiology & Wellness",
    date: "Aug 02, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "art-2",
    title: "Preventing Childhood Obesity: A Comprehensive Guide for Parents",
    excerpt: "Learn how to encourage nourishing habits, active play, and screen boundaries for children's healthy development.",
    content: "Childhood wellness establishes the blueprint for adult longevity. Today, with increased screentime and processed snacks, keeping children active and healthy is a growing challenge.\n\nOur pediatric experts recommend a multi-faceted approach. Focus on 'eating the rainbow' - serving meals packed with colorful fruits and vegetables. Avoid soft drinks and packaged juices, which are loaded with empty sugars that trigger rapid glucose spikes.\n\nEqually important is active play. Encourage sports, family bike rides, or outdoor tag instead of prolonged television or video game usage. Set healthy screen limits, keeping bedtime device-free to support rich, deep sleep critical for physical growth hormone secretion.",
    category: "Pediatrics & Nutrition",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "art-3",
    title: "Why Annual Health Checkups Matter More Than You Think",
    excerpt: "Most severe diseases show zero early symptoms. Discover how standard diagnostic blood panels and screenings save lives.",
    content: "Preventive medicine is the most powerful tool in modern healthcare. Many life-threatening conditions, including hypertension, early-stage diabetes, high cholesterol, and even several cancers, progress silently with absolutely no perceptible symptoms.\n\nBy the time symptoms manifest, treating the condition can be far more complex. An annual physical or executive health checkup acts as an early warning system. Standard blood panels evaluate liver and kidney health, blood glucose regulation, and lipid ratios. Mammograms, Pap smears, and prostate screenings can detect cellular changes before they escalate, turning treatment from highly complex surgeries into highly manageable preventive interventions.",
    category: "Preventive Care",
    date: "Jul 15, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
  }
];
