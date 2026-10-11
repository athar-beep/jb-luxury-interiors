# JB Luxury Interiors — Component Registry

One home for every UI component. Each entry lists its purpose, props and
variants. Components use design tokens only (see `app/globals.css`) — no raw
values — and follow the `variant` / `size` prop convention rather than boolean
sprawl.

## Discovery & reuse decisions (component-search)

Searched the codebase and the shadcn/ui + Radix catalogues before building.

| Need | Search result | Decision |
| --- | --- | --- |
| Button (primary/secondary/ghost/link, icon, loading) | shadcn/ui `Button` pattern (cva + Radix `Slot`) | **Extend** — adopted the cva + `asChild` API, replaced default styling with JB tokens, added sliding-arrow micro-interaction. |
| Mobile menu / dialog | Radix `@radix-ui/react-dialog` (shadcn "sheet" is the same primitive) | **Reuse** primitive, **build** JB-styled sheet content. |
| Form controls | shadcn/ui `Input` / `Label`, Radix `Label` | **Extend** into a single `field.tsx` (Label/Input/Textarea/Select/Field) to avoid four near-duplicate files. |
| Circular icon/social button | shadcn/ui `Button` size=icon | **Build new** as `IconButton` (anchor-based, glass/outline variants) since it is used for links, not form submits. |
| Badge | shadcn/ui `Badge` | **Extend** — restyled as an honest "sample content" flag. |
| Card | Various card components | **Build new** — collections/featured cards are art-directed per section, not a generic container. |
| Image wrapper | — | **Build new** `Figure` to guarantee alt text + LQIP blur + shared colour grade. |

No duplicate components were created. Toast, accordion, tabs and tooltip were
considered and deliberately **not** added — no current use case.

## Primitives — `components/ui/`

### Button
Purpose: primary interactive control. Anchor or button.
- **Props:** `variant` (`primary` \| `clay` \| `outline` \| `light` \| `ghost` \| `link`), `size` (`sm` \| `default` \| `lg` \| `icon`), `asChild`, `arrow`, plus all native button props.
- **Variants:** primary = ink→ink-700; clay = warm clay→ink; outline = hairline→ink fill; light = paper; ghost; link = animated underline.
- **Status:** stable.
- **States:** hover, focus-visible, active (translate-y 1px), disabled (opacity 50). Arrow variant has a dual-icon slide.

### IconButton
Purpose: circular anchor control for social/utility actions. **Props:** `variant` (`outline` \| `solid` \| `glass` \| `clay`), `size` (`sm` \| `default` \| `lg`). **Status:** stable.

### Container
Purpose: page gutter + max width. **Props:** native div. **Status:** stable.

### Eyebrow
Purpose: small uppercase section label with optional rule. **Props:** `withRule`, `tone`. **Status:** stable.

### SectionHeading
Purpose: eyebrow + display title + intro block. **Props:** `eyebrow`, `title`, `intro`, `tone`, `align`, `titleClassName`. **Status:** stable.

### Badge
Purpose: honest "sample/demo" flag. **Props:** native span. **Status:** stable.

### Figure
Purpose: `next/image` wrapper guaranteeing alt + LQIP blur + shared `grade` filter. **Props:** `asset` (ImageAsset), `sizes`, `priority`, `grade`, `imgClassName`. **Status:** stable.

### Field / Label / Input / Textarea / Select
Purpose: accessible form controls (Radix Label). `Field` composes label + control + hint/error. Error uses `aria-invalid` styling and `role="alert"`. **Status:** stable.

## Composed — `components/`

### SiteHeader (`site-header.tsx`)
Sticky header, scroll-state (transparent→blurred), scroll-spy active links, WhatsApp/mobile sheet. **Status:** stable.

### WhatsAppFloat
Floating WhatsApp control, appears after the hero, safe-area aware. **Status:** stable.

### EnquiryForm
Validated enquiry form; three outcomes — backend POST, honest "manual" hand-off (WhatsApp/email pre-filled), or error. **Status:** stable.

### SiteFooter
Brand, navigation, contact, gated socials, demo/credit notices. **Status:** stable.

### Sections — `components/sections/`
`Hero`, `Collections`, `Featured`, `Materials`, `Story`, `Gallery`, `Contact`.
Each is art-directed and intentionally different in surface and composition.

## Design tokens (see `app/globals.css`)
Surfaces `paper` / `chalk` / `stone` / `sand`; ink `ink` / `ink-700` / `ink-500`;
accents `eucalyptus` / `eucalyptus-deep`; warm `clay` / `clay-soft`; `walnut`.
Motion easings `--ease-editorial`, `--ease-out-quint`. All components reference
these, never raw hex.
