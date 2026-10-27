"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "tobitoa-special", label: "TOBITOA SPECIAL" },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
    return <label className="theme-control gap-2 text-[10px] text-[rgb(var(--muted-foreground))]" htmlFor="theme-selector"><span className="sr-only">Color theme</span><select id="theme-selector" value={mounted ? theme : "dark"} onChange={(event) => setTheme(event.target.value)} className="cursor-pointer font-mono text-[10px] uppercase tracking-[.08em]" aria-label="Choose color theme">{themes.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>;
}
