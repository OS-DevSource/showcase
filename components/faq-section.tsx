"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section className="section-padding" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">FAQ</Badge>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.faq.title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {siteConfig.faq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
