# Architecture

## 1. Project Goal

Build a developer-focused personal website that can evolve over time without relying on a CMS in the first version.

## 2. Information Architecture

```mermaid
graph TD
  A[Home] --> B[About]
  A --> C[Projects]
  A --> D[Writing]
  A --> E[Contact]

  C --> C1[Personal site itself]
  C --> C2[Practice projects]
  C --> C3[Small tools / demos]

  D --> D1[Tech notes]
  D --> D2[Learning log]
  D --> D3[Debug notes]
```

## 3. Code Architecture

```mermaid
graph TD
  App[Next.js App Router] --> Pages[Route Pages]
  Pages --> Home[Home]
  Pages --> About[About]
  Pages --> Projects[Projects]
  Pages --> Writing[Writing]
  Pages --> Contact[Contact]

  Pages --> Shared[Shared Components]
  Shared --> Nav[Navigation]
  Shared --> Footer[Footer]
  Shared --> Cards[Cards / Sections]
  Shared --> CTA[Call To Action]

  Pages --> Content[Content Layer]
  Content --> MDX[MDX Articles]
  Content --> JSON[Project / Profile JSON]

  Pages --> UI[UI Layer]
  UI --> TW[Tailwind CSS]
  UI --> Motion[Framer Motion]

  Pages --> Utils[Utilities]
  Utils --> SEO[SEO Metadata]
  Utils --> Format[Formatting Helpers]
```

## 4. First-Version Rules

- No CMS in version 1.
- No lab/experiment page.
- Keep content local and componentized.
- Make the personal website itself the first project entry.

