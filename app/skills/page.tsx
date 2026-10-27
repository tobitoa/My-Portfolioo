import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeading } from "@/components/ui/page-heading";
import { SkillGroup } from "@/components/skills/skill-group";
import { skillGroups } from "@/src/data/skills";

export const metadata: Metadata = { title: "Skills", description: "Technical skills and tools used by Pankaj Borah." };

export default function SkillsPage() { return <PageContainer><PageHeading eyebrow="05 / Skills" title={<>Tools for <span>building well.</span></>} description="A working set of frontend, application, database, deployment, and electrical engineering capabilities." /><div className="mt-12 grid min-w-0 gap-x-10 gap-y-12 md:mt-14 md:grid-cols-2">{skillGroups.map((group, index) => <SkillGroup key={group.number} {...group} delay={index * .05} />)}</div></PageContainer>; }
