/**
 * Single source of truth for work history.
 *
 * To keep the portfolio up to date, edit this file only. The home page
 * (Projects, Experience, hero stats) and the /work page both read from it.
 * Optional fields (links, images) simply stay hidden until you fill them in.
 * When your resume changes, also replace public/resume.pdf.
 */

export type WorkCategory = "AI" | "Web" | "Mobile" | "Personal";

export type Project = {
  title: string;
  client: string;
  category: WorkCategory[];
  date: string;
  status: "ongoing" | "pilot" | "completed";
  description: string;
  highlights: string[];
  tags: string[];
  /** Shown in the home page Projects section. Needs an image. */
  featured?: boolean;
  /** Screenshot of the front page that the live link opens. */
  image?: string;
  /** Live link, shown as the "Live Demo" button. */
  website?: string;
  android?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "PortGPT",
    client: "VOC Port",
    category: ["AI", "Web", "Mobile"],
    date: "2024 - Present",
    status: "ongoing",
    description:
      "An agentic LLM + RAG platform for port operations. As Lead Engineer (team of 6), I built the web frontend and Android app, shipping to web, Android and private iOS from a single Capacitor codebase.",
    highlights: [
      "One Next.js codebase for web, Android (~250–300 downloads) and iOS (private distribution) with OTA updates, serving ~150 active users.",
      "SSE streaming layer and multilingual voice UI for the LangGraph agent, which queries live port APIs, SQL data and a hybrid RAG knowledge base (ChromaDB + BM25).",
      "FastAPI endpoints and FCM/APNs push services with exactly-once scheduled notifications (Postgres SKIP LOCKED).",
      "30+ KPI analytics dashboard and an API layer over 30+ REST/SSE endpoints.",
      "AI report engine that cut report creation from 2–3 days to under 2 minutes.",
      "Knowledge base management with bulk document upload, website crawling with live progress, and a searchable document inventory.",
      "Visited the client, ran on-site port sessions and joined client calls.",
    ],
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "LangGraph", "ChromaDB", "Redis", "PostgreSQL", "Capacitor"],
    featured: true,
    image: "/projects/previews/portgpt.jpg",
    website: "https://portgpt.vocport.gov.in",
    android:
      "https://play.google.com/store/apps/details?id=com.sahanasystemlimited.portgptios&hl=en_IN",
  },
  {
    title: "60SecGig",
    client: "CoRover",
    category: ["AI", "Web"],
    date: "2026 - Present",
    status: "ongoing",
    description:
      "A micro-gig marketplace: clients post a job, AI splits it into tasks of about a minute, people complete them, and work is checked before payment. I work on both the Next.js PWA and the FastAPI backend.",
    highlights: [
      "Separate areas for gig workers, clients and admins in an installable web app, in English and Hindi.",
      "AI gig engine design covering task splitting, verification with a human review queue, and matching.",
      "Double-entry ledger with escrow holds, release and refunds (the beta uses demo money).",
      "Built for weak networks and low-end Android phones.",
    ],
    tags: ["Next.js", "PWA", "FastAPI", "PostgreSQL", "Redis", "Celery", "Firebase Auth"],
    featured: true,
    image: "/projects/previews/60secgig.jpg",
    website: "https://sixtysecgig.corover.ai",
  },
  {
    title: "GigaDoc",
    client: "CoRover",
    category: ["AI", "Web"],
    date: "2026 - Present",
    status: "ongoing",
    description:
      "A contactless wellness screening app: a short face scan produces wellness indicators in the browser. It is a wellness tool, not a medical device. Built by a team; my work covers accounts, reporting and the web redesign.",
    highlights: [
      "Sign-in and session handling backed by PostgreSQL.",
      "API for saving and reading each user's scan reports.",
      "Redesigned the web app with a dashboard and new scan flows.",
    ],
    tags: ["Next.js", "React", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
    featured: true,
    image: "/projects/previews/gigadoc.jpg",
    website: "https://gigadoc.corover.ai",
  },
  {
    title: "SRA AI Grievance Redressal Portal",
    client: "Govt. of Maharashtra (SRA)",
    category: ["AI", "Web"],
    date: "2026",
    status: "pilot",
    description:
      "A citizen grievance portal built solo, end to end. Citizens file by voice, text or document upload; AI summarizes each grievance, routes it to the right department and scores its priority.",
    highlights: [
      "Grievance submission by voice, text or handwritten-document upload.",
      "Automated AI summarization, department routing and priority scoring.",
      "Trilingual UI (English, Hindi, Marathi) with an accessibility toolbar.",
      "RSA-encrypted OTP login.",
      "Officer workflows with SLA deadline tracking and appeals.",
    ],
    tags: ["Angular", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    featured: true,
    image: "/projects/previews/sra.jpg",
    website: "https://aigrievance.sra.gov.in",
  },
  {
    title: "DigiSaathi",
    client: "NPCI",
    category: ["AI", "Web"],
    date: "2023 - 2026",
    status: "completed",
    description:
      "NPCI's conversational helpline platform serving 200K+ users. I independently led the Angular 8 → 19 migration for security-audit compliance.",
    highlights: [
      "Angular 8 → 19 migration with zero feature regression.",
      "Bundle size reduced by ~30% and 3+ years of technical debt removed.",
      "Voice/text interaction and intent analytics dashboards.",
    ],
    tags: ["Angular", "Government", "Analytics"],
    featured: true,
    image: "/projects/previews/digisaathi.jpg",
    website: "https://digisaathi.info",
  },
  {
    title: "Live Chatbot-to-Agent Handoff",
    client: "Enterprise clients",
    category: ["Web"],
    date: "2024 - 2026",
    status: "completed",
    description:
      "Real-time handoff from a chatbot to a human agent that passes along the full conversation context.",
    highlights: ["Built with Socket.io and Freshworks."],
    tags: ["Socket.io", "Freshworks", "Realtime"],
  },
  {
    title: "SEBI Chatbot & Analytics",
    client: "SEBI",
    category: ["AI", "Web"],
    date: "2023 - 2024",
    status: "completed",
    description: "Conversational chatbot UI and analytics dashboards.",
    highlights: ["Supported SEBI security-audit remediation.", "Joined client calls."],
    tags: ["Chatbot", "Analytics", "Government"],
    website: "https://seva.corover.ai/",
    image: "/projects/previews/sebi.jpg",
  },
  {
    title: "LIC Chatbot & Analytics",
    client: "LIC",
    category: ["AI", "Web"],
    date: "2023 - 2024",
    status: "completed",
    description: "Conversational chatbot UI and analytics dashboards.",
    highlights: ["Joined client calls."],
    tags: ["Chatbot", "Analytics"],
    website: "https://lic.corover.ai/",
    image: "/projects/previews/lic.jpg",
  },
  {
    title: "NABL Chatbot",
    client: "QCI",
    category: ["Web"],
    date: "2023 - 2024",
    status: "completed",
    description: "Chatbot project for NABL, under the Quality Council of India.",
    highlights: [],
    tags: ["Chatbot", "Government"],
    website: "https://uat.nabl.corover.ai/",
    image: "/projects/previews/nabl.jpg",
  },
  {
    title: "NABH Chatbot",
    client: "QCI",
    category: ["Web"],
    date: "2023 - 2024",
    status: "completed",
    description: "Chatbot project for NABH, under the Quality Council of India.",
    highlights: [],
    tags: ["Chatbot", "Government"],
    website: "https://nabh.corover.ai/widget/",
    image: "/projects/previews/nabh.jpg",
  },
  {
    title: "Remote Mac Control",
    client: "Personal",
    category: ["Personal"],
    date: "2025",
    status: "completed",
    description:
      "A personal tool for remotely accessing and controlling a Mac: screen viewing, input control and automation over a secure connection.",
    highlights: [],
    tags: ["macOS", "Automation", "Personal"],
    featured: true,
    image: "/projects/remote-mac-card.svg",
  },
  {
    title: "Developer Portfolio",
    client: "Personal",
    category: ["Personal", "Web"],
    date: "Sep, 2025",
    status: "completed",
    description:
      "This website: a personal portfolio showcasing projects, skills and contact information.",
    highlights: [],
    tags: ["Portfolio", "Fullstack", "Personal"],
    featured: true,
    image: "/projects/previews/portfolio.jpg",
    github: "https://github.com/lavnyasharma",
  },
];

export const beyondCode = [
  {
    title: "On-site Requirement Gathering",
    description:
      "I go on-site to clients to gather requirements. For PortGPT I visited the client and ran on-site port sessions.",
  },
  {
    title: "Proposals, RFPs & Pitch Decks",
    description:
      "I write RFP responses and pitch decks for clients including NPCI, SEBI, NeGD, LIC, SRA and NITI Aayog.",
  },
  {
    title: "Solution Design & Architecture",
    description:
      "I contribute solution design and architecture visuals to proposals, including those for NITI Aayog and MAITRI.",
  },
  {
    title: "Client Communication",
    description:
      "I run and join client calls, including those for SEBI and LIC.",
  },
  {
    title: "Leadership & Mentoring",
    description:
      "Lead Engineer for a team of 6 on PortGPT. Mentored 7 junior engineers across frontend and mobile on best practices and onboarding.",
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    duration: "Mar 2026 - Present",
    description: [
      "Lead Engineer (team of 6) on PortGPT: built the Next.js web frontend and Android app, shipping to web, Android and private iOS from one Capacitor codebase for ~150 active users.",
      "Built the SSE streaming layer and multilingual voice UI, FastAPI endpoints, FCM/APNs push services, a 30+ KPI dashboard and an AI report engine (2–3 days down to under 2 minutes).",
      "Built the SRA AI Grievance Redressal Portal solo, end to end (live pilot).",
      "Go on-site for client requirement gathering, run client calls, and contribute to proposals including NITI Aayog and MAITRI.",
      "Work on 60SecGig (Next.js and FastAPI) and GigaDoc (accounts, reporting and web redesign).",
      "Mentored 7 junior engineers across frontend and mobile teams.",
    ],
    skills: ["Next.js", "React", "TypeScript", "FastAPI", "LangGraph", "RAG", "Capacitor", "NestJS"],
  },
  {
    role: "Software Engineer",
    duration: "May 2024 - Mar 2026",
    description: [
      "Led the Angular 8 → 19 migration of DigiSaathi (NPCI, 200K+ users), cutting bundle size by ~30% with zero feature regression.",
      "Built real-time chatbot-to-agent handoff workflows.",
    ],
    skills: ["Angular", "Socket.io", "TypeScript"],
  },
  {
    role: "Software Engineer Intern",
    duration: "Nov 2023 - Apr 2024",
    description: [
      "Built conversational chatbot UIs and analytics dashboards for SEBI and LIC.",
      "Worked on chatbot projects for QCI (NABL and NABH) and joined client calls for SEBI and LIC.",
      "Supported SEBI security-audit remediation.",
    ],
    skills: ["Chatbot UI", "Analytics Dashboards"],
  },
];

export const clients = [
  "VOC Port",
  "Govt. of Maharashtra (SRA)",
  "NPCI",
  "SEBI",
  "LIC",
  "QCI",
];

export const skillGroups = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Redux", "Zustand", "Tailwind CSS", "React Native", "Capacitor", "Recharts", "Chart.js", "React Flow", "Framer Motion"],
  },
  {
    title: "AI / LLM",
    skills: ["LangChain", "LangGraph", "RAG", "Hybrid Retrieval (BM25 + Vector)", "ChromaDB", "Tool Calling", "Prompt Engineering", "Guardrails", "OCR", "STT / TTS", "SSE Streaming"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "FastAPI", "Node.js", "NestJS", "Express", "REST", "Socket.io", "Redis", "PostgreSQL", "MySQL", "MongoDB", "DuckDB / Parquet", "FCM / APNs"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "GCP", "Docker", "Git", "CI/CD", "JWT / OTP Auth", "Playwright", "Sentry", "Agile / Scrum"],
  },
];

export const achievements = [
  "National Winner, Smart India Hackathon 2022 (Ministry of Education, Govt. of India)",
  "AWS Certified Cloud Practitioner",
];

export const education = {
  school: "Model Institute of Engineering and Technology, Jammu",
  degree: "B.Tech, Computer Science Engineering (CGPA 8.0 / 10)",
  duration: "2020 - 2024",
};
