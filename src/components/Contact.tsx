import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import CopyEmailButton from "./CopyEmailButton";
import Reveal from "./Reveal";
import Section from "./Section";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const profiles = [
  { label: "LinkedIn", value: "Connect with me", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "See my code", href: site.socials.github, Icon: GitHubIcon },
];

const cardClass =
  "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-indigo-400/40 hover:bg-white/[0.04]";
const iconClass =
  "grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-indigo-300 transition group-hover:text-white";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a project in mind? Share a few details and I'll get back to you. I work with clients across India and internationally."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          <div className={cardClass}>
            <a href={`mailto:${site.email}`} className="flex min-w-0 flex-1 items-center gap-4">
              <span className={iconClass}>
                <MailIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-zinc-500">Email</span>
                <span className="block truncate font-medium text-white">{site.email}</span>
              </span>
            </a>
            <CopyEmailButton className="shrink-0" />
          </div>

          {profiles.map(({ label, value, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
              <span className={iconClass}>
                <Icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-zinc-500">{label}</span>
                <span className="block truncate font-medium text-white">{value}</span>
              </span>
              <ArrowRightIcon className="size-4 shrink-0 -rotate-45 text-zinc-500 transition group-hover:text-white" />
            </a>
          ))}

          <p className="px-1 pt-2 text-sm leading-relaxed text-zinc-500">
            Based in {site.location} (IST, UTC+5:30) · Flexible hours for international clients.
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Send a project enquiry</h3>
            <p className="mt-1 mb-6 text-sm text-zinc-400">
              A few details help me reply with a useful estimate.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
