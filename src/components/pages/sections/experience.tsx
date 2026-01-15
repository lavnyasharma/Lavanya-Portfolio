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
            company: "CoRover",
            role: "Software Engineer",
            duration: "Nov 2023 - Present",
            location: "Bengaluru, Karnataka, India · On-site",
            type: "Full-time",
            logo: "https://web.corover.ai/bGPT+CoRover_raw%20(2).png", 
            description: [
                "Led development of Bosch AI conversational finance dashboard, integrating APIs, Chart.js, voice-based queries, and execution trace for transparent financial insights.",
                "Conducted one-on-one client calls with Bosch to gather requirements, clarify use cases, and ensure alignment between business needs and technical implementation.",
                "Built QCI (NABL & NABH) conversational platforms, adding conversation history, mid-journey feedback system, and hybrid flow + AI-driven interactions.",
                "Developed AI analytics platform frontend, enabling database integration, natural language queries, and 600+ visualizations with Plotly.js.",
                "Migrated enterprise chatbots (SEBI, NPCI DigiSaathi) from Angular 8 → 19, improving security, maintainability, and performance.",
                "Delivered rapid-turnaround chatbots (Nano Kernel in <12 hrs, ChangeInkk in <24 hrs), showcasing agility, adaptability, and client trust.",
                "Created live chatbot with Freshchat socket integration (messages, images, PDFs) and University Living chatbot for multi-API search, inquiry, and accommodation booking.",
                "Contributed to security audits (CSP, VAPT fixes), cloud migrations (GCP → Cloudflare), and mentored interns for faster onboarding and knowledge transfer."
            ],
            skills: ["TypeScript", "AngularJS", "React", "Next.js", "AI Integration", "Chart.js", "Plotly.js", "API Development"]
        },
        {
            company: "Pointerz Inc.",
            role: "Frontend Engineering Associate",
            duration: "Mar 2023 - Aug 2023",
            location: "San Francisco Bay Area · Remote",
            type: "Internship",
            logo: "https://webdn.pointerz.me/wp-content/uploads/2023/04/pointerz@2x-website-1-e1681494801103.png",
            description: [
                "Created and updated the company website using WordPress.",
                "Built a ReactJS employee management dashboard to track employees, locations, and activity status.",
                "Managed APIs, handled data processing, and deployed on AWS."
            ],
            skills: ["Front-End Development", "HTML", "ReactJS", "AWS", "WordPress", "API Management"]
        }
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
