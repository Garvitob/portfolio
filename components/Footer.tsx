import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-16">
        <span className="text-sm text-ink-soft">{footer.copyright}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">{footer.domain}</span>
      </div>
    </footer>
  );
}
