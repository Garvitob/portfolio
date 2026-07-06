import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1080px] px-6 py-12 lg:px-16 lg:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[160px_1fr] lg:gap-16">
        <h2 className="pt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{about.label}</h2>
        <p className="max-w-[54ch] text-xl leading-[1.6] text-ink lg:text-[1.6rem] lg:leading-[1.5]">{about.body}</p>
      </div>
    </section>
  );
}
