import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = { title: "Experience", description: "Professional and technical experience of Pankaj Borah." };

export default function ExperiencePage() { return <PageContainer><PageHeading eyebrow="03 / Experience" title={<>Learning through <span>real work.</span></>} description="A timeline of internships and technical environments that have shaped how I approach software, systems, and problem solving." /><div className="mt-12 md:mt-14"><ExperienceTimeline /></div></PageContainer>; }
