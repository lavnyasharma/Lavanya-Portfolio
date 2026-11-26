"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  achievements,
  beyondCode,
  clients,
  education,
  experiences,
  projects,
  skillGroups,
  type WorkCategory,
} from "@/data/work";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FILTERS = ["All", "AI", "Web", "Mobile", "Personal"] as const;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-b px-4 py-10 md:px-8">
    <h2 className="font-incognito mb-6 text-2xl font-semibold md:text-3xl">
      {title}
    </h2>
    {children}
  </section>
);

const WorkPage = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.category.includes(filter as WorkCategory),
  );

  return (
    <div className="bg-background h-dvh w-full overflow-y-auto">
      <main className="mx-auto max-w-6xl md:border-x">
        <header className="border-b px-4 py-8 md:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-3 font-mono">
            <Link href="/portfolio">
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>
          </Button>
          <h1 className="font-incognito mb-3 text-4xl font-semibold md:text-5xl">
            All Work
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            Everything I have built and done: products, client delivery,
            on-site requirement gathering, proposals and mentoring.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="border-2 font-medium">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                Resume
              </a>
            </Button>
            {[
              { label: "GitHub", href: siteConfig.github },
              { label: "LinkedIn", href: siteConfig.linkedin },
              { label: "Email", href: `mailto:${siteConfig.email}` },
            ].map((link) => (
              <Button
                key={link.label}
                asChild
                variant="outline"
                className="border-2 font-medium"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight className="size-3" />
                </a>
              </Button>
            ))}
          </div>
        </header>

        <Section title={`Projects (${visible.length})`}>
          <div className="mb-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
                  filter === f
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {visible.map((project) => (
              <article
                key={project.title}
                className="bg-muted/20 flex flex-col rounded-lg border p-5"
              >
                {project.image && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 block overflow-hidden rounded-md border"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} front page`}
                      loading="lazy"
                      className="aspect-video w-full object-cover object-top"
                    />
                  </a>
                )}
                <div className="text-muted-foreground mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span>
                    {project.client} · {project.date}
                  </span>
                  <span className="uppercase">{project.status}</span>
                </div>
                <h3 className="font-incognito mb-2 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.highlights.length > 0 && (
                  <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-4 font-mono text-xs">
                  {[
                    { label: "Live demo", href: project.website },
                    { label: "Android app", href: project.android },
                    { label: "Code", href: project.github },
                  ]
                    .filter((link) => link.href)
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 underline underline-offset-4"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3" />
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Beyond Code">
          <div className="grid gap-4 md:grid-cols-2">
            {beyondCode.map((item) => (
              <article key={item.title} className="rounded-lg border p-5">
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <p className="text-muted-foreground mb-6 text-sm">
            CoRover Private Limited, Bengaluru · Nov 2023 - Present
          </p>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.role} className="border-l-2 pl-4">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground mb-2 font-mono text-xs">
                  {exp.duration}
                </p>
                <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {exp.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Clients">
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => (
              <Badge key={client} variant="outline" className="px-3 py-1">
                {client}
              </Badge>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2 text-sm font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Achievements & Education">
          <ul className="mb-6 list-disc space-y-1.5 pl-5 text-sm">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="font-semibold">{education.school}</p>
          <p className="text-muted-foreground text-sm">
            {education.degree} · {education.duration}
          </p>
        </Section>
      </main>
    </div>
  );
};

export default WorkPage;
