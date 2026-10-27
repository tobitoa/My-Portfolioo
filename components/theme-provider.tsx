"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <NextThemesProvider attribute="class" storageKey="tobitoa-theme" defaultTheme="dark" themes={["dark", "light", "tobitoa-special"]} enableSystem={false} disableTransitionOnChange>{children}</NextThemesProvider>;
}
