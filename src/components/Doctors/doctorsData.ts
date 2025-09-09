interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  education: string;
  achievements: string[];
  bio: string;
  phone: string;
  email: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Sara Ahmed",
    specialty: "Cosmetic & Restorative Dentistry",
    experience: "15+ Years",
    image: "/nurse-2019420_1280.jpg",
    education: "Harvard School of Dental Medicine, DDS",
    achievements: [
      "Best Cosmetic Dentist 2023",
      "Advanced Implant Certification",
      "Invisalign Elite Provider",
    ],
    bio: "Dr. Sarah specializes in transformative smile makeovers using the latest cosmetic dentistry techniques. She has helped over 2,000 patients achieve their dream smiles.",
    phone: "+20 (010) 123-4567",
    email: "dr.sarah@oralyn.com",
  },
  {
    id: 2,
    name: " Mohammed Ali",
    specialty: "Oral & Maxillofacial Surgery",
    experience: "12+ Years",
    image: "/ai-generated-9019520_1280.png",
    education: "UCLA School of Dentistry, DDS, MD",
    achievements: [
      "Board Certified Oral Surgeon",
      "Minimally Invasive Surgery Expert",
      "TMJ Specialist",
    ],
    bio: "Dr. Mohamed is a dual-degree oral surgeon specializing in complex extractions, dental implants, and corrective jaw surgery with a focus on patient comfort.",
    phone: "+20 (011) 234-5678",
    email: "dr.mohamed@oralyn.com",
  },
  {
    id: 3,
    name: " Fatma Hassan",
    specialty: "Pediatric Dentistry",
    experience: "10+ Years",
    image: "/ai-generated-9019517_1280.png",
    education: "Columbia University College of Dental Medicine, DDS",
    achievements: [
      "Child-Friendly Care Award",
      "Sedation Dentistry Certified",
      "Special Needs Dentistry Expert",
    ],
    bio: "Dr. Fatima creates positive dental experiences for children and adolescents, specializing in preventive care and early orthodontic intervention.",
    phone: "+20 (012) 345-6789",
    email: "dr.fatima@oralyn.com",
  },
];

export { doctors };
export type { Doctor };
