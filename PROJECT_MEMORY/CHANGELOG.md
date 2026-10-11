# SG Industry — Changelog

All notable changes, updates, additions, and deletions are recorded here chronologically.

---

## [2026-10-11] — Git Repository Initialization & Remote Configuration for Collaboration

### Summary
- Initialized local Git repository on branch `main`.
- Staged all project files and created initial commit `1ee1287` (`feat: complete SG Industry website with 6 services, proprietor section, and uncropped assets`).
- Configured remote `origin` to `https://github.com/lunacoderl/sg-industries.git` for collaborative deployment.
- Launched `git push -u origin main` with Git Credential Manager authentication.

---

## [2026-10-11] — Major Feature Upgrades: Preloader, Fixed Parallax Backgrounds, Proprietor Section, 6 Services & Font Modernization

### Summary
Implemented all new requirements requested by the client:
1. **Branded Pre-loading Animation**: Laser reveal calibration bar with progress counter and smooth Framer Motion exit transition (`Preloader.tsx`).
2. **Skeleton Loading Animations**: Added metallic shimmer skeleton components (`ImageSkeleton`, `FullWidthImageSkeleton`, `CardSkeleton`, `ProprietorSkeleton`) in `Skeletons.tsx` and integrated shimmer loaders into Gallery cards.
3. **Fixed Full Screen Background Parallax Sections**: Two fixed background parallax sections with text and capability badges scrolling smoothly on top (`/images/hero/hero-laser.png` and `/images/gallery/architectural-wave-screen.jpg`).
4. **Font Modernization**: Upgraded to Google Fonts triad (`Outfit` for display and titles, `Space Grotesk` for technical data and metrics, `Plus Jakarta Sans` for body copy); eliminated all legacy font references.
5. **Full-Width Uncropped Images**: Replaced all aggressive cropping with `object-contain` and natural aspect ratio wrappers so machine beds, formed flanges, and screens are 100% visible without cutoff.
6. **Official Logo Integration**: Incorporated the user-provided high-resolution logo (`/images/logo.png`) seamlessly into the Sticky Navbar, Preloader, Hero section, and Footer.
7. **Proprietor Details Section & Business Cards**: Created `ProprietorSection.tsx` featuring Masada Siva Srinu's portrait photo (`/images/team/masada-siva-srinu.jpg`), leadership credentials, direct contact CTAs, and strictly isolated Front (Side A) & Back (Side B) official business cards with interactive full-screen zoom modal. Business cards were completely removed from general gallery.
8. **All 6 Core Industrial Services**: Expanded `services.ts` to include all 6 key service lines for precision sheet metal fabrication, each with dedicated detail pages, application cards, and SEO metadata:
   - Precision Fiber Laser Cutting (`/services/precision-laser-cutting`)
   - CNC Press Brake Bending (`/services/cnc-bending`)
   - Architectural & Decorative Metal Screens (`/services/architectural-screens`)
   - Industrial Enclosures & Cabinets (`/services/industrial-enclosures`)
   - Flange Rings & Heavy Base Plates (`/services/flange-rings-baseplates`)
   - Batch & Custom Sheet Metal Fabrication (`/services/custom-metal-fabrication`)

### Files Created & Updated
- `src/components/Preloader.tsx`: Laser calibration bar with progress percentage and SG Industry logo.
- `src/components/Skeletons.tsx`: Added four skeleton variants with metallic shimmer.
- `src/components/ProprietorSection.tsx`: Dedicated leadership profile for Masada Siva Srinu + interactive front/back business card modal.
- `public/images/team/masada-siva-srinu.jpg`: Extracted and saved proprietor portrait photo.
- `src/data/company.ts`: Added proprietor details and business card image paths.
- `src/data/services.ts`: Expanded to 6 full service definitions with technical applications and FAQs.
- `src/data/gallery.ts`: Cleaned up to isolate business cards strictly to proprietor section.
- `src/components/ServiceCard.tsx`: Updated with uncropped full-width image display and 6 service icons.
- `src/components/Gallery.tsx`: Added skeleton shimmer loading states and uncropped images with modal lightbox.
- `src/components/Navbar.tsx`: Added 6-service dropdown menu and proprietor link.
- `src/components/Footer.tsx`: Added all 6 service links and proprietor attribution.
- `src/pages/HomePage.tsx`: Added 2 fixed parallax sections, Proprietor section, 6 service cards, and cleaned unused imports.
- `src/pages/ServiceDetailPage.tsx`, `PrivacyPolicyPage.tsx`, `TermsPage.tsx`, `NotFoundPage.tsx`: Standardized typography to `font-display` (Outfit).
- `index.html`: Added Google Fonts preconnect and stylesheet link.
- `public/sitemap.xml`: Updated to index all 6 canonical service routes.

---

## [2026-10-11] — Full Application Implementation & User Asset Integration

### Summary
Built the complete, production-grade SG Industry website matching the detailed architectural blueprint. Integrated user's real photography (APEX fiber laser machine, architectural wave screen, formed sheet metal trays, batch flange rings, business cards, and official logo). Configured Tailwind v4 with the Electric Art Studio palette, implemented all routes, Zod enquiry form validation, full-screen lightbox gallery, schema markup, and verified production build with zero errors.

