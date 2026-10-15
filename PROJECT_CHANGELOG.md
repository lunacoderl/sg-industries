# Project Changelog - SG Industry

## [2026-10-15] - Technical SEO & Google Search Console Certification Rollout

### Summary of Changes
- Aligned primary domain across all technical SEO surfaces from development/unregistered domain (`sgindustry.in`) to approved live production domain: `https://www.sgindustrie.com`.
- Updated `src/seo/PageMetadata.tsx`: bound base URL to `siteSeo.baseUrl`, added `noIndex` prop support dynamically rendering `<meta name="robots" content="noindex, nofollow" />`.
- Updated `src/seo/LocalBusinessSchema.tsx`: bound image, @id, and URL to `siteSeo.baseUrl`.
- Updated `src/pages/NotFoundPage.tsx`: passed `noIndex={true}` to prevent soft-404 indexation.
- Created `src/siteSeo.ts`: centralized site metadata manifest.
- Updated `public/robots.txt`: pointed sitemap to `https://www.sgindustrie.com/sitemap.xml`.
- Updated `public/sitemap.xml`: replaced all 9 URLs with certified HTTPS production addresses.
- Updated `vercel.json`: excluded static assets from SPA rewrites to ensure direct robots.txt and sitemap.xml delivery.

### Files Created / Modified
- `src/siteSeo.ts` (created - centralized metadata manifest)
- `src/seo/PageMetadata.tsx` (modified - bound to siteSeo.baseUrl, added noIndex support)
- `src/seo/LocalBusinessSchema.tsx` (modified - bound schema URLs to siteSeo.baseUrl)
- `src/pages/NotFoundPage.tsx` (modified - added noIndex flag to 404 page)
- `public/robots.txt` (modified - updated sitemap directive)
- `public/sitemap.xml` (modified - updated all 9 URLs to live production domain)
- `vercel.json` (modified - static asset exemption on SPA rewrites)
- `PROJECT_CHANGELOG.md` (created - persistent changelog)
