export type SkillIconName =
  | "angular"
  | "api"
  | "circuit"
  | "code"
  | "css"
  | "git"
  | "github"
  | "html"
  | "javascript"
  | "jquery"
  | "mongodb"
  | "nextjs"
  | "nodejs"
  | "postgresql"
  | "power"
  | "react"
  | "render"
  | "sql"
  | "typescript"
  | "vercel"
  | "ui";

export type Skill = {
  name: string;
  category: string;
  icon: SkillIconName;
  description: string;
  accent?: string;
};

export type SkillGroupData = {
  number: string;
  title: string;
  skills: readonly Skill[];
};

export const skillGroups: readonly SkillGroupData[] = [
  {
    number: "01",
    title: "Frontend Development",
    skills: [
      { name: "HTML", category: "Frontend Development", icon: "html", description: "Structures semantic web pages.", accent: "#e34f26" },
      { name: "CSS", category: "Frontend Development", icon: "css", description: "Styles responsive layouts and interfaces.", accent: "#663399" },
      { name: "JavaScript", category: "Frontend Development", icon: "javascript", description: "Adds application logic and browser interactions.", accent: "#f7df1e" },
      { name: "TypeScript", category: "Frontend Development", icon: "typescript", description: "Adds static types to JavaScript applications.", accent: "#3178c6" },
      { name: "React", category: "Frontend Development", icon: "react", description: "Builds component-based user interfaces.", accent: "#61dafb" },
      { name: "Next.js", category: "Frontend Development", icon: "nextjs", description: "Framework for routing and rendering React apps." },
      { name: "Angular", category: "Frontend Development", icon: "angular", description: "Builds structured applications with TypeScript.", accent: "#dd0031" },
      { name: "jQuery", category: "Frontend Development", icon: "jquery", description: "Simplifies DOM manipulation and browser events.", accent: "#0769ad" },
      { name: "DOM Manipulation", category: "Frontend Development", icon: "code", description: "Updates page content through browser APIs." },
    ],
  },
  {
    number: "02",
    title: "Backend & Application",
    skills: [
      { name: "Node.js", category: "Backend and Application Development", icon: "nodejs", description: "Runs JavaScript on the server.", accent: "#5fa04e" },
      { name: "REST APIs", category: "Backend and Application Development", icon: "api", description: "Connects applications through HTTP resources." },
      { name: "API Integration", category: "Backend and Application Development", icon: "api", description: "Connects applications with external services." },
      { name: "Asynchronous JavaScript", category: "Backend and Application Development", icon: "javascript", description: "Coordinates non-blocking tasks and network requests.", accent: "#f7df1e" },
      { name: "Application Logic", category: "Backend and Application Development", icon: "code", description: "Turns product requirements into application behaviour." },
      { name: "SQL", category: "Backend and Application Development", icon: "sql", description: "Queries and manages data in relational databases." },
      { name: "Database Fundamentals", category: "Backend and Application Development", icon: "sql", description: "Understands how applications store and retrieve data." },
    ],
  },
  {
    number: "03",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", category: "Databases", icon: "postgresql", description: "Relational database for structured application data.", accent: "#4169e1" },
      { name: "MongoDB", category: "Databases", icon: "mongodb", description: "Document database for flexible application data.", accent: "#47a248" },
    ],
  },
  {
    number: "04",
    title: "Deployment & Development Tools",
    skills: [
      { name: "Render", category: "Deployment and Development Tools", icon: "render", description: "Cloud platform for deploying and hosting applications.", accent: "#46e3b7" },
      { name: "Vercel", category: "Deployment and Development Tools", icon: "vercel", description: "Deploys and hosts web applications." },
      { name: "Git", category: "Deployment and Development Tools", icon: "git", description: "Tracks source-code changes and collaboration.", accent: "#f05032" },
      { name: "GitHub", category: "Deployment and Development Tools", icon: "github", description: "Hosts repositories and supports collaboration." },
    ],
  },
  {
    number: "05",
    title: "Additional Technical",
    skills: [
      { name: "PLC Programming", category: "Additional Technical Skills", icon: "circuit", description: "Programs controllers for industrial automation." },
      { name: "Ladder Logic", category: "Additional Technical Skills", icon: "circuit", description: "Models control sequences with relay-inspired logic diagrams." },
      { name: "Power Systems", category: "Additional Technical Skills", icon: "power", description: "Studies electrical transmission and protection systems." },
      { name: "Electrical Engineering Fundamentals", category: "Additional Technical Skills", icon: "power", description: "Applies core electrical concepts to practical systems." },
      { name: "UI Design", category: "Additional Technical Skills", icon: "ui", description: "Shapes clear interfaces around people and tasks." },
    ],
  },
];
