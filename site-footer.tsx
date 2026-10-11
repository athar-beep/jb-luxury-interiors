import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { Logo } from "@/components/ui/logo";
import { business, directionsHref, whatsappHref, fullAddress } from "@/lib/business";
import { navLinks, collections } from "@/lib/content";
import type { SocialLink } from "@/lib/business";

const socialLinks: SocialLink[] = [
  business.socials.instagram,
  business.socials.facebook,
];

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
};

export function SiteFooter() {
  const verified = socialLinks.filter((s) => s.verified && s.url);
  const pending = socialLinks.filter((s) => !s.verified);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-paper/60">
              Furniture and interior collections in {business.address.city}.
              Enquiries handled directly by the studio.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <IconButton
                href={whatsappHref(`Hello ${business.name}, I'd like to enquire.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                variant="glass"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              </IconButton>

              {verified.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <IconButton
                    key={s.label}
                    href={s.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${business.name} on ${s.label}`}
                    variant="glass"
                  >
                    {Icon ? <Icon className="h-[18px] w-[18px]" /> : null}
                  </IconButton>
                );
              })}
            </div>

            {pending.length ? (
              <p className="mt-5 max-w-[34ch] text-xs leading-relaxed text-paper/40">
                {pending.map((s) => s.label).join(" & ")} — official profile
                link{pending.length > 1 ? "s" : ""} awaiting confirmation by the
                business.
              </p>
            ) : null}
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="eyebrow text-paper/45">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-paper/75 transition-colors duration-300 hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-paper/45">Collections</h2>
            <ul className="mt-5 space-y-3">
              {collections.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a
                    href="#collections"
                    className="link-underline text-sm text-paper/75 transition-colors duration-300 hover:text-paper"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-paper/45">Visit &amp; contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-paper/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                <span className="leading-relaxed">
                  {business.address.line1},<br />
                  {business.address.line2}, {business.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                <a href={business.phone.href} className="link-underline">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                <a href={business.email.href} className="link-underline break-all">
                  {business.email.display}
                </a>
              </li>
            </ul>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-block text-xs uppercase tracking-[0.12em] text-paper/60"
            >
              Get directions
            </a>
          </div>
        </div>

        {/* Oversized closing wordmark */}
        <div className="mt-16 border-t border-paper/12 pt-10">
          <p
            aria-hidden="true"
            className="select-none font-display text-[clamp(2.6rem,10vw,8rem)] leading-none tracking-tightest text-paper/10"
          >
            JB Luxury Interiors
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-paper/12 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="max-w-[62ch] leading-relaxed sm:text-right">
            {fullAddress}
          </p>
        </div>
      </Container>
    </footer>
  );
}
