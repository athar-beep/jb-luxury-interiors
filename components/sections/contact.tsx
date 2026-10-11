import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/enquiry-form";
import { business, directionsHref, whatsappHref } from "@/lib/business";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Details panel */}
          <div className="lg:col-span-5">
            <div className="reveal rounded-sm bg-ink p-8 text-paper sm:p-10">
              <Eyebrow tone="light">Enquiries</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,calc(4vw+1rem),3rem)] font-medium leading-[1.08] tracking-tight text-paper">
                Talk to the studio<br className="hidden sm:block" /> directly.
              </h2>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-paper/45">
                      Visit
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/85">
                      {business.address.line1},
                      <br />
                      {business.address.line2}, {business.address.city}
                    </p>
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-2 inline-block text-xs uppercase tracking-[0.12em] text-paper/70"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-paper/45">
                      Call
                    </p>
                    <a
                      href={business.phone.href}
                      className="link-underline mt-1.5 inline-block text-sm text-paper/90"
                    >
                      {business.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-paper/45">
                      Email
                    </p>
                    <a
                      href={business.email.href}
                      className="link-underline mt-1.5 inline-block break-all text-sm text-paper/90"
                    >
                      {business.email.display}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-eucalyptus" aria-hidden="true" />
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-paper/45">
                      Hours
                    </p>
                    <p className="mt-1.5 text-sm text-paper/60">
                      Opening hours to be confirmed by the studio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-t border-paper/15 pt-8">
                <Button asChild variant="invert" size="lg" arrow className="w-full sm:w-auto">
                  <a
                    href={whatsappHref(
                      `Hello ${business.name}, I'd like to enquire about a piece.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                    Message on WhatsApp
                  </a>
                </Button>
                <p className="mt-4 text-xs leading-relaxed text-paper/45">
                  WhatsApp {business.whatsapp.display} · usually the fastest reply.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="reveal" style={{ transitionDelay: "90ms" }}>
              <Eyebrow>Send an enquiry</Eyebrow>
              <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,calc(4vw+1rem),3rem)] font-medium leading-[1.08] tracking-tight text-ink">
                Tell us about the room.
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/60">
                Share what you are furnishing and the studio will come back with
                options. Fields marked with an asterisk are required.
              </p>
            </div>
            <div className="reveal mt-9" style={{ transitionDelay: "150ms" }}>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
