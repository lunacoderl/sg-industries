# SG Industry — UI Structure & Design System

## Design Tokens (Electric Art Studio Palette)
- **Warm Canvas:** `#FFF9F0` (Default background)
- **Deep Violet:** `#33205B` (Dark sections, primary typography, intense contrast)
- **Electric Coral:** `#FF5B45` (Primary CTA buttons, accent badges, highlight bars)
- **Turquoise:** `#00BFA6` (Engineering precision accents, secondary highlights)
- **Sunshine Yellow:** `#FFC928` (Craftsmanship badges, star ratings)
- **Cobalt Blue:** `#2864F0` (Technical linework, secondary accents)

## Typography Strategy
- **Display / Headings:** Syne / Plus Jakarta Sans / Outfit (Editorial, architectural, industrial precision)
- **Body / Interface:** Inter (High readability, neutral technical clarity)

## Key Routes
1. `/` — Homepage: Hero, Company Intro, Core Services, Work Gallery, Proprietor/Team, Workflow ("How a job works"), Testimonials, FAQs, Contact/Location, Closing CTA.
2. `/services/precision-laser-cutting` — Full service detail with process, specs, requirements checklist, FAQs, CTA.
3. `/services/cnc-bending` — Full service detail with tooling, bend considerations, checklist, FAQs, CTA.
4. `/privacy-policy` — Legal privacy policy.
5. `/terms-and-conditions` — Terms and conditions.
6. `*` — Custom branded 404 page ("This piece isn't in our collection").

## Interactive Widgets
- **Announcement Bar + Sticky Navbar** (Desktop dropdown + accessible mobile drawer)
- **Floating Action Rail** (Scroll-to-top, Direct Phone dialler, WhatsApp prefilled message)
- **Interactive Work Gallery** (Filter pills + full-screen lightbox modal)
- **Enquiry Form** (Interactive field validation with Zod)
- **Laser-Line Reveal & Metal Reflection Shimmer** (CSS & Framer Motion micro-interactions)
