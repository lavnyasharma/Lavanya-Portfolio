"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";

import { Robot } from "@/components/ui/robot";
import env from "@/config/env";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  return (
    <SectionHeading text="About" id="about" className="overflow-hidden">
      <div className="flex items-center lg:h-[95vh]">
        <div className="relative flex-1 px-4 py-12 md:px-12">
          <h2 className="font-incognito text-2xl font-semibold md:text-5xl lg:text-4xl">
            Meet the Developer,
            <br />
            Not Just the Code
          </h2>

          <HeadingLine className="mt-6" lineWidth={40} />

          <Robot className="absolute top-6 -right-8 z-5 w-64 font-mono text-white max-md:scale-x-[-1] md:top-8 md:right-4">
            <div className="max-md:scale-x-[-1]">Hey👋</div>
          </Robot>

          <div className="text-foreground/70 bg-muted/20 relative z-10 mx-auto mt-6 max-w-3xl rounded-lg border-2 border-dotted text-sm leading-relaxed backdrop-blur-3xl md:text-base">
            <div className="p-6">
              <p className="mb-6">
                I am a Software Engineer with 3 years of experience owning end-to-end delivery of responsive web applications, currently building AI-powered interfaces at CoRover, Bengaluru. My expertise lies in architecting enterprise-grade frontend systems, conversational AI platforms, and real-time analytics dashboards using React, Next.js, Angular (v8–19), and TypeScript.
              </p>

              <p className="">
                I&apos;ve independently driven design, development, and delivery of enterprise-grade UI and RFPs for clients including NPCI, Bosch, SEBI, and Tata—integrating LLM APIs, RAG pipelines, and SSE streaming into production products. I&apos;m an AWS Certified Cloud Practitioner and National Winner at Smart India Hackathon 2022.
              </p>
            </div>

            <div className="border-t-2 border-dotted p-6">
              <Button
                asChild
                size={"lg"}
                variant={"outline"}
                className="group border-2 font-medium"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Left */}
        <div className="relative hidden h-full items-center justify-center border-l md:w-1/2 lg:flex">
          <div className="absolute inset-0 size-full">
            <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative py-4 md:w-72"
          >
            <div className="sticky top-8 h-auto w-full">
              {/* Stacked effect */}
              <div className="bg-primary/10 absolute inset-0 rotate-3 rounded-2xl" />
              <div className="bg-primary/20 absolute inset-0 rotate-1 rounded-2xl" />

              {/* Main card */}
              <div className="bg-background relative rounded-2xl border-2 p-6 shadow-xl">
                <div className="text-center">
                  <div className="border-foreground/20 bg-muted/20 mb-4 overflow-hidden rounded-lg border-2 border-dashed p-4">
                    <img
                      src="/ascii-art-profile.png"
                      alt="ASCII"
                      className="-mb-5 h-auto w-full object-cover object-center dark:invert"
                    />
                  </div>
                  <h3 className="font-incognito text-2xl font-semibold">
                    Lavanya
                  </h3>
                  <p className="text-foreground/60 mt-1 font-mono text-sm">
                    @lavanya
                  </p>

                  {/* Status badges */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <Badge
                      variant="outline"
                      className={cn("border-green-500/30 bg-green-500/10", {
                        "border-red-500/30 bg-red-500/10":
                          !env.NEXT_PUBLIC_AVAILABLE_STATUS,
                      })}
                    >
                      <div
                        className={cn(
                          "mr-1 h-2 w-2 animate-pulse rounded-full bg-green-500",
                          {
                            "bg-red-500": !env.NEXT_PUBLIC_AVAILABLE_STATUS,
                          },
                        )}
                      />
                      {!env.NEXT_PUBLIC_AVAILABLE_STATUS
                        ? "Not Available"
                        : "Available"}
                    </Badge>
                    <Badge variant="outline">3+ Years</Badge>
                    <Badge variant="outline">Full-Stack</Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default About;
