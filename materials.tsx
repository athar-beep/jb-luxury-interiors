import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/ui/figure";
import { image } from "@/lib/images";
import { materials } from "@/lib/content";

export function Materials() {
  const lead = image("mat-lamp");

  return (
    <section id="materials" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-12">
          {/* Editorial text + tall detail image */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <Eyebrow>Materials &amp; details</Eyebrow>
              <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4.4vw,3.2rem)] font-[400] leading-[1.03] tracking-tight text-ink">
                Texture does the talking.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-foreground/65">
                Solid timber, washed textiles, honed stone and a little
                greenery. A direction for the rooms rather than a fixed stock
                list — finishes are confirmed piece by piece.
              </p>
            </div>

            <div
              className="reveal mt-9 overflow-hidden rounded-sm bg-stone"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/3]">
                <Figure
                  asset={lead}
                  sizes="(max-width:1024px) 92vw, 40vw"
                  imgClassName="transition-transform [transition-duration:1.6s] ease-editorial hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          {/* Material tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {materials.map((m, i) => {
                const asset = image(m.imageSlot);
                return (
                  <figure
                    key={m.id}
                    className="reveal group"
                    style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone">
                      <Figure
                        asset={asset}
                        sizes="(max-width:1024px) 45vw, 24vw"
                        imgClassName="transition-transform [transition-duration:1.4s] ease-editorial group-hover:scale-[1.06]"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <span className="block text-[0.6875rem] uppercase tracking-[0.12em] text-foreground/45">
                        0{i + 1}
                      </span>
                      <h3 className="mt-1.5 font-display text-[1.2rem] leading-tight text-ink">
                        {m.label}
                      </h3>
                      <p className="mt-1.5 max-w-[34ch] text-sm leading-relaxed text-foreground/55">
                        {m.note}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
