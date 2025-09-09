/**
 * Application Constants
 * Centralized configuration and constant values
 */

import type { ServiceItem } from "../types/index";

// Application Configuration
export const APP_CONFIG = {
  name: "Oralyn Dental Care",
  description: "Professional dental care services",
  version: "1.0.0",
} as const;
interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  rating: number;
  image: string;
  treatment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ali",
    title: "Marketing Director",
    text: "The team at Oralyn transformed my smile with their advanced cosmetic dentistry. The attention to detail and personalized care exceeded all my expectations. I couldn't be happier with the results!",
    rating: 4,
    image: "/jake-nackos-IF9TK5Uy-KI-unsplash.webp",
    treatment: "Cosmetic Dentistry",
  },
  {
    id: 2,
    name: "Dr. Mohammed Samier",
    title: "Pediatrician",
    text: "As a healthcare professional myself, I appreciate the cutting-edge technology and evidence-based approach at Oralyn. The implant procedure was seamless, and the follow-up care was exceptional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    treatment: "Dental Implants",
  },
  {
    id: 3,
    name: " Gehad Salem",
    title: "Business Owner",
    text: "The orthodontic treatment I received was life-changing. The team made the entire process comfortable and convenient. My confidence has soared since completing my treatment here.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    treatment: "Orthodontics",
  },
];

// Services Data
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Comprehensive oral health care including cleanings, exams, and preventive treatments",
    icon: "/dental-care.png",
    alt: "General Dentistry Icon",
  },
  {
    id: "restorative-dentistry",
    title: "Restorative Dentistry",
    description:
      "Advanced solutions for damaged teeth using crowns, bridges, and dental implants",
    icon: "/dental-implant.png",
    alt: "Restorative Dentistry Icon",
  },
];

// Statistics Configuration
export const STATISTICS_CONFIG = {
  happyPatients: { target: 5000, increment: 100, interval: 20 },
  yearsExperience: { target: 15, increment: 1, interval: 200 },
  successRate: { target: 98, increment: 2, interval: 100 },
} as const;
