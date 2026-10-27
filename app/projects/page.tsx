import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeading } from "@/components/ui/page-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Projects by Pankaj Borah." };

export default function ProjectsPage() { return <PageContainer><PageHeading eyebrow="04 / Projects" title={<>Selected <span className="text-[rgb(var(--primary-hover))]">work.</span></>} description="A small, focused collection of practical software work. The page is data-driven and intentionally simple to extend." /><div className="mt-14">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></PageContainer>; }
