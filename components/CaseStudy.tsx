import type { ReactNode } from "react";
import type { CaseStudy as CaseStudyType } from "@/lib/content";
import PreviewCard from "./PreviewCard";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">{label}</h4>
      {children}
    </div>
  );
}

// Renders "Chose X over Y — reason" with the reason in softer ink. Copy is unchanged.
function Decision({ text }: { text: string }) {
  const [head, ...rest] = text.split(" — ");
  const reason = rest.join(" — ");
  return (
    <li className="border-t border-hairline py-3.5 text-[15px] leading-[1.6]">
      <span className="text-ink">{head}</span>
      {reason ? <span className="text-ink-soft"> — {reason}</span> : null}
    </li>
  );
}

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  const header = (
    <div className="lg:col-start-1 lg:row-start-1">
      <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        <span className="text-ink">{study.number}</span>
        <span className="h-px w-8 bg-hairline" aria-hidden="true" />
        <span>{study.tag}</span>
      </div>
      <h3 className="mt-5 text-[1.75rem] font-medium leading-[1.1] tracking-tight text-ink">{study.title}</h3>
      <p className="mt-3 font-serif text-lg italic text-ink-soft">{study.oneLiner}</p>
    </div>
  );

  const problem = (
    <div className="mt-6 lg:col-start-1 lg:row-start-2 lg:mt-9">
      <Field label="Problem">
        <p className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-soft">{study.problem}</p>
      </Field>
    </div>
  );

  const detail = (
    <div className="mt-8 space-y-8 lg:col-start-1 lg:row-start-3">
      {study.decisions ? (
        <Field label="Decisions">
          <ul>
            {study.decisions.map((decision) => (
              <Decision key={decision} text={decision} />
            ))}
          </ul>
        </Field>
      ) : null}

      {study.work ? (
        <Field label={study.work.label}>
          <p className="max-w-[54ch] text-[16px] leading-[1.65] text-ink-soft">{study.work.body}</p>
        </Field>
      ) : null}

      {study.extra ? (
        <Field label={study.extra.label}>
          <p className="max-w-[54ch] text-[15px] leading-[1.6] text-ink-soft">{study.extra.body}</p>
        </Field>
      ) : null}

      {study.shipped ? (
        <Field label="Shipped">
          <p className="max-w-[54ch] text-[16px] leading-[1.6] text-ink">{study.shipped}</p>
        </Field>
      ) : null}

      <div className="border-t border-hairline pt-4">
        <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">Metrics</h4>
        <p className="font-mono text-[12px] uppercase leading-[1.7] tracking-[0.1em] text-ink">{study.metrics}</p>
      </div>
    </div>
  );

  if (!study.preview) {
    return (
      <article className="border-t border-hairline pt-12 lg:pt-16">
        {header}
        <div className="max-w-[70ch]">
          {problem}
          {detail}
        </div>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-1 gap-x-12 border-t border-hairline pt-12 lg:grid-cols-[1.55fr_1fr] lg:pt-16">
      {header}
      {problem}
      <div className="mt-7 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:self-start">
        <PreviewCard preview={study.preview} />
      </div>
      {detail}
    </article>
  );
}
