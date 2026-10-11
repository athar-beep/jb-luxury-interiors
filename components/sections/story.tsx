import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/ui/figure";
import { image } from "@/lib/images";
import { business } from "@/lib/business";

const facts = [
  { label: "Location", value: `${business.address.line2}, ${business.address.city}` },
  { label: "Trade", value: business.category },
  { label: "Enquiries", value: "Phone · WhatsApp · Email" },
];

export function Story() {
  const asset = image("story-craft");

  return (
    <section
      id="story"
      className="scroll-mt-24 border-y border-ink/10 bg-stone py-20 lg:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="reveal">
              <Eyebrow>The studio</Eyebrow>
              <p className="mt-6 max-w-[30ch] font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-[400] leading-[1.06] tracking-tight text-ink">
                Located in Manzoor Colony, furnishing rooms across{" "}
                <em className="italic text-eucalyptus-deep">Karachi</em>.
              </p>
            </div>

            <div
              className="reveal mt-8 grid max-w-2xl gap-6 text-base leading-relaxed text-foreground/70 sm:grid-cols-2"
              style={{ transitionDelay: "120ms" }}
            >
              <p>
                JB Luxury Interiors is a furniture and home store on Ch.
                Chaudhry Rehmat Ali Road, Manzoor Colony, Karachi. We work with
                clients on furniture and interior needs — advising on pieces,
                materials and how a room comes together.
              </p>
              <p>
                Enquiries are handled directly by the studio over phone,
                WhatsApp or email, so you speak with the people who know the
                pieces rather than a call centre.
              </p>
            </div>

            <dl
              className="reveal mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink/12 bg-ink/12 sm:grid-cols-3"
              style={{ transitionDelay: "180ms" }}
            >
              {facts.map((f) => (
                <div key={f.label} className="bg-stone p-5">
                  <dt className="text-[0.625rem] uppercase tracking-[0.12em] text-foreground/45">
                    {f.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.05rem] text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div
              className="reveal relative overflow-hidden rounded-sm bg-sand"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Figure
                  asset={asset}
                  sizes="(max-width:1024px) 92vw, 40vw"
                  imgClassName="transition-transform [transition-duration:1.6s] ease-editorial hover:scale-[1.04]"
                />
              </div>
            </div>
            <p className="reveal mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-foreground/40" style={{ transitionDelay: "220ms" }}>
              Sample imagery · replace with studio photography
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
