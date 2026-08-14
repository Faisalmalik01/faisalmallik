export const personal = {
  logo: "FM.",
  name: "Faisal Malik",
  title: "Software Developer",
  email: "thefaisalmallik@gmail.com",
  github: "https://github.com/Faisalmalik01",
  linkedin: "https://www.linkedin.com/in/faisalmalik01/",
  twitter: "https://x.com/faisalmalik_01",
  resume: "/resume.pdf",
  location: "Kashmir, India",
};

export const projects = [
  {
    id: 1,
    title: "Ferisha",
    description: "A production-ready fashion eCommerce platform with product browsing, cart, wishlist, and a complete MERN backend handling authentication, orders, and payments via Stripe & Razorpay.",
    categories: ["MERN"],
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/projects/ferisha.png",
    link: "https://github.com/Faisalmalik01/ferisha",
    demo: "https://ferisha.vercel.app/",
    year: "2026",
  },
  {
    id: 2,
    title: "Recipe Assistant",
    description: "A global recipe discovery platform built with React featuring intelligent search, category filtering, favourites management, and seamless responsive navigation.",
    categories: ["FRONTEND"],
    tags: ["React", "Tailwind", "REST API", "TheMealDB"],
    image: "/projects/recipe-assistant.png",
    link: "https://github.com/Faisalmalik01/recipe-assistant",
    demo: "https://recipe-assistant-gilt.vercel.app/",
    year: "2025",
  },
  {
    id: 3,
    title: "AxisWardrobe",
    description: "A fashion eCommerce experience featuring JWT authentication, wishlist management, dynamic product browsing, and a polished Framer Motion-powered interface.",
    categories: ["FRONTEND"],
    tags: ["React", "Tailwind", "Framer Motion", "Auth"],
    image: "/projects/axis-wardrobe.png",
    link: "https://github.com/Faisalmalik01/AxisWardrobe",
    demo: "https://axis-wardrobe.vercel.app/",
    year: "2025",
  },
  {
    id: 4,
    title: "Adaptive Fused Grad-CAM",
    description: "Undergraduate research project building a multi-layer Grad-CAM framework for improving explainability in retinal OCT classification. Includes a full-stack web interface for model interaction.",
    categories: ["RESEARCH", "AI/ML"],
    tags: ["TensorFlow", "ResNet50", "React", "Flask", "Grad-CAM"],
    image: "/projects/AdaptiveFusedGrad-CAM.png",
    link: "https://github.com/Faisalmalik01/adaptive-oct-explainability",
    year: "2026",
  },
];

export const filters = [
  { key: "ALL", label: "ALL" },
  { key: "MERN", label: "MERN" },
  { key: "FRONTEND", label: "FRONTEND" },
  // { key: "DATA SCIENCE", label: "DATA SCIENCE" },
  { key: "AI/ML", label: "AI/ML" },
  { key: "RESEARCH", label: "RESEARCH" },
];

export const about = {
  greeting: "Hi there, I'm Faisal.",
  paragraphs: [
    "I'm a MERN Stack Developer with a strong full-stack practice, based in Kashmir, India. My work moves across frontend interfaces, backend systems, and database architecture — grounded in clean code, shaped by user needs, and pulled toward shipping complete products.",
    "I studied Computer Applications at the University of Kashmir, where research and development first taught me to take problems seriously. Since then, I've been building end-to-end web applications with React, Node.js, and MongoDB — running a consistent practice in REST API design, authentication flows, and scalable component systems.",
  ],
  interests: [
    "Usually exploring new places and finding quiet corners away from the noise",
    "Into music, films, and stories that stay with me",
    "Someone who notices small details — architecture, photography, typography, everyday objects",
    "Always curious about new ideas, different perspectives, and how people see the world",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Redux", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST API", "JWT", "Authentication"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
  {
    category: "Exploring",
    items: ["System Design", "AWS", "Docker", "TypeScript"],
  },
];

export const experience = [
  {
    company: "Freelance",
    role: "Full-Stack MERN Developer",
    period: "2026 — Present",
    link: null,
  },
];

export const education = [
  {
    institution: "University of Kashmir",
    degree: "BCA (Honours with Research)",
    period: "2022 — 2026",
    link: null,
  },
  {
    institution: "Final Year Project",
    degree: "Adaptive Fused Grad-CAM for OCT Analysis",
    period: "2026",
    link: "https://github.com/Faisalmalik01/adaptive-oct-explainability",
  },
];