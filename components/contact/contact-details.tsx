import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactLinks = [
  { label: "Instagram", value: "@tobitoa_", href: siteConfig.links.instagram, icon: Instagram },
  { label: "LinkedIn", value: "linkedin.com/in/tobitoa", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/tobitoa", href: siteConfig.links.github, icon: Github },
];

export function ContactDetails() {
  return (
    <div className="contact-details space-y-6">
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[.17em] text-[rgb(var(--faint-foreground))]">Get in touch</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-.04em] text-[rgb(var(--foreground))]">Good work starts with a conversation.</h2>
        <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted-foreground))]">I’m open to discussing development opportunities, thoughtful collaborations, and useful ideas.</p>
      </div>
      <div className="contact-row">
        <Mail size={17} className="mt-1 shrink-0 text-[rgb(var(--primary))]" aria-hidden="true" />
        <div><p className="font-mono text-[9px] uppercase tracking-[.17em] text-[rgb(var(--faint-foreground))]">Email</p><a href={`mailto:${siteConfig.email}`} className="mt-1 block min-h-11 break-all py-2 text-sm text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary-hover))]">{siteConfig.email}</a></div>
      </div>
      {contactLinks.map(({ label, value, href, icon: Icon }) => (
        <div className="contact-row" key={label}>
          <Icon size={17} className="mt-1 shrink-0 text-[rgb(var(--primary))]" aria-hidden="true" />
          <div><p className="font-mono text-[9px] uppercase tracking-[.17em] text-[rgb(var(--faint-foreground))]">{label}</p><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${value} (opens in a new tab)`} className="mt-1 inline-flex min-h-11 items-center break-all text-sm text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary-hover))]">{value}</a></div>
        </div>
      ))}
      <div className="contact-row border-t border-[rgb(var(--border)/var(--border-alpha))] pt-5">
        <MapPin size={17} className="mt-1 shrink-0 text-[rgb(var(--primary))]" aria-hidden="true" />
        <div><p className="font-mono text-[9px] uppercase tracking-[.17em] text-[rgb(var(--faint-foreground))]">Based in</p><p className="mt-2 text-sm text-[rgb(var(--foreground))]">{siteConfig.location}</p></div>
      </div>
    </div>
  );
}
