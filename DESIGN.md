HoHaoDuyen Portfolio Design System

1. Creative North Star: Lane-Inspired Organic Modernism

The interface should feel like a sophisticated gallery exhibition—calm, curated, and intentionally paced. It embraces asymmetric layouts, generous whitespace, and subtle motion while rejecting rigid grids, harsh contrasts, and visual clutter. The design conveys award-winning professionalism through restraint, using layered neutrals punctuated by regal purple accents and organic marble-like textures. Core principles: content-first clarity, tactile depth through atmospheric effects, and dynamic rhythm via marquee elements that echo traditional Vietnamese silk patterns.

2. Color & Atmospheric Tones

Inspired by twilight skies over Hanoi's West Lake and the layered textures of traditional Vietnamese silk (lụa), the palette uses deep neutrals punctuated by regal purple accents to create depth without hard lines. Structural boundaries emerge through background shifts rather than borders, creating a sense of floating layers.

The Background Field Rule: Structural sections are defined solely by background color transitions (bg → bg-2 → bg-3), with no borders or outlines. Content grouping relies on subtle elevation changes and spacing.

Surface Hierarchy & Nesting:
- Base Layer: surface-base (#090507) - Deep near-black for page foundation
- Secondary Containers: surface-overlay (#100d12) - Card surfaces and sidebars
- Interactive/Floating Cards: surface-elevated (#16101a) - Elevated elements with purple undertone
- Special Visual Treatments: 
  - Glassmorphism: surface-overlay/60 backdrop-filter blur(20px)
  - Gradient accents: purple-mauve (linear-gradient(135deg, #9293FA, #966EA1))
  - Selection highlight: purple/30 (20% opacity #6565FD)
  - Text gradients: Same purple-mauve gradient with -webkit-background-clip: text

3. Typography: Hierarchical Serif-Sans Balance with Vietnamese Sensibility

Display & Headlines: 
- Primary font: Be Vietnam Pro (variable weight from Google Fonts)
- Display-3xl: 3.5rem (64-68px), weight 800, letter-spacing -0.02em (-2px)
- Display-2xl: 2.25rem (48px), weight 800, letter-spacing -0.015em (-1.5px)
- Display-xl: 1.5rem (24px), weight 600, letter-spacing 0
- All headlines use tight letter-spacing for premium feel

Body Text: 
- Base font: Be Vietnam Pro (same family for linguistic cohesion with Vietnamese text)
- Body-base: 1rem (16-17px), line-height 1.7, weight 400
- Body-sm: 0.875rem (13-14px), line-height 1.6, weight 400
- Strict avoidance of all-caps in body copy except for specific eyebrow treatments

Metadata & Accents: 
- Secondary font: Geist Mono (for technical details and timestamps)
- Meta-xs: 0.75rem (11px), letter-spacing 0.02em (2px), uppercase (eyebrows)
- Tags: 0.875rem (13-14px), weight 500, text-purple-lt (#9293FA)
- Navigation: font-medium (500) for active states

4. Elevation & Depth

Depth is achieved through tonal layering, micro-shadows, and atmospheric blurring, avoiding harsh contrasts that would break the organic, luxurious feel.

The Depth Principle: Overlapping elements separate through subtle background value shifts (surface-overlay to surface-elevated) combined with micro-shadows and glassmorphism, creating a sense of atmospheric perspective rather than physical stacking.

Ambient Shadows / Light Sources:
- Micro-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)
- Elevated shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)
- Glow effect: 0 8px 40px rgba(101,101,253,0.45) (purple/45)
- Shadow color always uses muted neutral with blue undertone (never true black)

Border Fallbacks & Accessibility:
- When borders required for accessibility: border/30 (rgba(255,255,255,0.07) at 30% opacity)
- Focus rings: 2px solid purple-lt/80 with 2px offset
- Divider lines: border/20 (rgba(255,255,255,0.07) at 20% opacity) - used sparingly

Corner Radii: 
- Sharp: 0px (for industrial elements like code blocks, rarely used)
- Soft: 0.5rem (8px) - cards, containers, image elements
- Pill: 9999px (buttons, chips, eyebrow elements)
- Consistent application: containers use soft, interactive elements use pill or soft based on function, image borders use 1.5rem (24px) for premium feel

5. Signature Components

Primary Buttons:
- Background: gradient-radial (purple-lt to transparent) over surface-elevated
- Radius: pill (9999px)
- State: 
  - Hover: scale(1.03) + gradient intensity increase 15% + glow effect
  - Active: scale(0.98) + background shift to surface-overlay
  - Disabled: opacity 0.5, cursor not-allowed, no hover/active states

Standard Cards / Containers:
- Construction: surface-overlay background, micro-shadow, soft radius (8px)
- Spacing: p-6 (24px internal), mb-6 (24px external) base unit
- Note: Content separation achieved through spacing and typographic weight, never divider lines
- Image cards: border radius 1.5rem (24px) with dark overlay gradients

Navigation Elements:
- Tabs: text-sm (13-14px), font-medium, text-muted/60 hover text-purple
- Active state: text-purple + underline (1px solid purple/40)
- Background: transparent (no fill)
- Vertical sidebar links: flex items, py-2, px-4, rounded-md, hover:bg-purple/10

Inputs & Fields:
- Background: surface-elevated
- Border: 1px solid border/20 (invisible by default, rgba(255,255,255,0.07))
- Focus: border-purple/60 + ring-2 ring-purple/30
- Error: border-rose-500/60 + text-rose-500
- Padding: py-3 px-4 (12px vertical, 16px horizontal)
- Font: text-base (16-17px)

Orb Background (Custom Specialty Component):
- Description: Floating, semi-transparent circular elements that create depth and movement, inspired by traditional Vietnamese water puppet shows and floating lantern festivals
- Construction: 
  - Size: w-20 h-20 to w-40 h-40 (5rem to 10rem, randomized per instance)
  - Color: surface-overlay/30 or purple/10 (layered for depth)
  - Animation: slow drift (keyframes: float 20s ease-in-out infinite) + gentle pulse
  - Blur: backdrop-filter blur(40px) on larger orbs, blur(100px) for background layers
  - Placement: absolute positioned with negative margins to allow edge bleeding (-25% to 25%)
  - Count: Typically 3-5 layers with varying sizes, opacities, and animation delays
- Purpose: Creates atmospheric depth without distracting from content, embodies the "organic" and "cultural" aspects of the north star

6. Do’s and Don’ts

Do:
- Embrace asymmetry in section layouts to create visual rhythm inspired by traditional Vietnamese composition
- Use typographic weight and scale for hierarchy before color or decoration
- Apply the marquee element sparingly as a rhythmic punctuation (max 2 per view), echoing silk patterns
- Maintain minimum 8px spacing between interactive elements for touch accessibility
- Let background color shifts define sections before considering borders
- Use Be Vietnam Pro for all Vietnamese and English text for linguistic consistency
- Apply glassmorphism with backdrop-filter blur(20px) for nav and modals
- Use the purple-mauve gradient for highlights, CTA accents, and text treatments

Don't:
- Don't use pure black (#000) or pure white (#fff) - always use palette neutrals (surface-base, surface-overlay, etc.)
- Don't apply drop shadows larger than 8px blur without explicit justification
- Don't use divider lines or rules between content sections; use spacing and elevation instead
- Don't animate more than 3 elements simultaneously in a viewport to maintain calmness
- Don't set letter-spacing positive on body text (kerning must be tight or neutral for readability)
- Don't use more than 2 font weights in any single paragraph
- Don't apply gradients to large background areas; reserve for accents and text treatments
- Don't hardcode colors; always use CSS variables from the palette