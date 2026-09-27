import { projects, site } from "@/data/site";
import Reveal from "./Reveal";
import Section from "./Section";
import { ArrowRightIcon, CheckIcon, ExternalIcon, GitHubIcon } from "./Icons";

const accents = [
  "from-indigo-500/30 via-indigo-500/5",
  "from-cyan-500/30 via-cyan-500/5",
  "from-violet-500/30 via-violet-500/5",
  "from-emerald-500/30 via-emerald-500/5",
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Things I've built and am currently building. Code for each project is available on GitHub."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 lg:grid-cols-5">
              {/* Visual panel — swap for a screenshot with next/image when you have one */}
              <div
                className={`relative min-h-44 overflow-hidden bg-gradient-to-br ${accents[i % accents.length]} to-transparent lg:col-span-2 lg:min-h-full`}
              >
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                    {p.category}
                  </span>
                  {p.status && (
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                      {p.status}
                    </span>
                  )}
                </div>
                <span className="absolute bottom-3 left-5 font-mono text-7xl font-bold text-white/10 transition duration-500 group-hover:text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col p-6 sm:p-8 lg:col-span-3">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{p.description}</p>

                {p.highlights && (
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {(p.githubUrl || p.liveUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-sm">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                      >
                        <GitHubIcon className="size-4" />
                        View code
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-zinc-950 transition hover:bg-zinc-200"
                      >
                        <ExternalIcon className="size-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-2xl border border-dashed border-white/15 p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <span className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 text-white">
                <GitHubIcon className="size-6" />
              </span>
              <span>
                <span className="block font-medium text-white">More projects on GitHub</span>
                <span className="block text-sm text-zinc-400">
                  Browse my repositories at {site.socials.github.replace(/^https?:\/\//, "")}
                </span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 group-hover:text-white">
              Visit profile
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
