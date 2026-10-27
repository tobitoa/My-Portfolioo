import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ProfilePortrait } from "@/components/home/profile-portrait";

export function HeroSection() {
  return (
    <section className="hero-shell noise relative overflow-hidden bg-[rgb(var(--background))] lg:min-h-[calc(100vh-77px)]">
      <div className="site-grid absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_50%,rgb(var(--primary)/.08),transparent_37%),linear-gradient(105deg,rgb(var(--background))_20%,transparent_75%)]" />
      <div className="orbital-glow" />
      <div className="orbital-ring" />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-start gap-12 px-5 pb-10 pt-12 sm:px-8 sm:pt-16 md:gap-14 md:pb-28 lg:min-h-[calc(100vh-77px)] lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-8 lg:px-12 lg:py-0">
        <div className="relative z-10 max-w-2xl lg:pb-24">
          <div className="mb-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.18em] text-[rgb(var(--primary-hover))] sm:mb-8 sm:text-[10px] sm:tracking-[.22em]">
            <span className="h-px w-8 bg-[rgb(var(--primary))]" />
            Full-stack web developer
          </div>

          <h1 className="font-name text-[clamp(3.35rem,16vw,5.7rem)] font-semibold leading-[.88] tracking-[-.055em] text-[rgb(var(--foreground))] sm:text-[clamp(4.5rem,11vw,7rem)] lg:text-[clamp(5.4rem,9vw,8.5rem)]">
            PANKAJ
            <br />
            <span className="text-[rgb(var(--primary-hover))]">BORAH</span>
          </h1>

          <p className="mt-8 max-w-lg font-display text-xl font-medium leading-snug tracking-[-.035em] text-[rgb(var(--foreground))] sm:mt-9 sm:text-2xl">
            Building modern web applications <span className="text-[rgb(var(--muted-foreground))]">with purpose.</span>
          </p>
          <p className="hero-description mt-5 max-w-md text-sm leading-7 text-[rgb(var(--muted-foreground))]">
            Electrical Engineering undergraduate and Full Stack Developer focused on modern web technologies, responsive interfaces, and practical software solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row min-[430px]:flex-wrap">
            <Link href="/projects" className="button-primary group">
              View my work
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact me
            </Link>
            {siteConfig.resumePath && <a href={siteConfig.resumePath} className="button-resume" download="Pankaj-Borah-Resume.pdf">
              <Download size={15} strokeWidth={1.7} /> RESUME
            </a>}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6">
            <div className="flex gap-1">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex min-h-11 min-w-11 items-center justify-center text-[rgb(var(--muted-foreground))] transition-colors hover:text-[rgb(var(--foreground))]"><Github size={16} /></a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex min-h-11 min-w-11 items-center justify-center text-[rgb(var(--muted-foreground))] transition-colors hover:text-[rgb(var(--foreground))]"><Linkedin size={16} /></a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex min-h-11 min-w-11 items-center justify-center text-[rgb(var(--muted-foreground))] transition-colors hover:text-[rgb(var(--foreground))]"><Instagram size={16} /></a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email Pankaj Borah" className="inline-flex min-h-11 min-w-11 items-center justify-center text-[rgb(var(--muted-foreground))] transition-colors hover:text-[rgb(var(--foreground))]"><Mail size={16} /></a>
            </div>
            <span className="h-4 w-px bg-[rgb(var(--border)/var(--border-alpha))]" />
            <div className="flex gap-3 font-mono text-[10px] uppercase tracking-[.12em] text-[rgb(var(--faint-foreground))]">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full lg:translate-y-8 lg:justify-self-end">
          <ProfilePortrait src={siteConfig.profileImage} />
        </div>
      </div>

      <div className="absolute bottom-7 left-5 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-[rgb(var(--faint-foreground))] sm:flex sm:left-8 lg:left-12">
        <ArrowDown size={13} className="animate-bounce text-[rgb(var(--primary))]" />
        Scroll to explore
      </div>
    </section>
  );
}
