"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function DeliverablesSection() {
  return (
    <section className="section-padding" id="deliverables">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Deliverables</Badge>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.deliverables.title}
          </h2>
        </div>
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.deliverables.items.map((item) => (
            <RevealItem key={item.title}>
              <Card className="bg-card/90 h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{item.description}</CardContent>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
