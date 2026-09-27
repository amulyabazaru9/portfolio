import { site } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div
        className="animate-float absolute top-[-10rem] left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px] sm:w-[48rem]"
        aria-hidden
      />
      <div
        className="absolute top-40 right-[-8rem] -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300 sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m {site.name}.
            <span className="mt-2 block text-gradient">{site.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {site.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{site.intro}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-indigo-500/10 transition hover:bg-zinc-200"
            >
              Start a project
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <MailIcon className="size-4" />
              Email me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              View my work
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4" />
              {site.location}
            </span>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
