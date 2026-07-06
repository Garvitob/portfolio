import type { Preview } from "@/lib/content";

export default function PreviewCard({ preview }: { preview: Preview }) {
  return (
    <a
      href={preview.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[2px] border border-ink bg-paper transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#1A1917]"
    >
      {/* Browser-chrome bar: URL on the left, live status on the right */}
      <div className="flex items-center justify-between gap-3 border-b border-hairline bg-paper px-3 py-2">
        <span className="truncate font-mono text-[11px] text-ink-soft">{preview.displayUrl}</span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono uppercase tracking-[0.12em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-[10px] text-ink-soft group-hover:hidden">LIVE</span>
          <span className="hidden text-[10px] text-ink group-hover:inline">OPEN ↗</span>
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-paper">
        <img src={preview.image} alt={preview.alt} className="h-full w-full object-cover object-top" />
      </div>
    </a>
  );
}
