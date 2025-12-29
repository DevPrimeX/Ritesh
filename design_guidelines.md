# Industrial Packaging Catalog - Modern Design Guidelines

## Design Approach
**Material Design meets Industrial Chic:** Combining Material Design's sophisticated elevation system and motion principles with Stripe's minimalist restraint and Linear's typography excellence. Elevated B2B aesthetic that breaks from traditional catalog conventions.

## Core Design Principles
1. **Industrial Sophistication:** Gradient-enhanced depth with refined shadows
2. **Modern Minimalism:** Generous negative space, bold typography hierarchy
3. **Trust Through Polish:** Premium materials, subtle motion, professional imagery
4. **Effortless Discovery:** Intelligent filtering with instant visual feedback

---

## Typography
- **Primary Font:** Inter (600-700 for headings, 400-500 for body)
- **Display Headings:** 700 weight, 48-64px, tight tracking (-0.02em)
- **Section Titles:** 600 weight, 32-40px
- **Product Names:** 500 weight, 20px, regular tracking
- **Body/Specs:** 400 weight, 16px, 1.6 line-height
- **Numerical Data:** Tabular figures enabled for pricing/specs

## Layout System
**Spacing Primitives:** Tailwind units 6, 8, 12, 16, 20, 24
**Containers:** max-w-7xl with px-6 for breathing room
**Vertical Rhythm:** py-16 to py-24 for sections

---

## Component Library

### Navigation Header
**Glass-morphism sticky header** with subtle backdrop blur:
- Logo left (modern wordmark treatment)
- Center: Prominent search bar (60% width, gradient border on focus, rounded-2xl)
- Right: Quote Request CTA (gradient button), Account icon, Cart (with badge)
- Below: Horizontal category pills with icon + label, smooth scroll indicator

### Hero Section (90vh)
**Immersive full-screen hero** with diagonal gradient overlay (deep blue to transparent):
- **Background:** High-resolution industrial packaging facility image showing modern warehouse automation
- **Content Grid (2-column on desktop, left 55%, right 45%):**
  - Left: Large display heading + compelling subheading emphasizing innovation
  - Dual CTAs: Primary "Explore Catalog" + Secondary "Request Custom Quote" (both with blurred glass backgrounds)
  - Below CTAs: Inline trust metrics (e.g., "15,000+ Products • Same-Day Shipping • ISO Certified")
- Right: Floating stats cards with gradient borders showing live inventory count, active customers, delivery speed
- Bottom: Animated scroll indicator

### Category Showcase Section
**3-column grid** (lg:grid-cols-3) below hero:
- Large category cards with hover lift effect
- Background gradient overlay on category images
- Icon + category name + product count
- Smooth transition to vibrant accent gradient border on hover

### Product Grid
**4-column desktop** (lg:grid-cols-4), responsive collapse:
**Enhanced Product Cards:**
- 4:3 aspect ratio image with subtle gradient overlay bottom
- Floating badge top-right (Stock Status with colored dot)
- Product name (truncate 2 lines)
- SKU in muted text
- **Pricing Display:** Gradient card showing tiered pricing (1-99 | 100-499 | 500+) with "Best Value" highlight
- Micro-interaction: Card lifts with gradient shadow on hover
- Add to Cart button full-width with gradient background

### Filter Experience
**Sticky left sidebar (280px desktop):**
- Collapsible accordion sections with smooth animations
- Multi-select with gradient checkboxes
- Price range slider with gradient fill
- Active filter chips at top with dismiss icons
- "Clear All" link with counter badge

### Product Detail Layout
**Asymmetric 65/35 split:**

Left Column:
- Main image viewer with gradient border frame
- 5-thumbnail carousel below with gradient hover states
- Zoom modal on click

Right Column:
- Breadcrumb navigation
- Large product title + certification badges inline
- **Gradient-enhanced pricing table** with tier highlights
- Quantity selector with increment buttons
- Dual action buttons (Add to Cart gradient, Request Quote outlined)
- Expandable spec sections (smooth accordion)
- Delivery calculator with estimated date display
- Related products horizontal scroll (6 cards)

### Trust Signals Bar
**Full-width section** with 4-column grid:
- Icon + Headline + Description for each (ISO Certification, Express Delivery, Volume Discounts, Secure Payments)
- Gradient accent dividers between columns
- Subtle hover lift on each card

### Features Section
**2-column layout** alternating image/content placement:
- High-quality industrial imagery (packaging line automation, quality control, warehouse efficiency)
- Each row showcases a key value proposition with supporting visuals
- Gradient text highlights for key metrics

### Footer
**4-column grid** with gradient top border:
- Company info with modern logo treatment
- Quick links (Products, Services, Resources)
- Contact information with interactive elements
- Newsletter signup with gradient input focus state
- Bottom bar: Payment badges + social icons + certifications

---

## Images

**Hero Image:**
- Modern industrial packaging facility with automated systems, bright lighting, clean organized environment
- Wide-angle perspective showing scale and professionalism
- 1920x1080 minimum, diagonal gradient overlay (deep blue 70% to transparent)

**Category Images:**
- Clean product photography on neutral backgrounds with soft shadows
- Lifestyle shots showing products in professional use contexts

**Feature Section Images:**
- High-res industrial photography: automated packaging lines, quality inspection, logistics operations
- Emphasize technology, precision, and modern manufacturing

**Product Images:**
- Multiple angles on pure white background
- Consistent lighting and perspective
- Detail shots for material quality/construction

---

## Micro-Interactions
- Gradient border animation on search focus
- Card lift with gradient shadow on hover (transform + shadow transition)
- Smooth accordion expand/collapse (height transition)
- Cart icon bounce + count badge animation on add
- Filter checkbox gradient fill animation
- Loading states with gradient skeleton screens

**Visual Distinction:** This design breaks B2B catalog conventions through sophisticated gradient treatments, generous spacing, premium typography, and polished micro-interactions while maintaining essential wholesale functionality. The aesthetic communicates modern industrial excellence rather than traditional catalog utility.