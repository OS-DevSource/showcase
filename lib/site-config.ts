export const siteConfig = {
  brandName: "ScaleView Studio",
  siteTitle: "ScaleView Studio | Website Redesigns That Convert",
  siteDescription:
    "Premium redesigns for service businesses. Fast, focused, and conversion ready without the agency bloat.",
  ctaPrimaryLabel: "Book a strategy call",
  ctaPrimaryHref: "https://calendly.com/os-devsource/15min",
  ctaSecondaryLabel: "See the proof",
  ctaSecondaryHref: "#proof",
  contactEmail: "os.devsource@gmail.com",
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
      "Slide the before and after to see how strategic redesign turns clutter into clarity. Sample outcomes below are modeled examples. Results vary by baseline and traffic.",
    metrics: [
      { label: "Sample outcome", value: "+42% qualified leads" },
      { label: "Sample outcome", value: "-36% bounce rate" },
      { label: "Sample outcome", value: "+58% call requests" },
    ],
  },
  gallery: {
    title: "Designed to feel tailored in any industry",
    description:
      "Each tile shows how the same quality system adapts to different service businesses.",
    items: [
      {
        title: "Home Services",
        description:
          "Problem: Prospects were unsure who to call or what was included.\nDeliverables:\n- Service scope blocks\n- Review highlights and trust badges\nOutcome: Modeled example: +25% quote form starts.",
      },
      {
        title: "Dental and Health",
        description:
          "Problem: Patients hesitated before booking online.\nDeliverables:\n- Staff and facility trust panel\n- Simplified booking steps\nOutcome: Modeled example: +18% booking starts.",
      },
      {
        title: "Solar and Energy",
        description:
          "Problem: Savings story felt unclear and consults stalled.\nDeliverables:\n- Savings comparison layout\n- Eligibility checklist\nOutcome: Target outcome: more qualified consult requests.",
      },
      {
        title: "Legal",
        description:
          "Problem: Visitors did not see a clear path to intake.\nDeliverables:\n- Practice area prioritization\n- Intake form rewrite\nOutcome: Modeled example: +20% intake form starts.",
      },
      {
        title: "Construction",
        description:
          "Problem: Portfolio was buried and scope felt vague.\nDeliverables:\n- Project gallery refresh\n- Scope and timeline blocks\nOutcome: Target outcome: more bid-ready inquiries.",
      },
      {
        title: "Professional Services",
        description:
          "Problem: Messaging felt generic and trust was thin.\nDeliverables:\n- Positioning headline set\n- Proof points and logos\nOutcome: Modeled example: +16% consultation requests.",
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
      result: "Modeled example: +31% quote requests in 6 weeks.",
    },
    {
      title: "Family Dentistry",
      problem: "Visitors dropped before booking online.",
      fix: "Rebuilt trust signals and cleaned up the booking flow.",
      result: "Modeled example: +22% booking starts in 4 weeks.",
    },
    {
      title: "Solar Installer",
      problem: "Confusing offers and low consult form starts.",
      fix: "Clarified savings messaging with visual proof points.",
      result: "Modeled example: +28% consult submissions after launch.",
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
