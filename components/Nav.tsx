import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper">
      <nav className="mx-auto flex h-14 w-full max-w-[1080px] items-center justify-between px-6 lg:px-16">
        <a href="#top" className="font-medium tracking-tight text-ink transition-colors hover:text-accent">
          {nav.name}
        </a>

        {/* Full nav — desktop only */}
        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile — name + Resume only, no hamburger, no JS */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-accent md:hidden"
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
}
