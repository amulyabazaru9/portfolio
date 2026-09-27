import { services, workProcess, type Service } from "@/data/site";
import Reveal from "./Reveal";
import Section from "./Section";
import { ArrowRightIcon, BoltIcon, ChartIcon, CheckIcon, CodeIcon } from "./Icons";

const icons: Record<Service["icon"], typeof CodeIcon> = {
  code: CodeIcon,
  chart: ChartIcon,
  bolt: BoltIcon,
};

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I can help your business"
      description="Focused, well-scoped work with clear communication — whether you're a startup, small business, or individual."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 120} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
                <div
                  className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-indigo-500/0 blur-3xl transition duration-500 group-hover:bg-indigo-500/20"
                  aria-hidden
                />
                <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-indigo-300">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{s.description}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="relative mt-7 inline-flex items-center gap-1.5 self-start text-sm font-medium text-indigo-300 transition hover:text-white"
                >
                  Enquire about {s.title.toLowerCase()}
                  <ArrowRightIcon className="size-4" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-mono text-sm tracking-wider text-zinc-500 uppercase">How I work</h3>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {workProcess.map((p) => (
            <li key={p.step} className="bg-zinc-950 p-6">
              <span className="font-mono text-sm text-indigo-400">{p.step}</span>
              <p className="mt-2 font-medium text-white">{p.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
