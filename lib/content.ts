// Card images are real captures of the live sites (public/images/*.jpg, 1440×900, top of page).

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Preview = {
  displayUrl: string;
  liveUrl: string;
  image: string;
  alt: string;
};

export type LabeledBlock = {
  label: string;
  body: string;
};

export type CaseStudy = {
  number: string;
  tag: string;
  title: string;
  oneLiner: string;
  problem: string;
  decisions?: string[];
  extra?: LabeledBlock;
  work?: LabeledBlock;
  shipped?: string;
  metrics: string;
  preview?: Preview;
};

export const nav = {
  name: "Garvit Oberoi",
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "/resume.pdf", external: true },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
};

// H1 is split so the single word "ship" can be set in serif italic + accent.
export const hero = {
  eyebrow: "PRODUCT — ASPIRING PM",
  h1Lead: "I analyze products, make trade-off decisions, and ",
  h1Accent: "ship",
  h1Tail: " the result end-to-end.",
  sub: "BTech IT ’27 · Former PM Intern @ Orderly · 3 live products on this domain",
  proof: "3 SHIPPED PRODUCTS · RESEARCH & GTM STRATEGY · AI INTEGRATIONS",
};

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    tag: "INDEPENDENT CASE STUDY",
    title: "Project Adhikar",
    oneLiner: "Consent & data-rights redesign for Zomato under India’s DPDP Act 2023.",
    problem:
      "The DPDP Act 2023 makes Zomato’s existing consent patterns non-compliant — blanket permissions, no purpose limitation, no real withdrawal path. The product problem: redesign consent to be legally sound without wrecking order conversion.",
    decisions: [
      "Chose 6 targeted consent touchpoints over one blanket consent screen — purpose-level clarity over one-tap legality theatre.",
      "Prioritized fixes by legal-risk severity vs. user friction — highest-exposure, lowest-friction changes ship first.",
      "Made consent withdrawal a first-class flow, not a buried setting — the Act treats withdrawal as equal to consent.",
    ],
    extra: {
      label: "ALTERNATIVES EXPLORED",
      body: "For minors’ consent, evaluated DigiLocker-verified parental consent against ML-based age estimation — scoped accuracy, privacy exposure and rollout cost before recommending.",
    },
    shipped: "Interactive prototype demonstrating the redesigned consent flows end-to-end.",
    metrics: "CONSENT COMPLETION · NOTICE DROP-OFF · GRIEVANCE TAT",
    preview: {
      displayUrl: "zomatodemo.garvitoberoi.com",
      liveUrl: "https://zomatodemo.garvitoberoi.com/",
      image: "/images/adhikar.jpg",
      alt: "Project Adhikar — redesigned Zomato consent flow, live demo landing page",
    },
  },
  {
    number: "02",
    tag: "SHIPPED PRODUCT",
    title: "ShipFlow AI",
    oneLiner:
      "An AI-powered software delivery platform — planning, boards and automated code review in one pipeline.",
    problem:
      "Delivery work is fragmented across planning docs, boards and review tools — and code review is the bottleneck. Built the pipeline end-to-end, solo, to compress it.",
    decisions: [
      "Chose a dual-pass AI review engine over single-pass — single-pass missed context-dependent bugs; accepted higher cost for accuracy.",
      "Chose real GitHub PR diffs over simulated demo data — credibility of findings beats ease of demoing.",
    ],
    shipped:
      "PM planning portal, developer Kanban, and automated AI review running on real pull requests — live in production.",
    metrics: "REVIEW TURNAROUND · FINDINGS PER PR · FALSE-POSITIVE RATE",
    preview: {
      displayUrl: "shipflow.garvitoberoi.com",
      liveUrl: "https://shipflow.garvitoberoi.com/",
      image: "/images/shipflow.jpg",
      alt: "ShipFlow AI — software delivery platform landing page",
    },
  },
  {
    number: "03",
    tag: "SHIPPED PRODUCT",
    title: "NEXUS",
    oneLiner: "An AI workspace that reduces actions across email and calendar.",
    problem:
      "Knowledge work leaks time to context-switching between inbox, calendar and task tools. NEXUS pulls them into one command surface.",
    decisions: [
      "Chose a universal action-reduction tool over a niche, role-specific app — larger problem, simpler pitch, harder scope.",
      "Cut integrations to protect scope — shipped Gmail and Google Calendar deep instead of five tools shallow.",
    ],
    shipped: "Smart inbox, AI-drafted replies and a command-center dashboard — live in production.",
    metrics: "ACTIONS SAVED PER SESSION · TIME-TO-REPLY",
    preview: {
      displayUrl: "nexus.garvitoberoi.com",
      liveUrl: "https://nexus.garvitoberoi.com/",
      image: "/images/nexus.jpg",
      alt: "NEXUS — AI workspace landing page",
    },
  },
  {
    number: "04",
    tag: "PM INTERNSHIP",
    title: "Orderly — the 7 → 4 redesign",
    oneLiner: "Reducing order-completion friction on an AI voice-ordering product.",
    problem:
      "Orderly (tryorderly.sh) lets restaurant guests order by voice via QR — no app download. Early usage showed guests starting orders but not finishing them.",
    work: {
      label: "WHAT I DID",
      body: "Mapped the full onboarding and ordering journey, identified 3 friction points killing completion, and proposed a simplification that cut the flow from 7 steps to 4. Prioritized the changes with founders on user impact vs. engineering feasibility within voice-processing constraints.",
    },
    metrics: "ORDER COMPLETION · STEPS TO ORDER: 7 → 4 · TIME TO FIRST ORDER",
  },
];

export const howIWork = {
  label: "How I Work",
  steps: [
    { number: "01", name: "Research", line: "Map the journey. Find friction with evidence, not opinions." },
    { number: "02", name: "Decide", line: "Frame the trade-off. Choose X over Y with a reason attached." },
    { number: "03", name: "Ship", line: "Build or spec it end-to-end. Live beats slideware." },
    { number: "04", name: "Measure", line: "Define success metrics before launch, not after." },
  ],
};

export const about = {
  label: "About",
  body: "I’m a BTech IT student at JSS Noida (’27) and a former product management intern at Orderly, a US voice-AI ordering startup. I ship my own products end-to-end — everything on this page is live on this domain. Based in Delhi NCR.",
};

export const contact = {
  label: "Contact",
  headline: "Open to PM internships.",
  email: "obgarvit01@gmail.com",
  links: [
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/garvit-oberoi" },
    { label: "Resume ↗", href: "/resume.pdf" },
  ],
};

export const footer = {
  copyright: "© 2026 Garvit Oberoi",
  domain: "garvitoberoi.com",
};