### Files Created
- `c:/Users/user/Desktop/Projects/sg-industry/` (Vite + React 19 + TypeScript)
- `PROJECT_MEMORY/`
  - `PROJECT_STATE.md`
  - `CHANGELOG.md`
  - `CURRENT_TASK.md`
  - `NEXT_STEPS.md`
  - `ARCHITECTURE.md`
  - `UI_STRUCTURE.md`
  - `DECISIONS.md`
  - `BUGS_AND_FIXES.md`
  - `TEST_STATUS.md`
- `public/`
  - `robots.txt` — Crawl directives with sitemap reference
  - `sitemap.xml` — Canonical URLs for home, services, legal pages
  - `site.webmanifest` — PWA/site metadata with brand theme colors
  - `favicon.svg` — Custom geometric SG monogram favicon
  - `images/hero/hero-laser.png` — High-res hero graphic
  - `images/services/laser-cutting.jpg` — In-house APEX FLCM 2584 fiber laser machine bed
  - `images/services/cnc-bending.jpg` — Formed metal trays with 90-degree flanges
  - `images/gallery/architectural-wave-screen.jpg` — Architectural metal screen
  - `images/gallery/batch-flange-rings.jpg` — Batch-produced curved steel flanges
  - `images/gallery/cnc-bent-channels.jpg` — CNC bent channels with hole patterns
  - `images/gallery/workshop-entrance.jpg` — Auto Nagar workshop entrance
  - `images/gallery/business-card-spec.jpg` — Multi-flange formed bracket sample
  - `images/gallery/laser-cutting-sparks.jpg` — Fiber laser cutting sparks in action
- `src/data/`
  - `company.ts` — Verified address (C-13 Auto Nagar), phone (098663 78877), WhatsApp url generator
  - `services.ts` — Typed service definitions for `/services/precision-laser-cutting` & `/services/cnc-bending`
  - `gallery.ts` — Typed gallery dataset with categories, real photos, and tags
  - `testimonials.ts` — Verified client reviews
- `src/lib/`
  - `validation.ts` — Zod v4 validation schema for enquiry form
- `src/seo/`
  - `PageMetadata.tsx` — Helmet dynamic title, meta descriptions, OpenGraph, canonical URLs
  - `LocalBusinessSchema.tsx` — Schema.org JSON-LD for local business in Gajuwaka, Visakhapatnam
- `src/components/`
  - `Navbar.tsx` — Top announcement strip, sticky bar, desktop dropdown, accessible mobile drawer
  - `Footer.tsx` — 4-column footer with quick links, verified address, phone, legal links
  - `FloatingActions.tsx` — Floating action rail with WhatsApp, Phone dialler, Scroll-to-top
  - `ScrollReveal.tsx` — Framer-motion scroll animations respecting `prefers-reduced-motion`
  - `Skeletons.tsx` — Image and card loading skeleton placeholders
  - `ServiceCard.tsx` — Interactive card with metal reflection hover effect and icon badges
  - `Gallery.tsx` — Filterable category pills and full-screen accessible modal lightbox
  - `FAQAccordion.tsx` — Smooth interactive accordion with accessible chevron toggles
  - `EnquiryForm.tsx` — Validated enquiry form with Zod and direct WhatsApp handoff
- `src/layouts/`
  - `SiteLayout.tsx` — Reusable layout shell containing Navbar, Footer, Floating rail, and Schema
- `src/pages/`
  - `HomePage.tsx` — 10-section homepage covering Hero, About, Services, Gallery, Workflow, Reviews, FAQs, Contact
  - `ServiceDetailPage.tsx` — Reusable dynamic service template with process, specs, checklist, FAQs
  - `PrivacyPolicyPage.tsx` — Legal privacy policy with CAD drawing confidentiality terms
  - `TermsPage.tsx` — Terms of service covering quotations, customer materials, and tolerances
  - `NotFoundPage.tsx` — Custom branded 404 page ("This piece isn't in our collection")
- `src/App.tsx` — Route configuration with HelmetProvider and scroll-to-top on route change
- `vercel.json` — SPA fallback rewrites for Vercel deployment

### Files Modified & Fixed
- `src/components/ServiceCard.tsx`: Converted `ServiceItem` to `import type` for `verbatimModuleSyntax`.
- `src/components/Gallery.tsx`: Converted `GalleryItem` to `type GalleryItem`.
- `src/components/EnquiryForm.tsx`: Converted `EnquiryFormData` to `type EnquiryFormData` and updated `result.error.issues` for Zod 4.
- `src/pages/HomePage.tsx`: Converted `FAQItem` to `type FAQItem` and cleaned unused imports.
- `src/pages/ServiceDetailPage.tsx`: Removed unused icon imports.
- `src/lib/validation.ts`: Updated Zod 4 enum error parameters (`message` property).
- `tsconfig.app.json`: Removed deprecated `baseUrl` in TypeScript 6.
- `vite.config.ts`: Updated path resolution using `import.meta.dirname`.

### Verification & Testing
- Ran `tsc -b && vite build` — Build completed successfully with 0 errors.
- Dev server verified active and ready.
