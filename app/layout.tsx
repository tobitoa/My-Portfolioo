import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { inter, playfairDisplay, plex, spaceGrotesk } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.brand} — ${siteConfig.title}`, template: `%s — ${siteConfig.brand}` },
  description: siteConfig.description,
  openGraph: { title: siteConfig.brand, description: siteConfig.description, type: "website", url: siteConfig.url },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} ${plex.variable}`}>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
