import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-mono text-sm tracking-wider text-indigo-400 uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
