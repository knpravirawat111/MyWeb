// Centralized data for the portfolio
export const personalInfo = {
  name: "Ravi Rawat",
  role: "Mendix Developer | Backend & AI Enthusiast",
  tagline: "Building scalable enterprise apps & AI-powered solutions",
  experience: "2+",
  email: "knpravirawat111@gmail.com",
  phone: "+91-6393620970",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1yQD8_P3ZK_FvVs3-3p9paLRq9031OnSc/view?usp=sharing",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/r-rawat007/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/knpravirawat111",
    icon: "github",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/knpravirawat111/",
    icon: "leetcode",
  },
  {
    name: "Twitter",
    href: "https://x.com/Ravireigns21/",
    icon: "twitter",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/r_r.a.w.a.t_007/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100014727464992",
    icon: "facebook",
  },
];

export const aboutContent = {
  professional: `I am a Mendix Developer with 2+ years of experience in building and deploying low-code enterprise applications. I have strong hands-on experience with microflows, nanoflows, domain models, UI pages, and external API integrations.

Alongside low-code development, I am actively expanding into backend and AI-driven application development using Python and FastAPI. I aim to build scalable systems, automation solutions, and AI-powered APIs while maintaining clean architecture and strong UX.`,

  personal: `Beyond the code, I'm someone who believes in continuous growth—both professionally and personally. I enjoy exploring new places, capturing moments through my lens, and staying curious about emerging technologies.

When I'm not building applications, you'll find me solving coding challenges, reading about AI advancements, or planning my next adventure. I believe in balancing ambition with authenticity.`,
};

export const workExperience = [
  {
    company: "Baarez Technologies Solutions",
    role: "Mendix Developer",
    duration: "March 2025 – Present",
    current: true,
  },
  {
    company: "Baarez Technologies Ltd",
    role: "Junior Mendix Developer",
    duration: "October 2023 – March 2025",
    current: false,
  },
];

export const responsibilities = [
  "Designing domain models",
  "Developing microflows and nanoflows",
  "Building responsive UI pages",
  "Integrating third-party APIs",
  "Working in Agile delivery environment",
  "Supporting migration and bug fixing",
];

export const projects = [
  {
    title: "VerifAI",
    subtitle: "Third Party Risk Management",
    duration: "2024 – 2025",
    tech: ["Mendix"],
    description: "A comprehensive role-based vendor onboarding application with risk rating and assessment capabilities.",
    features: [
      "Role-based vendor onboarding",
      "Vendor risk rating and assessment",
      "Re-assessment based on risk scores",
      "External API integrations",
    ],
    contributions: [
      "Domain models",
      "Microflows & nanoflows",
      "UI pages",
      "External API integration",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "GRC Platform",
    subtitle: "Governance, Risk & Compliance",
    duration: "2025 – Present",
    tech: ["Mendix"],
    description: "Enterprise GRC platform with modules for Risk Management, Audit Management, and Compliance.",
    features: [
      "Risk Management module",
      "Audit Management module",
      "Compliance with controls & policies",
      "Evidence and KPI management",
    ],
    contributions: [
      "Domain models",
      "Microflows & nanoflows",
      "UI page development",
      "API integrations",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

export const skills = {
  core: [
    { name: "Mendix", level: 90 },
    { name: "Microflows/Nanoflows", level: 85 },
    { name: "Domain Modeling", level: 85 },
    { name: "Java", level: 70 },
    { name: "HTML/CSS", level: 75 },
  ],
  backend: [
    { name: "SQL", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Spring (Basic)", level: 50 },
  ],
  learning: [
    { name: "Python", level: 65 },
    { name: "FastAPI", level: 60 },
    { name: "OpenAI/LLM APIs", level: 55 },
    { name: "Prompt Engineering", level: 50 },
    { name: "Async Programming", level: 45 },
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 80 },
  ],
};

export const certifications = [
  "Mendix Rapid Developer",
  "Generative AI Mastermind – OutSkill",
  "Java + DSA with System Design – PW Skills",
  "Basics of Database Design & Development – Udemy",
];

export const achievements = [
  { title: "TCS NQT Score", value: "74%", description: "Tata Consultancy Services" },
  { title: "Problems Solved", value: "200+", description: "Across platforms" },
  { title: "LeetCode Rating", value: "1527", description: "Highest achieved" },
];

export const education = {
  degree: "B.Tech",
  university: "MJP Rohilkhand University",
  year: "2023",
  cgpa: "7.57",
  intermediate: "89%",
  highSchool: "88.2%",
};

export const values = [
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I stay curious and committed to learning new skills, from low-code to AI.",
    icon: "learning",
  },
  {
    title: "Clean Architecture",
    description: "I believe in writing maintainable, scalable code. Good architecture today saves countless hours tomorrow.",
    icon: "architecture",
  },
  {
    title: "User-Centric Design",
    description: "Every application should serve its users. I prioritize UX alongside functionality.",
    icon: "user",
  },
  {
    title: "Growth Mindset",
    description: "Challenges are opportunities. I embrace feedback, learn from failures, and continuously improve.",
    icon: "growth",
  },
];

export const galleryImages = [
  { src: "/images/gallery/travel-1.jpg", alt: "Travel", category: "travel" },
  { src: "/images/gallery/travel-2.jpg", alt: "Travel", category: "travel" },
  { src: "/images/gallery/event-1.jpg", alt: "Event", category: "events" },
  { src: "/images/gallery/event-2.jpg", alt: "Event", category: "events" },
  { src: "/images/gallery/personal-1.jpg", alt: "Personal", category: "personal" },
  { src: "/images/gallery/personal-2.jpg", alt: "Personal", category: "personal" },
];

export const footerQuote = {
  text: "Code is poetry, architecture is art, and every bug is a lesson.",
  author: "Ravi Rawat",
};
