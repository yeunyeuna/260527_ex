---
name: Feline Wellness Collective
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#404848'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#717978'
  outline-variant: '#c0c8c7'
  surface-tint: '#3c6565'
  primary: '#3c6565'
  on-primary: '#ffffff'
  primary-container: '#7da7a6'
  on-primary-container: '#103c3c'
  inverse-primary: '#a4cfcd'
  secondary: '#48645a'
  on-secondary: '#ffffff'
  secondary-container: '#caeadd'
  on-secondary-container: '#4e6a60'
  tertiary: '#8e4e14'
  on-tertiary: '#ffffff'
  tertiary-container: '#db8d4e'
  on-tertiary-container: '#572a00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bfebe9'
  primary-fixed-dim: '#a4cfcd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#234d4d'
  secondary-fixed: '#caeadd'
  secondary-fixed-dim: '#aecdc1'
  on-secondary-fixed: '#032019'
  on-secondary-fixed-variant: '#304c43'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  caption:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is centered on "Gentle Veterinary Care," a philosophy that prioritizes the unique sensory needs of cats and the peace of mind of their owners. The brand personality is **Professional, Compassionate, and Serene**. It avoids the sterile, intimidating atmosphere of traditional clinics in favor of a "home-away-from-home" medical environment.

The visual style is a blend of **Soft Minimalism** and **Tactile Comfort**. By utilizing high amounts of whitespace and a warm, low-contrast palette, the UI reduces cognitive load and evokes a sense of safety. Design elements should feel approachable but grounded in medical expertise, using rounded geometry to mirror the "softness" of the feline form while maintaining a structured grid for professional reliability.

## Colors

This design system utilizes a "Calming Nature" palette designed to lower anxiety.

*   **Primary (#7DA7A6):** A muted Misted Teal used for primary actions and brand presence. It suggests medical cleanliness without the coldness of clinical blue.
*   **Secondary (#A8C7BB):** A Soft Sage used for accents and success states, reinforcing the connection to wellness and growth.
*   **Neutral Background (#F9F7F2):** A warm Oat Cream. This replaces pure white to reduce screen glare and provide a cozy, paper-like quality to the interface.
*   **Functional Accents:** A soft terracotta/muted orange (#F4A261) is used sparingly for urgent notifications or "Book Now" prompts to provide a warm, energetic contrast.

Color application should follow a 60-30-10 distribution, where the neutral cream dominates the canvas to ensure a "breathable" experience.

## Typography

The typography strategy focuses on legibility and warmth, specifically optimized for the Korean script (Hangul) which requires slightly more vertical breathing room than Latin characters.

*   **Headings:** **Plus Jakarta Sans** provides a modern, soft-terminal look that feels friendly and optimistic. 
*   **Body:** **Public Sans** is used for all medical and informational text. Its neutral, institutional skeleton ensures that even complex medical details are easy to digest for worried pet owners.

**Hierarchy Guidance:**
Use `headline-xl` sparingly for landing hero sections. For Korean text, ensure a `line-height` of at least 1.6 for body text to prevent the dense characters from feeling cluttered. All labels should avoid all-caps to maintain a gentle, conversational tone.

## Layout & Spacing

The layout philosophy is **Spacious & Balanced**, mirroring the "Stress-Free" clinic environment. 

*   **Grid:** A 12-column fixed grid for desktop (centered, 1200px max-width) and a single-column fluid layout for mobile.
*   **Negative Space:** Padding within containers should be generous. Use `stack-lg` (48px) between major sections to prevent the UI from feeling "crowded"—a visual metaphor for giving a cat its own territory.
*   **Rhythm:** Components use an 8px base unit. Vertical rhythm should be prioritized to guide the user's eye downward through the care process (e.g., Symptoms -> Booking -> Confirmation).

## Elevation & Depth

This design system avoids harsh drop shadows in favor of **Tonal Layering** and **Ambient Depth**.

*   **Depth Level 1 (Surface):** The base Oat Cream background.
*   **Depth Level 2 (Cards):** Pure white surfaces (#FFFFFF) with a very soft, diffused shadow (15% opacity of the Primary Teal) to create a "floating" effect.
*   **Depth Level 3 (Modals/Popovers):** Uses a slightly stronger shadow and a subtle backdrop blur (8px) to keep the focus on the task while maintaining environmental context.

Avoid black shadows; always tint shadows with a hint of the Primary color to maintain the soft, pastel atmosphere.

## Shapes

The shape language is defined by **Organic Curves**. 

Standard elements use a `0.5rem` (8px) radius, while larger containers and featured cards use `1rem` (16px). This roundedness communicates safety and eliminates the "sharp edges" that can subconsciously trigger medical anxiety. 

Buttons and input fields should always be significantly rounded (`rounded-lg` or `rounded-xl`) to feel "touchable" and friendly. Use "pill-shaped" tags for status indicators (e.g., "Available," "Vaccination").

## Components

*   **Buttons:** Primary buttons use the Misted Teal with white text and a `rounded-lg` radius. Hover states should transition to a slightly darker shade of teal with a subtle lift (elevation).
*   **Cards:** Use a white background, 16px padding, and 16px corner radius. Include a 1px border in a very light version of the Primary color (#E1EBEA) to define edges without adding visual weight.
*   **Input Fields:** Use a warm-gray border (#D1CDC7) and a focus state that glows with the secondary Sage color.
*   **Chips/Tags:** Used for cat breeds or medical categories. Use the Secondary Sage color at 20% opacity with dark teal text.
*   **Illustrations:** Icons should be "monoline" style with rounded ends, featuring feline motifs (paws, whiskers, ears) integrated into medical symbols (crosses, stethoscopes).
*   **Lists:** Medical lists should use custom feline-shaped bullets rather than standard dots to reinforce the niche brand identity.