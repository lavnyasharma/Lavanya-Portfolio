"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import HeadingLine from "@/components/ui/heading-line";
import { experiences as workHistory } from "@/data/work";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

const Experience = () => {
    const experiences = workHistory.map((item) => ({
        ...item,
        company: "CoRover Private Limited",
        location: "Bengaluru, Karnataka, India · On-site",
        type: item.role.includes("Intern") ? "Internship" : "Full-time · Agile/Scrum",
        logo: "https://web.corover.ai/bGPT+CoRover_raw%20(2).png",
    }));

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
                            key={exp.role}
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
