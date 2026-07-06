import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1080px] px-6 pb-12 pt-16 lg:px-16 lg:pb-16 lg:pt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft sm:text-xs">{hero.eyebrow}</p>

      <h1 className="mt-6 max-w-[20ch] text-[clamp(2.4rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
        {hero.h1Lead}
        <span className="font-serif italic text-accent">{hero.h1Accent}</span>
        {hero.h1Tail}
      </h1>

      <p className="mt-7 max-w-[54ch] text-base text-ink-soft sm:text-lg">{hero.sub}</p>

      <div className="mt-10 border-y border-hairline py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft sm:text-xs">{hero.proof}</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          View work <span aria-hidden="true">↓</span>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-ink px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
