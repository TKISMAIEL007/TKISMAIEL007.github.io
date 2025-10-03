# AGENTS.md — Travis Talks Life Blog

## Project Purpose
Personal blog for Travis Ismaiel — "Travis Talks Life". Focus on resilience, transition, and entrepreneurship.  
Deployed on Netlify. Codebase: HTML, CSS, JavaScript (with Tailwind CSS utilities).

---

## Code Style Rules
- Use **HTML5 semantic tags** (`<header>`, `<main>`, `<article>`, `<footer>`).
- Apply **Tailwind CSS** utility classes for styling.
- Fonts: **Inter** (body), **Playfair Display** (headings).
- Color palette: clean grayscale base + TTL accent color.
- Ensure **responsive design**:
  - Mobile first.
  - Layouts must render correctly at <600px width.

---

## SEO & Meta Standards
- Every page must include:
  - `<title>` (under 60 characters).
  - `meta name="description"` (~155 characters).
  - Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`.
  - Twitter Card tags: `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.
  - `<link rel="canonical">` with full https://www.travistalkslife.com/ URL.
- Always use **absolute URLs** for `og:image` and `og:url`.
- Featured blog post images must be at least **1200x630px** for proper previews.

---

## Components & Reuse
- **Blog Post Card**: image, title, date, excerpt, CTA button.
- **Newsletter Signup (ConvertKit)**: styled form with Inter font, rounded inputs, TTL accent button, centered container (max width 500px).
- **Author Bio Block**: profile image, short description, social links.

---

## Accessibility Rules
- Every `<img>` must have a descriptive `alt` attribute.
- Maintain WCAG 2.1 color contrast standards.
- Forms must include labels or placeholders.

---

## Workflow Notes
- When optimizing:
  - Minify CSS/JS (use production version).
  - Preserve readability in dev branch.
- Optimize for **fast load speed**:
  - Compress images.
  - Use `loading="lazy"` for non-critical images.
- When generating new code, follow these rules automatically.
