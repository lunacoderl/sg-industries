# SG Industry — Technical Decisions

## Architectural & Technical Decisions

### Decision 1: React + Vite + TypeScript
- **Context:** Fast development, instant HMR, strong type safety for service models and validation schemas.
- **Rationale:** Keeps maintenance clean and reliable. Vite provides rapid build times and lightweight bundles.

### Decision 2: Static Data Single-Source-of-Truth
- **Context:** The site showcases services, gallery, testimonials, and company details without needing a remote CMS or database initially.
- **Rationale:** Storing service content in typed TypeScript files (`src/data/services.ts`, `src/data/company.ts`) allows instant rendering without loading latency, easy SEO prerendering, and zero backend maintenance overhead.

### Decision 3: Electric Art Studio Palette Integration
- **Context:** Client requested a colourful, artistic, yet strictly professional industrial aesthetic.
- **Rationale:** Rather than typical drab factory grays, the combination of Warm Canvas (`#FFF9F0`), Deep Violet (`#33205B`), Electric Coral (`#FF5B45`), and Turquoise (`#00BFA6`) presents precision metalworking as an art form.

### Decision 4: Genuine Verified Data Only
- **Context:** Verified details provided:
  - Phone: `098663 78877`
  - Address: `C-13, near Autonagar, B Block, Auto Nagar, Gajuwaka, Andhra Pradesh 530012`
  - Services: Precision Laser Cutting & CNC Bending
- **Rationale:** Avoid unverified claims, fabricated reviews, or speculative machinery capacities until confirmed by the client.
