"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { business, whatsappHref } from "@/lib/business";
import { cn } from "@/lib/utils";

/**
 * Restrained floating WhatsApp control.
 * Appears once the visitor has scrolled past the hero, sits above mobile
 * navigation, and carries a full accessible label.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref(`Hello ${business.name}, I'd like to enquire.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${business.name} on WhatsApp`}
      className={cn(
        "group fixed right-5 z-40 flex items-center gap-0 sm:right-8",
        "bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-8",
        "transition-all duration-500 ease-editorial",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="mr-0 hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-ink py-2.5 pl-4 pr-0 text-xs uppercase tracking-[0.12em] text-paper opacity-0 transition-all duration-500 ease-editorial group-hover:max-w-[12rem] group-hover:pr-4 group-hover:opacity-100 sm:block" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-ink text-paper shadow-lift transition-transform duration-300 ease-editorial group-hover:scale-105 group-active:scale-95">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-eucalyptus/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-paper bg-eucalyptus"
        />
      </span>
    </a>
  );
}
