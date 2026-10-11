import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

const SLIDES = [
  "/img/hero-window.webp",
  "/img/hero-interior.webp",
  "/img/hero-detail.webp",
  "/img/coll-living.webp",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-dvh min-h-[560px] items-center justify-center overflow-hidden bg-ink"
    >
      <ul aria-hidden="true" className="absolute inset-0 m-0 list-none p-0">
        {SLIDES.map((src) => (
          <li
            key={src}
            className="jb-slide"
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </ul>

      <span aria-hidden="true" className="absolute inset-0 z-[1] bg-ink/45" />

      <div className="relative z-[2] w-full px-6 text-center">
        <p
          className="anim anim-fade eyebrow text-paper/80 tracking-[0.25em]"
          style={{ animationDelay: "0.15s" }}
        >
          Luxury Furniture &middot; {business.address.city}
        </p>

        <h1
          className="anim anim-rise mx-auto mt-4 font-display text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1.05] text-paper text-shadow-soft"
          style={{ animationDelay: "0.3s" }}
        >
          Crafted for
          <br />
          Living Well
        </h1>

        <div
          className="anim anim-fade mt-9 flex justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild variant="invert" size="lg" arrow>
            <a href="#collections">Explore Collections</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
