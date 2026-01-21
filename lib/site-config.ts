export const siteConfig = {
  brandName: "Obsidian Studio",
  siteTitle: "Obsidian Studio | Websites for local businesses",
  siteDescription:
    "Websites for local businesses built to turn visits into calls and bookings.",
  ctaPrimaryLabel: "Book a call",
  ctaPrimaryHref: "#contact",
  ctaSecondaryLabel: "View work",
  ctaSecondaryHref: "#proof",
  contactEmail: "os.devsource@gmail.com",
  splashPalette: ["#7F5AF0", "#6B46E6", "#9A7BFF"],
  nav: {
    ctaLabel: "Book a call",
    links: [
      { label: "Proof", href: "#proof" },
      { label: "Gallery", href: "#gallery" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    headlineLines: ["Premium website", "redesigns that turn first visits into booked calls."],
    accentWord: "booked",
    subhead:
      "We rebuild service business websites with strategic copy, refined UI, and measurable conversion lifts. No fluff, just confident results.",
    highlight: "Conversion focused. Brand elevated. Launch ready.",
    trust: [
      { label: "Example lift", value: "+42% qualified leads" },
      { label: "Example lift", value: "-36% bounce rate" },
      { label: "Example lift", value: "+58% call requests" },
    ],
  },
  proof: {
    title: "Proof of polish, not promises",
    description:
      "Slide the before and after to see how strategic redesign turns clutter into clarity. Example metrics below are illustrative.",
    metrics: [
      { label: "Example outcome", value: "+42% qualified leads" },
      { label: "Example outcome", value: "-36% bounce rate" },
      { label: "Example outcome", value: "+58% call requests" },
    ],
  },
  gallery: {
    title: "Designed to feel tailored in any industry",
    description:
      "Each tile shows how the same quality system adapts to different service businesses.",
    items: [
      {
        title: "Home Services",
        description: "Fast quotes, trusted teams, clear next steps.",
        detail: "Ideal for multi-location or high volume inbound calls.",
      },
      {
        title: "Dental and Health",
        description: "Calm visuals, credibility, simple booking flows.",
        detail: "Built to reduce anxiety and clarify insurance steps.",
      },
      {
        title: "Solar and Energy",
        description: "Confidence, savings proof, frictionless consults.",
        detail: "Focus on proof points and clear eligibility logic.",
      },
      {
        title: "Legal",
        description: "Authority led pages with direct case intake.",
        detail: "Clear practice areas and fast intake routing.",
      },
      {
        title: "Construction",
        description: "Portfolio first, precise service scoping.",
        detail: "Showcases workmanship, scope, and timelines.",
      },
      {
        title: "Professional Services",
        description: "High trust messaging with conversion ready CTAs.",
        detail: "Ideal for consult driven or retainer businesses.",
      },
    ],
  },
  process: {
    title: "A clear process built for momentum",
    steps: [
      {
        title: "Audit",
        description: "Audit brief, priority backlog, and quick win map.",
      },
      {
        title: "Design",
        description: "High fidelity UI, copy flow, and approval checkpoints.",
      },
      {
        title: "Build",
        description: "Responsive build, performance QA, and accessibility pass.",
      },
      {
        title: "Launch",
        description: "QA checklist, handoff kit, and launch support.",
      },
    ],
  },
  deliverables: {
    title: "What a redesign includes",
    items: [
      {
        title: "Strategy",
        description: "Messaging alignment, clear user journeys, and priorities.",
      },
      {
        title: "Experience",
        description: "UX structure, wireframes, and conversion focused layout.",
      },
      {
        title: "Build",
        description: "Responsive UI, clean code, and reusable components.",
      },
      {
        title: "SEO basics",
        description: "Metadata, crawlability, and foundational structure.",
      },
    ],
  },
  caseStudies: [
    {
      title: "Local HVAC",
      problem: "Site felt outdated and buried key services.",
      fix: "Simplified navigation and added intent focused CTAs.",
      result: "Example outcome: +31% quote requests in 45 days.",
    },
    {
      title: "Family Dentistry",
      problem: "Visitors dropped before booking online.",
      fix: "Rebuilt trust signals and cleaned up the booking flow.",
      result: "Example outcome: +22% booking starts in 30 days.",
    },
    {
      title: "Solar Installer",
      problem: "Confusing offers and low consult form starts.",
      fix: "Clarified savings messaging with visual proof points.",
      result: "Example outcome: +28% consult submissions.",
    },
  ],
  faq: {
    title: "FAQ",
    items: [
      {
        question: "What does pricing look like?",
        answer:
          "Most redesigns start in the 5k to 40k range based on scope. After the call we share a clear range and options.",
      },
      {
        question: "How long does a redesign take?",
        answer: "Most projects ship in 3 to 6 weeks depending on scope and feedback speed.",
      },
      {
        question: "How do revisions work?",
        answer:
          "We run focused review rounds at each phase and lock decisions quickly to keep momentum.",
      },
      {
        question: "Who owns the final files and code?",
        answer: "You own the deliverables we create, and we provide the source files and handoff.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes. We can provide a handoff kit or a lightweight monthly retainer.",
      },
      {
        question: "How do we start?",
        answer: "Book a quick call and we will map goals, timeline, and fit.",
      },
    ],
  },
  finalCta: {
    title: "Ready for a premium redesign?",
    description:
      "Share your goals and we will map the best path forward. No pressure, just a clear plan.",
  },
};

export type SiteConfig = typeof siteConfig;
