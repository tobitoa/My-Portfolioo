import { educationItems } from "@/src/data/timelines";
import { Reveal } from "@/components/ui/reveal";

export function EducationTimeline() {
  return (
    <div className="education-timeline">
      {educationItems.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.05}>
          <article className="education-entry">
            <span className="education-marker font-mono" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p className="education-date font-mono">{item.startDate} – {item.endDate}</p>
            <div className="education-summary">
              <h2 className="font-display">{item.qualification}</h2>
              <p className="education-institution">{item.institution}</p>
              <p className="education-result">{item.summary}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
