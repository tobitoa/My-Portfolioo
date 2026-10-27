"use client";

import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/src/data/projects";

export function ProjectCard({ project }: Readonly<{ project: Project }>) {
  const [imageFailed, setImageFailed] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsId = `${project.slug}-details`;
  const hasDetails = Boolean(project.details || project.highlights?.length || project.features?.length || project.methodology);

  return (
    <article
      className="surface-panel card-interactive princess-project-card project-card group grid gap-8 p-5 sm:p-6 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-12 md:p-8"
      data-details-open={detailsOpen}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setDetailsOpen(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setDetailsOpen(false); }}
      onFocus={() => setDetailsOpen(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDetailsOpen(false); }}
    >
      <div className="project-image-wrap relative aspect-[16/10] overflow-hidden bg-[rgb(var(--surface))]">
        {imageFailed ? <div className="flex h-full items-center justify-center px-6 text-center font-mono text-[10px] uppercase tracking-[.16em] text-[rgb(var(--faint-foreground))]" role="img" aria-label={`${project.title} preview unavailable`}>Preview unavailable</div> : <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 42vw, 38vw"
            className="object-cover brightness-[.88] contrast-[1.04] transition duration-300 group-hover:scale-[1.03] group-hover:brightness-100"
            onError={() => setImageFailed(true)}
          />}
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[rgb(var(--primary))]">{project.category}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.06em] text-[rgb(var(--foreground))]">{project.title}</h2>
            {project.subtitle && <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">{project.subtitle}</p>}
          </div>
          <ArrowUpRight className="text-[rgb(var(--primary))] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} strokeWidth={1.3} />
        </div>

        <p className="mt-5 max-w-md text-sm leading-7 text-[rgb(var(--muted-foreground))]">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="border border-white/[var(--border-alpha)] px-2.5 py-1.5 font-mono text-[9px] text-[rgb(var(--faint-foreground))]">
                {technology}
              </span>
            ))}
          </div>
        )}

        {hasDetails && <>
          <button type="button" className="project-details-toggle mt-5 md:hidden" aria-expanded={detailsOpen} aria-controls={detailsId} onClick={() => setDetailsOpen((value) => !value)}>
            {detailsOpen ? "Hide details" : "View details"} <ArrowUpRight size={14} aria-hidden="true" />
          </button>
          <div id={detailsId} className="project-details-panel" aria-hidden={!detailsOpen}>
            <div className="project-details-inner">
              {project.details && <p className="text-sm leading-7 text-[rgb(var(--muted-foreground))]">{project.details}</p>}
              {project.highlights && <p className="mt-4 max-w-xl font-mono text-[9px] uppercase leading-5 tracking-[.11em] text-[rgb(var(--faint-foreground))]" aria-label="Project capabilities">
                {project.highlights.map((highlight, index, highlights) => <span key={highlight}>
                  {highlight}{index < highlights.length - 1 && <span className="text-[rgb(var(--primary)/.7)]" aria-hidden="true"> · </span>}
                </span>)}
              </p>}
              {project.features && <ul className="mt-4 grid gap-2 text-xs leading-6 text-[rgb(var(--muted-foreground))] sm:grid-cols-2">
                {project.features.map((feature) => <li key={feature} className="project-feature">{feature}</li>)}
              </ul>}
              {project.methodology && <p className="mt-4 border-l border-[rgb(var(--primary)/.42)] pl-3 font-mono text-[10px] leading-5 text-[rgb(var(--faint-foreground))]">{project.methodology}</p>}
            </div>
          </div>
        </>}

        <div className="mt-8 flex flex-wrap gap-5">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary-hover))]">
            Live demo <ExternalLink size={14} />
          </a>
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary-hover))]">
            GitHub <Github size={15} />
          </a>}
        </div>
      </div>
    </article>
  );
}
