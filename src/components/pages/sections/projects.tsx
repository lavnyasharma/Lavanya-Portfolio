"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "PortGPT",
      description:
        "An enterprise AI assistant for VOC Port operations — owned end-to-end as Lead Frontend Engineer, from architecture to deployment across web, iOS, and Android. Features real-time SSE chat streaming, a knowledge base with website crawling, a 30+ KPI analytics dashboard, and an AI-powered report & template engine.",
      tags: ["AI", "Next.js", "Enterprise", "Frontend"],
      image: "/projects/portgpt-card.svg",
      live: "https://portgpt.sahanasystem.com",
      website: "https://portgpt.sahanasystem.com",
      date: "2024 - Present",
      status: "ongoing",
    },
    {
      title: "DigiSaathi",
      description:
        "NPCI's conversational helpline platform serving 200K+ active users. Independently drove the Angular v8-to-v19 migration, cutting bundle size by ~30% and eliminating 3+ years of technical debt, plus AI-powered analytics dashboards tracking voice/text interactions.",
      tags: ["Angular", "Government", "Analytics"],
      image: "/projects/digisaathi-card.svg",
      live: "https://digisaathi.info",
      website: "https://digisaathi.info",
      date: "2023 - 2026",
      status: "completed",
    },
    {
      title: "Knodal AI",
      description:
        "An AI-powered analytics and conversational BI platform that enables users to explore data using natural language, generate insights, and visualize metrics through an intuitive, modern frontend experience.",
      tags: ["AI", "Analytics", "Conversational BI", "Frontend"],
      image: "/projects/knodal.png",
      live: "https://app.knodal.ai",
      website: "https://knodal.ai",
      date: "2024",
      status: "completed",
    },
    {
      title: "Remote Mac Control",
      description:
        "A personal tool for remotely accessing and controlling a Mac — screen viewing, input control, and automation over a secure connection, built to manage a machine from anywhere without being physically present.",
      tags: ["macOS", "Automation", "Personal"],
      image: "/projects/remote-mac-card.svg",
      date: "2025",
      status: "completed",
    },
    {
      title: "Developer Portfolio",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      tags: ["Portfolio", "Fullstack", "Personal"],
      github: "https://github.com/lavnyasharma",
      image: "/projects/portfolio-screenshot.png",
      live: env.NEXT_PUBLIC_APP_URL,
      date: "Sep, 2025",
      status: "completed",
    },
  ];

  const tagColors = {
    Portfolio: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    Fullstack: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Personal: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Telegram: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Management: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Bot: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    Anime: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    Streaming: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    AI: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Analytics: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    "Conversational BI": "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    Frontend: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    "Next.js": "bg-neutral-500/10 text-neutral-600 border-neutral-500/30",
    Enterprise: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    Angular: "bg-red-500/10 text-red-600 border-red-500/30",
    Government: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    macOS: "bg-slate-500/10 text-slate-600 border-slate-500/30",
    Automation: "bg-violet-500/10 text-violet-600 border-violet-500/30",
  };

  return (
    <SectionHeading id="projects" text="Projects">
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side  */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                {/* Date & Status */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {project.date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        project.status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500",
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title  */}
                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                    {project.title}
                  </h3>
                  <HeadingLine className="mt-3" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  {project.description}
                </p>

                {/* Tags  */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "border font-mono text-xs",
                        tagColors[tag as keyof typeof tagColors],
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/*  Buttons */}
                {!project.website && !project.live && !project.github ? (
                  <div className="text-muted-foreground inline-flex w-fit items-center gap-2 border-2 border-dashed px-4 py-2 font-mono text-xs uppercase">
                    Private Project
                  </div>
                ) : (
                <div className="flex flex-wrap gap-3">
                  {/* Primary Button: Website or GitHub */}

                  {project.website ? (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group/btn relative border-2 font-medium"
                    >
                 
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Website
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group/btn relative border-2 font-medium"
                      disabled={!project.github}
                    >
                      <a
                        href={project.github || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group/btn border-2 font-medium"
                    disabled={!project.live}
                  >
                    <a
                      href={project.live || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
                )}

                {/*  slanted lines */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  {/* 1st Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* 2nd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  {/* 3rd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  {/* 4th Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VIEW ALL PROJECTS ON GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default Projects;
