import { navLinks, site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const socials = [
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon, external: false },
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-medium text-white">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{site.role}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-zinc-500 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          {socials.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/5 py-5 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
