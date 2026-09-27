import { about, site } from "@/data/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Developer with an analyst's mindset">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Download résumé
            </a>
          )}
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
            {about.facts.map((f) => (
              <div key={f.label} className="bg-zinc-950 p-5">
                <dt className="font-mono text-xs tracking-wider text-zinc-500 uppercase">{f.label}</dt>
                <dd className="mt-1.5 text-base font-medium text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
