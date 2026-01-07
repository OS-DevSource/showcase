export const siteConfig = {
  brandName: "ScaleView Studio",
  siteTitle: "ScaleView Studio | Website Redesigns That Convert",
  siteDescription:
    "Premium redesigns for service businesses. Fast, focused, and conversion ready without the agency bloat.",
  ctaPrimaryLabel: "Book a strategy call",
  ctaPrimaryHref: "https://example.com/book",
  ctaSecondaryLabel: "See the proof",
  ctaSecondaryHref: "#proof",
  contactEmail: "hello@scaleview.studio",
  splashPalette: ["#4a58ff", "#ff6e48", "#5ad7ff"],
  nav: {
    ctaLabel: "Start a project",
  },
  hero: {
    headlineLines: ["Premium website", "redesigns that turn first visits into booked calls."],
    subhead:
      "We rebuild service business websites with strategic copy, refined UI, and measurable conversion lifts. No fluff, just confident results.",
    highlight: "Conversion focused. Brand elevated. Launch ready.",
    bullets: ["Conversion focused UX", "Fast launch timeline", "Accessible and mobile ready"],
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
      },
      {
        title: "Dental and Health",
        description: "Calm visuals, credibility, simple booking flows.",
      },
      {
        title: "Solar and Energy",
        description: "Confidence, savings proof, frictionless consults.",
      },
      {
        title: "Legal",
        description: "Authority led pages with direct case intake.",
      },
      {
        title: "Construction",
        description: "Portfolio first, precise service scoping.",
      },
      {
        title: "Professional Services",
        description: "High trust messaging with conversion ready CTAs.",
      },
    ],
  },
  process: {
    title: "A clear process built for momentum",
    steps: [
      {
        title: "Audit",
        description: "We map friction, drop offs, and quick wins before design starts.",
      },
      {
        title: "Design",
        description: "High fidelity UI with brand polish and conversion first flow.",
      },
      {
        title: "Build",
        description: "Fast, accessible, and optimized for Core Web Vitals.",
      },
      {
        title: "Launch",
        description: "QA, handoff, and a performance tune for day one impact.",
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
        question: "How long does a redesign take?",
        answer: "Most projects ship in 3 to 6 weeks depending on complexity and feedback speed.",
      },
      {
        question: "Can you work with our existing brand?",
        answer:
          "Yes. We enhance what is working and elevate the presentation without losing recognition.",
      },
      {
        question: "Do you handle copy and messaging?",
        answer: "We collaborate on positioning and refine copy so every section earns its space.",
      },
      {
        question: "What if we need ongoing updates?",
        answer: "We can provide a handoff kit or a lightweight monthly retainer.",
      },
      {
        question: "Will the site be optimized for mobile?",
        answer: "Yes. Mobile performance and clarity are part of the core build.",
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
