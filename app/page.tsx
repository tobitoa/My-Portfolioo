import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Zap } from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  return <>
    <HeroSection />
    <section className="border-t border-white/[var(--border-alpha)] bg-[rgb(var(--surface))]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-28">
        <Reveal><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[rgb(var(--primary))]">/ the approach</p><h2 className="mt-5 max-w-sm font-display text-4xl font-bold leading-[.98] tracking-[-.065em] text-[rgb(var(--foreground))]">Useful by design.<br />Precise by default.</h2></Reveal>
        <Reveal delay={.1} className="grid gap-8 sm:grid-cols-3"><div><Code2 size={20} className="text-[rgb(var(--primary))]" strokeWidth={1.4} /><h3 className="mt-5 font-display text-lg font-semibold">Clear interfaces</h3><p className="mt-3 text-sm leading-6 text-[rgb(var(--muted-foreground))]">Thoughtful, responsive experiences that keep the product in focus.</p></div><div><Layers3 size={20} className="text-[rgb(var(--primary))]" strokeWidth={1.4} /><h3 className="mt-5 font-display text-lg font-semibold">Solid foundations</h3><p className="mt-3 text-sm leading-6 text-[rgb(var(--muted-foreground))]">Maintainable application logic, APIs, and systems built to grow.</p></div><div><Zap size={20} className="text-[rgb(var(--primary))]" strokeWidth={1.4} /><h3 className="mt-5 font-display text-lg font-semibold">Learn by making</h3><p className="mt-3 text-sm leading-6 text-[rgb(var(--muted-foreground))]">An engineering mindset shaped by curiosity and practical work.</p></div></Reveal>
      </div>
    </section>
    <section className="bg-[rgb(var(--background-deep))]"><div className="mx-auto flex w-full max-w-[1400px] flex-col gap-7 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-20"><div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[rgb(var(--primary))]">Have a question?</p><h2 className="mt-3 font-display text-3xl font-bold tracking-[-.055em]">Let&apos;s make something useful.</h2></div><Link href="/contact" className="group inline-flex items-center gap-3 text-sm font-semibold text-[rgb(var(--foreground))]">Start a conversation <ArrowUpRight size={17} className="text-[rgb(var(--primary))] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></section>
  </>;
}
