import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Collections } from "@/components/sections/collections";
import { Featured } from "@/components/sections/featured";
import { Materials } from "@/components/sections/materials";
import { Story } from "@/components/sections/story";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Collections />
        <Featured />
        <Materials />
        <Story />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
