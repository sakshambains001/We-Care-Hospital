export interface Department {
  id: string;
  name: string;
  iconName: string; // Used to look up Lucide icons dynamically
  description: string;
  detailedDescription?: string;
}

export interface Doctor {
  id: string;
  name: string;
  departmentId: string;
  specialization: string;
  qualification: string;
  experienceYears: number;
  imageUrl: string;
  bio?: string;
  availability?: string[];
}

export interface Service {
  id: string;
  name: string;
  iconName: string;
  description: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  departmentId: string;
  doctorId: string;
  date: string;
  time: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
