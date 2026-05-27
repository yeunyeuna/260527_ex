---
name: Gentle Care
colors:
  surface: '#f4faff'
  surface-dim: '#cbdde7'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#dff1fb'
  surface-container-high: '#d9ebf5'
  surface-container-highest: '#d4e5ef'
  on-surface: '#0d1e25'
  on-surface-variant: '#43474a'
  inverse-surface: '#23333a'
  inverse-on-surface: '#e2f3fd'
  outline: '#73787b'
  outline-variant: '#c3c7cb'
  surface-tint: '#526069'
  primary: '#526069'
  on-primary: '#ffffff'
  primary-container: '#e3f2fd'
  on-primary-container: '#606f78'
  inverse-primary: '#bac9d3'
  secondary: '#655d4f'
  on-secondary: '#ffffff'
  secondary-container: '#eadecc'
  on-secondary-container: '#6a6253'
  tertiary: '#006685'
  on-tertiary: '#ffffff'
  tertiary-container: '#dff3ff'
  on-tertiary-container: '#037698'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e5ef'
  primary-fixed-dim: '#bac9d3'
  on-primary-fixed: '#0f1d25'
  on-primary-fixed-variant: '#3b4951'
  secondary-fixed: '#ede1cf'
  secondary-fixed-dim: '#d0c5b3'
  on-secondary-fixed: '#201b10'
  on-secondary-fixed-variant: '#4d4638'
  tertiary-fixed: '#bee9ff'
  tertiary-fixed-dim: '#7ed1f7'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#004d65'
  background: '#f4faff'
  on-background: '#0d1e25'
  surface-variant: '#d4e5ef'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is anchored in the concept of "Empathetic Expertise." It is specifically designed to alleviate the anxiety often associated with veterinary visits, replacing it with a sense of calm, clinical precision, and warmth. The target audience consists of discerning cat owners who view their pets as family and seek specialized, high-standard medical care.

The visual style is a blend of **Modern Minimalism** and **Soft Corporate**. It utilizes generous whitespace to create a "breathable" interface, preventing information density from becoming overwhelming. The aesthetic is clean and organized to reflect professional medical standards, but softened through organic shapes and a comforting palette to remain approachable and caring.

## Colors

The color strategy uses a "Low-Stimulus" approach to evoke a stress-free atmosphere. 

*   **Primary (Calm Blue):** Used for large surfaces and backgrounds to establish a foundation of trust and hygiene.
*   **Secondary (Warm Peach):** Applied to interactive highlights, icons, and accents to provide a gentle, welcoming contrast.
*   **Neutral (Charcoal Gray):** Reserved exclusively for typography and essential structural lines to ensure high legibility and a professional weight.
*   **Tertiary (Support Blue):** A slightly more saturated blue used for primary actions and state changes (hover/active) to maintain functional clarity without breaking the pastel harmony.

The system defaults to **Light Mode** to maintain a clinical, airy, and transparent feel suitable for a medical environment.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Plus Jakarta Sans** is used for headlines; its soft, rounded terminals echo the gentle nature of the brand while remaining contemporary. **Noto Sans** is used for all body copy and labels, providing world-class legibility and a neutral, professional tone that reinforces medical authority.

To ensure hierarchy, use the Charcoal Gray for all primary text. For secondary information or captions, use a 60% opacity of the Charcoal Gray. Headlines should use tighter letter spacing to feel cohesive and "designed," while body text maintains standard spacing for maximum readability.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. 
- **Desktop:** A 12-column grid with a maximum width of 1280px. Gutters are generous (24px) to ensure no elements feel cramped.
- **Mobile:** A 4-column grid with 16px side margins. 

Spacing follows an 8px rhythmic scale. To achieve the "stress-free" atmosphere, prioritize the `lg` (48px) and `xl` (80px) units for vertical padding between sections. Avoid placing critical UI elements too close to one another; the "luxury of space" is a key indicator of the hospital’s specialized and attentive nature.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

Unlike traditional elevation that uses stark shadows, this design system uses very soft, diffused shadows with a slight tint of the Primary Blue (#E3F2FD) to ensure the UI feels integrated and ethereal rather than "heavy." 

- **Level 0 (Base):** Primary Blue or White background.
- **Level 1 (Cards):** White background with a 15% opacity Primary Blue shadow (Blur: 20px, Y: 4px).
- **Level 2 (Modals/Overlays):** White background with a 20% opacity Primary Blue shadow (Blur: 40px, Y: 12px).

Avoid using borders for separation. Instead, use subtle shifts in background color (e.g., placing a White card on a Warm Peach or Calm Blue background) to define boundaries.

## Shapes

The shape language is defined by a **Pill-shaped (Level 3)** roundedness. Every corner is intentionally softened to remove visual "sharpness," which translates psychologically to a safer, more caring environment.

- **Buttons & Inputs:** Use full pill-shaped rounding (height / 2).
- **Cards & Containers:** Use a minimum of 1.5rem (24px) for small containers and up to 3rem (48px) for large sections.
- **Icons:** Use icons with rounded stroke caps and joints to match the typographic terminals of Plus Jakarta Sans.

## Components

### Buttons
Primary buttons should be pill-shaped, using a more saturated blue (#81D4FA) for the background with white text. Secondary buttons should use the Warm Peach (#FFF3E0) with Charcoal Gray text. Avoid sharp-edged buttons entirely.

### Cards
Cards are the primary container. They should have a 1.5rem corner radius, a soft ambient shadow, and no border. Padding inside cards should be generous (at least `md` or 24px).

### Input Fields
Inputs should use a pill shape for the container. The background should be a very pale version of the primary blue or white. Focus states are indicated by a 2px stroke of the secondary Warm Peach to provide a "soft glow" effect rather than a harsh border.

### Chips & Tags
Used for cat specialties (e.g., "Feline Dental," "Senior Care"). These should be small, pill-shaped, and use the Warm Peach background with a slightly darker text color for accessibility.

### Special Component: The "Calm-Feed"
A specialized list style for medical history or appointments that uses large icons, soft backgrounds, and extra vertical spacing between items to ensure the information is easily scannable for a worried pet owner.