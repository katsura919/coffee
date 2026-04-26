# Design System Inspired by Duckbill Cookies e Cafés

> Auto-extracted from `https://www.duckbillcookies.com.br/` on 2026-04-26

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "🍪 Sobre os cookies".

**Key Characteristics:**
- Lato as the heading font
- Lato as the body font for all running text
- Heading weight 600
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#de313b` used for CTAs and brand highlights
- 4 shadow level(s) detected — tinted shadows
- Rounded corners (50px+) creating a friendly, approachable feel
- Tags: light, rounded, accented, compact, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#de313b`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#de313a`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.

### Text
- **Text Primary** (`#171717`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#171717`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#171717` | `--palette-1` | section | large | text-light |
| 2 | `#ffffff` | `--palette-2` | block | large | text-dark |
| 3 | `#efefef` | `--palette-3` | block | large | text-dark |
| 4 | `#de313b` | `--palette-4` | text-accent | medium | text-light |
| 5 | `#0f172a` | `--palette-5` | block | medium | text-light |
| 6 | `#0000ee` | `--palette-6` | text-accent | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Lato`, sans-serif
- **Body Font:** `Lato`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Lato | 20px | 600 | normal | normal |
| H2 | Monstro | 225px | 400 | 202.5px | 1px |
| H3 | Lato | 25px | 800 | 26px | normal |
| Body | Monstro | 50px | 400 | normal | normal |
| Small | Lato | 13.3333px | 400 | normal | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `225px` | headings |
| H1 | `100px` | headings |
| H2 | `90px` | headings |
| H3 | `50px` | headings |
| H4 | `25px` | headings |
| Body L | `20px` | body / supporting text |
| Body | `18px` | body / supporting text |
| Small | `16px` | body / supporting text |
| XS | `15px` | body / supporting text |
| Caption | `14px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 25px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Outline Button

```css
.btn-outline {
  background: transparent;
  color: #ffffff;
  border-radius: 50px;
  padding: 1px 6px;
  font-size: 13.3333px;
  font-weight: 400;
  border: 3px solid rgb(255, 255, 255);
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #171717;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 25px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Outline Button 2

```css
.btn-outline-2 {
  background: transparent;
  color: #333333;
  border-radius: 6px;
  padding: 1px 6px;
  font-size: 13.3333px;
  font-weight: 700;
  border: 2px solid rgb(51, 51, 51);
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 4px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `10px` — use multiples (20px, 30px, 40px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `10px` | element |
| spacing-2 | `40px` | card |
| spacing-3 | `5px` | element |
| spacing-4 | `15px` | element |
| spacing-5 | `1px` | element |
| spacing-6 | `28px` | card |
| spacing-7 | `6px` | element |
| spacing-8 | `13px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-card | `50px` | card |
| radius-button | `15px` | button |
| radius-button | `10px` | button |
| radius-subtle | `2px` | subtle |
| radius-subtle | `4px` | subtle |
| radius-button | `6px` | button |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| High | `rgba(0, 0, 0, 0.05) 0px 4px 20px 4px` | Modals, floating elements |
| Low | `rgb(132, 129, 129) 0px 2px 4px 0px` | Cards, subtle elevation |
| Low | `rgb(160, 160, 160) 0px 2px 2px 0px` | Cards, subtle elevation |
| High | `rgba(0, 0, 0, 0.2) 0px 10px 20px 0px` | Modals, floating elements |


## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `Lato` for all headings and `Lato` for body text
- Use `#de313b` as the single dominant accent/CTA color
- Maintain `10px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`50px`+) consistently for all interactive elements
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 600 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Lato/Lato with generic alternatives
- Don't use irregular spacing — stick to 10px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use oversized hero text — this brand uses restrained type
- Don't use pure black (#000000) for text — use `#171717` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 10px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #171717
Accent:      #de313b
Secondary:   #de313a
Border:      #171717
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Lato` heading in `#171717`, and a `#de313b` CTA button."
2. "Create a pricing card using background `#ffffff`, border `#171717`, `Lato` for text, and 30px padding."
3. "Design a navigation bar — `#ffffff` background, `#171717` links, `#de313b` for active state."
4. "Build a feature grid with 3 columns, 30px gap, each card using the card component style."
5. "Create a footer with `#171717` background, `#ffffff` text, and 20px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 3 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--primary` | `#DE313B` |
| `--secondary` | `#171717` |
| `--tertiary` | `#f0e5dc` |
