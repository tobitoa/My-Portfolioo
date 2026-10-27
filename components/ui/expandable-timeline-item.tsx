"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/src/data/timelines";

function formatDates(startDate: string, endDate: string) {
  return startDate === endDate ? startDate : `${startDate} – ${endDate}`;
}

export function ExpandableTimelineItem({ item, index }: Readonly<{ item: ExperienceItem; index: number }>) {
  const [expanded, setExpanded] = useState(false);
  const buttonId = `experience-${item.id}-trigger`;
  const detailsId = `experience-${item.id}-details`;

  return (
    <article
      className="timeline-entry"
      data-expanded={expanded}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setExpanded(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setExpanded(false); }}
    >
      <span className="timeline-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <button
        id={buttonId}
        type="button"
        className="timeline-trigger"
        aria-expanded={expanded}
        aria-controls={detailsId}
        onClick={(event) => {
          if (event.detail === 0 || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            setExpanded((value) => !value);
          }
        }}
        onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setExpanded(true); }}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) setExpanded(false);
        }}
      >
        <span className="timeline-date font-mono">{formatDates(item.startDate, item.endDate)}</span>
        <span className="timeline-summary">
          <span className="timeline-role font-display" role="heading" aria-level={2}>{item.role}</span>
          <span className="timeline-organisation">{item.organisation}</span>
        </span>
        <ChevronDown className="timeline-chevron" size={18} aria-hidden="true" />
      </button>
      <div
        id={detailsId}
        className="timeline-details-grid"
        aria-labelledby={buttonId}
        aria-hidden={!expanded}
        role="region"
      >
        <div className="timeline-details-inner">
          <div className="timeline-detail-content">
            <p className="max-w-3xl text-sm leading-7 text-[rgb(var(--muted-foreground))]">{item.description}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="timeline-detail-point">{responsibility}</li>
              ))}
            </ul>
            <div className="mt-5">
              <p className="timeline-detail-label">Technical areas</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {item.technicalAreas.map((area) => (
                  <li className="timeline-technology" key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
