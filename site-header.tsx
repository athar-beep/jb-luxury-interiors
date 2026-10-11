"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { business, directionsHref, whatsappHref } from "@/lib/business";
import { navLinks } from "@/lib/content";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState("");
  const key = ids.join(",");
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return undefined;

    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = "";
      for (const el of elements) {
        if (el.offsetTop <= y) current = el.id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 4
      ) {
        current = elements[elements.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [key, ids, offset]);
  return active;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(
    () => navLinks.map((l) => l.href.replace("#", "")),
    [],
  );
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-editorial",
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1360px] items-center justify-between px-5 transition-all duration-500 ease-editorial sm:px-7 lg:px-10 xl:px-14",
          scrolled ? "h-[68px]" : "h-[84px]",
        )}
      >
        <Logo tone={scrolled ? "default" : "light"} showCity={!scrolled} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative inline-flex items-center px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-300",
                      scrolled
                        ? isActive
                          ? "text-ink"
                          : "text-foreground/60 hover:text-ink"
                        : isActive
                          ? "text-paper"
                          : "text-paper/75 hover:text-paper",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 bottom-1 h-px origin-left transition-transform duration-500 ease-editorial",
                        scrolled ? "bg-ink/70" : "bg-paper/80",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant={scrolled ? "primary" : "invert"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">
              Enquire
              <span
                aria-hidden="true"
                className="inline-block h-[18px] w-[18px] rounded-full bg-clay transition-transform duration-500 ease-editorial group-hover/btn:scale-125"
              />
            </a>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep focus-visible:ring-offset-2 lg:hidden",
                  scrolled
                    ? "border-ink/15 text-ink hover:bg-ink hover:text-paper focus-visible:ring-offset-paper"
                    : "border-paper/40 text-paper hover:bg-paper hover:text-ink focus-visible:ring-offset-ink",
                )}
              >
                <Menu className="h-[18px] w-[18px]" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-[81] flex w-[min(90vw,26rem)] flex-col bg-paper p-6 shadow-lift outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right data-[state=open]:duration-500 data-[state=closed]:duration-300 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                  <Logo showCity={false} />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      <X className="h-[18px] w-[18px]" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav aria-label="Mobile" className="mt-10">
                  <ul className="flex flex-col">
                    {navLinks.map((link, i) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline justify-between border-b border-ink/10 py-4 font-display text-[1.7rem] leading-none text-ink transition-colors duration-300 hover:text-eucalyptus-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eucalyptus-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                        >
                          {link.label}
                          <span className="font-sans text-[0.6875rem] tracking-[0.12em] text-foreground/35">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto space-y-4 pt-8">
                  <p className="eyebrow">Visit the studio</p>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p className="leading-relaxed">{business.address.line1}, {business.address.line2}, {business.address.city}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="primary" arrow>
                      <a
                        href={whatsappHref(
                          `Hello ${business.name}, I'd like to enquire about a piece.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                      >
                        <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                        WhatsApp
                      </a>
                    </Button>
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href={business.phone.href}
                        aria-label={`Call ${business.phone.display}`}
                        className="flex h-11 items-center justify-center gap-2 rounded-sm border border-ink/15 text-xs text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                      >
                        <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                      </a>
                      <a
                        href={business.email.href}
                        aria-label={`Email ${business.email.display}`}
                        className="flex h-11 items-center justify-center gap-2 rounded-sm border border-ink/15 text-xs text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                      >
                        <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                      </a>
                      <a
                        href={directionsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions"
                        className="flex h-11 items-center justify-center gap-2 rounded-sm border border-ink/15 text-xs text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                      >
                        <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
