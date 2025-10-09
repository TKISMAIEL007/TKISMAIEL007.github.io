# Travis Talks Life — Personal Blog & Portfolio Site

This is the source code for [Travis Talks Life](https://www.travistalkslife.com), a minimalist, content-first blog inspired by **Seth’s Blog** and tailored to my story: resilience, transition, and entrepreneurship.

---

## 🚀 Project Goals
- Share authentic stories & blog posts
- Showcase professional speaking and business ventures
- Build a clean, fast, SEO-friendly site
- Learn and practice modern front-end development

---

## 🗂️ Structure
/
├─ index.html # Homepage
├─ about.html # About page
├─ contact.html # Contact form (Netlify-ready)
├─ posts/ # Blog post HTML files
├─ images/ # Images & Open Graph banners
│ └─ og/ # 1200x630 OG images for posts
├─ styles.css # Global stylesheet
├─ sitemap.xml # SEO sitemap
├─ robots.txt # Crawler instructions
├─ AGENTS.md # Codex rules & instructions
└─ README.md # Project documentation

---

## 🔧 Development Workflow

### Local Development

1. Clone repo and open in **Cursor** or VS Code.

2. Run local server:
   ```bash
   python -m http.server 5500
Open http://localhost:5500.

3. Edit HTML/CSS → auto-reload with Live Server (recommended).

Branch Workflow

Never work directly on main.

Create feature branches (e.g., seo-polish-oct02).

Open PRs → review diffs → merge into main when ready.

Commit Guidelines

feat: → new feature

fix: → bug fix

style: → formatting, UI tweaks

chore: → maintenance

docs: → documentation

Examples:

feat(seo): add canonical + meta descriptions

fix(accessibility): add alt text to homepage images

🌍 Deployment

Hosted on Netlify (linked to GitHub repo).

Merges into main auto-deploy to production.

PRs deploy to Netlify Preview for safe testing.

📈 SEO & Analytics

sitemap.xml submitted to Google Search Console

robots.txt directs crawlers

Open Graph + Twitter meta tags for previews

JSON-LD schema (Person + Article)

Plausible Analytics installed (privacy-friendly)


✅ Definition of Done (Portfolio Quality)


Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)

Mobile responsive (360px → 1440px)

Each page has unique <title> + <meta description>

OG preview works in LinkedIn Inspector + Twitter Card Validator

Contact form submits successfully (Netlify)

At least 3 published posts with Article schema


📅 Roadmap

 Improve blog template (prev/next nav, related posts)

 Add email signup form (ConvertKit)

 Add testimonials/quotes to About page

 Build lightweight post archive page

👤 Author

Travis Ismaiel
Entrepreneur, Speaker, Former Professional Rugby Player

LinkedIn | Website

 
---

