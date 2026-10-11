/**
 * Editorial content model.
 *
 * DEMO CONTENT NOTICE
 * -------------------
 * JB Luxury Interiors has not supplied a verified catalogue. Every collection,
 * piece and caption below is intentionally generic, clearly-replaceable sample
 * copy so the layout can be evaluated. Nothing here claims real inventory,
 * prices, dimensions, materials or availability. Replace from the business's
 * own catalogue before launch.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Pieces", href: "#pieces" },
  { label: "Materials", href: "#materials" },
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquiries", href: "#contact" },
];

export type Collection = {
  id: string;
  name: string;
  index: string;
  blurb: string;
  imageSlot: string;
  /** Grid span hints used by the asymmetric collections layout. */
  span: "wide" | "tall" | "standard";
};

export const collections: Collection[] = [
  {
    id: "living",
    name: "Living & Lounge",
    index: "01",
    blurb: "Seating, low tables and the quiet architecture of a room at rest.",
    imageSlot: "coll-living",
    span: "wide",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    index: "02",
    blurb: "Beds, casegoods and textiles composed for calm, low-light interiors.",
    imageSlot: "coll-bedroom",
    span: "standard",
  },
  {
    id: "dining",
    name: "Dining & Kitchen",
    index: "03",
    blurb: "Tables, seating and storage in solid timber and matte surfaces.",
    imageSlot: "coll-dining",
    span: "standard",
  },
  {
    id: "study",
    name: "Study & Workspace",
    index: "04",
    blurb: "Desks and shelving that bring order to a working room.",
    imageSlot: "coll-study",
    span: "standard",
  },
  {
    id: "seating",
    name: "Statement Seating",
    index: "05",
    blurb: "Sculptural upholstery — the single piece a room is built around.",
    imageSlot: "coll-seating",
    span: "tall",
  },
  {
    id: "decor",
    name: "Objects & Decor",
    index: "06",
    blurb: "Lamps, vessels and textures that finish the composition.",
    imageSlot: "coll-decor",
    span: "standard",
  },
];

export type Piece = {
  id: string;
  name: string;
  category: string;
  imageSlot: string;
  detail: string;
};

export const pieces: Piece[] = [
  {
    id: "sample-01",
    name: "Low-profile sofa",
    category: "Living",
    imageSlot: "piece-lounge",
    detail: "Sample piece — upholstery, dimensions and pricing to be confirmed.",
  },
  {
    id: "sample-02",
    name: "Linen lounge seat",
    category: "Seating",
    imageSlot: "piece-bookcase",
    detail: "Sample piece — upholstery, dimensions and pricing to be confirmed.",
  },
  {
    id: "sample-03",
    name: "Coffee table",
    category: "Living",
    imageSlot: "piece-table",
    detail: "Sample piece — timber, finish and pricing to be confirmed.",
  },
  {
    id: "sample-04",
    name: "Timber-framed bed",
    category: "Bedroom",
    imageSlot: "piece-bed",
    detail: "Sample piece — timber, dimensions and pricing to be confirmed.",
  },
];

export type Material = {
  id: string;
  label: string;
  note: string;
  imageSlot: string;
};

export const materials: Material[] = [
  {
    id: "timber",
    label: "Solid timber",
    note: "Warm, close-grain hardwoods with a matte, low-sheen finish.",
    imageSlot: "mat-wood",
  },
  {
    id: "textile",
    label: "Natural textile",
    note: "Washed linen and wool in chalk, sand and muted eucalyptus.",
    imageSlot: "mat-linen",
  },
  {
    id: "stone",
    label: "Stone & plaster",
    note: "Chalky surfaces and honed stone that hold soft, even light.",
    imageSlot: "mat-stone",
  },
  {
    id: "verdure",
    label: "Greenery",
    note: "Planting and foliage to bring a living softness indoors.",
    imageSlot: "mat-verdure",
  },
];

export type GalleryItem = {
  id: string;
  imageSlot: string;
  caption: string;
  /** Column span within the gallery grid. */
  span: "tall" | "wide" | "standard";
};

export const gallery: GalleryItem[] = [
  { id: "g1", imageSlot: "gal-1", caption: "Composition, quiet room", span: "wide" },
  { id: "g2", imageSlot: "gal-2", caption: "Morning light, living space", span: "standard" },
  { id: "g3", imageSlot: "gal-3", caption: "Deep tone, enclosed room", span: "tall" },
  { id: "g4", imageSlot: "gal-4", caption: "Apartment living, daylight", span: "standard" },
  { id: "g5", imageSlot: "gal-5", caption: "Layered textiles, bedroom", span: "standard" },
  { id: "g6", imageSlot: "gal-6", caption: "Long axis, architectural hall", span: "wide" },
  { id: "g7", imageSlot: "gal-7", caption: "Texture against a soft wall", span: "standard" },
  { id: "g8", imageSlot: "gal-8", caption: "Working room, warm neutrals", span: "standard" },
];
