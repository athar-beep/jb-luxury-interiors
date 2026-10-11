import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { image } from "@/lib/images";
import { gallery } from "@/lib/content";

const aspect: Record<string, string> = {
  g1: "aspect-[4/3]",
  g2: "aspect-[3/4]",
  g3: "aspect-[3/4]",
  g4: "aspect-square",
  g5: "aspect-[4/5]",
  g6: "aspect-[16/10]",
  g7: "aspect-[4/5]",
  g8: "aspect-[3/4]",
};

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="reveal flex flex-col gap-6 border-b border-ink/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Rooms, corners and quiet details."
            className="max-w-xl"
          />
          <p className="max-w-sm text-base leading-relaxed text-foreground/60">
            A composed sequence of interiors. All frames are clearly-labelled
            sample photography, ready to be swapped for real project shots.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((item, i) => {
            const asset = image(item.imageSlot);
            return (
              <figure
                key={item.id}
                className="reveal group relative block break-inside-avoid overflow-hidden rounded-sm bg-stone"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className={`relative w-full ${aspect[item.id] ?? "aspect-[4/5]"}`}>
                  <Figure
                    asset={asset}
                    sizes="(max-width:640px) 92vw, (max-width:1024px) 45vw, 30vw"
                    imgClassName="transition-transform [transition-duration:1.6s] ease-editorial group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between gap-3 p-4 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-paper/90">
                      {item.caption}
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-paper/40 text-paper">
                      <Plus className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
