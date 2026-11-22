# Copilot instructions for R.K. Tech Laser

## Architecture
- This is a dependency-free, static marketing site: `*.html`, `assets/style.css`, `assets/site.js`, and `images/` only. There is no package manager, build step, framework, API server, or test suite.
- Serve the repository root locally rather than opening HTML files via `file://`; product URLs and browser APIs are easier to verify with `python3 -m http.server 8000`.
- Every page links `assets/style.css` and loads `assets/site.js` at the end of the body.
- `assets/site.js` is the shared application script. It owns business data, the `<div id="hdr">`/`<div id="ftr">` shells, navigation, the WhatsApp link, hero slider, and enquiry submission.
- The product catalogue is a single `PRODUCTS` array in `assets/site.js`. Each product uses an `id` that must match `product.html?id=<id>` and `images/products/<id>.jpg`.
- `product.html` reads `id` with `URLSearchParams`, falls back to `PRODUCTS[0]`, and renders the remaining products as cards. Keep unknown-ID fallback behavior in mind.

## Page conventions
- Add or update page-level content directly in the relevant root HTML file (`index.html`, `about.html`, `products.html`, `product.html`, `gallery.html`, `contact.html`).
- Include `<div id="hdr"></div>` near the top and `<div id="ftr"></div><script src="assets/site.js"></script>` at the bottom when creating a page.
- Page-specific dynamic markup is intentionally kept in inline scripts after `site.js`; for example, `plist` in `index.html`/`products.html`, `g` in `gallery.html`, and product fields in `product.html`.
- Preserve the existing compact, mostly single-line HTML style unless a larger edit clearly benefits from formatting.
- Use existing class names and `.wrap`, `grid g2/g3/g4`, `split`, `card`, `b`, `ph`, `ptitle`, `sec-title`, `btn`, and `alt` patterns instead of introducing a parallel layout system.
- Responsive behavior is defined in `assets/style.css` at 900px and 560px. Reuse those breakpoints for layout changes.

## Data and integrations
- Update business identity only in `BIZ` in `assets/site.js`: name, phone, email, GSTIN, address, and tagline are reused in header, footer, WhatsApp, and contact UI.
- Enquiries do not use a backend or email service. `contact.html` forms through `FormData` and opens `https://wa.me/91${BIZ.phone}` in `assets/site.js`.
- Product quote links also open WhatsApp and prefill a product name. Do not replace these with placeholder APIs or server-side forms without a separate architecture change.
- Google Fonts (`Hind` and `Open Sans`) are external; the rest of the site is local.

## Images
- `images/README.txt` is the image naming contract. The home, product, page, and gallery areas depend on exact `.jpg` filenames.
- Replace assets in place to avoid HTML changes. Expected examples include `images/hero/hero-1.jpg`, `images/products/fiber-laser-cutting.jpg`, and `images/gallery/gallery-1.jpg` through `gallery-8.jpg`.
- Images are commonly cropped with `.ph img` and `.hero .hbg` using `object-fit: cover`; keep the documented ~4:3 or 1600x700 aspect ratios when replacing files.

## Validation
- Validate from a local server in a desktop and mobile viewport. Click every page, test the mobile burger menu, verify dropdowns and the 5-second hero slider, then test product URLs and the WhatsApp enquiry/quote flows.
- If changing product or business data, search both HTML and `assets/site.js` for repeated names, IDs, phone numbers, or image paths because the project does not share data by generated templates.
