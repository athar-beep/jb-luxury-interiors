import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { image } from "@/lib/images";
import { business, whatsappHref } from "@/lib/business";
import { pieces } from "@/lib/content";

export function Featured() {
  return (
    <section
      id="pieces"
      className="scroll-mt-24 bg-ink py-20 text-paper lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 border-b border-paper/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected pieces"
            tone="light"
            title={
              <>
                A few pieces,
                <br className="hidden sm:block" /> chosen quietly.
              </>
            }
            className="reveal max-w-2xl"
          />
          <div
            className="reveal flex max-w-sm flex-col gap-4"
            style={{ transitionDelay: "90ms" }}
          >
            <p className="text-base leading-relaxed text-paper/70">
              A walkthrough of what a piece might be — laid out so your real
              catalogue can drop straight in.
            </p>
            <span className="w-fit rounded-full border border-paper/20 px-3 py-1 text-[0.625rem] uppercase tracking-[0.12em] text-paper/60">
              Sample pieces — replace with your catalogue
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pieces.map((p, i) => {
            const asset = image(p.imageSlot);
            return (
              <article
                key={p.id}
                className="reveal group flex flex-col"
                style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-500">
                  <Figure
                    asset={asset}
                    sizes="(max-width:640px) 92vw, (max-width:1024px) 44vw, 22vw"
                    imgClassName="transition-transform [transition-duration:1.4s] ease-editorial group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 text-[0.6875rem] uppercase tracking-[0.12em] text-paper/80">
                    {p.category}
                  </span>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="font-display text-[1.3rem] font-medium leading-tight text-paper">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm tabular-nums text-paper/75">
                    Price on enquiry
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">
                    {p.detail}
                  </p>
                  <a
                    href={whatsappHref(
                      `Hello ${business.name}, I'd like to enquire about the "${p.name}" (${p.category}).`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-5 inline-flex items-center gap-2 border-t border-paper/15 pt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-paper/80 transition-colors duration-300 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    Enquire about this piece
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-500 ease-editorial group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
