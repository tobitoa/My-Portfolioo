export type ExperienceItem = {
  id: string;
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: readonly string[];
  technicalAreas: readonly string[];
};

export const experienceItems: readonly ExperienceItem[] = [
  {
    id: "unified-mentor",
    role: "Full Stack Web Developer Intern",
    organisation: "Unified Mentor",
    startDate: "September 2026",
    endDate: "Present",
    description: "Working across full-stack web development, from responsive interfaces and client-side functionality to application logic, testing, debugging, API integration, and deployment workflows.",
    responsibilities: ["Responsive interfaces and client-side functionality", "Application logic, testing, and debugging", "API integration and deployment workflows"],
    technicalAreas: ["React", "Next.js", "Node.js", "Angular", "JavaScript"],
  },
  {
    id: "amigo-foundation",
    role: "AI Web Development Intern",
    organisation: "Amigo Foundation",
    startDate: "August 2026",
    endDate: "August 2026",
    description: "Contributed to web development using modern JavaScript frameworks, improving responsive interfaces and exploring AI-assisted development workflows.",
    responsibilities: ["Improved responsive interfaces", "Explored AI-assisted development workflows"],
    technicalAreas: ["JavaScript", "Frontend", "AI workflows"],
  },
  {
    id: "aegcl",
    role: "Industrial / Summer Intern",
    organisation: "Assam Electricity Grid Corporation Limited (AEGCL)",
    startDate: "July 2026",
    endDate: "July 2026",
    description: "Gained practical exposure to power transmission and substations, including transformers, circuit breakers, switchgear, and electrical protection systems.",
    responsibilities: ["Practical exposure to power transmission and substations", "Studied transformers, circuit breakers, switchgear, and electrical protection systems"],
    technicalAreas: ["Power systems", "Substations", "Protection"],
  },
  {
    id: "trtc",
    role: "PLC / Summer Intern",
    organisation: "TRTC",
    startDate: "July 2025",
    endDate: "July 2025",
    description: "Worked with PLC systems and ladder-logic programming, exploring sensors, automated control processes, and sequential motor operations.",
    responsibilities: ["Explored sensors and automated control processes", "Worked with sequential motor operations"],
    technicalAreas: ["PLC", "Ladder logic", "Automation"],
  },
];

export type EducationItem = {
  id: string;
  qualification: string;
  institution: string;
  startDate: string;
  endDate: string;
  summary: string;
};

export const educationItems: readonly EducationItem[] = [
  {
    id: "btech-electrical",
    qualification: "B.Tech in Electrical Engineering",
    institution: "Jorhat Engineering College",
    startDate: "September 2023",
    endDate: "Present",
    summary: "Undergraduate programme.",
  },
  {
    id: "higher-secondary",
    qualification: "Higher Secondary — Science",
    institution: "NKEM",
    startDate: "August 2020",
    endDate: "March 2022",
    summary: "Higher Secondary result: 73%.",
  },
  {
    id: "secondary-class-x",
    qualification: "Secondary Education — Class X",
    institution: "Island Academy",
    startDate: "January 2018",
    endDate: "March 2020",
    summary: "Class X result: 86.2%.",
  },
];
