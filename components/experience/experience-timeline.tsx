import { experienceItems } from "@/src/data/timelines";
import { ExpandableTimelineItem } from "@/components/ui/expandable-timeline-item";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceTimeline() {
  return (
    <div className="interactive-timeline experience-list">
      {experienceItems.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.04}>
          <ExpandableTimelineItem item={item} index={index} />
        </Reveal>
      ))}
    </div>
  );
}
