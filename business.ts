/**
 * Centralised business information — the single source of truth.
 *
 * Everything displayed on the site reads from here. Update these values and
 * the whole site follows.
 *
 * VERIFICATION STATUS (see `verified` flags):
 *  - name, address, phone, email, WhatsApp ....... confirmed by the business owner
 *  - Instagram ................................... NOT verified — none found
 *  - Facebook .................................... candidate found via a public
 *    business directory, ownership NOT confirmed — do not treat as live
 *
 * To publish a social link: set `url` and flip `verified` to true. The UI only
 * renders social buttons that are marked `verified`, so unconfirmed links can
 * never appear as dead or misleading buttons.
 */

export type SocialLink = {
  label: string;
  url: string | null;
  handle?: string | null;
  verified: boolean;
  /** Short note shown in the UI while unverified. */
  note?: string;
};

export const business = {
  name: "JB Luxury Interiors",
  /**
   * Production domain (no trailing slash). Used for metadataBase, canonical
   * URLs, sitemap and Open Graph. UPDATE THIS before going live.
   */
  domain: "https://jbluxuryinteriors.pk",
  monogram: "JB",
  shortName: "JB",
  category: "Furniture & home store",
  tagline: "Furniture & interior collections",
  established: null as string | null, // not verified — intentionally blank

  address: {
    line1: "Ch. Chaudhry Rehmat Ali Road",
    line2: "Manzoor Colony",
    city: "Karachi",
    region: "Sindh",
    country: "Pakistan",
    postal: null as string | null,
  },

  phone: {
    display: "0333 7089633",
    intl: "+92 333 7089633",
    href: "tel:+923337089633",
  },

  whatsapp: {
    display: "0333 7089633",
    digits: "923337089633",
    href: "https://wa.me/923337089633",
  },

  email: {
    display: "jb_interior2000@yahoo.com",
    href: "mailto:jb_interior2000@yahoo.com",
    // Alternate address seen in a public directory (unconfirmed):
    // bzeeshan381@gmail.com
  },

  /** Opening hours were not verifiable — omitted rather than invented. */
  hours: null as string | null,

  socials: {
    instagram: {
      label: "Instagram",
      url: null,
      handle: null,
      verified: false,
      note: "No official Instagram profile has been confirmed yet.",
    } satisfies SocialLink,
    facebook: {
      label: "Facebook",
      url: "https://www.facebook.com/1100140566672389",
      handle: null,
      verified: false,
      note: "A candidate page was found in a public directory; ownership is not yet confirmed.",
    } satisfies SocialLink,
  },
};

export const fullAddress = [
  business.address.line1,
  business.address.line2,
  business.address.city,
  business.address.country,
]
  .filter(Boolean)
  .join(", ");

/** Google Maps directions deep link built from the confirmed address. */
export const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${business.name}, ${fullAddress}`);

/** Whether the enquiry form has a delivery backend configured. */
export const enquiryEndpoint =
  process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim() || null;

/** Pre-built WhatsApp link with an optional pre-filled message. */
export function whatsappHref(message?: string) {
  const base = business.whatsapp.href;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
