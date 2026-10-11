# SG Industry — Bugs & Fixes

| ID | Issue Description | Status | Discovered | Resolved | Fix Description |
|---|---|---|---|---|---|
| BUG-001 | TypeScript 6 warning: `baseUrl` deprecated in `tsconfig.app.json` | Resolved | 2026-10-11 | 2026-10-11 | Removed `baseUrl` since TypeScript resolves `paths` relative to tsconfig root. |
| BUG-002 | `verbatimModuleSyntax` runtime error on `import { ServiceItem }` | Resolved | 2026-10-11 | 2026-10-11 | Converted all type-only imports to `import type` across `ServiceCard.tsx`, `Gallery.tsx`, `EnquiryForm.tsx`, and `HomePage.tsx`. |
| BUG-003 | Zod 4 syntax difference: `errorMap` and `result.error.errors` | Resolved | 2026-10-11 | 2026-10-11 | Updated `z.enum` to use `{ message: "..." }` and accessed `result.error.issues`. |
| BUG-004 | Unused imported symbols flagged by TypeScript strict mode | Resolved | 2026-10-11 | 2026-10-11 | Cleaned unused imports (`Link`, `HelpCircle`, `Layers`). |
