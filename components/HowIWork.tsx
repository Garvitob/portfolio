import { howIWork } from "@/lib/content";

export default function HowIWork() {
  return (
    <section className="mx-auto w-full max-w-[1080px] px-6 py-12 lg:px-16 lg:py-16">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{howIWork.label}</h2>
        <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
      </div>

      {/* 1px hairlines rendered by a hairline-colored container behind 1px gaps */}
      <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {howIWork.steps.map((step) => (
          <div key={step.number} className="bg-paper p-6 lg:p-7">
            <div className="font-mono text-[11px] tracking-[0.12em] text-ink-soft">{step.number}</div>
            <div className="mt-3 text-lg font-medium text-ink">{step.name}</div>
            <p className="mt-2 text-[15px] leading-[1.55] text-ink-soft">{step.line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
