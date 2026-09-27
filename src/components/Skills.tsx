import { skillGroups } from "@/data/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      description="The languages, frameworks, and tools I use to ship projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 100} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]">
              <h3 className="font-mono text-sm tracking-wider text-zinc-500 uppercase">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-zinc-900 px-3.5 py-1.5 text-sm text-zinc-200 transition hover:border-indigo-400/50 hover:text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
