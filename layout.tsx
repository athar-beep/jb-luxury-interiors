import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { business, fullAddress } from "@/lib/business";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "JB Luxury Interiors — Furniture & Interiors, Karachi",
    template: "%s · JB Luxury Interiors",
  },
  description:
    "JB Luxury Interiors is a furniture and home store in Manzoor Colony, Karachi — living, bedroom, dining and statement seating, with interior enquiries handled directly by the studio.",
  keywords: [
    "JB Luxury Interiors",
    "furniture Karachi",
    "luxury furniture Karachi",
    "interior design Karachi",
    "Manzoor Colony furniture",
    "sofa Karachi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "JB Luxury Interiors — Furniture & Interiors, Karachi",
    description:
      "Furniture and interior collections in Manzoor Colony, Karachi. Enquire directly with the studio.",
    images: ["/img/hero-window.webp"],
    locale: "en_PK",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a2e2b",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: business.name,
  description:
    "Furniture and home store offering furniture and interior collections.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    addressCountry: "PK",
  },
  telephone: business.phone.intl,
  email: business.email.display,
  areaServed: "Karachi, Pakistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          // Progressive-enhancement switch: enables scroll-reveal's hidden
          // start state only when scripting is actually available.
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('has-js');`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <div className="grain" aria-hidden="true" />
        <RevealObserver />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
