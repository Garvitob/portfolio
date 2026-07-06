import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { caseStudies, contact } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <section id="work" className="mx-auto w-full max-w-[1080px] px-6 py-12 lg:px-16 lg:py-16">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">Selected Work</h2>
            <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
          </div>
          <div className="space-y-12 lg:space-y-16">
            {caseStudies.map((study) => (
              <CaseStudy key={study.number} study={study} />
            ))}
          </div>
        </section>

        <HowIWork />
        <About />

        <section id="contact" className="mx-auto w-full max-w-[1080px] px-6 py-12 lg:px-16 lg:py-16">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{contact.label}</h2>
            <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
          </div>

          <p className="max-w-[18ch] font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-ink">
            {contact.headline}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block text-xl underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
          >
            {contact.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
