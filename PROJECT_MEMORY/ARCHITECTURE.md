# SG Industry — System Architecture

## Architecture Overview
The SG Industry web application is designed as an ultra-high performance, static-ready React SPA with deep semantic SEO capability, client-side routing, and prerendering-ready architecture.

```
sg-industry/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── team/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/         # Reusable presentation & layout widgets
│   │   ├── Navbar.tsx      # Sticky header with mobile drawer
│   │   ├── Footer.tsx      # Multi-column footer with real links
│   │   ├── FloatingActions.tsx # Call, WhatsApp, Scroll-to-top rail
│   │   ├── ServiceCard.tsx # Hover-reactive service card
│   │   ├── Gallery.tsx     # Filterable masonry gallery + modal lightbox
│   │   ├── FAQAccordion.tsx# Interactive accessible accordion
│   │   ├── EnquiryForm.tsx # Zod-validated enquiry form
│   │   ├── ScrollReveal.tsx# Motion reveal wrappers
│   │   └── Skeletons.tsx   # Loading placeholders
│   ├── data/               # Single-source-of-truth typed datasets
│   │   ├── services.ts     # Laser cutting, CNC bending detailed content
│   │   ├── gallery.ts      # Real project gallery items & categories
│   │   ├── testimonials.ts # Verified customer reviews
│   │   └── company.ts      # Contact, address, hours, proprietor info
│   ├── layouts/
│   │   └── SiteLayout.tsx  # Persistent layout shell
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServiceDetailPage.tsx # Dynamic slug-based template
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── seo/
│   │   ├── PageMetadata.tsx       # Dynamic helmet tags & OpenGraph
│   │   └── LocalBusinessSchema.tsx# Schema.org JSON-LD
│   ├── lib/
│   │   ├── validation.ts   # Zod schema definitions
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Design tokens & custom utilities
```

## Data Flow
1. Route URL matches `/services/:slug`.
2. `ServiceDetailPage` queries `services.ts` by slug.
3. If slug is valid, renders rich hero, process, specs, applications, checklist, and related services.
4. If invalid, renders custom branded `NotFoundPage` (404).
5. Schema.org JSON-LD and meta tags update dynamically via `PageMetadata`.
