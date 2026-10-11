import manifest from "@/public/img/manifest.json";

export type ImageAsset = {
  name: string;
  src: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait" | "square";
  /** Inline LQIP used as next/image blurDataURL for layout-stable loading. */
  blur: string;
  alt: string;
  credit: string;
};

const byName = new Map<string, ImageAsset>(
  (manifest as ImageAsset[]).map((m) => [m.name, m]),
);

/** Typed accessor — throws loudly in dev if a slot name is misspelled. */
export function image(name: string): ImageAsset {
  const found = byName.get(name);
  if (!found) {
    throw new Error(`Unknown image slot "${name}". See public/img/manifest.json`);
  }
  return found;
}

export const imageSlots = Array.from(byName.keys());
