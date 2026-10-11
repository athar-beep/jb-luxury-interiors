import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/images";

type FigureProps = {
  asset: ImageAsset;
  /** Sizing hint for the browser; pass an accurate value per layout slot. */
  sizes?: string;
  priority?: boolean;
  /** Apply the unifying colour grade (default true). */
  grade?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * next/image wrapper that guarantees alt text, a blur placeholder (from the
 * generated LQIP) and the shared colour grade. The parent must be positioned
 * (the image fills it) so aspect ratio is controlled by the container.
 */
export function Figure({
  asset,
  sizes = "100vw",
  priority = false,
  grade = true,
  className,
  imgClassName,
}: FigureProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={asset.blur}
      className={cn("object-cover", grade && "grade", className, imgClassName)}
    />
  );
}
