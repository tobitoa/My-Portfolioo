"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  SiAngular,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJquery,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Activity, Code2, DatabaseZap, Zap, DraftingCompass, Globe2 } from "lucide-react";
import type { SkillGroupData } from "@/src/data/skills";
import { Reveal } from "@/components/ui/reveal";

const skillIcons = {
  angular: SiAngular,
  api: Globe2,
  circuit: Activity,
  code: Code2,
  css: SiCss,
  git: SiGit,
  github: SiGithub,
  html: SiHtml5,
  javascript: SiJavascript,
  jquery: SiJquery,
  mongodb: SiMongodb,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  power: Zap,
  react: SiReact,
  render: SiRender,
  sql: DatabaseZap,
  typescript: SiTypescript,
  vercel: SiVercel,
  ui: DraftingCompass,
} as const;

export function SkillGroup({ number, title, skills, delay = 0 }: SkillGroupData & { delay?: number }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <Reveal delay={delay} className="skill-group">
      <div className="skill-group-heading">
        <span className="font-mono text-[10px] text-[rgb(var(--primary))]">{number}</span>
        <h2 className="font-display text-xl font-semibold tracking-[-.035em] text-[rgb(var(--foreground))]">{title}</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.icon];
          const selected = activeSkill === skill.name;
          const descriptionId = `skill-${number}-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <li key={skill.name}>
              <button
                type="button"
                className={`skill-card${selected ? " is-selected" : ""}`}
                aria-label={`${skill.name}: ${skill.description}`}
                aria-expanded={selected}
                aria-controls={descriptionId}
                onClick={() => setActiveSkill(selected ? null : skill.name)}
                onBlur={() => setActiveSkill(null)}
                style={skill.accent ? { "--skill-accent": skill.accent } as CSSProperties : undefined}
              >
                <span className="skill-card-heading">
                  <Icon className="skill-logo" aria-hidden="true" />
                  <span>{skill.name}</span>
                </span>
                <span id={descriptionId} className="skill-description" aria-hidden={!selected}>
                  {skill.description}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
