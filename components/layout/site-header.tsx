"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, siteConfig } from "@/config/site";
import { ThemeSelector } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="relative z-50 border-b border-white/[var(--border-alpha)] bg-[rgb(var(--background)/.72)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center" onClick={() => setOpen(false)} aria-label={`${siteConfig.brand} home`}>
          <span className="font-display text-[16px] font-semibold lowercase tracking-[-0.045em] text-[rgb(var(--foreground))] transition-colors group-hover:text-[rgb(var(--primary-hover))]">{siteConfig.brand}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`relative inline-flex min-h-11 items-center py-3 text-[12px] font-medium transition-colors ${active ? "text-[rgb(var(--foreground))]" : "text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]"}`}>
              {item.label}
              {active && <span className="absolute inset-x-0 -bottom-[1px] mx-auto h-px w-4 bg-[rgb(var(--primary))]" />}
            </Link>;
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeSelector />
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-[rgb(var(--border)/var(--border-alpha))] text-[rgb(var(--foreground))] lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence initial={false}>{open && <motion.nav id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .22, ease: "easeOut" }} className="overflow-hidden border-t border-white/[var(--border-alpha)] bg-[rgb(var(--background))] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} className={`flex min-h-12 items-center border-b border-white/[var(--border-alpha)] py-3.5 text-sm ${active ? "text-[rgb(var(--primary-hover))]" : "text-[rgb(var(--muted-foreground))]"}`}>{item.label}</Link>;
          })}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5"><ThemeSelector /></div>
        </div>
      </motion.nav>}</AnimatePresence>
    </header>
  );
}
