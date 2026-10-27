import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";

export function SiteFooter() {
  return <footer className="border-t border-white/[var(--border-alpha)] bg-[rgb(var(--background-deep))]">
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
         <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--primary))]">Let&apos;s build with intent</p><p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em]">Stay curious. Ship useful.</p></div>
        <div className="flex flex-wrap items-center gap-2"><a href={`mailto:${siteConfig.email}`} aria-label="Email Pankaj Borah" className="social-link"><Mail size={17} /></a><a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><Instagram size={17} /></a><a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin size={17} /></a><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><Github size={17} /></a><Link href="/contact" className="inline-flex min-h-11 items-center gap-1 px-2 text-xs font-medium text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary-hover))]">Get in touch <ArrowUpRight size={14} /></Link></div>
      </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/[var(--border-alpha)] pt-5 text-[10px] text-[rgb(var(--faint-foreground))] sm:flex-row"><p>© {new Date().getFullYear()} {siteConfig.brand}. Built by {siteConfig.name}.</p><nav className="flex flex-wrap gap-x-4 gap-y-2">{navigation.slice(0, 5).map((item) => <Link key={item.href} href={item.href} className="hover:text-[rgb(var(--foreground))]">{item.label}</Link>)}</nav></div>
    </div>
  </footer>;
}
