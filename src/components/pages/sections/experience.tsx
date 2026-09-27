"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import HeadingLine from "@/components/ui/heading-line";
import { cn } from "@/lib/utils";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

const Experience = () => {
    const experiences = [
        {
            company: "CoRover Private Limited",
            role: "Software Engineer",
            duration: "Nov 2023 - Present",
            location: "Bengaluru, Karnataka, India · On-site",
            type: "Full-time · Agile/Scrum",
            logo: "https://web.corover.ai/bGPT+CoRover_raw%20(2).png",
            description: [
                "Owned end-to-end, as Lead Frontend Engineer, the full-stack frontend for PortGPT — an enterprise AI assistant for VOC Port operations — from architecture to deployment across web, iOS (TestFlight), and Android from a single Next.js 16 / React 19 codebase via Capacitor.",
                "Architected a real-time AI chat interface with SSE streaming, conversation history, PDF/DOCX export, and a typewriter response UX using flushSync for immediate DOM updates.",
                "Designed a knowledge base management system supporting bulk document upload, model training, website crawling with live SSE progress, and a searchable document inventory.",
                "Led an operations analytics dashboard with 30+ KPIs across vessel, cargo, container, and environmental data using Recharts, with live port pulse and date-range filtering.",
                "Built an AI-powered report & template engine producing fertiliser, MIS, traffic, and forecast reports as PDFs, plus department-wise tender/circular drafts with DOCX export.",
                "Architected a 1,000+ line API client layer integrating 30+ REST/SSE endpoints, JWT auth with auto-refresh, Capacitor SecureStorage, Sentry monitoring, and Vercel Analytics.",
                "Led the Angular v8-to-v19 migration on DigiSaathi, NPCI's conversational platform serving 200K+ active users — cutting bundle size by ~30% and eliminating 3+ years of technical debt.",
                "Built ReactJS UI components and a dynamic Chart.js rendering engine (bar, line, radar) for Bosch's financial conversational analytics dashboard, integrating RESTful APIs.",
                "Owned end-to-end a React Native cross-platform AI companion app (KanhaJi AI) for Android & iOS — onboarding, personalisation, chatbot interfaces, and a conversation audit dashboard.",
                "Delivered the Live Chat Handoff & Tata IVR Management Portal, and authored RFP responses and pitch decks for NPCI, Bosch, SEBI, Tata, NEGD, LIC, SRA, and NITI Aayog.",
            ],
            skills: ["Next.js", "React", "TypeScript", "Angular (v8-19)", "React Native", "Tailwind CSS", "SSE Streaming", "RAG / LLM Integration", "Capacitor", "Recharts"]
        },
    ];

    return (
        <SectionHeading id="experience" text="Work Experience">
            <div className="relative py-8 px-4 md:pl-0 md:pr-16">
                {/* Continuous Vertical Line */}
                <div 
                    className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-64" 
                    aria-hidden="true"
                />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative grid md:grid-cols-[16rem_1fr] md:gap-8"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-6 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-border bg-primary shadow-[0_0_0_4px_hsl(var(--background))] md:left-64 md:top-8" />

                            {/* Left Column (Desktop Date ONLY) */}
                            <div className="hidden flex-col items-end gap-2 pr-8 md:flex md:pt-6">
                                <span className="flex items-center gap-2 font-mono text-sm font-medium text-foreground/80">
                                    {exp.duration}
                                </span>
                            </div>

                            {/* Right Column (Content) */}
                            <div className="pl-12 md:pl-0">
                                {/* Mobile Date */}
                                <div className="mb-2 flex md:hidden">
                                     <span className="font-mono text-sm font-medium text-foreground/80">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className="group relative rounded-lg border bg-muted/20 p-6 transition-colors hover:bg-muted/30">
                                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                                        {/* Logo Container */}
                                        <div className="flex h-12 w-auto min-w-12 max-w-[8rem] shrink-0 items-center justify-center rounded-lg border bg-white p-1">
                                            {exp.logo ? (
                                                <img 
                                                    src={exp.logo} 
                                                    alt={exp.company} 
                                                    className="h-full w-full object-contain"
                                                />
                                            ) : (
                                                <Briefcase className="h-6 w-6 text-foreground/60" />
                                            )}
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <h3 className="font-incognito text-xl font-semibold leading-tight">{exp.role}</h3>
                                            <div className="text-base font-medium text-foreground/70">{exp.company}</div>
                                            
                                            {/* Meta Info (Location & Type) - Now inside card */}
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground pt-1">
                                                <span className="flex items-center gap-1.5">
                                                    <Building2 className="h-3.5 w-3.5" />
                                                    {exp.type}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <HeadingLine className="mb-4" />

                                    <ul className="mb-6 space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                                                <span className="mt-1.5 text-primary">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="font-mono text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionHeading>
    );
};

export default Experience;
