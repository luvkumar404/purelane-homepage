# Purelane — Plant-Based Homecare Homepage

A modern, responsive homepage for **Purelane**, a plant-based homecare brand offering non-toxic cleaning products for kitchen, laundry, bathroom, and hands. Built with React and Vite, featuring scroll-driven animations and a premium design.

---

## Features

- **Scroll-driven animations** — Parallax scenes and reveal-on-scroll effects powered by a custom `useScrollEffects` hook
- **Animated ticker banner** — Auto-scrolling promotional messages (free shipping, offers, etc.)
- **Sticky header** — Auto-hide/show navigation that responds to scroll direction
- **Progress rail** — Visual scroll-position indicator linking to page sections
- **Hero section** — Eye-catching product showcase with animated product stage
- **Ingredient cards** — Highlights key plant-based ingredients (coconut, orange peel, soap nut, neem, lemongrass)
- **Product grid & combos** — Browsable product cards with detailed information
- **Bundle deals** — Curated bundles (Kitchen, Bathroom, Laundry, Hard Water) with savings info
- **Social proof** — Customer reviews, lab-tested stats (99.9% germ kill, 4.8 rating), and trust bar
- **Email signup** — Newsletter subscription section
- **Sticky CTA** — Persistent call-to-action button for conversions
- **Fully responsive** — Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Framework   | [React 19](https://react.dev/) |
| Build Tool  | [Vite 8](https://vite.dev/)    |
| Styling     | Vanilla CSS                 |
| Typography  | Google Fonts (Outfit, Inter)|
| Linting     | ESLint 10                   |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── icons.svg              # SVG sprite for UI icons
├── src/
│   ├── assets/                 # Images (hero.png, etc.)
│   ├── components/             # React components (23 files)
│   │   ├── Header.jsx          # Sticky navigation bar
│   │   ├── Hero.jsx            # Hero section with product stage
│   │   ├── HeroProductStage.jsx
│   │   ├── Ingredients.jsx     # Plant-based ingredient showcase
│   │   ├── Pillars.jsx         # Value propositions
│   │   ├── Proof.jsx           # Stats & lab results
│   │   ├── Combos.jsx          # Product combo deals
│   │   ├── Bundles.jsx         # Bundle offerings
│   │   ├── ProductGrid.jsx     # Product listing grid
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── Reviews.jsx         # Customer reviews carousel
│   │   ├── FullRange.jsx       # Full product range section
│   │   ├── TrustSections.jsx   # WhyBundles, BundleCategories, TrustBar, Signup
│   │   ├── Footer.jsx          # Site footer
│   │   ├── ScenesBackground.jsx # Parallax scroll-driven backgrounds
│   │   ├── Ticker.jsx          # Promo ticker banner
│   │   ├── ProgressRail.jsx    # Scroll progress indicator
│   │   ├── StickyCta.jsx       # Persistent CTA button
│   │   ├── Reveal.jsx          # Scroll-reveal animation wrapper
│   │   └── icons.jsx           # Icon components
│   ├── data/                   # Static data & content
│   │   ├── content.js          # Ingredients, pillars, stats, trust items
│   │   ├── combos.js           # Combo deal data
│   │   ├── products.js         # Product catalog data
│   │   ├── reviews.js          # Customer review data
│   │   └── navigation.js       # Nav links, ticker items, rail links
│   ├── hooks/
│   │   └── useScrollEffects.js # Custom hook for scroll-driven animations
│   ├── App.jsx                 # Root component (page layout)
│   ├── index.css               # Global styles & design system
│   └── main.jsx                # React entry point
├── index.html                  # HTML shell
├── vite.config.js              # Vite configuration
├── package.json
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/luvkumar404/purelane-homepage.git
cd purelane-homepage

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📜 Available Scripts

| Script          | Command          | Description                          |
| --------------- | ---------------- | ------------------------------------ |
| `npm run dev`   | `vite`           | Start development server with HMR    |
| `npm run build` | `vite build`     | Create optimized production build    |
| `npm run preview` | `vite preview` | Preview the production build locally |
| `npm run lint`  | `eslint .`       | Run ESLint across the project        |

---

## 🎨 Design Highlights

- **Color palette** — Soft lavender/purple theme (`#eee7fb`) with natural green accents
- **Typography** — Outfit (headings) + Inter (body) from Google Fonts
- **Animations** — CSS-based scroll-reveal, parallax depth layers, and micro-interactions
- **Icons** — SVG sprite system (`public/icons.svg`) for crisp, scalable icons

---

## 📄 License

This project is private.
