import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit">Start</Badge>
          <div>
            <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
              {siteConfig.finalCta.title}
            </h2>
            <p className="text-muted-foreground mt-3">{siteConfig.finalCta.description}</p>
          </div>
          <Button asChild size="lg" className="w-fit">
            <a href={siteConfig.ctaPrimaryHref} target="_blank" rel="noreferrer">
              {siteConfig.ctaPrimaryLabel}
            </a>
          </Button>
          <p className="text-muted-foreground text-xs">Prefer email? Reach us at {siteConfig.contactEmail}</p>
        </div>
        <div className="border-border bg-card rounded-[var(--radius-md)] border p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
