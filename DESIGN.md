# The Architectural Intelligence Design System

## 1. Overview & Creative North Star: "The Digital Curator"
Modern SaaS often falls into the trap of "generic utility"—flat boxes, harsh borders, and predictable grids. This design system rejects the template. Our Creative North Star is **The Digital Curator**. 

Like a high-end gallery or a premium editorial magazine, the interface for ARIA must feel authoritative yet breathable. We achieve this through **Intentional Asymmetry** (placing heavy data visualization against wide-margin AI insights) and **Tonal Depth**. We don't use lines to separate ideas; we use layers of light and shadow to guide the eye. The goal is to transform "Agile Requirement Data" into a sophisticated narrative that feels intelligent, calm, and premium.

---

## 2. Colors & Surface Philosophy
The palette moves beyond simple HEX codes into a functional hierarchy. We use deep Indigos to ground the navigation and vibrant status colors to punctuate the data.

### The Color Logic
- **Primary & Deep Tones:** `primary` (#070235) and `primary_container` (#1E1B4B) are used for high-authority areas like the Sidebar. Use `on_primary_fixed_variant` (#444173) for inactive nav states to maintain a sophisticated low-contrast look.
- **The Status Tonalities:** 
    - **Critical:** `error` (#BA1A1A) with `error_container` (#FFDAD6).
    - **Moderate:** `tertiary_fixed` (#FFDDB8) with `on_tertiary_container` (#C07A00).
    - **Healthy:** `secondary` (#006C49) with `secondary_container` (#6CF8BB).

### The "No-Line" Rule
Standard 1px borders are prohibited for sectioning. To separate the dashboard sidebar from the main content, or a KPI card from the background, use background shifts:
- **Main Background:** `surface` (#F8F9FA).
- **Secondary Content Areas:** `surface_container_low` (#F3F4F5).
- **Hero Cards/Actionable Items:** `surface_container_lowest` (#FFFFFF).

### Glass & Gradient (The ARIA Signature)
To emphasize the "AI-driven" nature of the platform, floating elements (like the AI assistant) must use **Glassmorphism**. Use `surface_container_lowest` at 70% opacity with a `20px` backdrop-blur. Apply a subtle gradient transition from `primary` to `primary_container` for primary CTAs to give them a "jewel-like" depth.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display) with **Inter** (UI) to create a high-contrast hierarchy that feels like a premium data report.

| Role | Token | Font | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | Large, bold score reveals (e.g., Quality Score). |
| **Headline** | `headline-sm` | Manrope | 1.5rem | Section titles; bold and authoritative. |
| **Title** | `title-md` | Inter | 1.125rem | Card headers and modal titles. |
| **Body** | `body-md` | Inter | 0.875rem | Standard data reading and descriptions. |
| **Label** | `label-sm` | Inter | 0.6875rem | Uppercase metadata and table headers. |

*Note: Always use `on_surface_variant` (#47464F) for body text to reduce eye strain, reserving `on_surface` (#191C1D) for headlines.*

---

## 4. Elevation & Depth: Tonal Layering
We do not build "flat" dashboards. We build environments.

- **The Layering Principle:** Instead of shadows, stack your surfaces. A `surface_container_lowest` (#FFFFFF) card should sit on a `surface_container` (#EDEEEF) background. The contrast itself creates the lift.
- **Ambient Shadows:** For floating AI elements or active menus, use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(7, 2, 53, 0.06);`. Notice we use a tint of our `primary` color for the shadow, not black.
- **The Ghost Border Fallback:** If a border is required (e.g., in high-density data tables), use the `outline_variant` (#C8C5D0) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Interaction

### KPI Cards & Progress Rings
- **Container:** Use `surface_container_lowest`. Do not use borders.
- **Progress Rings:** Use a stroke width of `8px`. Use `secondary` for healthy scores and `error` for critical. The "track" of the ring should be `surface_container_high`.
- **Spacing:** Use `spacing-5` (1.1rem) for internal padding to give the data room to breathe.

### Data Tables
- **Layout:** Forbid divider lines between rows. Use `surface_container_low` on hover to highlight a row.
- **Typography:** Use `label-md` for headers in all-caps with a `0.05rem` letter spacing.
- **Density:** Maintain `spacing-3` vertical padding between rows to balance density with readability.

### AI Assistant Floating Elements
- **Style:** Use the **Glassmorphism** rule. 
- **Corner Radius:** Use `rounded-xl` (1.5rem) to make these elements feel distinct and "organic" compared to the `rounded-md` (0.75rem) data cards.
- **Iconography:** Use 2pt line-weight icons to match the sophistication of the Manrope typeface.

### Buttons & Inputs
- **Primary Button:** `primary` background with `on_primary` text. `rounded-DEFAULT`.
- **Input Fields:** Use `surface_container_low` as the background fill. On focus, transition to a `1px` "Ghost Border" using the `primary` color at 40% opacity.

---

## 6. Do’s and Don'ts

### Do:
- **Do** use whitespace as a separator. If two elements feel cluttered, increase spacing to `spacing-8` before considering a line.
- **Do** use "Surface Nesting." An inner component should always be a lighter surface tier than its parent container.
- **Do** align AI insights asymmetrically to break the rigid grid, making the dashboard feel "alive."

### Don't:
- **Don't** use pure black (#000000) for shadows or text. It breaks the premium "Digital Curator" feel.
- **Don't** use the `rounded-none` setting. Everything in ARIA's world is approachable and refined.
- **Don't** use high-contrast borders. If you can see the border from a distance, it is too heavy. Decrease opacity until it nearly disappears.