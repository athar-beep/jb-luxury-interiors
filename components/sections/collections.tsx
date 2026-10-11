import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Figure } from "@/components/ui/figure";
import { image } from "@/lib/images";
import { business, whatsappHref } from "@/lib/business";
import { collections } from "@/lib/content";
import { cn } from "@/lib/utils";

const layout: Record<
  string,
  { lg: string; aspect: string; sizes: string }
> = {
  living: { lg: "lg:col-span-6", aspect: "aspect-[5/4]", sizes: "(max-width:1024px) 92vw, 45vw" },
  bedroom: { lg: "lg:col-span-3", aspect: "aspect-[3/4]", sizes: "(max-width:1024px) 92vw, 22vw" },
  dining: { lg: "lg:col-span-3", aspect: "aspect-[3/4]", sizes: "(max-width:1024px) 92vw, 22vw" },
  study: { lg: "lg:col-span-3", aspect: "aspect-[3/4]", sizes: "(max-width:1024px) 92vw, 22vw" },
  seating: { lg: "lg:col-span-3", aspect: "aspect-[3/4]", sizes: "(max-width:1024px) 92vw, 22vw" },
  decor: { lg: "lg:col-span-6", aspect: "aspect-[5/4]", sizes: "(max-width:1024px) 92vw, 45vw" },
};

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 border-b border-ink/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Collections"
            title={
              <>
                Furniture for the whole room,
                <br className="hidden sm:block" /> not just the corner.
              </>
            }
            className="reveal max-w-2xl"
          />
          <div className="reveal flex max-w-sm flex-col gap-4" style={{ transitionDelay: "90ms" }}>
            <p className="text-base leading-relaxed text-foreground/65">
              Rooms are gathered from a small number of considered categories —
              each easy to swap for your own range.
            </p>
            <Badge className="w-fit">Sample categories — adjust to your stock</Badge>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {collections.map((c, i) => {
            const cfg = layout[c.id] ?? layout.dining;
            const asset = image(c.imageSlot);
            return (
              <a
                key={c.id}
                href={whatsappHref(
                  `Hello ${business.name}, I'm interested in your ${c.name} collection.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "reveal group block self-start",
                  cfg.lg,
                  i % 2 === 1 ? "sm:mt-0" : "",
                )}
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-sm bg-stone",
                    cfg.aspect,
                  )}
                >
                  <Figure
                    asset={asset}
                    sizes={cfg.sizes}
                    imgClassName="transition-transform [transition-duration:1.4s] ease-editorial group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-700 group-hover:opacity-90"
                  />
                  <span className="absolute left-4 top-4 font-sans text-[0.6875rem] tracking-[0.12em] text-paper/80">
                    {c.index}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-paper/40 bg-paper/10 text-paper opacity-0 backdrop-blur-md transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.35rem] leading-tight text-ink">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 max-w-[38ch] text-sm leading-relaxed text-foreground/55">
                      {c.blurb}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
