import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const items = [
  { href: "https://www.linkedin.com/in/harika-reddy-87a2133ba", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://instagram.com/", icon: Instagram, label: "Instagram" },
  { href: "mailto:kollaharika46@gmail.com", icon: Mail, label: "Email" },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={it.label}
          className="glass card-hover flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
        >
          <it.icon size={18} />
        </a>
      ))}
      <div className="mx-auto h-16 w-px bg-gradient-to-b from-[color:var(--glow-purple)] to-transparent" />
    </div>
  );
}
