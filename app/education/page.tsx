import type { Metadata } from "next";
import { EducationTimeline } from "@/components/education/education-timeline";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = { title: "Education", description: "Academic background of Pankaj Borah." };

export default function EducationPage() {
  return (
    <PageContainer>
      <PageHeading
        eyebrow="06 / Education"
        title={<>A foundation in <span>systems.</span></>}
        description="An academic path rooted in electrical engineering and extended through the practice of building software."
      />
      <div className="mt-12 max-w-4xl md:mt-14">
        <EducationTimeline />
      </div>
    </PageContainer>
  );
}
